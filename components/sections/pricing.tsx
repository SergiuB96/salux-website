"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      target: "Localități mici",
      description: "Pentru operatori cu 1-2 contracte UAT și echipe mici",
      features: [
        "Program lunar și sarcini zilnice",
        "Hartă GPS execuții",
        "Aplicație mobilă teren",
        "Export PDF/Excel de bază",
        "Până la 10 utilizatori",
        "Suport email",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      target: "Municipii medii",
      description: "Pentru operatori cu mai multe contracte și echipe extinse",
      features: [
        "Tot din Starter",
        "Urmărire contract & buget",
        "Sesizări cetățeni",
        "Rapoarte analitice avansate",
        "Deszăpezire & intervenții speciale",
        "Până la 50 utilizatori",
        "Suport prioritar",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      target: "Operatori regionali",
      description: "Pentru companii cu multiple contracte și autorități locale",
      features: [
        "Tot din Standard",
        "Multi-client (contracte multiple UAT)",
        "Integrare API & date SIRUTA",
        "Backup automat & SLA garantat",
        "Onboarding dedicat",
        "Utilizatori nelimitați",
        "Manager de cont dedicat",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Planuri <span className="text-primary">adaptate nevoilor tale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactați-ne pentru o ofertă personalizată în funcție de dimensiunea contractului
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl transition group flex flex-col ${
                plan.highlighted
                  ? "bg-primary/10 border-2 border-primary/50 shadow-lg shadow-primary/10"
                  : "bg-card/60 border border-border hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    CEL MAI POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{plan.target}</p>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 py-4 border-y border-border">
                <span className="text-2xl font-semibold text-muted-foreground">Ofertă la cerere</span>
              </div>

              <Link href="/contact" className="mb-6">
                <Button
                  className={`w-full rounded-full font-semibold ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary"
                  }`}
                >
                  Solicită ofertă
                </Button>
              </Link>

              <ul className="space-y-3 mt-auto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Toate planurile includ: hosting securizat, actualizări automate, backup zilnic și suport în limba română.
        </p>
      </div>
    </section>
  )
}
