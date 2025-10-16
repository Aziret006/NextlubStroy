"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>("ru")

  const t = translations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 logo-hover">
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg logo-animate">
              <Building2 className="w-7 h-7 text-primary-foreground" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col logo-animate">
              <span className="text-foreground font-bold text-xl leading-tight tracking-tight font-serif">
                NextlubStroy
              </span>
              <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Строительство будущего
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground font-medium hover:text-primary transition-colors relative group">
              {t.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/projects"
              className="text-foreground font-medium hover:text-primary transition-colors relative group"
            >
              {t.nav.projects}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-foreground font-medium hover:text-primary transition-colors relative group"
            >
              {t.nav.about}
              <span className="absolute -bottom-1 left-0 w-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/blog"
              className="text-foreground font-medium hover:text-primary transition-colors relative group"
            >
              {t.nav.blog}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/contacts"
              className="text-foreground font-medium hover:text-primary transition-colors relative group"
            >
              {t.nav.contacts}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/live"
              className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-all hover:shadow-lg hover:scale-105"
            >
              <span className="w-2 h-2 bg-destructive-foreground rounded-full animate-pulse" />
              {t.nav.live}
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+996700000000"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">+996 700 000 000</span>
            </a>
            <div className="flex gap-2 ml-2">
              <Button
                variant={language === "ru" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("ru")}
                className="text-xs font-semibold"
              >
                РУС
              </Button>
              <Button
                variant={language === "kg" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("kg")}
                className="text-xs font-semibold"
              >
                КЫР
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/projects"
                className="text-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.projects}
              </Link>
              <Link
                href="/about"
                className="text-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/blog"
                className="text-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.blog}
              </Link>
              <Link
                href="/contacts"
                className="text-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contacts}
              </Link>
              <Link
                href="/live"
                className="text-foreground font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.live}
              </Link>
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button
                  variant={language === "ru" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("ru")}
                  className="flex-1"
                >
                  Русский
                </Button>
                <Button
                  variant={language === "kg" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage("kg")}
                  className="flex-1"
                >
                  Кыргызча
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
