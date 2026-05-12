"use client"

import { CalendarCheck, MapPin, TrendingUp, FileText } from "lucide-react"

export default function Solution() {
  const features = [
    {
      title: "Program Lunar Digitalizat",
      description:
        "Planificați toate operațiunile cu frecvențe zilnice, săptămânale și lunare. Generare automată de sarcini zilnice pentru echipele de teren.",
      icon: CalendarCheck,
    },
    {
      title: "Raportare GPS în Timp Real",
      description:
        "Hartă live cu execuțiile, sesizările cetățenilor și inventarul coșurilor stradale. Dovezi geolocalizate pentru fiecare activitate.",
      icon: MapPin,
    },
    {
      title: "Urmărire Contract și Buget",
      description:
        "Monitorizare consum vs. plafon anual cu proiecție de epuizare, jalonare pe ani de contract și alerte automate.",
      icon: TrendingUp,
    },
    {
      title: "Rapoarte Conforme SRS",
      description:
        "Export PDF și Excel conform caietului de sarcini. Situații de plată, procese verbale de recepție, rapoarte analitice per sector.",
      icon: FileText,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            O platformă.{" "}
            <span className="text-primary">Tot ce ai nevoie.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SALUX integrează toate procesele de salubrizare stradală într-un singur sistem, accesibil de pe orice dispozitiv
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card/60 border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
