"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface MagneticWrapperProps {
    children: React.ReactElement;
    strength?: number; // How much the element follows the cursor (default: 0.5)
}

export default function MagneticWrapper({ children, strength = 0.5 }: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the magnetic effect
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        // Calculate distance from center
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Apply movement
        x.set(middleX * strength);
        y.set(middleY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
}
