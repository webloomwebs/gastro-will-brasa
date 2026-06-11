import React from "react";
import { motion } from "framer-motion";

// Fila 1: grande + pequeña (3+1)
// Fila 2: pequeña + pequeña + grande (1+1+2)
// Fila 3: grande + pequeña + pequeña (2+1+1)
// Fila 4 (locales): grande + pequeña + pequeña (2+1+1)
// Fila 5: pequeña + grande + pequeña (1+2+1)
const GALLERY = [
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/d937e3996_WhatsAppImage2026-04-16at132336.jpg", alt: "Carnes a la brasa", span: "col-span-2 md:col-span-3", tall: true },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/347267a29_WhatsAppImage2026-04-16at1323365.jpg", alt: "Huevos rotos con chistorra", tall: true },

  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/99f8ce152_WhatsAppImage2026-04-16at1323363.jpeg", alt: "Butifarra con patatas" },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/e7072e16e_WhatsAppImage2026-04-16at1323364.jpg", alt: "Picaña fileteada con pimientos" },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/64960feb7_WhatsAppImage2026-04-16at1323366.jpg", alt: "Ensalada con queso de cabra", span: "col-span-2" },

  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/eaf2627e8_WhatsAppImage2026-04-16at1323368.jpg", alt: "Lacón a la gallega con pimentón", span: "col-span-2" },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/4379c4e41_WhatsAppImage2026-04-16at1323362.jpg", alt: "Pluma ibérica jugosa a la brasa" },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/852eb21ff_WhatsAppImage2026-04-16at1323361.jpg", alt: "Tomate aliñado con cebolla" },

  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/d5237d780_WhatsAppImage2026-04-16at132330.jpg", alt: "Fachada y terraza", span: "col-span-2" },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/d67c71e97_WhatsAppImage2026-04-16at1323301.jpg", alt: "Terraza exterior" },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/ee2b43ef6_WhatsAppImage2026-04-16at1323312.jpg", alt: "Sala interior con barrica" },

  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/a84703a92_WhatsAppImage2026-04-16at1323311.jpg", alt: "Comedor interior" },
  { src: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/c95d47614_WhatsAppImage2026-04-16at132334.jpg", alt: "Chef y equipo en barra", span: "col-span-2" },
  { src: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/dc633feab_image.png", alt: "Patatas bravas de la casa" },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-[#1a1a18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-heading text-xs tracking-[0.35em] uppercase text-[#c9531f] mb-4">
            Nuestro mundo
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-[#f5f0e8]">
            Galería
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {GALLERY.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
              className={`relative overflow-hidden group ${img.span || ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${img.tall ? "h-64 md:h-80" : "h-44 md:h-56"}`}
              />
              <div className="absolute inset-0 bg-[#1a1a18]/0 group-hover:bg-[#1a1a18]/55 transition-all duration-500 flex items-end">
                <span className="font-heading text-xs tracking-widest uppercase text-[#f5f0e8] px-4 pb-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}