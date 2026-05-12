"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl blur-3xl"></div>

        <div className="relative z-10 p-12 md:p-16 rounded-2xl bg-card/60 border border-primary/20 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground leading-tight">
            Digitalizează-ți activitatea
            <span className="text-primary"> astăzi</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Solicită o demonstrație gratuită și vezi cum SALUX poate transforma gestionarea contractelor tale de salubrizare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8 gap-2"
              >
                Solicită Demo Gratuit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://app.salux.ro/login.php" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-muted-foreground hover:border-primary/40 hover:text-primary rounded-full px-8"
              >
                Accesează Platforma
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Fără comisioane ascunse. Implementare asistată. Suport în română.
          </p>
        </div>
      </div>
    </section>
  )
}
