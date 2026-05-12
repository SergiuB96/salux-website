"use client"

import { FileX, Eye, ClipboardX } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      stat: "Raportare manuală → erori și litigii",
      description:
        "Gestionarea activităților pe hârtie sau Excel generează pierderi de timp, date inconsistente și dispute contractuale între operator și UAT.",
      icon: FileX,
    },
    {
      stat: "Transparență zero între operator și autoritate",
      description:
        "Primăriile nu pot urmări în timp real execuția contractului. Verificarea se face post-factum, pe documente, fără dovezi GPS.",
      icon: Eye,
    },
    {
      stat: "Caiet de sarcini complex, greu de urmărit",
      description:
        "20+ operațiuni cu frecvențe diferite, cantități lunare, aprobări ierarhice — imposibil de monitorizat fără un sistem dedicat.",
      icon: ClipboardX,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Problemele cu care se confruntă
            <span className="text-primary"> industria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sectorul de salubrizare din România pierde resurse semnificative din cauza lipsei digitalizării
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card/60 border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{problem.stat}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
