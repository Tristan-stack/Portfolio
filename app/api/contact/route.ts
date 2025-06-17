import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, message } = await req.json();

    if (!email || !message) {
        return new Response("Champs requis manquants.", { status: 400 });
    }

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'titoogerb9@gmail.com', // Ton email
            subject: 'Nouveau message du portfolio',
            replyTo: email,
            html: `<p><strong>De :</strong> ${email}</p><p><strong>Message :</strong><br/>${message}</p>`,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        console.error("Erreur envoi email :", error);
        return new Response("Erreur serveur.", { status: 500 });
    }
}
