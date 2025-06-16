"use client";
import { useEffect, useState } from "react";

const COLS = 10;
const ROWS = 6;
const TOTAL = COLS * ROWS;

export default function GridOverlay() {
    const [visibleTiles, setVisibleTiles] = useState<boolean[]>(Array(TOTAL).fill(true));
    const [step, setStep] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleTiles((prev) => {
                const remainingIndices = prev
                    .map((visible, index) => (visible ? index : null))
                    .filter((i) => i !== null) as number[];

                if (remainingIndices.length === 0) {
                    clearInterval(interval);
                    return prev;
                }

                const shuffled = [...remainingIndices].sort(() => Math.random() - 0.5);
                const toRemove = shuffled.slice(0, step);

                const updated = [...prev];
                toRemove.forEach((i) => (updated[i] = false));

                return updated;
            });

            setStep((prev) => prev + 1);
        }, 100); // cadence de disparition progressive

        return () => clearInterval(interval);
    }, [step]);

    return (
        <div
            className="fixed inset-0 z-50 grid"
            style={{
                gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            }}
        >
            {Array.from({ length: TOTAL }).map((_, i) => (
                visibleTiles[i] ? <div key={i} className="bg-black" /> : <div key={i} />
            ))}
        </div>
    );
}
