import type { Metadata } from "next"
export const metadata: Metadata = { title: "Termeni și Condiții — SALUX" }
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Termeni și Condiții</h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Utilizarea platformei SALUX este supusă Termenilor și Condițiilor agreați la momentul achiziționării licenței.
        Documentul complet este disponibil în platformă sau la cerere.
      </p>
      <p className="text-muted-foreground text-sm">
        Contact: <a href="mailto:office@salux.ro" className="text-primary hover:underline">office@salux.ro</a>
      </p>
      <p className="text-xs text-muted-foreground border-t border-border pt-4">S.C. MILBAC MANAGEMENT S.R.L. · office@salux.ro</p>
    </div>
  )
}
