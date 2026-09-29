# SALUX - Website Copy (master copy)

Actualizat: 2026-09-29 - aliniat cu site-ul live

> **Notă pentru Claude Code**
> Acest fișier conține textele complete pentru website-ul www.salux.ro.
> Structura urmează arhitectura paginilor: fiecare secțiune `##` este o pagină,
> fiecare `###` este o sub-secțiune sau componentă de UI.
> Marcajele `[CTA]`, `[BUTON]`, `[IMAGINE]`, `[REZERVAT]` indică elemente
> interactive sau vizuale de implementat în design/development.
> Secțiunile marcate **Nepublicat** nu au echivalent pe site-ul live;
> se păstrează ca material de lucru.
>
> **Reguli confirmate (se aplică în tot documentul):**
> - Adresare formală peste tot: „dumneavoastră”, verbe la persoana a II-a plural.
>   Butonul principal: „Programați o demonstrație”.
> - Orice document generat de SALUX se obține în maximum un minut, pentru că
>   datele se preiau din operațiunile raportate de echipele din teren.
> - Demonstrația durează o oră.
> - Fără linie lungă sau medie; se folosește cratima (-).
> - Ghid de ton: `.claude/brand-voice-guidelines.md`.

---

## Metadata

```json
{
  "produs": "SALUX",
  "url": "www.salux.ro",
  "entitate_juridica": "MILBAC MANAGEMENT S.R.L.",
  "audienta_primara": "Operatori privați de salubrizare stradală",
  "audienta_secundara": "UAT-uri (primării, consilii județene, ADI-uri)",
  "acoperire": "Națională, România",
  "cadru_legal_principal": ["Legea 101/2006", "Legea 51/2006", "Ord. ANRSC 97/2025", "Ord. ANRSC 98/2025"],
  "model_comercial": "Licență anuală, 0 lei costuri de implementare",
  "timp_generare_document": "Maximum un minut",
  "durata_demonstratie": "O oră",
  "versiune": "3.1 - aliniat cu site-ul live",
  "data": "2026-09-29"
}
```

---

## 1. Homepage

### 1.1 Hero

**[TITLU PRINCIPAL - h1]**
Digitalizăm salubrizarea stradală. Sistem informatic integrat
pentru operator și autoritate contractantă.

**[SUBTITLU]**
Operatorul planifică și execută, autoritatea contractantă monitorizează
și aprobă, iar situația de plată se construiește automat din datele de teren.

**[CTA PRIMAR - buton]**
Programați o demonstrație

**[IMAGINE - legendă]**
Panoul principal: execuția zilei, situația lunii și alertele operaționale,
într-un singur ecran.

---

### 1.2 Bandă informativă

**Cadru legal în vigoare**

> SALUX este construit pe cadrul legal actual. Ordinele ANRSC 97/2025 și
> 98/2025 au înlocuit complet reglementările vechi (82/2015 și 111/2007).
> Fiecare contract de salubrizare din România trebuie aliniat, iar SALUX
> nu s-a adaptat la noul cadru, ci este construit direct pe el.

---

### 1.3 Cifre cheie

| Valoare | Etichetă |
|---------|----------|
| 1 minut | timp maxim pentru generarea oricărui document, din datele raportate de echipele din teren |
| 0 lei | costuri de implementare, inclusiv configurare, import și instruirea personalului |
| 5 ani | arhivă disponibilă |
| Actualizat | la fiecare ordin ANRSC nou, fără cost suplimentar |

---

### 1.4 Cui se adresează

**[H2]** Două părți contractante. Un mod unitar de lucru.

**[CARD OPERATOR]**
#### Operatorilor privați de salubrizare stradală

Pentru companiile de salubrizare care au unul sau mai multe contracte
în curs de semnare sau în execuție în România. SALUX digitalizează
activitatea de teren, raportarea, generarea situațiilor de plată,
programe lunare de lucru, sesizări, mapare pe harta beneficiarului,
cu documente care justifică toată activitatea în eventualitatea unor
controale din partea instituțiilor abilitate.

[BUTON] Vedeți soluția pentru operatori

**[CARD UAT]**
#### Autorităților publice

Primăriilor, consiliilor județene și asociațiilor de dezvoltare
intercomunitară care au calitate de autoritate contractantă pentru
serviciul de salubrizare. SALUX oferă acces în timp real la activitatea
operatorului și monitorizare conformă obligațiilor legale, iar autoritatea
are un fundament documentar solid pentru deciziile contractuale și pentru
răspunsul la orice control din partea instituțiilor abilitate.

[BUTON] Vedeți soluția pentru UAT

---

### 1.5 Cum lucrează - de la programul lunar la situația de plată

**[H2]** De la programul lunar la situația de plată

Trei fluxuri principale, toate integrate. Restul vine la pachet.

#### Planificare - Program lunar care se transformă în sarcini zilnice

Definiți operațiunile contractuale cu frecvențe (zilnic, săptămânal 1-7×,
lunar 1-N×) și cantități. Sistemul generează automat sarcini zilnice pentru
echipele de teren, cu ce trebuie făcut și când.

- 20+ tipuri de operațiune preconfigurate
- Aprobare ierarhică (șef echipă, manager, UAT)
- Distribuție automată pe zile lucrătoare
- Audit log per linie de plan

#### Execuție în teren - Echipele raportează din teren, cu sau fără conexiune

Aplicație mobilă accesibilă pe orice telefon prin browser, fără instalare.
Fotografiile, pontajul și sesizările se înregistrează direct din teren,
fără transcriere ulterioară.

- Funcționează fără conexiune, cu sincronizare automată la revenire
- Captură foto cu localizare opțională și marcaj temporal imutabil
- Pontaj intrare/ieșire cu rol și utilaj
- Vizualizare activitate în timp real pentru dispecer și UAT

#### Raportare - Situații de plată generate în maximum un minut

Datele din teren se consolidează automat. Aplicați tariful (cu istoricizare),
generați PDF/Excel conform caietului de sarcini și transmiteți la UAT.
Tot fluxul cu captură imutabilă per linie.

- Tarife istorice cu perioadă de valabilitate
- Export PDF și Excel, format standard caiet de sarcini
- Captură imutabilă per situație de plată
- Rapoarte analitice per sector, utilaj sau operator

---

### 1.6 Alte ecrane din aplicație

**[H2]** Alte ecrane din aplicație

Contractul, documentele și intervențiile punctuale, urmărite în același sistem.

