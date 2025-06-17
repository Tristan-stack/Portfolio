"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Particles from "@/app/components/ui/Particles";
import ScrambledText from "@/app/components/ui/ScrambledText";
import Waves from "@/app/components/ui/Waves";
import skills from "@/app/data/skills.json";
import LazySplineWrapper from "@/app/components/ui/LazySplineWrapper";
import useIsMobile from "@/app/hooks/useIsMobile";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.25 },
    },
};

const directions = [
    { x: -100, y: 0 },
    { x: 0, y: -100 },
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    { x: -100, y: 100 },
    { x: 100, y: -100 },
];

export default function AboutSection() {
    const [hoveredFrontend, setHoveredFrontend] = useState<number | null>(null);
    const [hoveredBackend, setHoveredBackend] = useState<number | null>(null);
    const isMobile = useIsMobile();

    return (
        <motion.section
            id="about"
            className="relative w-full min-h-screen bg-white border-t-3 border-black flex flex-col items-center justify-center overflow-hidden"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Partie haute */}
            <div className="w-full h-[50vh] bg-white flex flex-col md:flex-row">
                {!isMobile && (
                    <motion.div
                        className="flex-1 bg-black border-r-4 pl-7 border-black h-full relative overflow-hidden"
                        variants={{
                            hidden: { opacity: 0, x: directions[0].x, y: directions[0].y },
                            show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
                        }}
                    >
                        <Particles
                            particleColors={["#ffffff", "#ffffff"]}
                            particleCount={200}
                            particleSpread={10}
                            speed={0.1}
                            particleBaseSize={100}
                            moveParticlesOnHover={true}
                            alphaParticles={true}
                            disableRotation={false}
                            className="absolute inset-0 z-0"
                        />
                        <div className="absolute inset-0 z-10">
                            <LazySplineWrapper />
                        </div>
                    </motion.div>
                )}

                <motion.div
                    className={`${isMobile ? "w-full h-full" : "flex-[2]"
                        } bg-white flex items-center justify-center px-8`}
                    variants={{
                        hidden: { opacity: 0, x: directions[1].x, y: directions[1].y },
                        show: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            transition: { duration: 0.6 },
                        },
                    }}
                >
                    <div className="w-full text-center text-black z-50">
                        <ScrambledText
                            className="text-black"
                            radius={40}
                            duration={1.2}
                            speed={0.5}
                            scrambleChars=".:"
                        >
                            I&apos;m Tristan Gerber, a web developer based in Strasbourg. I
                            combine technical skills and creativity. As a passionate athlete
                            and hardware enthusiast, I love pushing boundaries—both on screen
                            and beyond.
                        </ScrambledText>
                    </div>
                </motion.div>
            </div>

            {/* Partie basse */}
            <div className="relative w-full h-[50vh] border-y-4 border-black bg-white overflow-hidden flex z-90">
                {/* Frontend */}
                <motion.div
                    className="flex-1 border-r-4 border-black bg-white h-full flex items-center justify-center z-10"
                    variants={{
                        hidden: { opacity: 0, x: directions[2].x, y: directions[2].y },
                        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
                    }}
                >
                    <ul className="flex flex-col h-full w-full text-center font-semibold">
                        {skills.frontend.map((tech, index) => {
                            const isHovered = hoveredFrontend === index;
                            let flexValue = 1;
                            if (isHovered) flexValue = 1;
                            else if (hoveredFrontend !== null) flexValue = 0.5;

                            const isLast = index === skills.frontend.length - 1;
                            const borderClass = !isLast ? "border-b-[3px] border-black" : "";

                            return (
                                <motion.li
                                    key={tech}
                                    className={`flex items-center justify-center cursor-pointer ${borderClass} ${isHovered ? "bg-black text-white" : "bg-white text-black"}`}
                                    style={{ flex: flexValue, minHeight: "1px" }}
                                    onMouseEnter={() => setHoveredFrontend(index)}
                                    onMouseLeave={() => setHoveredFrontend(null)}
                                    layout
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 25,
                                    }}
                                >
                                    {tech}
                                </motion.li>
                            );
                        })}
                    </ul>
                </motion.div>

                {/* Colonne Back-end */}
                <motion.div
                    className="flex-1 border-r-4 border-black bg-white h-full flex items-center justify-center z-10"
                    variants={{
                        hidden: { opacity: 0, x: directions[3].x, y: directions[3].y },
                        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
                    }}
                >
                    <ul className="flex flex-col h-full w-full text-center font-semibold">
                        {skills.backend.map((tech, index) => {
                            const isHovered = hoveredBackend === index;
                            let flexValue = 1;
                            if (isHovered) flexValue = 1;
                            else if (hoveredBackend !== null) flexValue = 0.5;

                            const isLast = index === skills.backend.length - 1;
                            const borderClass = !isLast ? "border-b-[3px] border-black" : "";

                            return (
                                <motion.li
                                    key={tech}
                                    className={`flex items-center justify-center cursor-pointer ${borderClass} ${isHovered ? "bg-black text-white" : "bg-white text-black"}`}
                                    style={{ flex: flexValue, minHeight: "1px" }}
                                    onMouseEnter={() => setHoveredBackend(index)}
                                    onMouseLeave={() => setHoveredBackend(null)}
                                    layout
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 25,
                                    }}
                                >
                                    {tech}
                                </motion.li>
                            );
                        })}
                    </ul>
                </motion.div>
                {/* ❌ Suppression Waves si mobile */}
                {!isMobile && (
                    <motion.div
                        className="flex-1 bg-white h-full relative overflow-hidden z-90"
                        variants={{
                            hidden: { opacity: 0, x: directions[4].x, y: directions[4].y },
                            show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
                        }}
                    >
                        <Waves
                            lineColor="#1e40af"
                            backgroundColor="rgba(255, 255, 255, 0.2)"
                            waveSpeedX={0.05}
                            waveSpeedY={0.01}
                            waveAmpX={40}
                            waveAmpY={30}
                            friction={0.9}
                            tension={0.01}
                            maxCursorMove={120}
                            xGap={12}
                            yGap={36}
                        />
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
}
