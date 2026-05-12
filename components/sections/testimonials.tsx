"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SALUX ne-a simplificat complet procesul de raportare lunară. Ce dura 3 zile acum se face în câteva ore. Echipele de teren s-au adaptat rapid la aplicația mobilă.",
      author: "Manager Contract",
      role: "Operator Salubrizare, municipiu din Transilvania",
      stats: "3 zile → câteva ore",
    },
    {
      quote:
        "Ca inspector UAT pot urmări în timp real ce se execută pe teren și aprob sau resping direct din hartă. Transparența față de cetățeni a crescut semnificativ.",
      author: "Inspector Servicii Publice",
      role: "Primărie Municipiu, județul Harghita",
      stats: "Aprobare în timp real",
    },
    {
      quote:
        "Urmărirea bugetului contractual e acum clară: știm exact câte procente am consumat din plafon și când se epuizează contractul. Nu am mai avut surprize la final de an.",
      author: "Director Economic",
      role: "Companie Salubrizare Regională",
      stats: "Zero surprize bugetare",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Ce spun <span className="text-primary">clienții noștri</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Operatori și autorități locale care au digitalizat activitatea cu SALUX
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="p-8 rounded-xl bg-card/60 border border-border hover:border-primary/30 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm">"{t.quote}"</p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mb-2">{t.role}</p>
                <p className="text-sm text-primary font-semibold">{t.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
