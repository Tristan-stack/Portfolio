import { z } from "zod";

export const contactSchema = z.object({
    email: z.string().email("Email invalide"),
    message: z.string().min(5, "Le message est trop court"),
});
