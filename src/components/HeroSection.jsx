import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/d937e3996_WhatsAppImage2026-04-16at132336.jpg"
          alt="Brasa Gastro Will"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/75 to-[#1a1a18]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a18]/60 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <img
            src="/images/8db3c0324_image.png"
            alt="Logo Gastro Will"
            className="drop-shadow-2xl h-[120px] w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-none tracking-tight text-[#f5f0e8]"
        >
          Gastro<span className="text-[#c9531f]"> Will</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-sm md:text-base tracking-[0.3em] uppercase text-[#c9531f] mt-3"
        >
          Brasas y Tapas · Sabor que enamora
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-base md:text-xl text-[#f5f0e8]/70 mt-4 font-light tracking-wide"
        >
          Brasas de verdad. Tapas con carácter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10"
        >
          <button
            onClick={() => scrollTo("#carta")}
            className="px-8 py-3.5 bg-[#c9531f] text-[#f5f0e8] font-heading text-sm tracking-widest uppercase hover:bg-[#c9531f]/85 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Ver Carta
          </button>
          <button
            onClick={() => scrollTo("#reservas")}
            className="px-8 py-3.5 border border-[#f5f0e8]/30 text-[#f5f0e8] font-heading text-sm tracking-widest uppercase hover:border-[#c9531f] hover:text-[#c9531f] transition-all duration-300"
          >
            Reservar Mesa
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-[#f5f0e8]/50 font-body text-sm"
        >
          <span>📞 931 96 08 33</span>
          <span className="hidden sm:block">·</span>
          <span>📞 649 33 70 30</span>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("#nosotros")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#f5f0e8]/50 hover:text-[#c9531f] transition-colors"
      >
        <div className="animate-bounce-slow">
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
    </section>
  );
}