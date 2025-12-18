
import { TechplanoraLogo,ThemeToggle } from "@/modules/shared"
import { Link } from "@tanstack/react-router"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#modules" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Blog", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
}

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-muted/20 py-16 md:py-20">
      <div className="mx-auto container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <TechplanoraLogo className="h-8 w-8" showText />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Personal operations dashboard for modern tech professionals who ship.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-sm font-display font-semibold">Product</p>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-display font-semibold">Resources</p>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-display font-semibold">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Techplanora. All rights reserved.</p>
          <p className="text-sm text-muted-foreground font-mono tracking-wide">Plan. Build. Ship. Repeat.</p>
        </div>
      </div>
    </footer>
  )
}
