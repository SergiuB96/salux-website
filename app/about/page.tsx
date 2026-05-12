import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Despre SALUX — Gestiune Digitală a Salubrizării",
  description: "S.C. MILBAC MANAGEMENT S.R.L. — compania din spatele platformei SALUX pentru gestiunea serviciilor de salubrizare stradală din România.",
}

export default function AboutPage() {
  const values = [
    { title: "Conformitate SRS", desc: "Construit conform caietelor de sarcini pentru servicii de salubrizare din România — nu o soluție generică adaptată." },
    { title: "Transparență totală", desc: "Operatorul și UAT-ul văd exact aceleași date în timp real. Fără ambiguități, fără dispute pe executat vs. factura." },
    { title: "Simplicitate în teren", desc: "Aplicația mobilă funcționează offline și e concepută pentru utilizatori fără pregătire tehnică avansată." },
    { title: "Suport în română", desc: "Echipa noastră vorbește română și înțelege specificul pieței de salubritate din România." },
  ]

  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 bg-background overflow-hidden">
      <div className="absolute top-20 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Despre <span className="text-primary">SALUX</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SALUX este o platformă software specializată pentru gestiunea și raportarea activităților de salubrizare stradală și deszăpezire, 
            dezvoltată de <strong className="text-foreground">S.C. MILBAC MANAGEMENT S.R.L.</strong> pentru piața din România.
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-foreground">De ce am construit SALUX</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sectorul de salubrizare din România se confruntă cu o provocare reală: contractele între operatori și autoritățile locale 
              implică zeci de operațiuni cu frecvențe complexe, raportare lunară, aprobare ierarhică și documentare riguroasă — 
              toate gestionate manual sau în foi de calcul.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              SALUX a fost creat pentru a digitaliza complet acest proces: de la planificarea lunară la raportarea GPS pe teren, 
              de la urmărirea bugetului contractual la exportul documentelor conforme.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 mt-2">
                Solicită Demo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="p-8 rounded-2xl bg-card/60 border border-border space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Operațiuni SRS suportate" },
                { value: "9", label: "Roluri utilizator" },
                { value: "42", label: "Județe România" },
                { value: "PWA", label: "Funcționează offline" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="text-2xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Valorile noastre</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 p-6 rounded-xl bg-card/60 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="p-8 rounded-2xl bg-card/60 border border-border text-center space-y-4">
          <div className="inline-block bg-white rounded-xl px-4 py-2 mb-2">
            <Image src="/salux_logo.png" alt="SALUX" width={120} height={44} className="h-10 w-auto object-contain" />
          </div>
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">S.C. MILBAC MANAGEMENT S.R.L.</strong> — licențiatorul platformei SALUX
          </p>
          <a href="mailto:office@salux.ro" className="text-primary hover:underline text-sm">office@salux.ro</a>
        </div>
      </div>
    </main>
  )
}
