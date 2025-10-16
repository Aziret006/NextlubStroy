"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

const slides = [
  {
    image: "/elegant-residential-building-exterior-at-golden-ho.jpg",
    title: "hero.title",
    subtitle: "hero.subtitle",
  },
  {
    image: "/modern-luxury-construction-site-with-cranes-and-bu.jpg",
    title: "hero.title",
    subtitle: "hero.subtitle",
  },
  {
    image: "/luxury-apartment-interior-with-panoramic-city-view.jpg",
    title: "hero.title",
    subtitle: "hero.subtitle",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language] = useState<Language>("ru")
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const t = translations[language]

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10" />
          <img
            src={slide.image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
                <span className="text-white font-semibold text-sm tracking-wide">Профессиональное строительство</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif leading-tight text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 leading-relaxed text-pretty max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button
                size="lg"
                className="text-lg px-8 py-7 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all"
              >
                {t.hero.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold shadow-xl hover:scale-105 transition-all"
              >
                <Play className="w-5 h-5 mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 border border-white/20 shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 border border-white/20 shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 text-white" />
      </button> */}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`relative h-1 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-16" : "bg-white/40 hover:bg-white/60 w-8"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && isAutoPlaying && (
              <div className="absolute inset-0 bg-accent rounded-full animate-[progress_5s_linear]" />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 right-12 z-30 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white text-sm font-medium tracking-wide">Прокрутите вниз</span>
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </div>
  )
}
