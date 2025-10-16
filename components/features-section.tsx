"use client"

import { useState } from "react"
import { Building2, Palette, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

export function FeaturesSection() {
  const [language] = useState<Language>("ru")
  const t = translations[language]

  const features = [
    {
      icon: Building2,
      title: t.features.quality.title,
      description: t.features.quality.description,
    },
    {
      icon: Palette,
      title: t.features.design.title,
      description: t.features.design.description,
    },
    {
      icon: MapPin,
      title: t.features.location.title,
      description: t.features.location.description,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