| Ecran | Descriere |
|-------|-----------|
| Urmărire contract | Consumul față de bugetul anual, ritmul lunar și jaloanele contractului. |
| Documente generate | Jurnale de activitate și comenzi speciale, exportate în PDF. |
| Solicitări UAT | Intervenții în afara programului lunar, cu raport și situație de plată. |
| Nomenclator străzi | Străzile pe sectoare, cu dimensiuni, suprafețe și prioritate la deszăpezire. |

---

### 1.7 Module (secțiunea „Module” de pe homepage)

**[H2]** Zece module funcționale. Un singur abonament.

Construite pe activitățile enumerate în art. 2 alin. (3) din Legea 101/2006.
Nu plătiți pe utilizator, nu plătiți pe modul.

| Modul | Descriere |
|-------|-----------|
| Program lunar digital | Planificare cu frecvențe și cantități, aprobare ierarhică - art. 17 alin. (4), Legea 101/2006. |
| Vizualizare activitate | Execuții, sesizări și coșuri vizibile în timp real, cu acces diferențiat pentru operator și UAT. |
| Aplicație mobilă | Android și iOS, fără instalare, accesibilă prin browser. Funcționează fără conexiune. Curbă de învățare: o tură. |
| Raportare automată | Rapoarte zilnice, săptămânale, lunare, trimestriale și anuale. |
| Coșuri stradale | Inventar geografic, istoricul golirilor, mentenanță - conform SR 13387:1997. |
| Pontaj digital | Înregistrare intrare/ieșire pe sector, evidență resurse umane - Legea 53/2003. |
| Sesizări cetățeni | Portal dedicat, asignare automată echipă, urmărire până la închidere cu foto - OG 27/2002. |
| Situații de plată | Generare automată a situațiilor de plată lunare sau pentru solicitări punctuale. |
| Tarife | Calcul și ajustare tarife cu documentație de fundamentare - Ord. ANRSC 640/2022 + 324/2025. |
| Deszăpezire | Toate operațiunile de deszăpezire programate și calculate automat pe baza raportării echipelor din teren. |

---

### 1.8 Ce face fiecare parte în SALUX

**[H2]** Ce face fiecare parte în SALUX

| Funcționalitate | Operator | Autoritate contractantă |
|-----------------|----------|-------------------------|
| Program lunar digital și sarcini zilnice | ✓ | vizualizare |
| Probe fotografice imutabile, păstrate 5 ani | ✓ | ✓ |
| Situații de plată generate lunar sau pentru fiecare solicitare punctuală | ✓ | aprobare |
| Vizualizare activitate operator în timp real | ✓ | ✓ |
| Sesizări cetățeni cu dovezi fotografice | ✓ | ✓ |
| Dosar audit gata în orice moment | ✓ | ✓ |
| Implementare fără costuri suplimentare | ✓ | ✓ |

---

### 1.9 Hartă - operatori de salubrizare licențiați, pe județe

**[H2]** Operatori de salubrizare licențiați, pe județe

Lista oficială ANRSC a operatorilor cu licență pentru serviciul de salubrizare,
grupați după județul sediului.

**[COMPONENTĂ - hartă interactivă]**
Legendă: 0 / 1-2 / 3-5 / 6-10 / peste 10 operatori.
Selector: „Alegeți județul” (implicit „Toată țara”). Stare de încărcare:
„Se încarcă datele...”.
Sursă limite administrative: geo-spatial.org (CC BY-SA 4.0).

---

### 1.10 CTA Final Homepage

**[SECȚIUNE CTA - fundal închis]**

**Titlu:** Programați o demonstrație și vedeți cum funcționează SALUX
cu datele dumneavoastră.

Pregătim demonstrația pe un caz real din operațiunea dumneavoastră -
un sector, o lună, un raport. Vedeți concret fluxul de la teren până
la situația de plată.

[BUTON PRINCIPAL] Programați o demonstrație

---

### 1.11 Trei propuneri de valoare - Nepublicat

> **Nepublicat** - secțiunea nu apare pe homepage-ul live. Rolul ei este
> preluat de secțiunile 1.4 și 1.5.

**[CARD 1]**
#### Cadru unitar de lucru

Operatorul și autoritatea contractantă accesează aceeași platformă,
cu roluri și permisiuni diferențiate. Datele de teren intră o singură dată,
în momentul prestației. Rapoartele lunare, situațiile de plată și răspunsurile
la sesizări se construiesc din aceeași sursă. Nu mai există două versiuni
ale aceleiași zile de muncă.

**[CARD 2]**
#### Automatizare de la teren la situația de plată

Programul lunar de salubrizare se generează din ziua întâi a fiecărei luni
și se actualizează automat pe măsură ce echipele lucrează. La sfârșit de lună,
situația de plată completă, cu probele atașate, se generează în maximum
un minut. Rapoartele către ANRSC și ANPM se exportă în formatele cerute, fără
introducere manuală de date.

**[CARD 3]**
#### Conformitate documentată

Fiecare activitate de teren este înregistrată cu fotografie datată,
localizare opțională și marcaj temporal imutabil. Arhiva rămâne disponibilă
cinci ani. Pentru orice control din partea instituțiilor abilitate,
dovada există, structurată și exportabilă, fără perioadă de pregătire.

---

## 2. Pagina Operator privat

### 2.1 Hero

**[ETICHETĂ]** Soluție pentru operatori privați

**[H1]**
O singură platformă, de la teren la situație de plată acceptată.

**[TEXT]**
Operatorii privați de salubrizare stradală gestionează simultan obligații
față de patru categorii de interlocutori: autoritatea contractantă, ANRSC,
Curtea de Conturi și Agenția Națională pentru Protecția Mediului. SALUX
consolidează datele necesare pentru toate aceste obligații într-o singură
sursă, alimentată în timp real de echipele de teren, și produce automat
documentele cerute.

[CTA] Programați o demonstrație

---

### 2.2 Cum funcționează - flux în patru etape

**[H2]** Patru etape, de la teren la dosar de audit

Datele de teren alimentează automat programul lunar, rapoartele și
situațiile de plată.

**[COMPONENTĂ VIZUALĂ - timeline sau stepper]**

#### Etapa 1 · Teren - Echipele înregistrează activitatea direct din mobil

Aplicația mobilă SALUX este accesibilă pe orice telefon Android sau iOS
prin browser, fără instalare. Interfața conține elementele strict necesare -
start schimb, marcaj activitate, captură foto, încheiere schimb. Funcționează
fără conexiune și sincronizează automat la revenirea semnalului.

- Fără instalare - accesibil prin browser pe orice telefon
- Captură foto cu localizare și marcaj temporal imutabil
- Curbă de învățare: o singură tură de lucru

