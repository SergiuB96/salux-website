"use client"

import { CalendarDays, Map, BarChart3, Smartphone, FileDown, Users2, Snowflake, Bell } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: CalendarDays,
      title: "Program Lunar",
      description: "Planificare operațiuni cu frecvențe zilnice, săptămânale și lunare. Generare automată sarcini zilnice.",
    },
    {
      icon: Map,
      title: "Hartă GPS Live",
      description: "Vizualizare execuții, sesizări și coșuri pe hartă interactivă Leaflet. Refresh automat la 60s.",
    },
    {
      icon: BarChart3,
      title: "Urmărire Contract",
      description: "Consum vs. plafon anual, jaloane per an de contract, proiecție epuizare buget.",
    },
    {
      icon: Smartphone,
      title: "Aplicație Mobilă PWA",
      description: "Raportare offline-first pentru echipele de teren. Sincronizare automată când se restabilește conexiunea.",
    },
    {
      icon: FileDown,
      title: "Rapoarte & Export",
      description: "PDF și Excel conform SRS. Situații de plată, PV recepție, rapoarte analitice per sector/utilaj.",
    },
    {
      icon: Users2,
      title: "Multi-tenant & Roluri",
      description: "Acces separat pentru operator, UAT, inspector și echipă teren. 9 roluri SRS configurabile.",
    },
    {
      icon: Snowflake,
      title: "Deszăpezire",
      description: "Gestiune intervenții, stoc materiale (sare, nisip), baze de deszăpezire și raportare specifică.",
    },
    {
      icon: Bell,
      title: "Sesizări & Notificări",
      description: "Flux sesizări cetățeni cu prioritizare, notificări in-app per rol și calendar planificare.",
    },
  ]

  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Funcționalități <span className="text-primary">complete</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tot ce are nevoie un operator de salubrizare sau o autoritate locală, într-o singură platformă
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/60 border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
