import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Building2, value: "15+", label: "Проектов" },
    { icon: Users, value: "500+", label: "Клиентов" },
    { icon: Award, value: "8", label: "Наград" },
    { icon: TrendingUp, value: "8", label: "Лет опыта" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">О компании</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">Создаем будущее недвижимости с 2017 года</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-serif">Наша история</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Компания «NextlubStroy», которая работает на грузинском рынке уже 18 лет в различных сферах бизнеса, вышла
                на грузинский рынок строительства и девелопмента в 2017 году.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                За этот короткий срок «NextlubStroy» смогла завоевать репутацию надежного партнера и при правильной
                стратегии развития, обеспечила тот стремительный рост, который наблюдается в настоящее время.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Впервые в Грузии совместно с Barceló Hotel Group мы создали «Испанский Квартал» в Тбилиси, который
                объединяет в себе самобытную архитектуру, дизайн с красивыми террасами.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/modern-office-exterior.png" alt="NextlubStroy Office" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold mb-2 font-serif">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
