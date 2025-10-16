"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

const projects = [
  {
    id: 1,
    title: "Испанский квартал",
    location: "Тбилиси, Грузия",
    image: "/modern-residential-towers-at-night.jpg",
    status: "В строительстве",
  },
  {
    id: 2,
    title: "Panorama Batumi",
    location: "Батуми, Грузия",
    image: "/luxury-beachfront-residential-building.jpg",
    status: "Завершен",
  },
]

export function ProjectsSection() {
  const [language] = useState<Language>("ru")
  const t = translations[language]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-muted-foreground uppercase tracking-wider mb-4">
              {language === "ru" ? "Текущие проекты" : "Учурдагы долбоорлор"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">{t.projects.subtitle}</h2>
          </div>
          <Link href="/projects">
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              {t.projects.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full mb-3">
                      {project.status}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 font-serif">{project.title}</h3>
                    <p className="text-primary-foreground/80">{project.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Link href="/projects">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              {t.projects.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
