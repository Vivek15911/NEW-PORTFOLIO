"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronsDown } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* ... (keep background elements) ... */}

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
                    >
                        Frontend Web <br />
                        <MagneticWrapper strength={0.3}>
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green bg-[length:200%_auto] inline-block"
                                initial={{ backgroundPosition: "0% center" }}
                                whileHover={{ backgroundPosition: "100% center" }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                Developer
                            </motion.span>
                        </MagneticWrapper>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
                    >
                        I don’t just design interfaces—I build experiences, focused on responsive design
                        and practical solutions that work in the real world.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <MagneticWrapper strength={0.5}>
                            <motion.a
                                href="/images/VIVEK KUMAR_FRONTEND_.pdf"
                                download="VIVEK_KUMAR_FRONTEND_CV.pdf"
                                className="px-8 py-3 bg-brand-green text-white font-medium rounded-full transition-all shadow-lg shadow-brand-green/20 inline-block"
                                whileHover={{
                                    y: -2,
                                    boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                                }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Download CV
                            </motion.a>
                        </MagneticWrapper>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            >
                <ChevronsDown size={24} />
            </motion.div>
        </section >
    );
}
