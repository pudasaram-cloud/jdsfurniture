"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  // Animates opacity from 0.25 (muted light grey) to 1.0 (deep rich black)
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, ["#9CA3AF", "#111827"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block transition-colors duration-200 mr-[0.25em]"
    >
      {word}
    </motion.span>
  );
}

export default function ScrollTextReveal({ text, className }: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Track scroll position when scrolling down from Hero section into view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const lines = text.split("\n");
  const allWords = text.trim().split(/\s+/).filter(Boolean);
  let globalWordIndex = 0;

  return (
    <h2 ref={containerRef} className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.trim().split(/\s+/).filter(Boolean);
        return (
          <span key={lineIdx} className="block">
            {words.map((word) => {
              const i = globalWordIndex++;
              const start = i / allWords.length;
              const end = start + 1 / allWords.length;
              return (
                <Word
                  key={i}
                  word={word}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </h2>
  );
}
