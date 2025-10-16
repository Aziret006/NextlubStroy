import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { WhyUsSection } from "@/components/why-us-section"
import { ProjectsSection } from "@/components/projects-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <WhyUsSection />
      <ProjectsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
