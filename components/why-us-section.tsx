"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

const partners = [
  { name: "Wyndham", logo: "/wyndham-hotels-logo.jpg" },
  { name: "Barceló", logo: "/barcelo-hotel-group-logo.jpg" },
  { name: "La Quinta", logo: "/la-quinta-logo.jpg" },
  { name: "IPM", logo: "/ipm-property-management-logo.jpg" },
]

export function WhyUsSection() {
  const [language] = useState<Language>("ru")
  const t = translations[language]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground uppercase tracking-wider mb-4">
            {language === "ru" ? "Почему мы?" : "Эмне үчүн биз?"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-balance">{t.why.subtitle}</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center text-pretty">{t.why.description}</p>
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              {t.why.cta}
            </Button>
          </div>
        </div>

        {/* Partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
