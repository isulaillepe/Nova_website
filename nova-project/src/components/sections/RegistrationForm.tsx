"use client";

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWatch } from "react-hook-form";
import {
  registrationSchema,
  type RegistrationFormData,
} from "@/lib/validations/registration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Trophy,
  CheckCircle,
  Plus,
  Trash2,
  Crown,
  Loader2,
  Sparkles,
  AlertCircle,
  GraduationCap,
  School,
  Shield,
} from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, where, limit, serverTimestamp } from "firebase/firestore";

const STEPS = [
  { id: 1, title: "Team Info", icon: Trophy },
  { id: 2, title: "Members", icon: Users },
  { id: 3, title: "Review", icon: CheckCircle },
] as const;

const DEFAULT_MEMBER = {
  fullname: "",
  email: "",
  whatsapp_no: "",
  nic_no: "",
  is_leader: false,
};

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = React.useState("");

  const {
    register,
    handleSubmit,
    control,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      teamName: "",
      track: undefined,
      members: [
        { ...DEFAULT_MEMBER, is_leader: true },
      ],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const watchedTrack = useWatch({ control, name: "track" });
  const watchedMembers = useWatch({ control, name: "members" });
  const watchedTeamName = useWatch({ control, name: "teamName" });

  const handleSetLeader = (index: number) => {
    watchedMembers.forEach((_, i: number) => {
      setValue(`members.${i}.is_leader`, i === index);
    });
  };

  const handleNext = async () => {
    let fieldsToValidate: (keyof RegistrationFormData)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["teamName", "track"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["members"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setSubmitStatus("loading");
    setServerError("");

    try {
      const teamsRef = collection(db, "teams");

      // Case-insensitive check for team name uniqueness
      const formattedTeamName = data.teamName.trim();
      const teamNameLower = formattedTeamName.toLowerCase();
      const q = query(
        teamsRef,
        where("teamNameLower", "==", teamNameLower),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error("A team with this name is already registered.");
      }

      // Add document to Firestore
      const newTeam = {
        ...data,
        teamNameLower,
        createdAt: serverTimestamp(),
      };
      await addDoc(teamsRef, newTeam);

      // Send confirmation email via API route
      const leader = data.members.find((m) => m.is_leader);
      if (leader && leader.email) {
        const memberNames = data.members.map((m) => m.fullname);
        try {
          await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: leader.email,
              teamName: data.teamName,
              memberNames,
            }),
          });
        } catch (emailErr) {
          console.warn("Email sending failed:", emailErr);
          // Don't fail registration if email fails
        }
      }

      setSubmitStatus("success");
    } catch (err: unknown) {
      setSubmitStatus("error");
      setServerError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    }
  };

  // ------- Success State -------
  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/20" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="mb-3 text-3xl font-bold text-white">
          Registration Complete!
        </h2>
        <p className="mb-2 max-w-md text-lg text-slate-300">
          Team <span className="font-semibold text-violet-300">{watchedTeamName}</span> has been
          successfully registered.
        </p>
        <p className="mb-8 text-sm text-slate-400">
          A confirmation has been sent to your team leader&apos;s email.
        </p>
        <Button
          variant="gradient"
          size="xl"
          className="shadow-[0_0_30px_rgba(0,53,153,0.4)]"
          onClick={() => {
            setSubmitStatus("idle");
            setCurrentStep(1);
          }}
        >
          Register Another Team
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Step Indicator */}
      <div className="mb-10 flex items-center justify-center gap-2">
        {STEPS.map((step, i) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const StepIcon = step.icon;
          return (
            <React.Fragment key={step.id}>
              {i > 0 && (
                <div
                  className={`h-0.5 w-12 sm:w-20 transition-colors duration-500 ${
                    isCompleted
                      ? "bg-gradient-to-r from-[var(--nova-primary)] to-indigo-500"
                      : "bg-white/10"
                  }`}
                />
              )}
              <button
                type="button"
                onClick={() => {
                  if (isCompleted) setCurrentStep(step.id);
                }}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[var(--nova-primary)]/30 to-indigo-600/30 text-white border border-[var(--nova-primary)]/40 shadow-[0_0_20px_rgba(0,53,153,0.2)]"
                    : isCompleted
                    ? "bg-white/5 text-[var(--nova-primary)] border border-white/10 cursor-pointer hover:border-[var(--nova-primary)]/30"
                    : "bg-white/5 text-slate-500 border border-white/5"
                }`}
              >
                <StepIcon
                  className={`h-4 w-4 ${
                    isActive
                      ? "text-[var(--nova-primary)]"
                      : isCompleted
                      ? "text-emerald-400"
                      : ""
                  }`}
                />
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ==================== STEP 1: Team Info ==================== */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--nova-primary)]/20 px-3 py-1 text-xs font-medium text-[var(--nova-primary)] mb-4">
                <Sparkles className="h-3 w-3" />
                Step 1 of 3
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Name Your Team
              </h2>
              <p className="mt-2 text-slate-400">
                Choose a team name and select your competition track
              </p>
            </div>

            {/* Team Name */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <Label
                htmlFor="teamName"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Team Name
              </Label>
              <Input
                id="teamName"
                placeholder="Enter your team name"
                className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:ring-violet-500/20 h-12 text-base"
                {...register("teamName")}
              />
              {errors.teamName && (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.teamName.message}
                </p>
              )}
            </div>

            {/* Track Selection */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <Label className="mb-4 block text-sm font-medium text-slate-300">
                Competition Track
              </Label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label
                  htmlFor="track-school"
                  className={`group relative flex cursor-pointer flex-col items-center gap-3 rounded-xl border p-6 transition-all duration-300 ${
                    watchedTrack === "school"
                      ? "border-[var(--nova-primary)]/50 bg-[var(--nova-primary)]/10 shadow-[0_0_20px_rgba(0,53,153,0.15)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    id="track-school"
                    value="school"
                    className="sr-only"
                    {...register("track")}
                  />
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all ${
                      watchedTrack === "school"
                        ? "bg-[var(--nova-primary)]/30 text-[var(--nova-primary)]"
                        : "bg-white/5 text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    <School className="h-7 w-7" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white">School Track</div>
                    <div className="mt-1 text-xs text-slate-400">
                      For school-level competitors
                    </div>
                  </div>
                  {watchedTrack === "school" && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="h-5 w-5 text-violet-400" />
                    </div>
                  )}
                </label>

                <label
                  htmlFor="track-university"
                  className={`group relative flex cursor-pointer flex-col items-center gap-3 rounded-xl border p-6 transition-all duration-300 ${
                    watchedTrack === "university"
                      ? "border-[var(--nova-primary)]/50 bg-[var(--nova-primary)]/10 shadow-[0_0_20px_rgba(0,53,153,0.15)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    id="track-university"
                    value="university"
                    className="sr-only"
                    {...register("track")}
                  />
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all ${
                      watchedTrack === "university"
                        ? "bg-[var(--nova-primary)]/30 text-[var(--nova-primary)]"
                        : "bg-white/5 text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white">
                      University Track
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      For university-level competitors
                    </div>
                  </div>
                  {watchedTrack === "university" && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="h-5 w-5 text-violet-400" />
                    </div>
                  )}
                </label>
              </div>
              {errors.track && (
                <p className="mt-3 flex items-center gap-1.5 text-sm text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.track.message}
                </p>
              )}
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <Button
                type="button"
                variant="gradient"
                size="xl"
                className="group gap-2 shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                onClick={handleNext}
              >
                Next: Add Members
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        )}

        {/* ==================== STEP 2: Members ==================== */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--nova-primary)]/20 px-3 py-1 text-xs font-medium text-[var(--nova-primary)] mb-4">
                <Users className="h-3 w-3" />
                Step 2 of 3
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Add Team Members
              </h2>
              <p className="mt-2 text-slate-400">
                Add 3 to 5 members. Designate one as the team leader.
              </p>
            </div>

            {fields.map((field, index: number) => (
              <div
                key={field.id}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/15"
              >
                {/* Member header */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
                        watchedMembers[index]?.is_leader
                          ? "bg-[var(--nova-secondary)]/20 text-[var(--nova-secondary)]"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {watchedMembers[index]?.is_leader ? (
                        <Crown className="h-4 w-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="font-medium text-white">
                      {watchedMembers[index]?.is_leader
                        ? "Team Leader"
                        : `Member ${index + 1}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!watchedMembers[index]?.is_leader && (
                      <button
                        type="button"
                        onClick={() => handleSetLeader(index)}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-300"
                      >
                        <Crown className="mr-1 inline-block h-3 w-3" />
                        Set Leader
                      </button>
                    )}
                    {fields.length > 3 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-400 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Member fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label
                      htmlFor={`members.${index}.fullname`}
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      Full Name
                    </Label>
                    <Input
                      id={`members.${index}.fullname`}
                      placeholder="John Doe"
                      className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-600 focus:border-violet-500/50 h-10"
                      {...register(`members.${index}.fullname`)}
                    />
                    {errors.members?.[index]?.fullname && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.members[index].fullname.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor={`members.${index}.email`}
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      Email
                    </Label>
                    <Input
                      id={`members.${index}.email`}
                      type="email"
                      placeholder="john@example.com"
                      className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-600 focus:border-violet-500/50 h-10"
                      {...register(`members.${index}.email`)}
                    />
                    {errors.members?.[index]?.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.members[index].email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor={`members.${index}.whatsapp_no`}
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      WhatsApp Number
                    </Label>
                    <Input
                      id={`members.${index}.whatsapp_no`}
                      placeholder="+94 77 123 4567"
                      className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-600 focus:border-violet-500/50 h-10"
                      {...register(`members.${index}.whatsapp_no`)}
                    />
                    {errors.members?.[index]?.whatsapp_no && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.members[index].whatsapp_no.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor={`members.${index}.nic_no`}
                      className="mb-1.5 block text-xs font-medium text-slate-400"
                    >
                      NIC / ID Number
                    </Label>
                    <Input
                      id={`members.${index}.nic_no`}
                      placeholder="200012345678"
                      className="bg-slate-900/60 border-white/10 text-white placeholder:text-slate-600 focus:border-violet-500/50 h-10"
                      {...register(`members.${index}.nic_no`)}
                    />
                    {errors.members?.[index]?.nic_no && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.members[index].nic_no.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Member-level validation errors */}
            {errors.members?.root && (
              <p className="flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {errors.members.root.message}
              </p>
            )}

            {/* Add Member */}
            {fields.length < 5 && (
              <button
                type="button"
                onClick={() => append({ ...DEFAULT_MEMBER })}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/5 p-4 text-sm font-medium text-slate-300 transition-all hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
              >
                <Plus className="h-4 w-4" />
                Add Member ({fields.length}/5)
              </button>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className="gap-2 text-slate-300 hover:text-white"
                onClick={handleBack}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Button
                type="button"
                variant="gradient"
                size="xl"
                className="group gap-2 shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                onClick={handleNext}
              >
                Review Team
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        )}

        {/* ==================== STEP 3: Review ==================== */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-300 mb-4">
                <CheckCircle className="h-3 w-3" />
                Step 3 of 3
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Review & Submit
              </h2>
              <p className="mt-2 text-slate-400">
                Confirm your team details before submitting
              </p>
            </div>

            {/* Team Summary */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Team Details
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-slate-500">Team Name</div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {watchedTeamName}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Track</div>
                  <div className="mt-1 flex items-center gap-2">
                    {watchedTrack === "school" ? (
                      <School className="h-4 w-4 text-violet-400" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-violet-400" />
                    )}
                    <span className="text-lg font-semibold capitalize text-white">
                      {watchedTrack}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Members Summary */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Team Members ({watchedMembers.length})
              </h3>
              <div className="space-y-3">
                {watchedMembers.map((member, index: number) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 rounded-lg p-3 transition-all ${
                      member.is_leader
                        ? "bg-[var(--nova-secondary)]/10 border border-[var(--nova-secondary)]/20"
                        : "bg-white/5 border border-white/5"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold ${
                        member.is_leader
                          ? "bg-[var(--nova-secondary)]/20 text-[var(--nova-secondary)]"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {member.is_leader ? (
                        <Crown className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white truncate">
                          {member.fullname || "—"}
                        </span>
                        {member.is_leader && (
                          <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-300">
                            Leader
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 truncate">
                        {member.email || "—"}
                      </div>
                    </div>
                    <div className="hidden sm:block text-right text-xs text-slate-500">
                      <div>{member.whatsapp_no || "—"}</div>
                      <div>{member.nic_no || "—"}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Error */}
            {submitStatus === "error" && serverError && (
              <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Registration Failed</div>
                  <div className="mt-1 text-red-400/80">{serverError}</div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className="gap-2 text-slate-300 hover:text-white"
                onClick={handleBack}
              >
                <ArrowLeft className="h-4 w-4" />
                Edit Members
              </Button>
              <Button
                type="submit"
                variant="gradient"
                size="xl"
                disabled={submitStatus === "loading"}
                className="group gap-2 shadow-[0_0_30px_rgba(139,92,246,0.4)] disabled:opacity-60"
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Registration
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
