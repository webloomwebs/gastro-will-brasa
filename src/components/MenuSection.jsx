import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    name: "Tapas",
    image: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/e7072e16e_WhatsAppImage2026-04-16at1323364.jpg",
    items: [
      // Patatas bravas: patatas fritas con salsa brava
      { name: "Patatas Bravas", price: "5,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/bef37299d_WhatsAppImage2026-05-04at151058.jpg" },
      { name: "Patatas Bravas de la casa", price: "7,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/459fbed2a_image.png" },
      // Imágenes reales del restaurante
      { name: "Croquetón casero de pollo XXL", price: "2,20€/u", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/777a68539_image.png" },
      { name: "Alitas de pollo BBQ", price: "6,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/ee5c0c18a_WhatsAppImage2026-04-27at154655.jpg" },
      { name: "Fingers de pollo crujientes", price: "7,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/d77f3fc06_WhatsAppImage2026-04-27at154656.jpg" },
      { name: "Choricito picante al vino tinto", price: "6,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/93025617d_WhatsAppImage2026-04-27at154658.jpeg" },
      { name: "Huevos rotos con jamón", price: "6,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/a89cd8555_WhatsAppImage2026-04-27at1546582.jpg" },
      { name: "Huevos rotos con chistorra", price: "6,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/6ba74773b_WhatsAppImage2026-04-27at1546581.jpg" },
      { name: "Tiras de entraña a la parrilla", price: "10,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/087f4ca24_image.png" },
      { name: "Pincho moruno", price: "7,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/166adf2d3_image.png" },
      // Lacón a la gallega: cerdo hervido con pimentón
      { name: "Lacón a la gallega", price: "8,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/b6f072f26_image.png" },
      { name: "Cazón adobado", price: "8,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/b38dd6c29_image.png" },
      { name: "Chipirones a la andaluza", price: "9,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/5aee8bf4a_image.png" },
      { name: "Tentación de chistorra", price: "6,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/3c5412d24_WhatsAppImage2026-04-27at1546571.jpg" },
      { name: "Morros", price: "6,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/860a9818e_WhatsAppImage2026-05-04at153715.jpg" },
      { name: "Pimientos del padrón", price: "5,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/78093360f_WhatsAppImage2026-04-27at154700.jpg" },
      { name: "Queso curado de oveja", price: "6,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/b74b6b8eb_WhatsAppImage2026-04-27at1546591.jpg" },
      { name: "Anchoas del Cantábrico", price: "6,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/afb484d52_WhatsAppImage2026-05-04at1510581.jpg" },
      { name: "Aceitunas aliñadas", price: "2,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/fac87b711_generated_image.png" },
    ],
  },
  {
    name: "Carnes",
    image: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/d937e3996_WhatsAppImage2026-04-16at132336.jpg",
    items: [
      // Picaña: corte de ternera a la brasa
      { name: "Picaña a la brasa", price: "15,90€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/56b868301_image.png" },
      { name: "Entraña a la brasa", price: "15,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/5b1cc6c1b_image.png" },
      { name: "Butifarra de pagés", price: "9,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/4dc1f2da0_image.png" },
      { name: "Pluma ibérica jugosa a la brasa", price: "15,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/abb1ed676_image.png" },
      { name: "Churrasco a la brasa", price: "13,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/5ed13b89c_image.png" },
      { name: "Pechuga de pollo jugosa a la plancha", price: "10,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/7661c04cb_image.png" },
      { name: "Chuletón de vaca madurado 1kg", desc: "Por encargo", price: "40,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/a479ede8e_image.png" },
      { name: "Hamburguesa de la Casa", desc: "Vaca madurada, lechuga, tomate, cebolla caramelizada, bacon y queso manchego", price: "11,90€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/4b1ed59b8_WhatsAppImage2026-05-04at154632.jpg" },
      { name: "Supl: Huevo, queso manchego o cebolla", price: "1,20€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/4b1ed59b8_WhatsAppImage2026-05-04at154632.jpg" },
    ],
    note: "Guarnición ya incluida",
  },
  {
    name: "Ensaladas",
    image: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/64960feb7_WhatsAppImage2026-04-16at1323366.jpg",
    items: [
      // Ensalada con queso de cabra gratinado
      { name: "Ensalada queso de cabra", desc: "Lechuga, tomate, frutos secos, miel y mostaza", price: "8,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/33f612483_image.png" },
      { name: "Tomate aliñado", desc: "Tomate, aceitunas, cebolla roja y sal Maldom", price: "5,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/875489a6d_image.png" },
    ],
    note: "Pan 1,00€ ración · Pan con tomate 2,00€ ración · Extra salsa 0,50€ ración",
  },
  {
    name: "Bocadillos Fríos",
    image: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/852eb21ff_WhatsAppImage2026-04-16at1323361.jpg",
    items: [
      // Jamón serrano en lonchas
      { name: "Jamón serrano", price: "5,50€", priceHalf: "4,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/488644840_generated_image.png" },
      { name: "Queso manchego", price: "6,00€", priceHalf: "5,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/94c31af55_generated_image.png" },
      { name: "Fuet", price: "5,00€", priceHalf: "4,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/cdce228b7_generated_image.png" },
      { name: "Chorizo picante", price: "5,50€", priceHalf: "4,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/9fb310afc_generated_image.png" },
    ],
    hasHalf: true,
  },
  {
    name: "Bocadillos Calientes",
    image: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/4379c4e41_WhatsAppImage2026-04-16at1323362.jpg",
    items: [
      // Bocadillo de picaña (carne)
      { name: "Picaña", price: "7,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/c74e2d68a_image.png" },
      { name: "Lomo", price: "5,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/044233756_image.png" },
      { name: "Bacon", price: "5,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/3d185e64a_image.png" },
      { name: "Lacón", price: "6,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/ecf4d4805_image.png" },
      { name: "Chistorra", price: "6,50€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/9dc4dd909_image.png" },
      { name: "Pechuga de pollo", price: "6,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/143fe655d_image.png" },
      { name: "Panceta", price: "6,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/140722743_image.png" },
      { name: "Butifarra de pagés", price: "7,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/3637cf390_bocata_butifarra.png" },
      { name: "Tortilla francesa", price: "4,00€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/b3e6de725_image.png" },
    ],
    note: "Suplementos (Queso o cebolla) 1,20€ · No se hacen medios bocadillos calientes",
  },
  {
    name: "Postres",
    image: "https://media.base44.com/images/public/69e0bece2429485467e3e2c0/99f8ce152_WhatsAppImage2026-04-16at1323363.jpeg",
    items: [
      // Coulant: bizcocho de chocolate con interior líquido
      { name: "Coulant de chocolate negro", price: "4,20€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/2aa9c6d73_image.png" },
      { name: "Helado vainilla pecan", price: "3,20€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/dd70546a1_generated_image.png" },
      { name: "Helado strawberry cheesecake", price: "3,20€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/5a85884c1_generated_image.png" },
      { name: "Helado choco brownie", price: "3,20€", hoverImg: "https://media.base44.com/images/public/69ef684820470d1cfca49e9d/91de9256a_generated_image.png" },
    ],
  },
];

