"use client";
import React, { useState } from "react";
import MegaMenu from "@/app/components/ui/MegaMenu";
import { motion } from "framer-motion";
import useScrollDirection from "@/app/hooks/useScrollDirection";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full flex justify-between items-center px-8 pb-4 pt-4 bg-white border-b-2 border-black z-50 transition-transform duration-500"
        animate={{ y: scrollDirection === "down" && !menuOpen ? -100 : 0 }}
      >
        <span className="text-black font-bold text-2xl">
          Tristan Gerber<span className="text-blue-600">.</span>
        </span>

        <nav className="text-black space-x-8 text-xs tracking-widest flex items-center">
          <motion.button
            onClick={() => setMenuOpen(true)}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="uppercase tracking-widest text-xs text-black px-4 py-2 bg-white"
          >
            MENU
          </motion.button>
        </nav>
      </motion.header>

      {/* Le MegaMenu doit être affiché à part pour ne pas être contenu dans le header */}
      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
