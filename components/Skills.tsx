"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";
import Image from "next/image";

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skills = [
        { name: "HTML", icon: "/images/html-icon.webp" },
        { name: "CSS", icon: "/images/css.jpg" },
        { name: "Tailwind CSS", icon: "/images/tailwind.png" },
        { name: "Bootstrap", icon: "/images/bootstrap.jpeg" },
        { name: "JavaScript", icon: "/images/javascript.jpg" },
        { name: "React.js", icon: "/images/react.png" },
        { name: "Node.js", icon: "/images/node.png" },
        { name: "Git", icon: "/images/git.png" },
        { name: "GitHub", icon: "/images/github.png" },
        { name: "VS Code", icon: "/images/vscode.jpg" },
        { name: "Linux", icon: "/images/linux.jpeg" },
        { name: "Windows", icon: "/images/windows.png" },
        { name: "Vercel", icon: "/images/vercel.jpg" },
    ];

    return (
        <section id="skills" className="py-24 bg-zinc-50 dark:bg-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.25, once: false }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Technical <span className="text-brand-green">Skills</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative isolate">
                    {/* Background Logo Animation */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-20 z-0">
                        <AnimatePresence mode="wait">
                            {hoveredSkill && (
                                <motion.div
                                    key={hoveredSkill}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                    animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 1.5 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={skills.find(s => s.name === hoveredSkill)?.icon || ""}
                                        alt="bg-icon"
                                        width={384}
                                        height={384}
                                        className="w-full h-full object-contain blur-sm"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        {skills.map((skill, index) => (
                            <motion.button
                                key={index}
                                className="px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 text-sm font-medium border border-zinc-200 dark:border-white/10 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/20 transition-all cursor-default flex items-center gap-2"
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.25, once: false }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Image
                                    src={skill.icon}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 object-contain rounded-sm"
                                    alt={skill.name}
                                />
                                {skill.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
