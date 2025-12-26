"use client";

import React from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { Github, Instagram, Linkedin, Mail, LucideIcon } from "lucide-react";
import Image from "next/image";

interface SocialLink {
    name: string;
    icon: LucideIcon;
    url: string;
    color: string;
    textColor: string;
    image?: string;
}

const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/Vivek15911",
        color: "bg-[#24292e]",
        textColor: "text-white",
        image: "/images/github-qr.png",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/vivekkumarr15911/",
        color: "bg-[#0077b5]",
        textColor: "text-white",
        image: "/images/linkedin-qr.png",
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://instagram.com/your-username",
        color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
        textColor: "text-white",
        image: "/images/instagram1.png",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:vk5400310@gmail.com",
        color: "bg-[#EA4335]",
        textColor: "text-white",
    },
];

export default function QRCodeSection() {
    const [copied, setCopied] = React.useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default mailto behavior if clicking the card wrapper
        navigator.clipboard.writeText("vk5400310@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-zinc-50/5 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.25, once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Let's Connect</h2>
                    <p className="text-zinc-400">Scan to follow or contact me instantly.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.name === "Email" ? "#" : social.url}
                            target={social.name === "Email" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            onClick={social.name === "Email" ? handleCopyEmail : undefined}
                            className="group h-[300px] perspective-1000 cursor-pointer block"
                        >
                            <div className="relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180">

                                {/* Front Side */}
                                <div className={`absolute inset-0 backface-hidden rounded-2xl ${social.color} flex flex-col items-center justify-center p-6 shadow-xl`}>
                                    <social.icon size={64} className={`${social.textColor} mb-4`} />
                                    <h3 className={`text-2xl font-bold ${social.textColor}`}>{social.name}</h3>
                                    <span className={`mt-2 text-sm ${social.textColor} opacity-80`}>
                                        {social.name === "Email" ? (copied ? "Email Copied!" : "Hover to Copy") : "Hover to Scan or Click to Open"}
                                    </span>
                                </div>

                                {/* Back Side (QR Code or Email Text) */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center p-6 shadow-xl border border-zinc-200 dark:border-white/10 overflow-hidden group-hover:border-brand-green/50 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-yellow/5 opacity-50" />

                                    <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
                                        {social.name === "Email" ? (
                                            <div className="text-center w-full">
                                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/20">
                                                    <Mail className="text-white" size={24} />
                                                </div>
                                                <p className="text-zinc-800 dark:text-zinc-200 font-bold text-lg break-all px-2 mb-2">vk5400310@gmail.com</p>
                                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${copied ? "bg-green-500 text-white shadow-lg shadow-green-500/20 scale-110" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-brand-green/10 group-hover:text-brand-green"}`}>
                                                    {copied ? "Copied to Clipboard!" : "Click to Copy"}
                                                </span>
                                            </div>
                                        ) : social.image ? (
                                            <Image
                                                src={social.image}
                                                alt={`${social.name} QR`}
                                                fill
                                                className="w-full h-full object-contain p-2"
                                            />
                                        ) : (
                                            <QRCode
                                                value={social.url}
                                                size={160}
                                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                viewBox={`0 0 256 256`}
                                            />
                                        )}
                                    </div>
                                </div>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
