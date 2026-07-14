"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  Search,
  GraduationCap,
  Hammer,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const timelineSteps = [
  {
    step: "01",
    icon: Users,
    title: "Registration of Teams",
    description: "Sign up your team to claim your place in this national innovation experience",
    iconBg: "from-violet-600 to-indigo-600",
    badge: "Open Now",
    badgeColor: "emerald",
    details: [
      "Form teams of 3-5 members",
      "Choose School or University track",
      "Get immediate access to resources",
    ],
  },
  {
    step: "02",
    icon: FileText,
    title: "Proposal Submission",
    description: "Submit your project concept and foundational framework during the initial rollout phase",
    iconBg: "from-indigo-600 to-blue-600",
    badge: "Upcoming",
    badgeColor: "violet",
    details: [
      "Technical project proposal",
      "Problem statement & solution",
      "Implementation roadmap",
    ],
  },
  {
    step: "03",
    icon: Search,
    title: "Reviewing the Proposals",
    description: "Submissions are formally evaluated to shortlist the most promising tech solutions",
    iconBg: "from-blue-600 to-cyan-600",
    badge: "Pending",
    badgeColor: "amber",
    details: [
      "Expert panel evaluation",
      "Innovation & feasibility scoring",
      "Shortlist announcement",
    ],
  },
  {
    step: "04",
    icon: GraduationCap,
    title: "Workshops for Selected Teams",
    description: "Access deep-dive technical workshops designed to equip participants with expert knowledge and career tools",
    iconBg: "from-cyan-600 to-teal-600",
    badge: "Scheduled",
    badgeColor: "cyan",
    details: [
      "Technical skill building",
      "Mentorship sessions",
      "Industry expert talks",
    ],
  },
  {
    step: "05",
    icon: Hammer,
    title: "Implementation of Projects",
    description: "Develop and refine your active engineering solution before the final project submission window closes",
    iconBg: "from-teal-600 to-emerald-600",
    badge: "In Progress",
    badgeColor: "emerald",
    details: [
      "Build & iterate on solution",
      "Technical mentorship",
      "Mid-project checkpoints",
    ],
  },
  {
    step: "06",
    icon: Award,
    title: "The Final Event Day",
    description: "Present your complete project live to judges and engage in panel discussions at the University of Sri Jayewardenepura campus",
    iconBg: "from-emerald-600 to-green-600",
    badge: "Grand Finale",
    badgeColor: "violet",
    details: [
      "Live project presentations",
      "Panel discussions",
      "Award ceremony",
      "Networking with partners",
    ],
  },
];

const phases = [
  {
    title: "First Phase",
    description: "This initial phase involves a call for proposal submissions along with a series of workshop sessions conducted for school and university students. These sessions introduce Project Nova and equip participants with the skills and knowledge needed for the competition.",
    steps: ["01", "02", "03", "04"],
    color: "from-violet-600 to-indigo-600",
  },
  {
    title: "Second Phase",
    description: "Shortlisted participants are required to submit their finalized projects by a specified deadline. Selected delegates will then be invited to the final round at the University of Sri Jayewardenepura, where they will participate in a panel discussion and showcase their work to a distinguished panel of judges.",
    steps: ["05", "06"],
    color: "from-emerald-600 to-teal-600",
  },
];

export function Features() {
  return (
    <section id="timeline" className="py-20 sm:py-28 lg:py-32 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
              <Sparkles className="h-3 w-3" />
              Event Timeline
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Participants will navigate an exciting and immersive tech-based timeline
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Built to nurture technical ability, leadership skills, and collaborative team-based ideation
          </p>
        </div>

        {/* Phase Overview */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {phases.map((phase, index) => (
            <Card
              key={phase.title}
              className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="secondary" className="bg-gradient-to-r text-xs">
                    {phase.title}
                  </Badge>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{phase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-slate-300">{phase.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {phase.steps.map((step) => (
                    <span
                      key={step}
                      className="rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium text-white"
                      style={{ background: phase.color }}
                    >
                      Step {step}
                    </span>
                  ))}
                </div>
              </CardContent>            </Card>
          ))}
        </div>

        {/* Detailed Timeline Steps */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600/50 to-transparent -translate-x-1/2 hidden lg:block" />
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex gap-6 animate-in fade-in slide-in-from-left-4 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white font-bold text-lg z-10 lg:h-16 lg:w-16 lg:text-xl"
                  style={{ background: step.iconBg }}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader>
                      <div className="mb-3 flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {step.badge}
                        </Badge>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white">
                          <step.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-slate-300">{step.description}</p>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {step.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300 transition-all hover:bg-violet-600/10 hover:text-violet-300"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}