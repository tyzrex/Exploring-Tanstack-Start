import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Layers, CheckCircle2, Sparkles, Calendar, Activity } from "lucide-react"
import { Link } from "@tanstack/react-router"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[128px] animate-pulse-glow" />
        <div className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full bg-chart-3/10 blur-[100px] animate-pulse-glow animation-delay-200" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-slide-up mb-8 inline-flex items-center gap-2">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium border border-border shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Built for developers who ship
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up animation-delay-100 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Plan. Build. Ship. <span className="text-gradient">Repeat.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up animation-delay-200 mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
            Your personal operations dashboard. Manage projects, track deadlines, plan content, and ship consistently.
            Built for engineers, freelancers, and indie hackers.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              <Link to="/auth/signup">
                Start Building Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 px-8 text-base bg-transparent border-border/80 hover:bg-secondary/50"
            >
              <a href="#modules">
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-slide-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Free forever for personal use
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Setup in 2 minutes
            </span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 md:mt-28">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow behind */}
            <div className="absolute inset-x-0 -top-8 h-48 bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />

            {/* Browser Window */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-warning/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                </div>
                <div className="ml-4 flex-1 rounded-lg bg-background/60 px-4 py-1.5 text-xs text-muted-foreground font-mono">
                  app.Techplanora.dev/dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-12 min-h-[400px]">
                {/* Sidebar */}
                <div className="col-span-3 border-r border-border bg-sidebar p-4 hidden lg:block">
                  <div className="space-y-1">
                    {[
                      { icon: Layers, label: "Projects", active: true },
                      { icon: CheckCircle2, label: "Tasks", active: false },
                      { icon: Sparkles, label: "Content", active: false },
                      { icon: Calendar, label: "Schedule", active: false },
                      { icon: Activity, label: "Activity", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          item.active
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-sidebar-accent"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-12 lg:col-span-9 p-6 bg-background">
                  <div className="mb-6">
                    <h3 className="text-lg font-display font-semibold">Active Projects</h3>
                    <p className="text-sm text-muted-foreground">3 projects in progress</p>
                  </div>

                  {/* Project Cards */}
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {[
                      { name: "Portfolio Redesign", progress: 75, tasks: 12, color: "bg-primary" },
                      { name: "API Integration", progress: 45, tasks: 8, color: "bg-chart-2" },
                      { name: "Content Series", progress: 30, tasks: 6, color: "bg-chart-4" },
                    ].map((project) => (
                      <div
                        key={project.name}
                        className="rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-sm font-medium">{project.name}</span>
                          <span className="text-xs text-muted-foreground">{project.tasks} tasks</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                          <div
                            className={`h-full ${project.color} rounded-full transition-all`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="mt-2 block text-right text-xs text-muted-foreground">
                          {project.progress}% complete
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                      { label: "Due Today", value: "4", trend: "up" },
                      { label: "This Week", value: "12", trend: "neutral" },
                      { label: "Content Ideas", value: "8", trend: "up" },
                      { label: "Scheduled Calls", value: "3", trend: "neutral" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
                        <div className="text-2xl font-display font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
