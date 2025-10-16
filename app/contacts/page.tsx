import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactSection } from "@/components/contact-section"

export default function ContactsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      details: ["+996 999 17 03 24", "+996 999 17 03 24"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@eltgroup.ge", "sales@eltgroup.ge"],
    },
    {
      icon: MapPin,
      title: "Адрес",
      details: ["Тбилиси, Грузия", "ул. Чавчавадзе 74"],
    },
    {
      icon: Clock,
      title: "Часы работы",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб: 10:00 - 15:00"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Контакты</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      <Footer />
    </main>
  )
}