#### Etapa 2 · Planificare - Sistemul construiește zilnic programul lunar

Datele introduse pe parcursul zilei se consolidează automat în programul
lunar de prestație. La orice moment din lună, operatorul vede situația
cumulată: ce s-a executat, ce este programat, ce abateri există față de
planul aprobat. Modificările se aprobă ierarhic cu trasabilitate completă.

- Program actualizat zilnic din datele de teren
- Abateri față de plan vizibile în timp real
- Aprobare ierarhică cu versioning complet

#### Etapa 3 · Raportare - Rapoartele și situațiile de plată se generează cu un singur click

La sfârșit de lună, raportul către autoritatea contractantă este deja construit.
Situația de plată include automat toate prestațiile efectuate, fiecare cu
probele aferente - coordonate, fotografii, marcaje temporale. Exportat în
formatul prevăzut de Ordinul ANRSC 98/2025.

- Situație de plată cu probe complete per rând
- Export PDF și Excel, format caiet de sarcini
- Captură imutabilă per situație de plată

#### Etapa 4 · Conformitate - Raportările instituționale se exportă pre-formatate

Raportul anual ANRSC, raportul ANPM și pachetul de probe pentru auditul
Curții de Conturi se generează din aceleași date primare. Arhiva rămâne
accesibilă minim 5 ani, fără perioade de pregătire dedicate.

- Raport anual ANRSC
- Raport ANPM - Legea 211/2011
- Dosar audit Curtea de Conturi - arhivă 5 ani

---

### 2.3 Patru obligații legale, soluționate prin design

**[H2]** Patru obligații legale, soluționate prin design

Fiecare funcționalitate SALUX răspunde unei obligații concrete prevăzute de lege.

**[SECȚIUNE ACORDEON SAU CARDURI EXPANDABILE]**

#### Justificarea prestației
**Bază legală:** Art. 6 alin. (2), Legea 101/2006

Autoritatea contractantă are dreptul de a aplica penalități, daune-interese,
de a executa garanția de bună execuție sau de a rezilia unilateral contractul
„pe baza unor analize și justificări fundamentate". SALUX produce această
justificare în mod sistematic, pentru fiecare prestație, eliminând riscul
de contestare retrospectivă.

#### Evidențe distincte pe activitate
**Bază legală:** Art. 28 alin. (3), Legea 101/2006

Obligația de a ține evidențe separate pe fiecare tip de activitate este
implementată din arhitectura SALUX: măturat manual, măturat mecanic,
spălat, deszăpezire, întreținerea coșurilor stradale - module distincte,
rapoarte independente.

#### Indicatori de performanță
**Bază legală:** Ord. ANRSC 98/2025, Caiet de sarcini-cadru

SALUX calculează indicatorii în timp real, pe baza datelor de teren,
și îi prezintă atât operatorului, cât și autorității contractante.
Abaterile sunt vizibile imediat, nu la sfârșitul lunii.

#### Răspunsul la sesizări
**Bază legală:** OG 27/2002 - termen 30 zile

Sesizările se preiau printr-un portal dedicat, se repartizează automat
unei echipe de teren și se urmăresc până la închidere, cu documentație
fotografică post-intervenție.

---

### 2.4 Comparativ operațional

**[H2]** Sistem tradițional vs. SALUX

| Activitate | Sistem tradițional | Cu SALUX |
|------------|-------------------|----------|
| Pregătire raport lunar | 2-3 zile lucrătoare | Generare automată, în maximum un minut |
| Justificare prestație contestată | Recuperare retrospectivă | Probă disponibilă instantaneu |
| Pregătire audit ANRSC / Curtea de Conturi | 1-2 săptămâni dedicate | Dosarul există deja |
| Răspuns la sesizare cetățean | Verificare telefonică, întârzieri | Fotografie cu localizare în câteva minute |
| Raport anual ANRSC | Compilație manuală | Export pre-formatat |
| Raport ANPM | Reconstituire din evidențe paralele | Export automat din date primare |
| Coordonare operator-UAT | Schimburi de email și telefonie | Acces partajat la aceeași sursă |

> SALUX nu garantează absența controalelor sau a sancțiunilor.
> Asigură că, pentru fiecare prestație înregistrată, operatorul deține
> proba imediat accesibilă.

---

### 2.5 Implementare

**[H2]** Șase săptămâni. Trei faze. Fără întreruperea activității.

#### Săptămânile 1-2 - Configurare sistem
Import inventar (coșuri, străzi, contracte), configurare conturi și roluri,
instruire echipe administrative. Sistemul devine operațional la finalul
acestei faze.
**Rezultat:** conturi active, nomenclatoare importate.

#### Săptămânile 3-4 - Pilot pe o rută
Activarea pilot cu o echipă de teren restrânsă pe o rută sau un sector,
pentru calibrarea fluxurilor și validarea formatelor de raportare specifice
contractului.
**Rezultat:** primul raport lunar pilot, fluxuri validate.

#### Săptămânile 5-6 - Extindere completă
Extindere la întreaga operațiune. Migrare date istorice relevante în paralel
cu activitatea curentă. Asistență la prima situație de plată generată complet
din sistem.
**Rezultat:** operațiune integrală în SALUX, prima situație de plată completă.

---

### 2.6 Licențiere

**[H2]** Model de licențiere simplu

**[EVIDENȚIERE]** Fără costuri de implementare - **0 lei** costuri de implementare

SALUX se achiziționează pe bază de licență anuală, fără costuri de
implementare. Specialiștii SALUX oferă asistență tehnică pe tot parcursul
procedurii de achiziție - analiza compatibilității cu Ordinul ANRSC 98/2025,
consultanță privind specificațiile tehnice și suport în etapele de evaluare
și atribuire.

Contactați echipa SALUX pentru o ofertă adaptată dimensiunii contractului
dumneavoastră.

---

### 2.7 CTA final Operator

**[H2]** Programați o demonstrație și vedeți cum funcționează SALUX
cu datele dumneavoastră.

Pregătim demonstrația pe un caz real din operațiunea dumneavoastră -
un sector, o lună, un raport. Vedeți concret cum arată fluxul de la teren
la situație de plată, fără slide-uri generale și fără promisiuni nedovedibile.

[CTA] Programați o demonstrație

---

## 3. Pagina UAT / Primărie / ADI

### 3.1 Hero

**[ETICHETĂ]** Soluție pentru UAT-uri

**[H1]**
Monitorizarea serviciului de salubrizare
ca obligație îndeplinită sistematic.

