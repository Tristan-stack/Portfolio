"use client";
import projects from "@/app/data/projects.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { techExtensions } from "@/lib/techExtensions";
import { techLinks } from "@/lib/techLinks";
import DecryptedText from "@/app/components/ui/DecryptedText";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full min-h-[80vh] bg-white pt-32 px-8 py-62 border-black ">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[7vw] font-bold text-black mb-12"
            >
                PROJECTS.
            </motion.h2>

            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col divide-y divide-black "
            >
                {projects.map((proj, i) => (
                    <motion.li
                        key={proj.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex justify-between py-6 items-center"

                    >
                        {/* Gauche : infos projet */}
                        <div className="z-90">
                        <a
                                href={proj.link}
                                target="_blank"
                                className="font-mono text-sm uppercase text-black hover:underline block"
                            >
                                <DecryptedText
                                    text={`${proj.title} ↗`}
                                    speed={40}
                                    maxIterations={15}
                                    revealDirection="start"
                                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
                                    className="text-black"
                                    encryptedClassName="text-black"
                                    parentClassName="inline-block"
                                    animateOn="hover"
                                />
                            </a>

                            <p className="text-sm text-gray-600 mt-1 max-w-md">{proj.description}</p>
                        </div>

                        {/* Droite : pastilles techno */}
                        <div className="flex gap-3 flex-wrap justify-end items-center z-90">
                            {proj.tech.map((tech) => (
                                <motion.div
                                    key={tech}
                                    className="w-11 h-11  rounded-full  border-blue-800 flex items-center justify-center cursor-pointer"
                                    whileHover={{
                                        scale: 1.32,
                                        y: -13,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeOut",
                                      }}
                                >
                                    <a
                                        href={techLinks[tech]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full h-full"
                                    >
                                        <Image
                                            src={`/icons/${tech}.${techExtensions[tech] || "svg"}`}
                                            alt={tech}
                                            width={22}
                                            height={22}
                                        />
                                    </a>
                                </motion.div>
                              
                            ))}
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}
