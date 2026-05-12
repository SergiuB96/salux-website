"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white rounded-lg px-2.5 py-1.5">
                <Image src="/salux_logo.png" alt="SALUX" width={90} height={32} className="h-7 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sisteme informatice pentru gestiunea și raportarea serviciilor de salubrizare stradală.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <a href="mailto:office@salux.ro" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" />
                office@salux.ro
              </a>
            </div>
          </div>

          {/* Produs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Produs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Funcționalități", href: "/#features" },
                { label: "Prețuri", href: "/#pricing" },
                { label: "Securitate", href: "/despre" },
                { label: "Actualizări", href: "/blog" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Soluții</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Operatori Salubrizare", href: "/#use-cases" },
                { label: "Autorități Locale", href: "/#use-cases" },
                { label: "Inspectori Teren", href: "/#use-cases" },
                { label: "Deszăpezire", href: "/#features" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resurse */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Resurse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Ghid utilizare", href: "/blog" },
                { label: "Caiet de sarcini SRS", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Confidențialitate", href: "/legal/confidentialitate" },
                { label: "Termeni și condiții", href: "/legal/termeni" },
                { label: "GDPR", href: "/legal/gdpr" },
                { label: "EULA", href: "/legal/eula" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="bg-white rounded-lg px-2.5 py-1.5">
            <Image src="/salux_logo.png" alt="SALUX" width={80} height={28} className="h-6 w-auto object-contain" />
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © 2026 SALUX · S.C. MILBAC MANAGEMENT S.R.L. ·{" "}
            <a href="mailto:office@salux.ro" className="hover:text-primary transition-colors">office@salux.ro</a>
          </p>

          <p className="text-xs text-muted-foreground">
            Orașe curate. Comunități sănătoase.
          </p>
        </div>
      </div>
    </footer>
  )
}
