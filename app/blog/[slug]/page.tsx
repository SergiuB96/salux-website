import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"

const posts: Record<string, {
  title: string
  date: string
  readTime: string
  category: string
  excerpt: string
  content: string
}> = {
  "digitalizarea-salubrizarii-romania": {
    title: "Digitalizarea serviciilor de salubrizare în România — unde suntem și unde mergem",
    date: "2026-05-01",
    readTime: "8 min",
    category: "Industrie",
    excerpt: "Sectorul de salubritate din România se confruntă cu presiunea crescândă de a adopta soluții digitale.",
    content: `
Sectorul de salubritate din România se confruntă cu presiunea crescândă de a adopta soluții digitale pentru gestionarea contractelor, raportarea activităților și transparența față de cetățeni.

## Situația actuală

Marea majoritate a operatorilor de salubrizare din România gestionează activitățile prin documente pe hârtie sau foi Excel. Raportările lunare sunt întocmite manual, verificarea execuțiilor se face prin inspecții fizice, iar disputele contractuale sunt frecvente tocmai din cauza lipsei dovezilor digitale.

Autoritățile locale (UAT-urile) se află în aceeași situație: nu au vizibilitate în timp real asupra execuției contractului și nu pot verifica ușor dacă operatorul respectă frecvențele și cantitățile asumate.

## Ce se schimbă

Presiunea de digitalizare vine din mai multe direcții:

- **Legislație**: cerințele de raportare devin tot mai stricte
- **Cetățeni**: așteptările de transparență cresc
- **Competiție**: operatorii cu sisteme digitale câștigă licitații mai ușor
- **Eficiență**: costurile operaționale scad cu digitalizarea

## Unde merge sectorul

Viitorul sectorului de salubrizare din România implică raportare GPS obligatorie, integrare cu platformele e-guvernare și transparență publică a execuției contractelor.

Platforme precum SALUX pregătesc operatorii și UAT-urile pentru această tranziție, oferind instrumentele necesare astăzi pentru cerințele de mâine.
    `,
  },
  "program-lunar-salubrizare-ghid": {
    title: "Ghid practic: Cum se întocmește un program lunar de salubrizare conform SRS",
    date: "2026-04-15",
    readTime: "12 min",
    category: "Ghiduri",
    excerpt: "Caietul de sarcini pentru servicii de salubrizare impune un program lunar detaliat.",
    content: `
Caietul de sarcini pentru servicii de salubrizare impune un program lunar detaliat cu operațiuni, frecvențe și cantități. Iată cum să-l întocmești corect și cum să-l urmărești pe tot parcursul lunii.

## Ce este programul lunar

Programul lunar de salubrizare este documentul oficial prin care operatorul planifică activitățile pentru luna următoare, conform contractului cu UAT-ul. Acesta trebuie să specifice:

- **Operațiunile** — codul și denumirea fiecărei activități (MS-01 Măturat manual, CS-01 Golit coșuri, etc.)
- **Frecvența** — zilnic, săptămânal (de N ori/săptămână) sau lunar
- **Străzile** — fiecare operațiune pentru fiecare arteră din contract
- **Cantitățile** — suprafețe, lungimi, număr de coșuri

## Pașii de elaborare

### 1. Verifică contractul
Identifică toate arterele și operațiunile din contract. Fiecare combinație arteră-operațiune trebuie inclusă cu frecvența corespunzătoare.

### 2. Calculează cantitățile
Pe baza parametrilor stradali (lungime, lățime carosabil, lățime trotuar), calculează suprafețele ce vor fi tratate.

### 3. Planifică frecvențele
Distribuie operațiunile pe zilele lucrătoare ale lunii, respectând frecvențele minime impuse (ex: măturat zilnic, spălat x2/săptămână, curățat rigole 1x/lună).

### 4. Obține aprobarea UAT-ului
Programul lunar se transmite UAT-ului până la data specificată în contract (de obicei 25-27 ale lunii precedente) și intră în vigoare după aprobare.

## Cum simplifică SALUX acest proces

Cu SALUX, programul lunar se generează semiautomatizat pe baza contractului existent. Operatorul configurează o singură dată arterele, operațiunile și frecvențele, iar sistemul generează automat sarcinile zilnice pentru fiecare zi lucrătoare.
    `,
  },
  "gps-raportare-teren-salubrizare": {
    title: "Raportarea GPS pe teren — de ce contează și cum o implementezi corect",
    date: "2026-03-20",
    readTime: "6 min",
    category: "Tehnologie",
    excerpt: "Dovezile geolocalizate devin standard în contractele de salubrizare.",
    content: `
Dovezile geolocalizate devin standard în contractele de salubrizare. Cum funcționează raportarea GPS și de ce protejează atât operatorul cât și UAT-ul.

## De ce GPS în salubrizare

Raportarea tradițională — completarea unui borderou sau a unui formular de hârtie — nu poate dovedi că o activitate a fost executată efectiv la locul și momentul specificat. Dispute frecvente apar când inspectorul UAT contestă execuția pe care operatorul susține că a efectuat-o.

GPS-ul rezolvă această ambiguitate: fiecare raportare include coordonatele geografice și timestamp-ul, creând o dovadă imposibil de contestat.

## Cum funcționează în SALUX

Echipa de teren raportează activitățile direct din aplicația mobilă. La momentul raportării, sistemul capturează automat:

- **Coordonate GPS** (latitudine, longitudine)
- **Timestamp** (data și ora exactă)
- **Fotografie opțională** (dovadă vizuală)
- **Operatorul** (cine a efectuat activitatea)

Toate acestea apar pe harta GPS a platformei, vizibilă atât pentru operator cât și pentru inspectorul UAT.

## Protecție pentru ambele părți

**Operatorul** demonstrează că a efectuat activitatea la locul și momentul specificat, protejându-se împotriva contestațiilor nefondate.

**UAT-ul** poate verifica în timp real execuția contractului fără a deplasa inspectori permanent pe teren.
    `,
  },
  "uat-operator-contract-salubrizare": {
    title: "Relația UAT-Operator în contractele de salubrizare: drepturi, obligații și digitalizare",
    date: "2026-02-28",
    readTime: "10 min",
    category: "Legal",
    excerpt: "Separarea responsabilităților între autoritatea locală și operatorul de salubrizare.",
    content: `
Separarea responsabilităților între autoritatea locală și operatorul de salubrizare este definită clar prin lege. Cum un sistem informatic modernizează această relație.

## Cadrul legal

Contractele de salubrizare stradală din România sunt reglementate de Legea serviciului de salubrizare a localităților (nr. 101/2006) și completate de caietele de sarcini specifice fiecărui UAT.

UAT-ul (Unitatea Administrativ-Teritorială) acționează ca beneficiar și finanțator al serviciului, în timp ce operatorul este prestatorul — compania de salubrizare câștigătoare a licitației.

## Obligațiile operatorului

- Respectarea programului lunar aprobat
- Raportarea lunară a activităților executate
- Menținerea inventarului (coșuri, utilaje, personal)
- Răspunsul la sesizările cetățenilor
- Asigurarea trasabilității activităților

## Drepturile UAT-ului

- Verificarea execuției prin inspectori proprii
- Aprobarea sau respingerea raportărilor
- Solicitarea de intervenții speciale (comenzi speciale)
- Monitorizarea bugetului contractual
- Aplicarea penalităților conform contractului

## Cum digitalizează SALUX această relație

SALUX pune la dispoziția ambelor părți un sistem transparent:

- **Operatorul** planifică, execută și raportează digital
- **UAT-ul** monitorizează în timp real și aprobă sau respinge lucrările
- **Ambii** văd exact aceleași date — fără interpretări ambigue
- **Documentele** (situații de plată, PV recepție) se generează automat

Rezultatul: dispute contractuale mai puține, transparență mai mare față de cetățeni și eficiență operațională crescută pentru ambele organizații.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: "Articol negăsit — SALUX Blog" }
  return {
    title: `${post.title} — SALUX Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 bg-background overflow-hidden">
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <article className="relative z-10 max-w-3xl mx-auto">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Înapoi la blog
        </Link>

        {/* Header */}
        <header className="mb-10 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{post.category}</span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {post.readTime} citire
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">{post.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-sm md:prose-base max-w-none
          prose-headings:text-foreground prose-headings:font-bold
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-strong:text-foreground
          prose-li:text-muted-foreground
          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-3">{block.slice(3)}</h2>
            }
            if (block.startsWith("### ")) {
              return <h3 key={i} className="text-lg font-semibold text-foreground mt-6 mb-2">{block.slice(4)}</h3>
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter(l => l.startsWith("- "))
              return (
                <ul key={i} className="space-y-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              )
            }
            const html = block.trim().replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
            return <p key={i} className="text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: html }} />
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-card/60 border border-border text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">Vrei să afli mai mult despre SALUX?</h3>
          <p className="text-muted-foreground text-sm">Solicită o demonstrație gratuită și vezi platforma în acțiune.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm">
            Solicită Demo
          </Link>
        </div>
      </article>
    </main>
  )
}
