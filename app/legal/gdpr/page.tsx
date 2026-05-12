import type { Metadata } from "next"
export const metadata: Metadata = { title: "GDPR — Protecția Datelor · SALUX" }
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">GDPR — Protecția Datelor cu Caracter Personal</h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        S.C. MILBAC MANAGEMENT S.R.L. prelucrează datele cu caracter personal în conformitate cu Regulamentul (UE) 2016/679 (GDPR).
        Datele sunt stocate pe servere situate în UE și sunt protejate prin măsuri tehnice și organizatorice adecvate.
      </p>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p><strong className="text-foreground">Operator:</strong> S.C. MILBAC MANAGEMENT S.R.L.</p>
        <p><strong className="text-foreground">Contact DPO:</strong>{" "}
          <a href="mailto:office@salux.ro" className="text-primary hover:underline">office@salux.ro</a>
        </p>
      </div>
      <p className="text-xs text-muted-foreground border-t border-border pt-4">
        Documentul complet GDPR este disponibil în platformă sau la cerere scrisă la adresa de email de mai sus.
      </p>
    </div>
  )
}