**[CITARE LEGALĂ]**
Art. 9 litera h din Legea 51/2006 - obligația autorităților locale de a
monitoriza și controla modul de respectare a obligațiilor operatorilor

**[TEXT]**
SALUX vă oferă instrumentul prin care această obligație trece de la o
intenție administrativă la o practică documentată. Acces în timp real la
activitatea operatorului, răspuns prompt la sesizările cetățenilor și
documentație structurată pentru orice control.

[CTA] Programați o demonstrație

---

### 3.2 Cum funcționează pentru autoritatea contractantă

**[H2]** Vizibilitate, răspuns prompt și documentație pentru audit

#### Acces în timp real - Activitatea operatorului, vizibilă în timp real

Autoritatea contractantă primește un cont dedicat, cu permisiuni de citire,
prin care vede în timp real localizarea echipelor de teren ale operatorului,
programul lunar curent, prestațiile executate și abaterile față de planificare.
Vizualizarea se face pe hartă, cu posibilitatea de a interoga orice stradă
sau interval orar.

#### Sesizări cetățeni - Răspuns prompt la sesizările cetățenilor

Când un cetățean reclamă neefectuarea unei prestații pe o stradă, autoritatea
poate consulta direct istoricul SALUX pe acel segment de drum, pentru intervalul
indicat. Răspunsul devine prompt și documentat - fotografie cu localizare și
marcaj temporal, nu un email de confirmare de la operator.

#### Control și audit - Audit și control fără perioadă de pregătire

La auditul anual al Camerei de Conturi județene, documentația există,
este structurată și se prezintă în formatul cerut. SALUX oferă răspunsul
direct la întrebarea auditorului: cum ați monitorizat că operatorul
și-a îndeplinit obligațiile contractuale?

**[IMAGINE - dosar audit, exemplu]** Rapoarte lunare, localizări operațiuni,
fotografii, sesizări rezolvate, jurnal audit imutabil 5 ani.

---

### 3.3 Licențiere

**[H2]** Model de licențiere simplu

**[EVIDENȚIERE]** Fără costuri de implementare - **0 lei** costuri de implementare

SALUX se achiziționează pe bază de licență anuală, fără costuri de
implementare. Specialiștii SALUX oferă asistență tehnică pe tot parcursul
procedurii de achiziție - analiza compatibilității cu Ordinul ANRSC 98/2025,
consultanță privind specificațiile tehnice și suport în etapele de evaluare
și atribuire.

Contactați echipa SALUX pentru o ofertă adaptată dimensiunii contractului
dumneavoastră.

---

### 3.4 Beneficii directe pentru autoritatea contractantă

**[H2]** Trei dimensiuni de impact pentru autoritatea contractantă

#### Operațional - Timp de răspuns redus
Timpul de răspuns la sesizările cetățenilor se reduce semnificativ, iar
disputele privind realitatea prestațiilor se rezolvă prin consultarea
sistemului, nu prin verificare telefonică sau schimburi de emailuri.

#### Financiar - Decizii susținute de documente
Deciziile de aplicare a penalităților sau de încasare a garanției de bună
execuție, conform articolului 6 alineatul (2) din Legea 101/2006, devin
susținute de documente obiective din sistemul SALUX.

#### Instituțional - Obligație îndeplinită sistematic
Autoritatea îndeplinește în mod sistematic obligația de monitorizare
prevăzută la art. 9 lit. h, Legea 51/2006 - fapt care se reflectă favorabil
în rapoartele anuale ale Camerei de Conturi.

---

### 3.5 CTA final UAT

**[H2]** Programați o demonstrație și vedeți cum funcționează SALUX
cu datele dumneavoastră.

Pregătim demonstrația pe un caz real din operațiunea dumneavoastră -
un sector, o lună, un raport. Vedeți concret cum arată fluxul de la teren
la situație de plată, fără slide-uri generale și fără promisiuni nedovedibile.

[CTA] Programați o demonstrație

---

### 3.6 Achiziție directă SEAP - Nepublicat

> **Nepublicat** - pagina UAT live prezintă doar modelul de licențiere (3.3).
> Textul de mai jos este material de lucru pentru discuțiile cu autoritățile.

**Achiziție directă din SEAP - sub pragul de 132.519 lei fără TVA**

Conform articolului 7 alineatul (5) din Legea 98/2016. Procedura,
reglementată de HG 395/2016 articolele 43-46, se desfășoară integral
electronic prin catalogul SEAP, fără publicarea unei documentații de
atribuire și fără termenele procedurii deschise.

**Coduri CPV recomandate:**

| Cod CPV | Descriere | Aplicabil pentru |
|---------|-----------|-----------------|
| 48000000-8 | Pachete software și sisteme informatice | Licența standard |
| 72212517-6 | Servicii de dezvoltare de software IT | Personalizări |
| 72253200-5 | Servicii de asistență pentru sisteme informatice | Suport tehnic anual |

> Documentația-tip pentru achiziție (notă justificativă și caiet de sarcini)
> se pune la dispoziție gratuit, la cerere.

---

### 3.7 Surse de finanțare - Nepublicat

> **Nepublicat** - secțiunea nu apare pe pagina UAT live. Termenele PNRR
> de mai jos trebuie reverificate înainte de orice folosire.

#### PNRR Componenta 10 - Fondul Local
**Buget:** 2,1 miliarde euro
**Referință:** Ordinul MDLPA nr. 999/10.05.2022, MOf. nr. 467/10.05.2022
**Termen implementare:** 30 iunie 2026
**Relevanță SALUX:** Investiția I.4 - sisteme inteligente urbane (ITS)

#### PNRR Componenta 7 - Transformare digitală
**Relevanță SALUX:** Investiția I5 - digitalizare în domeniul mediului,
inclusiv platforme de raportare ANPM (Legea 211/2011)

#### POCA și fonduri europene 2021-2027
Apeluri pentru digitalizarea procedurilor administrative locale.
SALUX este eligibil ca instrument de monitorizare a unui serviciu public
obligatoriu conform Legii 101/2006.

> Echipa SALUX pune la dispoziție, fără cost suplimentar la contractare,
> suportul tehnic pentru redactarea cererii de finanțare.

---

## 4. Pagina Produs - Nepublicat

> **Nepublicat** - nu există o pagină Produs separată. Linkul „Produs” din
> meniu duce la homepage, iar modulele publicate sunt cele din secțiunea 1.7.
> Descrierile de mai jos sunt versiunea extinsă, ca material de lucru.

### 4.1 Hero

**[H1]**
Zece module funcționale, construite pe activitățile
serviciului de salubrizare.

