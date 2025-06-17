"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Silk = dynamic(() => import("@/app/components/ui/Silk"), {
    ssr: false,
});

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => setMounted(true), []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const message = form.message.value;

        setSending(true);
        setStatus("idle");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setSending(false);
        }
    };

    return (
        <footer className="relative w-full h-[700px] overflow-hidden text-white z-90">
            {/* Fond animé */}
            <div className="absolute inset-0 -z-10">
                {mounted && (
                    <Silk
                        speed={8}
                        scale={1}
                        color="#1E2957"
                        noiseIntensity={3.5}
                        rotation={0}
                    />
                )}
            </div>

            {/* Contenu */}
            <div className="w-full h-full px-8 py-12 flex flex-col justify-between relative z-10">
                {/* Titre */}
                <h2 className="text-6xl md:text-7xl font-bold mb-8">Stay In Touch.</h2>

                {/* Ligne de séparation */}
                <div className="border-t border-white w-full mb-6" />

                {/* Contenu principal */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
                    {/* Infos de contact */}
                    <div className="text-xs space-y-2 font-mono uppercase">
                        <a href="mailto:tristan.gerber@email.com" className="hover:underline block">
                            tristan.gerber@email.com ↗
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" className="hover:underline block">
                            GitHub ↗
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:underline block">
                            LinkedIn ↗
                        </a>
                    </div>

                    {/* Formulaire de contact */}
                    <form
                        onSubmit={handleSubmit}
                        className="text-xs space-y-2 w-full max-w-sm font-mono uppercase"
                    >
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Your email"
                            className="w-full bg-white text-black px-3 py-2 rounded-sm placeholder:text-black/50"
                        />
                        <textarea
                            name="message"
                            required
                            placeholder="Your message"
                            rows={3}
                            className="w-full bg-white text-black px-3 py-2 rounded-sm placeholder:text-black/50 resize-none"
                        />
                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full border border-white py-2 px-4 hover:bg-white hover:text-black transition-colors disabled:opacity-50"
                        >
                            {sending ? "Sending..." : "Send ↗"}
                        </button>
                        {status === "success" && (
                            <p className="text-green-400 mt-1">Message sent successfully.</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 mt-1">Something went wrong. Try again.</p>
                        )}
                    </form>
                </div>

                {/* Crédit en bas */}
                <div className="mt-8 text-[10px] text-right uppercase font-mono text-white">
                    <div className="mb-1">© 2025 Tristan Gerber</div>
                    <div>DESIGNED AND DEVELOPED BY TRISTAN GERBER.</div>
                    <div>FOR THE LOVE OF CODE, EMBRACE DIGITAL CRAFTSMANSHIP.</div>
                </div>
            </div>
        </footer>
    );
}
