import { Resend } from 'resend';
import { contactSchema } from '@/lib/contactSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // ✅ Validation Zod côté back
        const parsed = contactSchema.safeParse(body);

        if (!parsed.success) {
            return new Response("Données invalides.", { status: 400 });
        }

        const { email, message } = parsed.data;

        // ✅ Envoi de l'email
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'titoogerb9@gmail.com',
            subject: 'Nouveau message du portfolio',
            replyTo: email,
            html: `
                <p><strong>De :</strong> ${email}</p>
                <p><strong>Message :</strong><br/>${message}</p>
            `,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        console.error("Erreur envoi email :", error);
        return new Response("Erreur serveur.", { status: 500 });
    }
}