**[H2]**
Articolul 2 alineatul (3) din Legea 101/2006 enumeră activitățile
componente ale serviciului de salubrizare a localităților. SALUX nu este
un sistem de management generic adaptat la salubrizare, ci o platformă
concepută explicit pe această enumerare. Fiecare modul răspunde unei
activități definite sau unei obligații de raportare prevăzute de cadrul
normativ.

---

### 4.2 Module operaționale principale

#### Modul 1 - Program lunar digital
**Bază legală:** Art. 17 alin. (4), Legea 101/2006; Ord. ANRSC 98/2025

Programul lunar de prestație se construiește pe baza obligațiilor
contractuale și a indicatorilor din caietul de sarcini, cu aprobare
digitală ierarhică. Versiunea aprobată devine document oficial al lunii,
cu marcaj temporal imutabil. Modificările se gestionează prin act
adițional digital, conform Legii 455/2001 (semnătura electronică).

#### Modul 2 - Aplicație mobilă pentru echipele de teren
**Tip:** Android și iOS, accesibilă prin browser, fără instalare

Interfața conține elementele strict necesare: start schimb, marcaj
activitate, captură foto, încheiere schimb. Funcționează fără conexiune,
cu sincronizare automată la revenirea semnalului. Curbă de învățare:
o singură tură de lucru.

#### Modul 3 - Vizualizare activitate
**Acces:** Dispecer (complet) + UAT (citire)

Execuții, sesizări și coșuri vizibile în timp real, cu acces diferențiat
pentru operator și UAT. UAT-ul primește același ecran în varianta de citire,
pentru monitorizarea obligației din articolul 9 litera h al Legii 51/2006.

#### Modul 4 - Raportare automată
Rapoarte zilnice, săptămânale, lunare, trimestriale și anuale, generate
în maximum un minut din datele de teren. Printre documentele generate:
- Raport lunar către autoritatea contractantă
- Raport anual ANRSC
- Raport ANPM → Legea 211/2011
- Pachet probe pentru auditul Curții de Conturi
- Raport sesizări → OG 27/2002

#### Modul 5 - Situații de plată
Generare automată a situațiilor de plată lunare sau pentru solicitări
punctuale, în maximum un minut. Fiecare rând are atașată captura imutabilă:
fotografie datată, localizare, aprobări ierarhice. Arhiva rămâne
consultabilă minim 5 ani.

---

### 4.3 Module specializate

#### Modul 6 - Coșuri stradale
**Bază legală:** SR 13387:1997 (citat în art. 18 alin. (2), Ord. ANRSC 97/2025)

Inventar geografic, istoricul golirilor, mentenanță. Calculul densității
optime urmează SR 13387:1997.

#### Modul 7 - Pontaj digital
**Bază legală:** Legea 53/2003 (Codul Muncii), republicată

Înregistrare intrare/ieșire pe sector, cu rol și utilaj. Evidență
pentru resursele umane.

#### Modul 8 - Sesizări cetățeni
**Bază legală:** OG 27/2002 - termen răspuns 30 zile

Portal dedicat, asignare automată echipă, urmărire până la închidere
cu documentație fotografică post-intervenție.

#### Modul 9 - Tarife
**Bază legală:** Ord. ANRSC 640/2022, modificat prin 201/2023 și 324/2025

Calculul și ajustarea tarifelor cu documentația de fundamentare
generată automat din parametrii operaționali.

#### Modul 10 - Deszăpezire
**Bază legală:** Art. 2 alin. (3) lit. k, Legea 101/2006

Toate operațiunile de deszăpezire programate și calculate automat pe baza
raportării echipelor din teren.

---

### 4.4 Caracteristici transversale

| Caracteristică | Detaliu |
|----------------|---------|
| Arhitectură | Multi-tenant - contracte multiple simultane, cu separare strictă |
| Arhivă | Imutabilă, 5 ani |
| Hosting | România și UE - conform GDPR + OUG 119/2022 |
| Integrare | Interfață de integrare - compatibil ASiS Salubritate și alte sisteme de gestiune |
| Acces | Roluri diferențiate: Operator / Dispecer / UAT (citire) / Admin |
| Preț | Un singur abonament - nu plătiți pe utilizator, nu plătiți pe modul |

**[CTA]** Programați o demonstrație

---

## 5. Pagina Conformitate legală - Nepublicat

> **Nepublicat** - nu există o pagină Conformitate pe site-ul live.
> Material de lucru pentru echipele juridice și de achiziții.

### 5.1 Hero

**[H1]**
Cadrul normativ pe care este construit SALUX.

**[H2]**
Această pagină prezintă actele normative pe care se sprijină
funcționalitățile SALUX, modul concret în care fiecare modul răspunde
unei obligații legale și schimbările legislative recente care au
reconfigurat cadrul de reglementare. Materialul este destinat
echipelor juridice, departamentelor de achiziții și responsabililor
cu conformitatea.

---

### 5.2 Schimbarea cadrului în 2025

**[ALERTĂ EDITORIALĂ - componentă vizuală distinctă]**

Pe 5 martie 2025, Monitorul Oficial nr. 190 și 192 au publicat Ordinele
ANRSC 97/2025 și 98/2025. Au abrogat Ordinele 82/2015 și 111/2007,
pe care funcționau toate contractele de salubrizare din România.

**Consecințe directe:**
- Regulamentele de salubrizare aprobate înainte de 5 martie 2025
  funcționează pe un cadru abrogat și trebuie actualizate.
- Caietele de sarcini incluse în contractele de delegare trebuie
  aliniate la noul model (Ord. ANRSC 98/2025).
- Indicatorii de performanță raportați pot să nu mai corespundă
  celor definiți în noul caiet de sarcini-cadru.

> SALUX este construit pe noul cadru. Documentele operaționale generate
> de SALUX urmează structura prevăzută de Ordinele 97/2025 și 98/2025.

---

### 5.3 Cadrul legal primar

| Act normativ | Publicare / Formă curentă | Articole relevante pentru SALUX |
|-------------|--------------------------|--------------------------------|
| Legea 51/2006 | MOf. 121/5.03.2013, cu modificări | Art. 9 lit. h; Art. 21 alin. (1) lit. f |
| Legea 101/2006 | MOf. 658/8.09.2014, formă oct. 2025 | Art. 2 alin. (3); Art. 6; Art. 9 alin. (4); Art. 11 alin. (2); Art. 17 alin. (4); Art. 28 alin. (3) |
| Legea 211/2011 | Cu OUG 92/2021 | Art. 4 parag. 40, 41, 43; obligații raportare ANPM |
| Legea 98/2016 + HG 395/2016 | Cu Legea 208/2022 | Art. 7 alin. (5) - prag 132.519 lei; Art. 43-46 HG - SEAP |

