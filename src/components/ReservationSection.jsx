import React, { useState } from "react";
import { User, Phone, Mail, CalendarDays, Clock, Users } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const PEOPLE = ["1", "2", "3", "4", "5", "6", "7", "8"];

// Horarios por día de la semana (0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb)
// Lunes (1) cerrado
const HOURS_BY_DAY = {
  0: ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"], // Domingo 11-16
  1: [], // Lunes cerrado
  2: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"], // Mar-Jue 10-16 y 19-22
  3: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
  4: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
  5: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"], // Viernes 10-16 y 19-23
  6: ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"], // Sábado 11-16 y 19-23
};

const TODAY = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const getAvailableHours = (dateStr) => {
  if (!dateStr) return [];
  const d = new Date(dateStr + "T12:00:00"); // evitar problemas de timezone
  const day = d.getDay();
  return HOURS_BY_DAY[day] || [];
};

const isClosedDay = (dateStr) => {
  if (!dateStr) return false;
  const d = new Date(dateStr + "T12:00:00");
  return d.getDay() === 1; // Lunes
};

export default function ReservationSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "", people: "", comments: "" });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [calOpen, setCalOpen] = useState(false);

  const phoneDigits = form.phone.replace(/\D/g, "");
  const emailValid = form.email.includes("@") && form.email.includes(".");
  const dateValid = form.date && new Date(form.date + "T12:00:00") >= TODAY();
  const closedDay = isClosedDay(form.date);
  const availableHours = getAvailableHours(form.date);

  const selectedDateObj = form.date ? new Date(form.date + "T12:00:00") : undefined;

  const handleDateSelect = (date) => {
    if (!date) return;
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    setForm({ ...form, date: `${y}-${m}-${d}`, time: "" });
    setCalOpen(false);
  };

  const errors = {
    name: !form.name.trim() ? "El nombre es obligatorio" : null,
    phone: phoneDigits.length < 9 ? "Mínimo 9 dígitos" : null,
    email: !form.email ? "El email es obligatorio" : !emailValid ? "Email no válido (falta @)" : null,
    date: !form.date ? "Selecciona una fecha" : !dateValid ? "La fecha no puede ser pasada" : closedDay ? "Los lunes estamos cerrados" : null,
    time: !form.time ? "Selecciona una hora" : !availableHours.includes(form.time) ? "Hora fuera del horario" : null,
    people: !form.people ? "Selecciona el número de personas" : null,
    privacy: !privacyAccepted ? "Debes aceptar la política de privacidad" : null,
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (hasErrors) return;
    setSending(true);
    await fetch("https://hook.eu1.make.com/bamcy40d6yqobjajcbrbj8px61xtrhyo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSending(false);
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo para confirmar tu reserva."
    });
    setForm({ name: "", phone: "", email: "", date: "", time: "", people: "", comments: "" });
    setPrivacyAccepted(false);
    setSubmitted(false);
  };

  return (
    <section id="reservas" className="py-20 md:py-32 bg-[#111110]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <p className="font-heading text-xs tracking-[0.35em] uppercase text-[#c9531f] mb-4">
              Tu mesa te espera
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#f5f0e8] mb-8">
              Reservas
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-[#1a1a18] border border-white/[0.08] p-6 md:p-8 space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/50 flex items-center gap-2">
                    <User className="w-3 h-3 text-[#c9531f]" /> Nombre
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={`flex h-9 w-full border px-3 py-1 text-sm bg-[#111110] text-[#f5f0e8] placeholder:text-[#f5f0e8]/25 font-body focus:outline-none transition-colors ${submitted && errors.name ? "border-red-500" : "border-white/[0.12] focus:border-[#c9531f]/60"}`}
                    placeholder="Tu nombre" />
                  {submitted && errors.name && <p className="font-body text-xs text-red-400">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/50 flex items-center gap-2">
                    <Phone className="w-3 h-3 text-[#c9531f]" /> Teléfono
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className={`flex h-9 w-full border px-3 py-1 text-sm bg-[#111110] text-[#f5f0e8] placeholder:text-[#f5f0e8]/25 font-body focus:outline-none transition-colors ${submitted && errors.phone ? "border-red-500" : "border-white/[0.12] focus:border-[#c9531f]/60"}`}
                    placeholder="+34 600 000 000" />
                  {submitted && errors.phone && <p className="font-body text-xs text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/50 flex items-center gap-2">
                  <Mail className="w-3 h-3 text-[#c9531f]" /> Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`flex h-9 w-full border px-3 py-1 text-sm bg-[#111110] text-[#f5f0e8] placeholder:text-[#f5f0e8]/25 font-body focus:outline-none transition-colors ${submitted && errors.email ? "border-red-500" : "border-white/[0.12] focus:border-[#c9531f]/60"}`}
                  placeholder="tu@email.com" />
                {submitted && errors.email && <p className="font-body text-xs text-red-400">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 overflow-visible">
                <div className="space-y-2">
                  <label className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/50 flex items-center gap-1.5">
                    <CalendarDays className="w-3 h-3 text-[#c9531f]" /> Fecha
                  </label>
                  <Popover open={calOpen} onOpenChange={setCalOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={`flex h-9 w-full items-center border px-3 py-1 text-sm bg-[#111110] font-body text-left transition-colors cursor-pointer hover:border-[#c9531f]/60 ${submitted && errors.date ? "border-red-500 text-[#f5f0e8]" : "border-white/[0.12] focus:border-[#c9531f]/60 text-[#f5f0e8]"} ${!form.date ? "text-[#f5f0e8]/40" : ""}`}
                      >
                        <CalendarDays className="w-3.5 h-3.5 mr-2 text-[#c9531f] shrink-0" />
                        {form.date ? format(selectedDateObj, "d MMM yyyy", { locale: es }) : "Elige una fecha"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-[#1a1a18] border-white/[0.12] z-[999]" align="start" side="bottom" sideOffset={4}>
                      <Calendar
                        mode="single"
                        selected={selectedDateObj}
                        onSelect={handleDateSelect}
                        locale={es}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || date.getDay() === 1;
                        }}
                        initialFocus
                        className="text-[#f5f0e8]"
                      />
                    </PopoverContent>
                  </Popover>
                  {submitted && errors.date && <p className="font-body text-xs text-red-400">{errors.date}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/50 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#c9531f]" /> Hora
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    disabled={!form.date || closedDay || availableHours.length === 0}
                    className={`flex h-9 w-full border px-3 py-1 text-sm font-body focus:outline-none transition-colors appearance-none bg-[#111110] text-[#f5f0e8] disabled:opacity-40 ${submitted && errors.time ? "border-red-500" : "border-white/[0.12] focus:border-[#c9531f]/60"}`}
                  >
                    <option value="" disabled className="bg-[#1a1a18]">
                      {!form.date ? "Elige fecha primero" : closedDay ? "Cerrado" : "Hora"}
                    </option>
                    {availableHours.map((h) => (
                      <option key={h} value={h} className="bg-[#1a1a18]">{h}</option>
                    ))}
                  </select>
                  {submitted && errors.time && <p className="font-body text-xs text-red-400">{errors.time}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/50 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#c9531f]" /> Personas
                  </label>
                  <select
                    value={form.people}
                    onChange={(e) => setForm({ ...form, people: e.target.value })}
                    className={`flex h-9 w-full border px-3 py-1 text-sm font-body focus:outline-none transition-colors appearance-none bg-[#111110] text-[#f5f0e8] ${submitted && errors.people ? "border-red-500" : "border-white/[0.12] focus:border-[#c9531f]/60"}`}
                  >
                    <option value="" disabled className="bg-[#1a1a18]">N.º</option>
                    {PEOPLE.map((p) => (
                      <option key={p} value={p} className="bg-[#1a1a18]">{p} {p === "1" ? "persona" : "personas"}</option>
                    ))}
                  </select>
                  {submitted && errors.people && <p className="font-body text-xs text-red-400">{errors.people}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-heading text-[10px] tracking-widest uppercase text-[#f5f0e8]/50 flex items-center gap-2">
                  Comentarios <span className="text-[#f5f0e8]/25 normal-case tracking-normal font-body">(opcional)</span>
                </label>
                <textarea
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  rows={3}
                  className="flex w-full border px-3 py-2 text-sm bg-[#111110] border-white/[0.12] text-[#f5f0e8] placeholder:text-[#f5f0e8]/25 font-body focus:border-[#c9531f]/60 focus:outline-none transition-colors resize-none"
                  placeholder="Alergias, ocasión especial, peticiones..." />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#c9531f] cursor-pointer shrink-0"
                />
                <span className="font-body text-xs text-[#f5f0e8]/50 group-hover:text-[#f5f0e8]/70 transition-colors">
                  He leído y acepto la{" "}
                  <a href="/politica-de-privacidad" target="_blank" className="text-[#c9531f] hover:underline">
                    Política de privacidad
                  </a>
                </span>
              </label>

              {submitted && errors.privacy && <p className="font-body text-xs text-red-400">{errors.privacy}</p>}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-[#c9531f] text-[#f5f0e8] font-heading text-sm tracking-widest uppercase hover:bg-[#c9531f]/85 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 disabled:hover:bg-[#c9531f]">
                {sending ? "Enviando..." : "Solicitar Reserva"}
              </button>
              <p className="text-center font-body text-xs text-[#f5f0e8]/30">
                También puedes llamarnos: 931 96 08 33 · 649 33 70 30
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}