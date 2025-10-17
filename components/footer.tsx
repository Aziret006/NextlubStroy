"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone, Mail, MapPin, Building2 } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

export function Footer() {
  const [language] = useState<Language>("ru")
  const t = translations[language]

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 logo-hover">
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg logo-animate">
                <Building2 className="w-7 h-7 text-primary-foreground" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col logo-animate">
                <span className="font-bold text-xl leading-tight tracking-tight font-serif">
                  NextlubStroy
                </span>
                <span className="text-xs font-medium tracking-wide uppercase">
                  Строительство будущего
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              {language === "ru"
                ? "Профессиональная строительная компания. Создаем современные жилые комплексы премиум-класса с 2017 года."
                : "Профессионалдуу курулуш компаниясы. 2017-жылдан бери премиум класстагы заманбап турак комплекстерди түзүүдө."}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+995514440000"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+996 999 17 03 24</span>
              </a>
              <a
                href="mailto:info@eltgroup.ge"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@eltgroup.ge</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{language === "ru" ? "Тбилиси, Грузия" : "Тбилиси, Грузия"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.nav.projects}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {language === "ru" ? "Все проекты" : "Бардык долбоорлор"}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {language === "ru" ? "В строительстве" : "Курулуш учурунда"}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {language === "ru" ? "Завершенные" : "Аяктаган"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.about}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.nav.contacts}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 NextlubStroy. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