---

### 5.4 Cadrul ANRSC actualizat

| Ordin | Publicare | Status | Înlocuiește |
|-------|-----------|--------|-------------|
| Ord. ANRSC 97/2025 - Regulament-cadru | MOf. 190/5.03.2025 | **ÎN VIGOARE** | Ord. 82/2015 - **ABROGAT** |
| Ord. ANRSC 98/2025 - Caiet de sarcini-cadru | MOf. 192/5.03.2025 | **ÎN VIGOARE** | Ord. 111/2007 - **ABROGAT** |
| Ord. ANRSC 112/2007 - Contract-cadru | - | **ÎN VIGOARE** | - |
| Ord. ANRSC 640/2022 + 201/2023 + 324/2025 - Tarife | - | **ÎN VIGOARE** | Ord. 109/2007 |
| Ord. ANRSC 759/2025 - Tarife licențiere | - | **ÎN VIGOARE** | - |

---

### 5.5 Standarde tehnice

**SR 13387:1997** - Salubrizarea localităților. Deșeuri urbane.
Prescripții de proiectare a punctelor pentru precolectare.

Citat expres în articolul 18 alineatul (2) din Regulamentul-cadru
aprobat prin Ordinul ANRSC 97/2025. Stabilește numărul de recipiente
pe utilizator în funcție de frecvența colectării. Modulul SALUX
dedicat coșurilor stradale este construit pe parametrii acestui standard.

---

### 5.6 Cadrul de protecție a datelor

| Act | Rol în relația SALUX |
|-----|---------------------|
| Regulamentul (UE) 2016/679 (GDPR) | SALUX (MILBAC MANAGEMENT S.R.L.) - persoană împuternicită (art. 28) |
| Legea 190/2018 | Transpunere națională GDPR |
| OUG 119/2022 | Securitate cibernetică; hosting RO + UE |

Acordul de prelucrare a datelor (DPA) se semnează odată cu contractul
de licență. Infrastructura este găzduită exclusiv în România și în alte
state membre ale Uniunii Europene.

---

### 5.7 Cadrul european aplicabil

- **Directiva (UE) 2018/851** - modificarea Directivei-cadru 2008/98/CE
  privind deșeurile; transpusă prin OUG 92/2021
- **Decizia de punere în aplicare (UE) 2019/1004** - calculul, verificarea
  și raportarea datelor privind deșeurile; citată în Anexa II la
  Regulamentul-cadru aprobat prin Ordinul ANRSC 97/2025

---

### 5.8 Disclaimer legal

> SALUX este un instrument tehnologic construit pe cadrul normativ prezentat.
> Compania nu prestează servicii de consultanță juridică. Pentru
> interpretarea aplicării unei norme la situația concretă a organizației
> dumneavoastră, este recomandată consultarea unui specialist în achiziții
> publice sau în dreptul utilităților publice.

---

## 6. FAQ - Întrebări frecvente (secțiunea FAQ de pe homepage)

### 6.1 Despre obligațiile legale

**Î: SALUX urmărește în timp real flota de utilaje?**

Nu. Urmărirea în timp real a flotei de utilaje (telematică) este un serviciu
distinct, oferit de furnizori specializați. SALUX permite captarea, la alegerea
operatorului, a datelor de localizare pentru fiecare operațiune și sesizare
înregistrată - nu urmărirea continuă a vehiculelor. Cele două sisteme sunt
complementare și pot funcționa independent.

---

**Î: Trebuie să mă conformez Ordinului ANRSC 97/2025? Vechiul Ordin 82/2015 mai este aplicabil?**

Nu. Ordinul ANRSC 97/2025 (MOf. 190/5.03.2025) a abrogat Ordinul ANRSC 82/2015.
Ordinul ANRSC 98/2025 (MOf. 192/5.03.2025) a abrogat Ordinul ANRSC 111/2007.
Toate regulamentele și caietele de sarcini aprobate pe baza ordinelor vechi
trebuie revizuite și aliniate la noul cadru.

---

**Î: Ce sancțiuni riscă operatorul în cazul neîndeplinirii indicatorilor de performanță?**

Autoritatea contractantă poate aplica penalități, poate cere daune-interese,
poate executa garanția de bună execuție sau poate rezilia unilateral contractul
(art. 6 alin. (2), Legea 101/2006).

---

### 6.2 Despre achiziție și costuri

**Î: Cum se achiziționează SALUX de către o autoritate publică?**

SALUX se achiziționează pe bază de licență anuală, fără costuri de
implementare. Specialiștii SALUX oferă asistență tehnică pe tot parcursul
procedurii de achiziție - analiza compatibilității cu Ordinul ANRSC 98/2025,
consultanță privind specificațiile tehnice și suport în etapele de evaluare
și atribuire.

---

### 6.3 Despre operațiune și implementare

**Î: Cât durează implementarea?**

Implementarea standard se desfășoară în trei etape, pe parcursul a șase
săptămâni, fără întreruperea operațiunilor curente:
- Săptămânile 1-2: Configurare sistem, import inventar (coșuri, străzi,
  contracte), instruire echipe administrative.
- Săptămânile 3-4: Pilot pe o rută sau un sector, cu o echipă de teren restrânsă.
- Săptămânile 5-6: Extindere la întreaga operațiune, migrare date istorice relevante.

---

**Î: Echipele de teren se adaptează la sistemul digital?**

Aplicația mobilă are o interfață cu patru acțiuni: pornire schimb,
marcaj activitate, fotografie, încheiere schimb. Curba de învățare
este, în experiența noastră, de o singură tură de lucru.

---

**Î: Aplicația funcționează în zonele fără semnal mobil?**

Da. Aplicația înregistrează toate datele local pe dispozitiv atunci când
nu există conexiune. Sincronizarea se realizează automat la revenirea
conectivității, fără pierdere de informații.

---

**Î: SALUX înlocuiește sistemul de gestiune curent?**

Nu. SALUX gestionează activitatea operațională de teren și produce
documentația justificativă. Sistemul de gestiune existent (ASiS Salubritate,
alte soluții) își păstrează rolul în contabilitate și facturare. Transferul
automat al datelor relevante se face prin interfață de integrare.

---

### 6.4 Despre securitate și date

**Î: Unde sunt găzduite datele?**

