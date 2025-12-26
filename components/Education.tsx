"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
    const education = [
        {
            institution: "GITA AUTONOMOUS COLLEGE",
            location: "BHUBANESWAR, INDIA",
            degree: "B.TECH Computer Science and Engineering with AI",
            period: "2022 - 2026 (On Going)",
            score: "SCGPA: 7.10 (Till 6th semester)",
            icon: GraduationCap
        },
        {
            institution: "NETAJI SUBHAS PUBLIC SCHOOL",
            location: "JAMSHEDPUR, INDIA",
            degree: "Class (XII th) - CBSE Board",
            period: "2021 - 2022",
            score: "Score: 52.80%",
            icon: BookOpen
        },
        {
            institution: "NETAJI SUBHAS PUBLIC SCHOOL",
            location: "JAMSHEDPUR, INDIA",
            degree: "Class (X th) - CBSE Board",
            period: "2019 - 2020",
            score: "Score: 61.20%",
            icon: BookOpen
        }
    ];

    return (
        <section id="education" className="py-24 bg-white dark:bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.25, once: false }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        My <span className="text-brand-green">Education</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8 pl-4 border-l-2 border-zinc-100 dark:border-white/5">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-8"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: 0.25, once: false }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-yellow border-2 border-white dark:border-black" />
                                <h4 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">{edu.institution}</h4>
                                <p className="text-brand-green font-medium mb-1">{edu.degree}</p>
                                <p className="text-zinc-500 text-sm mb-3">{edu.period} | {edu.location}</p>
                                <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-white/5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                    {edu.score}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
