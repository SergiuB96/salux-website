import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const posts = [
  {
    slug: "digitalizarea-salubrizarii-romania",
    title: "Digitalizarea serviciilor de salubrizare în România — unde suntem și unde mergem",
    excerpt:
      "Sectorul de salubritate din România se confruntă cu presiunea crescândă de a adopta soluții digitale pentru gestionarea contractelor, raportarea activităților și transparența față de cetățeni.",
    date: "2026-05-01",
    readTime: "8 min",
    category: "Industrie",
  },
  {
    slug: "program-lunar-salubrizare-ghid",
    title: "Ghid practic: Cum se întocmește un program lunar de salubrizare conform SRS",
    excerpt:
      "Caietul de sarcini pentru servicii de salubrizare impune un program lunar detaliat cu operațiuni, frecvențe și cantități. Iată cum să-l întocmești corect și cum să-l urmărești.",
    date: "2026-04-15",
    readTime: "12 min",
    category: "Ghiduri",
  },
  {
    slug: "gps-raportare-teren-salubrizare",
    title: "Raportarea GPS pe teren — de ce contează și cum o implementezi corect",
    excerpt:
      "Dovezile geolocalizate devin standard în contractele de salubrizare. Cum funcționează raportarea GPS și de ce protejează atât operatorul cât și UAT-ul.",
    date: "2026-03-20",
    readTime: "6 min",
    category: "Tehnologie",
  },
  {
    slug: "uat-operator-contract-salubrizare",
    title: "Relația UAT-Operator în contractele de salubrizare: drepturi, obligații și digitalizare",
    excerpt:
      "Separarea responsabilităților între autoritatea locală și operatorul de salubrizare este definită clar prin lege. Cum un sistem informatic modernizează această relație.",
    date: "2026-02-28",
    readTime: "10 min",
    category: "Legal",
  },
]

export default function BlogPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 bg-background overflow-hidden">
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Blog <span className="text-primary">SALUX</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ghiduri, noutăți din industrie și bune practici pentru gestionarea serviciilor de salubrizare stradală
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-8 rounded-xl bg-card/60 border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime} citire
                </div>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex items-center gap-1 text-sm text-primary font-medium">
                Citește articolul
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