Exclusiv în România și în alte state membre ale Uniunii Europene.
Conform GDPR, Legii 190/2018 și OUG 119/2022. Fără transfer
către țări terțe. Acordul de prelucrare a datelor (DPA) se semnează
odată cu contractul de licență.

---

**Î: Ce se întâmplă cu datele la rezilierea contractului?**

Datele aparțin clientului. La încetarea contractului SALUX, datele
se exportă în format deschis (CSV, JSON, PDF) și se predau clientului.
Ștergerea din sistemele SALUX urmează prevederile DPA și obligațiile
legale de păstrare aplicabile.

---

## 7. Pagina Despre - Nepublicat

> **Nepublicat** - nu există o pagină Despre pe site-ul live.

### 7.1 Misiunea SALUX

SALUX a fost dezvoltat ca răspuns la o realitate operațională constantă
în sectorul salubrizării stradale din România: distanța crescândă dintre
rigoarea cadrului normativ și instrumentele administrative pe care le
folosesc operatorii și autoritățile contractante.

România are 3.222 unități administrativ-teritoriale, plus șase
subdiviziuni ale municipiului București, conform bazei de date SIRUTA
(INS/ANCPI, actualizată 2025). Peste 380 de operatori dețin licență
ANRSC pentru activități de salubrizare. Pentru majoritatea acestor
entități, evidențele operaționale se țin încă pe hârtie sau în foi
de calcul nestructurate.

Misiunea SALUX este de a oferi acestor organizații o platformă
specializată, construită pe reglementările în vigoare, prin care
activitatea zilnică a echipelor de teren se transformă într-o evidență
structurată, verificabilă și ușor de raportat.

---

### 7.2 Valori operaționale

**Specializare sectorială.**
SALUX nu este o platformă generică. Fiecare ecran, fiecare câmp și
fiecare format de raportare există pentru a răspunde unei obligații
concrete prevăzute de Legea 101/2006 sau de Ordinele ANRSC 97/2025
și 98/2025.

**Fundamentare normativă.**
Caracteristicile produsului sunt motivate de cadrul legal aplicabil,
nu de tendințe generale de digitalizare.

**Continuitate în relația cu clienții.**
Modelul comercial este licență anuală cu suport tehnic inclus,
fără costuri de implementare.

---

### 7.3 Echipa

**[REZERVAT - de completat de echipa SALUX]**
Recomandare: minimum doi fondatori cu experiență directă în operațiuni
de salubrizare sau în administrația locală.

---

## 8. Pagina Contact

### 8.1 Hero

**[ETICHETĂ]** Discutăm aplicat timp de 1 oră

**[H1]**
Vă ascultăm, apoi vă arătăm SALUX pe contractul dumneavoastră.

**[TEXT]**
Un specialist SALUX vă sună în cel mult o zi lucrătoare, înțelege contextul și
pregătește un demo cu datele dumneavoastră pentru a vedea totul live și
aplicabil situației dumneavoastră.

---

### 8.2 Formular

**Câmpuri:**
- Nume și prenume
- Funcție (opțional)
- Email
- Telefon
- Organizație
- Sunt: „Operator privat”; „UAT / Autoritate contractantă”; „Altă organizație”
- Județul (Selectați județul…) - lista celor 41 de județe și București
- Dimensiunea operațiunii (Selectați…): 1 contract / sub 50.000 locuitori;
  1 contract / 50.000 - 200.000 locuitori; 1 contract / peste 200.000 locuitori;
  Mai multe contracte / multi-UAT
- Ce doriți să rezolvați cu SALUX? (opțional) - ajutor: „Cu cât ne spuneți
  mai mult, cu atât demo-ul va fi mai relevant.”

**Acord:** Am citit și sunt de acord cu Politica de confidențialitate
și prelucrarea datelor mele exclusiv pentru a fi contactat în legătură cu demo-ul.

**Notă sub buton:** Răspundem în 1 zi lucrătoare. Lu-Vi, 09:00 - 18:00.

[BUTON] Trimiteți cererea

**Confirmare după trimitere:**
Mulțumim. Cererea a fost trimisă.
Vă contactăm în maximum 1 zi lucrătoare la datele de mai sus. Verificați
inclusiv folder-ul Spam pentru emailul nostru.

---

### 8.3 Contact direct

**Sau ne scrieți direct** - Email: office@salux.ro

---

### 8.4 Ce se întâmplă după ce trimiteți cererea

1. **1 zi lucrătoare** - vă sunăm să confirmăm contextul
2. **Date intrare** - pregătim un demo pe sectoarele și utilajele dumneavoastră
3. **1 oră online cu un specialist** - vedeți platforma în acțiune și discutăm aplicat
4. **Decideți informat** - analizați și decideți dacă SALUX este potrivit pentru dumneavoastră

Vă prezentăm SALUX pe datele contractului dumneavoastră.

---

## 9. Pagina Blog

### 9.1 Hero

**[ETICHETĂ]** Blog SALUX

**[H1]** Note practice pentru operatori și autorități contractante.

Informații actualizate din domeniul salubrizării.

**Filtre:** Toate / Conformitate / Operațional / Studiu de caz

---

### 9.2 Articole publicate

| Categorie | Titlu | Rezumat | Fișier |
|-----------|-------|---------|--------|
| Conformitate · 6 min | Noul Regulament-cadru de salubrizare (Ordinul ANRSC 97/2025): ce s-a schimbat | Ce aduce nou Ordinul 97/2025 față de cadrul din 2015. Definiții actualizate, cerințe de licențiere, indicatori de performanță și obligații practice. | article-regulament-97-2025.html |
| Conformitate · 7 min | Noul Caiet de sarcini-cadru pentru salubrizare (Ordinul ANRSC 98/2025) | Ce prevede Ordinul 98/2025, ce conțin cele 32 de anexe obligatorii și cum construiți un caiet de sarcini conform cu noile cerințe. | article-caiet-98-2025.html |
| Conformitate · 6 min | Noile reguli de tarifare în salubrizare (Ordinul ANRSC 324/2025) | Ce modifică Ordinul 324/2025 la ajustarea și modificarea tarifelor. Ajustare vs. modificare, taxa de salubrizare și sancțiuni pentru neaprobare în termen. | article-tarifare-324-2025.html |
| Conformitate · 7 min | Contractul dumneavoastră de salubrizare e conform cu reglementările 2025? | Grilă practică de verificare pe cinci direcții: baza normativă, documentația operațională, tarifarea, indicatorii de performanță și raportarea. | article-checklist-2025.html |
| Operațional · 8 min | Documentele de lucru în salubrizarea stradală: ce impune legea și ce lasă fără răspuns | Program lunar, jurnal zilnic, proces-verbal de recepție, situație de plată, raport de performanță. Ce cere legislația și ce lipsește din reglementare. | article-documente-lucru-salubrizare.html |

