import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const NAV_ITEMS = ["Inicio", "Nosotros", "Carta", "Galería", "Reservas"];

export default function FooterSection() {
  const scrollTo = (label) => {
    const id = label.toLowerCase()
      .replace("í", "i")
      .replace("é", "e");
    const el = document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="bg-[#111110] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & desc */}
          <div>
            <div className="flex justify-center mb-5">
              <img
                src="/images/8db3c0324_image.png"
                alt="Gastro Will"
                className="h-[80px] w-auto block"
              />
            </div>
            <p className="font-body text-sm text-[#f5f0e8]/50 leading-relaxed mb-6">
              Sabor que enamora. Tu gastro bar de barrio — donde la brasa y las tapas son los protagonistas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/gastrowill"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.15] flex items-center justify-center text-[#f5f0e8]/50 hover:text-[#c9531f] hover:border-[#c9531f]/50 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/gastrowill"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.15] flex items-center justify-center text-[#f5f0e8]/50 hover:text-[#c9531f] hover:border-[#c9531f]/50 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-heading text-xs tracking-widest uppercase text-[#f5f0e8]/60 mb-5">
              Contacto
            </h4>
            <ul className="space-y-4 font-body text-sm text-[#f5f0e8]/50">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9531f] mt-0.5 shrink-0" />
                <span>
                  Carrer de Claramunt, 9<br />Sant Andreu, 08030 Barcelona, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9531f] shrink-0" />
                <div>
                  <a href="tel:+34931960833" className="block hover:text-[#c9531f] transition-colors">
                    931 96 08 33
                  </a>
                  <a href="tel:+34649337030" className="block hover:text-[#c9531f] transition-colors">
                    649 33 70 30
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9531f] shrink-0" />
                <a href="mailto:bargastrowill@gmail.com" className="hover:text-[#c9531f] transition-colors">
                  bargastrowill@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h4 className="font-heading text-xs tracking-widest uppercase text-[#f5f0e8]/60 mb-5">
              Horario
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#f5f0e8]/50">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c9531f] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#f5f0e8]/80 font-medium">Martes a Jueves</p>
                  <p>10:00 – 16:00</p>
                  <p>19:00 – 22:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c9531f] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#f5f0e8]/80 font-medium">Viernes</p>
                  <p>10:00 – 16:00</p>
                  <p>19:00 – 23:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c9531f] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#f5f0e8]/80 font-medium">Sábado</p>
                  <p>11:00 – 16:00</p>
                  <p>19:00 – 23:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c9531f] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#f5f0e8]/80 font-medium">Domingo</p>
                  <p>11:00 – 16:00</p>
                </div>
              </li>
              <li className="pl-7 text-xs text-[#f5f0e8]/30 mt-1">Lunes cerrado</li>
            </ul>
          </div>

          {/* Navegar */}
          <div>
            <h4 className="font-heading text-xs tracking-widest uppercase text-[#f5f0e8]/60 mb-5">
              Navegar
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="font-body text-sm text-[#f5f0e8]/50 hover:text-[#c9531f] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 md:mt-16 overflow-hidden border border-white/[0.08] h-60">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4!2d2.1834!3d41.4036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a8b8b8b8b8b9%3A0x0!2sCarrer+de+Claramunt+9+Sant+Andreu+Barcelona!5e0!3m2!1ses!2ses!4v1700000000000"
            className="w-full h-full border-0 grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Gastro Will"
          />
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#f5f0e8]/30">
            © 2026 Gastro Will Brasas y Tapas. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-[#f5f0e8]/20">
            Suplemento de terraza 0,20€ · IVA incluido en todos los precios
          </p>
        </div>
      </div>
    </footer>
  );
}