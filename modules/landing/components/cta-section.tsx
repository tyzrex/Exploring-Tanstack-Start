import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[128px]" />
      </div>

      <div className="mx-auto container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Ready to start shipping?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Create your free workspace today. No credit card, no friction. Just you and your work.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              <Link to="/auth/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-13 px-8 text-base bg-transparent">
              <Link to="/auth/login">Sign In</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">Join developers and creators who ship with Techplanora</p>
        </div>
      </div>
    </section>
  )
}
