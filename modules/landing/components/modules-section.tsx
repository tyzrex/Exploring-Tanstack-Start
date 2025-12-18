import { FolderKanban, ListTodo, Video, Calendar, Zap } from "lucide-react"

const modules = [
  {
    icon: FolderKanban,
    number: "01",
    title: "Project Planner",
    description:
      "Projects, milestones, deadlines, and status tracking. Strong database relationships for real-world planning workflows.",
    tags: ["Projects", "Milestones", "Deadlines"],
  },
  {
    icon: ListTodo,
    number: "02",
    title: "Task Engine",
    description:
      "Tasks linked to projects with priority levels and due dates. Time-based grouping with URL-driven state management.",
    tags: ["Priority", "Due Dates", "Filters"],
  },
  {
    icon: Video,
    number: "03",
    title: "Content Planner",
    description:
      "Track content from idea to published. Platform tagging and publish date tracking designed for modern creators.",
    tags: ["Ideas", "Platforms", "Status Flow"],
  },
  {
    icon: Calendar,
    number: "04",
    title: "Schedule Tracker",
    description:
      "Track calls and meetings linked to projects. Date, duration, and contextual notes. Simple tracking, not a calendar replacement.",
    tags: ["Calls", "Meetings", "Notes"],
  },
  {
    icon: Zap,
    number: "05",
    title: "Activity Timeline",
    description:
      "Unified feed of all your activity. Project updates, completed tasks, published content, and logged calls in one view.",
    tags: ["Feed", "History", "Audit"],
  },
]

export function ModulesSection() {
  return (
    <section id="modules" className="border-t border-border bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">Core Modules</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Five systems, one dashboard
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Each module designed to work independently or together. Per-user workspace with zero enterprise complexity.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={module.number}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 md:flex-row md:items-center md:gap-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 md:w-56 md:flex-shrink-0">
                <span className="font-mono text-sm text-muted-foreground">{module.number}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <module.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold md:hidden">{module.title}</h3>
              </div>

              <div className="flex-1">
                <h3 className="mb-2 hidden font-display font-semibold md:block">{module.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{module.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 md:w-56 md:flex-shrink-0 md:justify-end">
                {module.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
