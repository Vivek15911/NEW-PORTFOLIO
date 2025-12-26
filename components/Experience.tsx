"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Globe, Code } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            company: "TATA STEEL",
            role: "Industrial Trainee",
            period: "MAY 2024 – JULY 2024",
            type: "OFFLINE",
            icon: Building2,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            description: [
                "Gained hands-on exposure to the ST Mill operations.",
                "Understood the complete workflow from raw material Input to final product output.",
                "Learned about industrial machinery, safety procedures, and Production monitoring.",
                "Experienced company facilities and safety protocols including AC monitoring rooms and safety gear."
            ]
        },
        {
            company: "InternPe",
            role: "C++ Programming Intern",
            period: "JUNE 2024 – JULY 2024",
            type: "ONLINE",
            icon: Code,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            description: [
                "Completed a 4-week structured internship in C++ Programming.",
                "Gained hands-on experience in writing efficient, object-oriented C++ code.",
                "Understood core programming concepts such as data structures, memory management, and pointers.",
                "Enhanced problem-solving skills through assigned tasks and programming challenges.",
                "Participated in code reviews and implemented feedback for code improvement."
            ]
        },
        {
            company: "Dev Town",
            role: "Web Development Bootcamp",
            period: "JUNE 2025", // Kept as user provided, though possibly 2024?
            type: "ONLINE",
            icon: Globe,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            description: [
                "Completed the 'Netflix Clone Using HTML' bootcamp hosted by DevTown.",
                "Participated in a bootcamp focused on web development fundamentals.",
                "Built a static Netflix homepage clone using HTML only.",
                "Gained hands-on experience in designing and organizing content.",
                "Certificate issued by DevTown in collaboration with Microsoft Student Chapter.",
                "Improved skills in basic web design and project implementation."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-zinc-50 dark:bg-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Internships & <span className="text-brand-green">Experience</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        My professional journey and industrial training.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 border-l-2 border-brand-green/30 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: 0.25, once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-green border-2 border-white dark:border-zinc-900" />
                                <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-white/5 hover:border-brand-green/30 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl ${exp.bg} ${exp.color}`}>
                                                <exp.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-zinc-800 dark:text-gray-100">{exp.company}</h3>
                                                <p className="text-brand-green font-medium">{exp.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:items-end">
                                            <span className="text-sm font-bold text-zinc-500">{exp.period}</span>
                                            <span className="text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-white/10 rounded text-zinc-500 mt-1 inline-block">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green/50 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
