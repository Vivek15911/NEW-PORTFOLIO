"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Palette, Music, Cpu, Heart } from "lucide-react";

export default function Interests() {
    const hobbies = [
        { name: "Drawing and sketching", icon: Palette },
        { name: "Online gaming", icon: Gamepad2 },
        { name: "Listening to music", icon: Music },
        { name: "Tech Maintenance", icon: Cpu },
        { name: "Exploring Cloud & Web Design", icon: Heart },
    ];

    return (
        <section id="interests" className="py-24 bg-white dark:bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.25, once: false }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Personal <span className="text-brand-green">Interests</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.25, once: false }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 hover:border-brand-green/30 hover:-translate-y-2 transition-all duration-300 text-center group"
                        >
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-full mb-4 group-hover:bg-brand-green/10 transition-colors">
                                <hobby.icon size={32} className="text-zinc-600 dark:text-zinc-400 group-hover:text-brand-green transition-colors" />
                            </div>
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">{hobby.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
