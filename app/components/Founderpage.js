"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderPage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white font-sans"
      style={{
        fontFamily: "Geist, sans-serif",
        backgroundImage: "url('/ChatGPT Image Apr 9, 2025, 11_29_16 PM.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />

      <motion.div
        className="relative z-10 max-w-3xl p-10 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Founder of <span className="text-[#ff5cdd]">vaidik.tech</span>
        </h1>
        <h2 className="text-2xl font-light text-white/80 mb-6">
          "I build the future, one exploit at a time."
        </h2>
        <p className="text-white/90 text-lg leading-relaxed">
          I'm an ethical hacker and developer building out innovative tools and
          applications—from hardware setups to full-stack web systems. I push
          the boundaries of cyber security, automation, and design with flair.
          <br />
          <br />
          Welcome to the grind, neon-drenched in passion and precision.
        </p>
      </motion.div>
    </div>
  );
}
