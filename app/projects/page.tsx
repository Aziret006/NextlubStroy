import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const allProjects = [
  {
    id: 1,
    title: "Испанский квартал",
    location: "Тбилиси, Грузия",
    image: "/modern-residential-towers-at-night.jpg",
    status: "В строительстве",
    area: "9000 м²",
    apartments: "2 комплекса",
  },
  {
    id: 2,
    title: "Panorama Batumi",
    location: "Батуми, Грузия",
    image: "/luxury-beachfront-residential-building.jpg",
    status: "Завершен",
    area: "12000 м²",
    apartments: "150 квартир",
  },
  {
    id: 3,
    title: "Green Valley",
    location: "Тбилиси, Грузия",
    image: "/green-residential-complex-with-gardens.jpg",
    status: "В строительстве",
    area: "15000 м²",
    apartments: "200 квартир",
  },
  {
    id: 4,
    title: "Sky Residence",
    location: "Тбилиси, Грузия",
    image: "/tall-modern-residential-tower.jpg",
    status: "Планируется",
    area: "8000 м²",
    apartments: "120 квартир",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Наши проекты</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Откройте для себя наши последние разработки премиум-класса
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project) => (
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
                      <p className="text-primary-foreground/80 mb-3">{project.location}</p>
                      <div className="flex gap-4 text-sm">
                        <span>{project.area}</span>
                        <span>•</span>
                        <span>{project.apartments}</span>
                      </div>
                    </div>
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
