import { Resend } from "resend";
import { ratelimit } from "@/lib/rateLimiter";
import { contactSchema } from "@/lib/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";

    // Rate limiting
    const { success: rateLimitPassed } = await ratelimit.limit(ip);
    if (!rateLimitPassed) {
        return new Response("Trop de requêtes, réessaie plus tard.", { status: 429 });
    }

    let body: { email?: string; message?: string; };
    try {
        body = await req.json();
    } catch {
        return new Response("Requête invalide.", { status: 400 });
    }

    const { email, message} = body;

    // Validation Zod
    const validation = contactSchema.safeParse({ email, message });
    if (!validation.success) {
        return new Response("Email ou message invalide.", { status: 400 });
    }

    try {
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "titoogerb9@gmail.com", // Ton mail ici
            subject: "Nouveau message du portfolio",
            replyTo: email,
            html: `<p><strong>De :</strong> ${email}</p><p><strong>Message :</strong><br/>${message}</p>`,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        console.error("Erreur envoi email :", error);
        return new Response("Erreur serveur.", { status: 500 });
    }
}
