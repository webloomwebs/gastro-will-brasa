import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Carta", href: "#carta" },
  { label: "Galería", href: "#galeria" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#1a1a18]/97 backdrop-blur-md border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-2">
              <img
                src="/images/8db3c0324_image.png"
                alt="Gastro Will"
                className="h-[65px] w-auto block"
              />
              <div className="hidden sm:block">
                <p className="text-[10px] tracking-widest text-[#f5f0e8]/45 uppercase font-body">
                  Sabor que enamora
                </p>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="font-heading text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/70 hover:text-[#c9531f] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#reservas")}
                className="px-5 py-2 bg-[#c9531f] text-[#f5f0e8] font-heading text-xs tracking-widest uppercase hover:bg-[#c9531f]/80 transition-all duration-300"
              >
                Reservar
              </button>
            </div>

            <button
              className="md:hidden text-[#f5f0e8] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1a1a18]/98 backdrop-blur-lg pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="font-heading text-lg tracking-[0.2em] uppercase text-[#f5f0e8]/80 hover:text-[#c9531f] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#reservas")}
                className="mt-4 px-8 py-3 bg-[#c9531f] text-[#f5f0e8] font-heading text-sm tracking-widest uppercase"
              >
                Reservar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}