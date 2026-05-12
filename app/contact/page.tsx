"use client"

import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({ nume: "", email: "", companie: "", tip: "operator", mesaj: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? "Eroare necunoscută. Contactați office@salux.ro.")
      } else {
        setSubmitted(true)
      }
    } catch {
      setError("Eroare de rețea. Verificați conexiunea și încercați din nou.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 bg-background overflow-hidden">
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Solicită o <span className="text-primary">demonstrație</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completați formularul și vă vom contacta în maxim 24 de ore pentru a programa o prezentare personalizată.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:office@salux.ro" className="font-semibold text-foreground hover:text-primary transition-colors">
                    office@salux.ro
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Companie</p>
                  <p className="font-semibold text-foreground">S.C. MILBAC MANAGEMENT S.R.L.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card/60 border border-border space-y-3">
              <p className="font-semibold text-foreground text-sm">Ce include demonstrația?</p>
              {[
                "Prezentare completă a platformei (45 min)",
                "Configurare cont demo cu datele dumneavoastră",
                "Răspuns la întrebările specifice contractului",
                "Ofertă personalizată după demonstrație",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-2xl bg-card/60 border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Mesaj trimis cu succes!</h3>
                <p className="text-muted-foreground">Vă vom contacta în maxim 24 de ore.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Nume *</label>
                    <input name="nume" value={form.nume} onChange={handleChange} required placeholder="Ion Popescu"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 text-sm transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="ion@companie.ro"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 text-sm transition-colors" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Companie *</label>
                  <input name="companie" value={form.companie} onChange={handleChange} required placeholder="S.C. Salubrizare S.R.L. / Primăria ..."
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 text-sm transition-colors" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Tipul organizației</label>
                  <select name="tip" value={form.tip} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-primary/60 text-sm transition-colors">
                    <option value="operator">Operator de salubrizare</option>
                    <option value="uat">Autoritate locală (UAT/Primărie)</option>
                    <option value="altul">Altul</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Mesaj (opțional)</label>
                  <textarea name="mesaj" value={form.mesaj} onChange={handleChange} rows={3}
                    placeholder="Descrieți pe scurt situația actuală și ce vă interesează..."
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 text-sm transition-colors resize-none" />
                </div>

                {error && (
                  <p className="text-sm text-destructive bg-destructive/10 px-4 py-2.5 rounded-lg">{error}</p>
                )}

                <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full gap-2 disabled:opacity-60">
                  <Send className="w-4 h-4" />
                  {loading ? "Se trimite..." : "Trimite cererea de demo"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Prin trimitere, acceptați{" "}
                  <a href="/legal/confidentialitate" className="text-primary hover:underline">Politica de confidențialitate</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
