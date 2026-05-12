"use client"

import { Truck, Landmark, ClipboardCheck } from "lucide-react"

export default function UseCases() {
  const useCases = [
    {
      icon: Truck,
      title: "Operatori de Salubrizare",
      description: "Planificați, raportați și urmăriți execuția contractelor cu UAT-urile. Echipele de teren raportează GPS direct din teren.",
      benefits: ["Program lunar cu generare automată sarcini", "Raportare mobilă offline-first", "Export situații de plată PDF/Excel", "Urmărire utilaje și pontaj echipă"],
    },
    {
      icon: Landmark,
      title: "Autorități Locale (UAT)",
      description: "Urmăriți în timp real execuția contractului, aprobați lucrările și monitorizați bugetul alocat. Transparență totală.",
      benefits: ["Hartă GPS cu execuțiile operatorului", "Aprobare/respingere lucrări cu motivație", "Monitorizare consum buget anual", "Solicitări intervenții speciale"],
    },
    {
      icon: ClipboardCheck,
      title: "Inspectori Teren",
      description: "Verificați execuțiile direct din teren cu aplicația mobilă. Fotografie, GPS și confirmare în timp real.",
      benefits: ["Verificare execuție cu dovezi foto", "Pontaj echipă și prezență", "Sesizări cetățeni cu prioritizare", "Acces la programul zilnic complet"],
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Construit pentru <span className="text-primary">toți actorii</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SALUX acoperă nevoile tuturor participanților din lanțul de salubrizare stradală
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((uc, index) => {
            const Icon = uc.icon
            return (
              <div key={index} className="p-8 rounded-xl bg-card/60 border border-border hover:border-primary/40 transition-colors group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{uc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{uc.description}</p>
                <ul className="space-y-2 mt-auto">
                  {uc.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
