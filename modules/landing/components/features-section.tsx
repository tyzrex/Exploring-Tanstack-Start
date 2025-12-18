import { Layers, Clock, Sparkles, Activity, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Project Planning",
    description:
      "Organize projects with milestones, deadlines, and status tracking. Real-world planning logic for real results.",
  },
  {
    icon: Clock,
    title: "Time-Aware Tasks",
    description:
      "Tasks linked to projects with overdue, today, and this week views. Server-side filtering keeps you focused.",
  },
  {
    icon: Sparkles,
    title: "Content Planner",
    description: "Track content ideas from concept to posted. Platform tagging for Reels, Shorts, TikTok, and X.",
  },
  {
    icon: Activity,
    title: "Activity Timeline",
    description:
      "One unified feed showing project updates, task completions, and content published. See your progress unfold.",
  },
  {
    icon: Zap,
    title: "Fast & Focused",
    description: "No enterprise bloat. Per-user workspace designed for individual productivity, not team overhead.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours. No tracking, no selling. Simple, transparent, and respectful of your work.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">Why Techplanora</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything you need to ship consistently
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A personal ops system, not another enterprise tool. Clean, focused, no clutter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-display font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
