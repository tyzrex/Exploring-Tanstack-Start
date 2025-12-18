import { Code2, Palette, Rocket, TestTube, Pencil, Wrench } from "lucide-react"

const users = [
  {
    icon: Code2,
    label: "Software Engineers",
    description: "Ship features, track sprints, and manage technical debt across projects.",
  },
  {
    icon: Palette,
    label: "Freelancers",
    description: "Manage multiple clients, deadlines, and deliverables in one place.",
  },
  {
    icon: Rocket,
    label: "Indie Hackers",
    description: "Build in public, track progress, and stay consistent with your launches.",
  },
  {
    icon: TestTube,
    label: "QA Engineers",
    description: "Track test cycles, releases, and quality metrics across projects.",
  },
  {
    icon: Pencil,
    label: "Content Creators",
    description: "Plan, create, and publish content across multiple platforms.",
  },
  {
    icon: Wrench,
    label: "Technical Founders",
    description: "Oversee product development, growth tasks, and technical roadmaps.",
  },
]

export function TargetUsersSection() {
  return (
    <section id="for-who" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">Built For</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Your personal command center
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Techplanora is a personal ops system for tech professionals. Whether you&apos;re shipping code, creating
            content, or building your own thing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <div
              key={user.label}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <user.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-semibold">{user.label}</span>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
