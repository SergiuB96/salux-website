import type { Metadata } from "next"
export const metadata: Metadata = { title: "Licență Software (EULA) — SALUX" }
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Licență Software — EULA (Agatha Plus)</h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Platforma SALUX este licențiată de S.C. MILBAC MANAGEMENT S.R.L. Utilizarea software-ului este permisă
        exclusiv în condițiile Acordului de Licență pentru Utilizatorul Final (EULA) semnat la achiziționarea licenței.
      </p>
      <p className="text-muted-foreground text-sm">
        Pentru o copie a EULA sau pentru întrebări legate de licențiere:{" "}
        <a href="mailto:office@salux.ro" className="text-primary hover:underline">office@salux.ro</a>
      </p>
      <p className="text-xs text-muted-foreground border-t border-border pt-4">S.C. MILBAC MANAGEMENT S.R.L. · office@salux.ro</p>
    </div>
  )
}
