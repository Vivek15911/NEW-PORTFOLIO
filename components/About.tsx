"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-black/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image/Decoration Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-white/5 relative border border-zinc-200 dark:border-white/10 group">
                            {/* Placeholder for a profile image, or a nice abstract graphic */}
                            <img src="/images/vivek.jpg" alt="" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.25 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="text-3xl md:text-5xl font-display font-bold mb-6"
                        >
                            About <span className="text-brand-green">Vivek</span>
                        </motion.h2>

                        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                            {[
                                "My name is Vivek Kumar. I am currently pursuing B.Tech in Computer Science with specialization in Artificial Intelligence from GITA Autonomous College, Bhubaneswar. I am passionate about technology, especially web development, and I enjoy building practical solutions using my own ideas.",
                                "I completed my 10th and 12th standard from Netaji Subhash Public School. I scored 61% in 10th and 52% in 12th. Though my academic journey had ups and downs, I believe marks do not fully define a person’s potential. What truly matters is consistency, learning mindset, and practical skills. Currently, I maintain a CGPA of 7.1 in my engineering course.",
                                "I am a frontend web developer, and I have strong knowledge of HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, and React.js. I enjoy converting ideas into user-friendly web interfaces and improving user experience.",
                                "I have worked on several projects to apply my skills practically. I built a personal portfolio website to showcase my work and skills. I developed an expense tracker application that helps users manage daily expenses efficiently. I also worked on a chatbot-based ticketing system, which automates user queries and improves response time.",
                                "Currently, I am working on an exciting project related to the stock market. In this project, I am using APIs to show live NSE stock prices of multiple companies, along with different time frames. I am also applying my own strategies and understanding of the stock market to analyze data. This project has helped me improve my API handling, logic building, and real-time data processing skills.",
                                "In terms of tools and platforms, I am comfortable working with VS Code, Windows, Linux, Git, and GitHub. I have deployed my projects using Vercel and Netlify, which gave me hands-on experience with hosting and version control.",
                                "I consider myself a self-motivated learner who believes in continuous improvement. My goal is to grow as a skilled software developer, contribute to meaningful projects, and keep learning new technologies."
                            ].map((text, index) => (
                                <motion.p
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: text.replace("Vivek Kumar", "<strong>Vivek Kumar</strong>") }} />
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
