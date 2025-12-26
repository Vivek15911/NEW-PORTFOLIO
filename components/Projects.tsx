"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo: string;
        code: string;
    };
    color: string;
    image?: string;
}

const projects: Project[] = [
    {
        title: "Stock Market Tracker",
        description: "Real-time NSE stock prices tracker using APIs. Features analysis of different time frames and market data.",
        tags: ["API Integration", "React.js", "Data Analysis"],
        links: { demo: "#", code: "#" },
        color: "from-brand-green/20 to-brand-yellow/20"
    },
    {
        title: "Chatbot Ticketing System",
        description: "Automated ticketing system that handles user queries and improves response time efficiently.",
        tags: ["JavaScript", "Automation", "UI/UX"],
        links: { demo: "https://eco-ticketing-system.vercel.app/", code: "https://github.com/Vivek15911/eco-ticketing-system" },
        color: "from-blue-500/20 to-cyan-500/20",
        image: "/images/ecoticket.png"
    },
    {
        title: "Expense Tracker",
        description: "A practical application to help users manage and monitor their daily expenses effectively.",
        tags: ["React.js", "State Management", "Utility"],
        links: { demo: "https://expencetrackervk.netlify.app/", code: "https://github.com/Vivek15911/Expence-tracker" },
        color: "from-purple-500/20 to-pink-500/20",
        image: "/images/expense-tracker.png"
    },
    {
        title: "Personal Portfolio",
        description: "A showcase of my work and skills, built to demonstrate my frontend development capabilities.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        links: { demo: "#", code: "#" },
        color: "from-orange-500/20 to-red-500/20"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.25, once: false }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Projects</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Practical projects where I apply my skills to solve real problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.25, once: false }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/50 transition-colors flex flex-col h-full"
                        >
                            <div className="h-48 w-full overflow-hidden relative group/image">
                                {project.image ? (
                                    <div className="relative w-full h-full">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10`} />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${project.color} group-hover/image:scale-105 transition-transform duration-500`} />
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-green transition-colors">{project.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-brand-green">
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                        <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-brand-green">
                                            <Github size={16} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
