"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const stats = [
    { value: "20+", label: "Operațiuni SRS" },
    { value: "100%", label: "Conform caiet sarcini" },
    { value: "PWA", label: "Aplicație mobilă" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#03090f] via-[#071525] to-[#03090f]"></div>

      {/* Decorative orbs */}
      <div className="absolute top-24 left-8 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-32 right-12 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/4 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="inline-block">
              <div className="bg-white/95 rounded-2xl px-5 py-3 shadow-lg shadow-black/20">
                <Image
                  src="/salux_logo.png"
                  alt="SALUX"
                  width={160}
                  height={58}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Gestiune Digitală a Salubrizării</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-primary">Orașe curate.</span>
                <br />
                <span className="text-foreground">Comunități</span>
                <br />
                <span className="text-foreground">sănătoase.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Platforma software pentru operatori de salubrizare și autorități locale din România.
                Program lunar, raportare GPS, urmărire contract — totul integrat într-un singur sistem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8 gap-2"
                >
                  Solicită Demo Gratuit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/40 text-accent hover:bg-accent/10 rounded-full px-8"
                >
                  Descoperă funcționalitățile
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 pt-2">
              {["Conform SRS salubrizare", "GDPR Ready", "Suport în română"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Preview */}
          <div className="hidden lg:flex flex-col gap-6">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-xl bg-card/60 border border-primary/20 text-center backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Mock dashboard card */}
            <div className="rounded-2xl bg-card/60 border border-primary/20 backdrop-blur-sm p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Program Lunar — Mai 2026</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary font-medium">Aprobat</span>
              </div>
              <div className="space-y-2">
                {[
                  { op: "MS-03 Măturat mecanizat", prog: 87, color: "bg-primary" },
                  { op: "CS-01 Golit coșuri", prog: 100, color: "bg-accent" },
                  { op: "MS-05 Curățat rigole", prog: 62, color: "bg-primary" },
                  { op: "CD-01 Colectat deșeuri", prog: 45, color: "bg-accent" },
                ].map((item) => (
                  <div key={item.op} className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{item.op}</span>
                      <span>{item.prog}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all`}
                        style={{ width: `${item.prog}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>48 sarcini executate azi</span>
                <span className="text-primary font-medium">→ Hartă GPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
