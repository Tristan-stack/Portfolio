"use client";
import { motion } from "framer-motion";
import Particles from "@/app/components/ui/Particles";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const directions = [
    { x: -100, y: 0 }, // carré 1 : de la gauche
    { x: 0, y: -100 }, // carré 2 : du haut
    { x: 100, y: 0 },  // carré 3 : de la droite
    { x: 0, y: 100 },  // carré 4 : du bas
    { x: -100, y: 100 }, // carré 5 : diagonale bas-gauche
    { x: 100, y: -100 }, // carré 6 : diagonale haut-droite
];

export default function AboutSection() {
    return (
        <section id="about" className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
            <motion.div
                className="w-full h-[50vh] bg-white flex"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="flex-1 bg-black border-r-4 border-black h-full relative overflow-hidden"
                    variants={{
                        hidden: { opacity: 0, x: directions[0].x, y: directions[0].y },
                        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
                    }}
                >
                    <Particles
                        particleColors={["#ffffff", "#ffffff"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                        className="absolute inset-0 z-0"
                    />
                </motion.div>
                <motion.div
                    className="flex-[2] bg-white h-full"
                    variants={{
                        hidden: { opacity: 0, x: directions[1].x, y: directions[1].y },
                        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
                    }}
                />
            </motion.div>
            <motion.div
                className="w-full h-[50vh] border-t-4 border-black bg-white flex"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="flex-1 border-r-4 border-black bg-white h-full"
                    variants={{
                        hidden: { opacity: 0, x: directions[2].x, y: directions[2].y },
                        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
                    }}
                />
                <motion.div
                    className="flex-1 border-r-4 border-black bg-white h-full"
                    variants={{
                        hidden: { opacity: 0, x: directions[3].x, y: directions[3].y },
                        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
                    }}
                />
                <motion.div
                    className="flex-1 bg-white h-full"
                    variants={{
                        hidden: { opacity: 0, x: directions[4].x, y: directions[4].y },
                        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
                    }}
                />
            </motion.div>
        </section>
    );
}