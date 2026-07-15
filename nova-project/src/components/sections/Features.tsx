"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const timelineSteps = [
  {
    step: "01",
    icon: Shield,
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
    icon: Shield,
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
    icon: Shield,
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
    icon: Shield,
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
    icon: Shield,
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
    icon: Shield,
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
    <section id="timeline" className="py-20 sm:py-28 lg:py-32 bg-[var(--nova-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
              <Shield className="h-3 w-3" />
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
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden apple-bento-card border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r text-white" style={{ background: phase.color }}>
                  {phase.title}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
              <p className="text-slate-300 mb-6">{phase.description}</p>
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
            </motion.div>
          ))}
        </div>

        {/* Detailed Timeline Steps */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600/50 to-transparent -translate-x-1/2 hidden lg:block" />
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white font-bold text-lg z-10 lg:h-16 lg:w-16 lg:text-xl"
                  style={{ background: step.iconBg }}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="apple-bento-card border-white/10 bg-white/5"
                  >
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          step.badgeColor === "emerald" ? "bg-emerald-500/20 text-emerald-300" :
                          step.badgeColor === "violet" ? "bg-violet-500/20 text-violet-300" :
                          step.badgeColor === "amber" ? "bg-amber-500/20 text-amber-300" :
                          "bg-cyan-500/20 text-cyan-300"
                        }`}>
                          {step.badge}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white"
                          style={{ background: step.iconBg }}>
                          <step.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-slate-300 mb-4">{step.description}</p>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {step.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300 transition-all hover:bg-[var(--nova-primary)]/10 hover:text-[var(--nova-secondary)]"
                          >
                            <Shield className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}