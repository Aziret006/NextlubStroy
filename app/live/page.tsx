import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LivePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-destructive rounded-full animate-pulse"></span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif">LIVE трансляция</h1>
          </div>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Следите за ходом строительства наших проектов в реальном времени
          </p>
        </div>
      </section>

      {/* Live Streams */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img src="/construction-site-live-camera-view.jpg" alt="Live Stream 1" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-destructive text-destructive-foreground rounded-full text-sm">
                <span className="w-2 h-2 bg-destructive-foreground rounded-full animate-pulse"></span>
                LIVE
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent text-primary-foreground">
                <h3 className="font-bold text-lg">Испанский квартал - Корпус А</h3>
                <p className="text-sm text-primary-foreground/80">Тбилиси, Грузия</p>
              </div>
            </div>

            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img src="/building-construction-progress-camera.jpg" alt="Live Stream 2" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-destructive text-destructive-foreground rounded-full text-sm">
                <span className="w-2 h-2 bg-destructive-foreground rounded-full animate-pulse"></span>
                LIVE
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent text-primary-foreground">
                <h3 className="font-bold text-lg">Испанский квартал - Корпус Б</h3>
                <p className="text-sm text-primary-foreground/80">Тбилиси, Грузия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