export default function MenuSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeImg, setActiveImg] = useState(CATEGORIES[0].items[0]?.hoverImg || null);
  const [activeItemIdx, setActiveItemIdx] = useState(0);
  const cat = CATEGORIES[activeIdx];

  const handleCategoryChange = (i) => {
    setActiveIdx(i);
    setActiveItemIdx(0);
    setActiveImg(CATEGORIES[i].items[0]?.hoverImg || null);
  };

  const handleItemActivate = (item, i) => {
    if (item.hoverImg) {
      setActiveImg(item.hoverImg);
      setActiveItemIdx(i);
    }
  };

  return (
    <section id="carta" className="py-20 md:py-32 bg-[#111110]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-heading text-xs tracking-[0.35em] uppercase text-[#c9531f] mb-4">
            Lo que ofrecemos
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-[#f5f0e8]">
            Nuestra Carta
          </h2>
          <p className="font-body text-sm text-[#f5f0e8]/40 mt-3">
            Suplemento de terraza 0,20€ · Pan 1,00€ ración · Pan con tomate 2,00€ ración
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.name}
              onClick={() => handleCategoryChange(i)}
              className={`font-heading text-xs tracking-widest uppercase px-4 py-2.5 transition-all duration-300 ${
                i === activeIdx
                  ? "bg-[#c9531f] text-[#f5f0e8]"
                  : "bg-transparent text-[#f5f0e8]/55 border border-white/[0.15] hover:border-[#c9531f]/50 hover:text-[#f5f0e8]"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-5 gap-0 md:gap-8"
          >
            {/* Sticky image */}
            <div className="md:col-span-2 mb-4 md:mb-0">
              <div className="md:sticky md:top-24">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  {/* Preload all images as hidden layers, show active one instantly */}
                  {cat.items.map((item, i) => item.hoverImg && (
                    <img
                      key={item.hoverImg}
                      src={item.hoverImg}
                      alt={item.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${activeImg === item.hoverImg ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                  {/* Fallback category image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${activeImg ? "opacity-0" : "opacity-100"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/50 to-transparent pointer-events-none" />
                  {/* Active item name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-heading text-xs tracking-widest uppercase text-[#f5f0e8]/80">
                      {cat.items[activeItemIdx]?.name || cat.name}
                    </p>
                  </div>
                </div>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#f5f0e8]/25 mt-2 text-center hidden md:block">
                  Pasa el cursor sobre un plato para ver la foto
                </p>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#f5f0e8]/25 mt-2 text-center md:hidden">
                  Toca un plato para ver la foto
                </p>
              </div>
            </div>

            {/* Items list */}
            <div className="md:col-span-3">
              {cat.hasHalf && (
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/[0.15]">
                  <span className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/40 flex-1" />
                  <span className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/40 w-16 text-right">Entero</span>
                  <span className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/40 w-16 text-right">Medio</span>
                </div>
              )}
              {cat.items.map((item, i) => (
                <div
                  key={item.name + i}
                  className={`group flex justify-between items-start gap-4 py-4 border-b border-white/[0.08] last:border-0 transition-colors cursor-pointer select-none ${activeItemIdx === i ? "border-[#c9531f]/30" : "hover:border-[#c9531f]/20"}`}
                  onMouseEnter={() => handleItemActivate(item, i)}
                  onTouchStart={() => handleItemActivate(item, i)}
                  onClick={() => handleItemActivate(item, i)}
                >
                  <div className="flex-1">
                    <h4 className={`font-heading text-sm md:text-base uppercase tracking-wide transition-colors duration-100 ${activeItemIdx === i ? "text-[#c9531f]" : "text-[#f5f0e8] group-hover:text-[#c9531f]"}`}>
                      {item.name}
                    </h4>
                    {item.desc && (
                      <p className="font-body text-xs text-[#f5f0e8]/45 mt-0.5">{item.desc}</p>
                    )}
                  </div>
                  {cat.hasHalf ? (
                    <div className="flex gap-0 shrink-0">
                      <span className="font-heading text-base text-[#c9531f] whitespace-nowrap w-16 text-right">{item.price}</span>
                      <span className="font-heading text-base text-[#c9531f]/70 whitespace-nowrap w-16 text-right">{item.priceHalf}</span>
                    </div>
                  ) : (
                    <span className="font-heading text-base text-[#c9531f] whitespace-nowrap shrink-0">
                      {item.price}
                    </span>
                  )}
                </div>
              ))}
              {cat.note && (
                <p className="font-body text-xs text-[#f5f0e8]/35 mt-4 italic">{cat.note}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center font-body text-xs text-[#f5f0e8]/30 mt-10">
          IVA incluido · Alérgenos disponibles bajo petición
        </p>
      </div>
    </section>
  );
}