"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TechplanoraLogo, ThemeToggle } from "@/modules/shared"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#modules" },
  { label: "Built For", href: "#for-who" },
]

export function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <TechplanoraLogo className="h-8 w-8" showText />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-secondary/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
          >
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-9 w-9"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="glass border-t border-border/50 md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-secondary/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button asChild variant="outline" className="w-full justify-center bg-transparent">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="w-full justify-center bg-primary text-primary-foreground">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
