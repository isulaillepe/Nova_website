"use client";

const partners = [
  { name: "Vercel", logo: "vercel", category: "Platform" },
  { name: "Linear", logo: "linear", category: "Productivity" },
  { name: "Notion", logo: "notion", category: "Productivity" },
  { name: "Figma", logo: "figma", category: "Design" },
  { name: "Stripe", logo: "stripe", category: "Payments" },
  { name: "GitHub", logo: "github", category: "Development" },
  { name: "OpenAI", logo: "openai", category: "AI" },
  { name: "Anthropic", logo: "anthropic", category: "AI" },
  { name: "Supabase", logo: "supabase", category: "Database" },
  { name: "Prisma", logo: "prisma", category: "Database" },
  { name: "Tailwind", logo: "tailwind", category: "CSS" },
  { name: "Next.js", logo: "nextjs", category: "Framework" },
];

const integrations = [
  { name: "GitHub Actions", description: "Native CI/CD integration", category: "CI/CD" },
  { name: "GitLab CI", description: "Deploy from GitLab", category: "CI/CD" },
  { name: "Vercel", description: "Zero-config deployments", category: "Platform" },
  { name: "Netlify", description: "Static site hosting", category: "Platform" },
  { name: "Docker", description: "Container deployments", category: "Containers" },
  { name: "Kubernetes", description: "Orchestration support", category: "Containers" },
  { name: "Terraform", description: "Infrastructure as code", category: "IaC" },
  { name: "Pulumi", description: "Modern IaC platform", category: "IaC" },
  { name: "Datadog", description: "APM & monitoring", category: "Observability" },
  { name: "Sentry", description: "Error tracking", category: "Observability" },
  { name: "LogRocket", description: "Session replay", category: "Observability" },
  { name: "PostHog", description: "Product analytics", category: "Analytics" },
];

export function Partners() {
  return (
    <section id="partners" className="py-20 sm:py-28 bg-slate-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
              Trusted by innovators
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Used by the world&apos;s best teams
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            From startups to enterprises, teams trust Nova to power their most critical applications.
          </p>
        </div>

        <div className="mb-20 overflow-hidden">
          <div className="flex animate-scroll gap-8 lg:gap-16" aria-hidden="true">
            {partners.map((partner) => (
              <div key={partner.name} className="flex-shrink-0 flex items-center gap-3 rounded-xl bg-white/5 px-6 py-3 transition-all hover:bg-white/10">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20">
                  <span className="text-xs font-bold text-violet-400 uppercase">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-white">{partner.name}</span>
              </div>
            ))}
            {partners.map((partner) => (
              <div key={`${partner.name}-2`} className="flex-shrink-0 flex items-center gap-3 rounded-xl bg-white/5 px-6 py-3 transition-all hover:bg-white/10">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20">
                  <span className="text-xs font-bold text-violet-400 uppercase">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-white">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "500K+", label: "Developers" },
            { value: "50K+", label: "Teams" },
            { value: "Fortune 500", label: "Companies" },
            { value: "99.99%", label: "Retention Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="mb-2 text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Integrates with your stack
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-violet-500/30 hover:bg-white/10"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20">
                    <span className="text-xs font-bold text-violet-400 uppercase">
                      {integration.name.charAt(0)}
                    </span>
                  </span>
                  <span className="font-medium text-white">{integration.name}</span>
                </div>
                <p className="text-sm text-slate-400">{integration.description}</p>
                <span className="inline-block mt-2 rounded-full bg-violet-600/20 px-2 py-0.5 text-xs font-medium text-violet-300">
                  {integration.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}