Link articol: „Citiți articolul →”.

> Textele integrale ale articolelor se află în fișierele `article-*.html`
> (sursele `.md` din `blog/` au fost eliminate).

---

### 9.3 Abonare newsletter

**[H2]** Fiți la curent cu ultimele noutăți din salubrizare.

Schimbări legislative, șabloane de raportare, lecții din implementări reale.
Fără spam, dezabonare cu un click.

[BUTON] Mă abonez

---

### 9.4 Studiu de caz evidențiat - Nepublicat

> **Nepublicat** - blocul „Studiu de caz” este dezactivat pe blog.html.
> Înainte de reactivare, cifrele de timp trebuie aliniate cu regula
> „orice document în maximum un minut”.

---

## 10. Texte auxiliare

### 10.1 Meta-descrieri SEO

| Pagină | Meta-descriere |
|--------|----------------|
| Homepage | Platformă SaaS pentru salubrizare stradală în România. Program lunar digital, raportare automată ANRSC 97/2025 și 98/2025, audit log imutabil. |
| Operator | Documentație justificativă completă pentru ANRSC, Curtea de Conturi și UAT, generată automat din activitatea de teren. Platformă SaaS pentru operatori privați de salubrizare stradală. |
| UAT | Monitorizare a salubrizării stradale pentru autorități contractante. Licență fără costuri de implementare. Eligibil PNRR Componenta 10. Conformitate art. 9 lit. h, Legea 51/2006. |
| Contact | Solicitați o demonstrație SALUX. O oră, fără obligații. Vă arătăm platforma pe datele contractului dumneavoastră. |
| Blog | Articole pentru operatori privați de salubrizare și UAT-uri. Conformitate SRS, raportare, deszăpezire, digitalizare. |

**Titluri de pagină (`<title>`):**
- Homepage: SALUX - Platformă SaaS pentru salubrizare stradală
- Operator: SALUX pentru Operatori - Documentație justificativă completă, de la teren la audit
- UAT: SALUX pentru UAT - Monitorizare în timp real a salubrizării stradale
- Contact: SALUX - Discutăm aplicat timp de 1 oră
- Blog: SALUX - Blog

---

### 10.2 Apeluri la acțiune

**Folosit pe site:**
- Programați o demonstrație (buton principal, toate paginile)
- Vedeți soluția pentru operatori / Vedeți soluția pentru UAT
- Trimiteți cererea (formular contact)
- Citiți articolul (blog)

**Variante pentru A/B testing (nepublicate):**
- Programați o demonstrație de o oră.
- Solicitați evaluarea pe operațiunea dumneavoastră.
- Vedeți un raport SALUX construit pe un caz real.
- Discutați cu un specialist SALUX.
- Solicitați verificarea de conformitate pentru contractul dumneavoastră.

---

### 10.3 Subiecte pentru comunicare directă

**Pentru operatori privați:**
- Alinierea documentației la Ordinele ANRSC 97/2025 și 98/2025.
- Situații de plată cu probă completă, generate în maximum un minut.
- Dosarul pentru controale - ce documentație trebuie să existe în mod sistematic.

**Pentru UAT-uri:**
- Monitorizarea operatorului conform art. 9 lit. h, Legea 51/2006.
- Licență anuală, fără costuri de implementare, cu asistență pe tot parcursul
  procedurii de achiziție.

---

### 10.4 Texte funcționale

**Navigare:** Operatori · UAT · Produs · Module · FAQ · Demonstrație · Blog ·
Contact · Autentificare

**Footer - descriere:**
Sistem informatic pentru salubrizare stradală și deszăpezire în România.
office@salux.ro

**Footer - coloane:**
- Soluții: Operatori privați, Autorități contractante
- Produs: Module, FAQ, Demo
- Resurse: Blog (homepage adaugă: Ordinul ANRSC 97/2025, Checklist conformitate)
- Legal: Confidențialitate, Termeni, GDPR, EULA

**Footer - linie legală:**
© 2026 MILBAC MANAGEMENT S.R.L. · CUI 44991231 · Nr. Reg. Com. J26/1603/2021 ·
Bulevardul Pandurilor, Nr. 86, Târgu Mureș, jud. Mureș

**Banner cookie-uri - Nepublicat** (nu există banner pe site-ul live):
SALUX utilizează cookie-uri tehnice necesare funcționării site-ului și,
opțional, cookie-uri analitice. Conform Regulamentului (UE) 2016/679
și Directivei 2002/58/CE.
[Acceptați] [Refuzați] [Setări]

---

## 11. Referințe legislative complete

### Acte normative primare

| Act | Publicare | Link oficial |
|-----|-----------|-------------|
| Legea 51/2006 | MOf. 121/5.03.2013 | https://legislatie.just.ro/Public/DetaliiDocument/70015 |
| Legea 101/2006 | MOf. 658/8.09.2014 | https://legislatie.just.ro/Public/DetaliiDocument/71304 |
| Legea 211/2011 | MOf. 837/25.11.2011 | https://legislatie.just.ro |
| Legea 98/2016 | MOf. 390/23.05.2016 | https://legislatie.just.ro/Public/DetaliiDocument/178667 |
| HG 395/2016 | MOf. 423/6.06.2016 | https://legislatie.just.ro |

### Ordine ANRSC

| Ordin | MOf. | Link |
|-------|------|------|
| Ord. 97/2025 - Regulament-cadru | 190/5.03.2025 | https://legislatie.just.ro/Public/DetaliiDocument/295150 |
| Ord. 98/2025 - Caiet de sarcini | 192/5.03.2025 | https://legislatie.just.ro/Public/DetaliiDocument/295163 |
| Ord. 112/2007 - Contract-cadru | - | https://www.anrsc.ro/salubrizare/legislatie/ |
| Ord. 640/2022 + 324/2025 - Tarife | - | https://www.anrsc.ro |

### Standard tehnic

| Standard | Titlu | Relevanță |
|----------|-------|-----------|
| SR 13387:1997 | Salubrizarea localităților. Deșeuri urbane. Prescripții de proiectare. | Citat în art. 18 alin. (2), Ord. ANRSC 97/2025 |

---

*Actualizat: 2026-09-29 - aliniat cu site-ul live*
*Versiune: 3.1*
*Utilizare: Website www.salux.ro + Claude Code context*
