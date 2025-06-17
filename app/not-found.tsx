"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center text-white">
      {/* Fond animé avec dégradé ou effet de bruit statique */}
      <div className="absolute inset-0 bg-[radial-gradient(#111_0%,_#000_100%)] opacity-80 z-0" />

      {/* Texte principal 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-[25vw] leading-none font-black tracking-tight text-center text-white mix-blend-difference"
      >
        404
      </motion.h1>

      {/* Sous-titre artistique */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="z-10 absolute bottom-24 text-center text-sm md:text-base tracking-widest text-neutral-400"
      >
        Cette page s'est perdue dans l'espace numérique.
      </motion.p>

      {/* Bouton retour */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="z-10 absolute bottom-12"
      >
        <Link
          href="/"
          className="text-xs uppercase tracking-widest border border-white px-6 py-3 hover:bg-white hover:text-black transition-all"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </main>
  );
}
