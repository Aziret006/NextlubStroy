import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Тенденции в современной архитектуре 2025",
    excerpt: "Узнайте о последних трендах в архитектуре и дизайне жилых комплексов",
    image: "/modern-architecture.png",
    date: "15 января 2025",
    author: "Анна Иванова",
  },
  {
    id: 2,
    title: "Как выбрать идеальную квартиру",
    excerpt: "Полное руководство по выбору недвижимости для вашей семьи",
    image: "/apartment-selection-guide.jpg",
    date: "10 января 2025",
    author: "Георгий Петров",
  },
  {
    id: 3,
    title: "Инвестиции в недвижимость Грузии",
    excerpt: "Почему грузинский рынок недвижимости привлекает инвесторов",
    image: "/real-estate-investment.png",
    date: "5 января 2025",
    author: "Мария Сидорова",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Блог</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Новости, статьи и полезная информация о недвижимости
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
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
