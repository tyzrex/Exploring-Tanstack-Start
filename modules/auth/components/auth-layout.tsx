import type React from "react"
import Link from "next/link"
import { TechplanoraLogo, ThemeToggle } from "@/modules/shared"
import { Layers, CheckCircle2, Sparkles, Calendar, Activity } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

const features = [
  { icon: Layers, label: "Project Planning" },
  { icon: CheckCircle2, label: "Task Management" },
  { icon: Sparkles, label: "Content Planner" },
  { icon: Calendar, label: "Schedule Tracking" },
  { icon: Activity, label: "Activity Timeline" },
]

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-muted/30 flex-col justify-between p-12">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[128px]" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between relative">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <TechplanoraLogo className="h-9 w-9" showText />
          </Link>
          <ThemeToggle />
        </div>

        {/* Testimonial */}
        <div className="max-w-md relative">
          <blockquote className="space-y-6">
            <p className="text-2xl font-display font-medium leading-relaxed">
              &ldquo;Finally, a tool that understands how I actually work. Projects, content, calls — all unified in one
              clean interface.&rdquo;
            </p>
            <footer className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Alex Chen</span>
              <span className="mx-2">·</span>
              <span>Indie Hacker & Content Creator</span>
            </footer>
          </blockquote>

          {/* Feature Pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono relative">
          <span className="text-primary">Plan.</span>
          <span className="text-primary">Build.</span>
          <span className="text-primary">Ship.</span>
          <span className="text-primary">Repeat.</span>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="flex-1 flex flex-col bg-background">
        {/* Mobile Header */}
        <div className="lg:hidden p-6 flex items-center justify-between border-b border-border">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <TechplanoraLogo className="h-8 w-8" showText />
          </Link>
          <ThemeToggle />
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-sm space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-2xl font-display font-bold tracking-tight">{title}</h1>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
