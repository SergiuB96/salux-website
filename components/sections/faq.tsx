"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Ce este SALUX?",
      answer:
        "SALUX este un sistem informatic pentru gestiunea și raportarea activităților de salubrizare stradală și deszăpezire, conform caietelor de sarcini din România. Integrează operatorul de salubrizare, UAT-ul și echipele de teren într-o singură platformă.",
    },
    {
      question: "Cine poate folosi SALUX?",
      answer:
        "Operatorii de salubrizare și autoritățile locale (UAT-uri) care au contracte de salubrizare stradală în România. Platforma suportă 9 roluri: manager contract, inspector UAT, șef echipă, șofer, lucrător, dispecer, contabil și altele.",
    },
    {
      question: "Cât durează implementarea?",
      answer:
        "Implementarea durează de obicei 1-2 săptămâni. Aceasta include configurarea conturilor, importul nomenclatoarelor (județe, localități, străzi SIRUTA), training pentru echipă și asistență la primul program lunar.",
    },
    {
      question: "Funcționează aplicația mobilă offline?",
      answer:
        "Da. Aplicația PWA pentru echipele de teren funcționează complet offline — raportările, pontajul și sesizările se salvează local și se sincronizează automat când se restabilește conexiunea la internet.",
    },
    {
      question: "Este conform cu legislația română?",
      answer:
        "Da. SALUX este construit conform Specificației de Cerințe Sistem (SRS) pentru servicii de salubrizare din România. Nomenclatorul de operațiuni (MS-01 până la MS-20 etc.) și fluxul de aprobare sunt aliniate cu caietele de sarcini standard.",
    },
    {
      question: "Unde sunt stocate datele?",
      answer:
        "Datele sunt stocate pe servere din România/UE, cu backup zilnic automat. SALUX este conform GDPR și oferă documentație completă pentru DPA (Data Processing Agreement) la cerere.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Întrebări <span className="text-primary">frecvente</span>
          </h2>
          <p className="text-lg text-muted-foreground">Răspunsuri rapide despre SALUX</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-card/60 border border-border overflow-hidden cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <button className="w-full px-6 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors">
                <h3 className="text-base font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
