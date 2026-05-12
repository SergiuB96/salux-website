import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Înapoi acasă
        </Link>
        <div className="p-8 rounded-2xl bg-card/60 border border-border">
          {children}
        </div>
      </div>
    </main>
  )
}
