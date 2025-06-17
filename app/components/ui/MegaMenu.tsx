"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { PinContainer } from "@/app/components/ui/3d-pin";
import dynamic from "next/dynamic";

const ASCIIText = dynamic(() => import("@/app/components/ui/ASCIIText"), { ssr: false });

const slideDownVariants = {
    hidden: { y: "-100%" },
    visible: {
        y: 0,
        transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] },
    },
    exit: {
        y: "-100%",
        transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
    },
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] },
    },
};

const linkListVariants = {
    visible: { transition: { staggerChildren: 0.07 } },
};

const linkItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
    },
};

const projects = [
    {
        title: "BrightR",
        status: "En cours",
        description: "Créateur de portfolio en ligne automatisé",
        href: "https://github.com/wav-rover/brightr",
        image: "/images/Brightr.png",
    },
    {
        title: "Ampere",
        status: "Fini",
        description: "Outils de suivis de consommation",
        href: "https://github.com/Tristan-stack/Ampere",
        image: "/images/Ampere.png",
    },
    {
        title: "Mira",
        status: "Fini",
        description: "Outils de gestion de projet type Trello",
        href: "https://github.com/Tristan-stack/Mira-Lab",
        image: "/images/Mira.png",
    },
    {
        title: "CodeLink",
        status: "En cours",
        description: "Outils de gestion de repo GitHub",
        href: "https://github.com/Tristan-stack/CodeLink",
        image: "/images/codelink.png",
    },
];

type MegaMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    const [hoverTarget, setHoverTarget] = useState<"projects" | "about" | "contact" | null>(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) setHoverTarget(null);
    }, [isOpen]);

    if (typeof window === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col justify-between p-8"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.97)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideDownVariants}
                >
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <span className="text-2xl text-black font-bold">
                            Tristan Gerber<span className="text-blue-600">.</span>
                        </span>
                        <motion.button
                            onClick={onClose}
                            whileHover={{ rotate: 90 }}
                            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                            className="text-black text-2xl"
                        >
                            ✕
                        </motion.button>
                    </div>

                    {/* Main */}
                    <motion.div
                        className="flex-1 grid grid-cols-2 gap-32 mt-24"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Left menu */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-gray-400 text-[1.2vw] mb-6 uppercase tracking-widest">Explore</h3>
                            <motion.ul
                                variants={linkListVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-6"
                            >
                                {["Projects", "About", "Contact"].map((text) => (
                                    <motion.li
                                        key={text}
                                        variants={linkItemVariants}
                                        onMouseEnter={() => setHoverTarget(text.toLowerCase() as any)}
                                    >
                                        <button
                                            onClick={() => {
                                                const section = document.getElementById(text.toLowerCase());
                                                if (section) {
                                                    section.scrollIntoView({ behavior: "smooth" });
                                                }
                                                onClose();
                                            }}
                                            className={`text-[6vw] font-black uppercase leading-none transition-colors duration-300 ${hoverTarget === text.toLowerCase()
                                                ? "text-blue-600"
                                                : "hover:text-blue-600 text-black"
                                                }`}
                                        >
                                            {text}
                                        </button>

                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* Right preview */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col justify-end items-end text-right relative min-h-[20rem]"
                        >
                            {hoverTarget === "projects" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 w-full grid grid-cols-2 gap-6"
                                >
                                    {projects.map((project) => (
                                        <PinContainer
                                            key={project.title}
                                            title={project.title}
                                            href={project.href}
                                            containerClassName="w-full"
                                        >
                                            <div className="flex basis-full flex-col p-4 tracking-tight text-black w-[18rem] h-[18rem]">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-black font-bold text-base">{project.title}</h3>
                                                    {project.status === "Fini" && (
                                                        <span
                                                            className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"
                                                            title="Fini"
                                                        />
                                                    )}
                                                    {project.status === "En cours" && (
                                                        <span
                                                            className="inline-block w-2.5 h-2.5 rounded-full bg-orange-400"
                                                            title="En cours"
                                                        />
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                                                <div
                                                    className="flex-1 w-full rounded-lg mt-4"
                                                    style={{
                                                        backgroundImage: `url(${project.image}), linear-gradient(to bottom right, #f0f0f0, #e0e0e0)`,
                                                        backgroundSize: "cover, 100%",
                                                        backgroundPosition: "center, 0",
                                                    }}
                                                />
                                            </div>
                                        </PinContainer>
                                    ))}
                                </motion.div>
                            ) : hoverTarget === "about" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 w-full h-full flex items-center justify-center"
                                >
                                    <div className="w-full h-full relative">
                                        <ASCIIText text="Hello!" enableWaves={false} asciiFontSize={8} />
                                    </div>
                                </motion.div>
                            ) : (
                                <button className="text-blue-600 font-bold text-[2.5vw] hover:underline uppercase">
                                    LET’S CREATE →
                                </button>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Footer */}
                    <footer className="flex justify-between text-xs text-gray-500 mt-16">
                        <span>© 2025 Tristan Gerber</span>
                        <div className="space-x-4">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                        </div>
                    </footer>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById("portal-root")!
    );
}
