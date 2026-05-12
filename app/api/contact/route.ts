import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder")
  try {
    const { nume, email, companie, tip, mesaj } = await req.json()

    if (!nume || !email || !companie) {
      return NextResponse.json({ error: "Câmpuri obligatorii lipsă" }, { status: 400 })
    }

    const tipLabel: Record<string, string> = {
      operator: "Operator de salubrizare",
      uat: "Autoritate locală (UAT/Primărie)",
      altul: "Altul",
    }

    await resend.emails.send({
      from: "SALUX Website <noreply@salux.ro>",
      to: ["office@salux.ro"],
      replyTo: email,
      subject: `Cerere demo SALUX — ${companie}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B72C4;">Cerere demonstrație SALUX</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Nume:</td><td style="padding: 8px;">${nume}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Companie:</td><td style="padding: 8px;">${companie}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold; color: #555;">Tip organizație:</td><td style="padding: 8px;">${tipLabel[tip] ?? tip}</td></tr>
            ${mesaj ? `<tr><td style="padding: 8px; font-weight: bold; color: #555; vertical-align: top;">Mesaj:</td><td style="padding: 8px;">${mesaj}</td></tr>` : ""}
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">Trimis de pe salux.ro</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json({ error: "Eroare la trimitere. Încercați din nou sau contactați office@salux.ro." }, { status: 500 })
  }
}
