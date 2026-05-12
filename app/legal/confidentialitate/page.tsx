import type { Metadata } from "next"
export const metadata: Metadata = { title: "Politica de Confidențialitate — SALUX" }
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Politica de Confidențialitate</h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        S.C. MILBAC MANAGEMENT S.R.L. respectă confidențialitatea datelor dumneavoastră cu caracter personal.
        Documentul complet al Politicii de Confidențialitate este disponibil în platforma SALUX după autentificare.
      </p>
      <p className="text-muted-foreground text-sm">
        Pentru întrebări privind prelucrarea datelor personale, contactați-ne la{" "}
        <a href="mailto:office@salux.ro" className="text-primary hover:underline">office@salux.ro</a>.
      </p>
      <p className="text-xs text-muted-foreground border-t border-border pt-4">S.C. MILBAC MANAGEMENT S.R.L. · office@salux.ro</p>
    </div>
  )
}
