import React from "react";
import { Flame, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Flame,
    title: "Brasa de piedra volcánica",
    desc: "Cocinamos con brasa de piedra volcánica. Sin atajos ni trucos. El calor manda y nosotros obedecemos.",
  },
  {
    icon: MapPin,
    title: "Producto selecto",
    desc: "Carne madurada, butifarras de pagés, chipirones frescos. Producto honesto para platos honestos.",
  },
  {
    icon: Users,
    title: "Ambiente cercano",
    desc: "Un sitio para venir con ganas, compartir una brasa y sentirte como en casa. Así somos nosotros.",
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-[#1a1a18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-heading text-xs tracking-[0.35em] uppercase text-[#c9531f] mb-4">
              Quiénes somos
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none text-[#f5f0e8] mb-6">
              Cocina con<br />
              <span className="text-[#c9531f]">alma y brasa</span>
            </h2>
            <p className="font-body text-[#f5f0e8]/65 leading-relaxed text-base md:text-lg mb-4">
              En Gastro Will creemos que comer bien no tiene que ser complicado. Aquí la brasa es la protagonista, el producto manda y las tapas se comparten. Sin poses, sin artificios. Cocina directa, de las que te dejan con ganas de repetir.
            </p>
            <p className="font-body text-[#f5f0e8]/65 leading-relaxed text-base md:text-lg">
              Nuestro equipo, liderado por el chef y su equipo de sala, pone el mismo cariño en cada croquetón XXL que en una picaña a la brasa. Porque aquí todo se hace con ganas.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#c9531f]/20" />
              <span className="font-heading text-xs tracking-widest uppercase text-[#c9531f]/60">
                Sabor que enamora
              </span>
              <div className="h-px flex-1 bg-[#c9531f]/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="relative overflow-hidden col-span-2">
              <img
                src="https://media.base44.com/images/public/69e0bece2429485467e3e2c0/f3d498705_WhatsAppImage2026-04-16at1323352.jpg"
                alt="Equipo Gastro Will"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/50 to-transparent" />
            </div>
            <div className="overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69e0bece2429485467e3e2c0/acd2f49b3_WhatsAppImage2026-04-16at1323351.jpg"
                alt="Chef Gastro Will"
                className="w-full h-48 object-cover object-top"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69e0bece2429485467e3e2c0/09adc786a_WhatsAppImage2026-04-16at1323353.jpg"
                alt="Barra Gastro Will"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 bg-[#2d1f0e]/40 border border-white/[0.08] hover:border-[#c9531f]/40 transition-all duration-500"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-[#c9531f]/15 mb-4 group-hover:bg-[#c9531f]/25 transition-colors">
                <f.icon className="w-5 h-5 text-[#c9531f]" />
              </div>
              <h3 className="font-heading text-lg uppercase tracking-wider text-[#f5f0e8] mb-2">
                {f.title}
              </h3>
              <p className="font-body text-sm text-[#f5f0e8]/55 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}