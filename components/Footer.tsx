"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black/20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <Link href="/" className="text-xl font-display font-bold tracking-tighter">
                        PORT<span className="text-brand-green">FOLIO</span>.
                    </Link>
                    <p className="text-sm text-zinc-500 mt-2">
                        © {new Date().getFullYear()} Vivek Kumar. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <Link href="#about" className="hover:text-brand-green transition-colors">About</Link>
                    <Link href="#projects" className="hover:text-brand-green transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-brand-green transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
