"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

export function ContactSection() {
  const [language] = useState<Language>("ru")
  const t = translations[language]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg">{t.contact.description}</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Input placeholder={t.contact.name} className="h-12" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="tel" placeholder={t.contact.phone} className="h-12" />
                  <Input type="email" placeholder={t.contact.email} className="h-12" />
                </div>
                <div>
                  <Textarea placeholder={t.contact.message} rows={5} className="resize-none" />
                </div>
                <Button size="lg" className="w-full">
                  {t.contact.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
