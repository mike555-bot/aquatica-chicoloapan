"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const whatsappNumber = "";

const whatsappMessage =
  "Hola, vi la página de Aquatica Chicoloapan y me gustaría recibir información sobre clases, horarios y costos.";

const programs = [
  {
    title: "Bebés",
    label: "Primeros pasos",
    description:
      "Estimulación acuática y adaptación al agua desde los primeros meses.",
    image: "/images/programa-bebes.png",
  },
  {
    title: "Niños",
    label: "Aprende jugando",
    description:
      "Clases dinámicas para desarrollar seguridad, técnica y confianza.",
    image: "/images/programa-ninos.png",
  },
  {
    title: "Jóvenes",
    label: "Mejora constante",
    description:
      "Técnica, resistencia y disciplina para avanzar hacia nuevos niveles.",
    image: "/images/programa-jovenes.png",
  },
  {
    title: "Adultos",
    label: "Nunca es tarde",
    description:
      "Aprende desde cero o perfecciona tu técnica con acompañamiento.",
    image: "/images/programa-adultos.png",
  },
];

const heroBenefits = [
  {
    title: "+30 años",
    text: "formando generaciones",
  },
  {
    title: "Todos",
    text: "los niveles y edades",
  },
  {
    title: "Familias",
    text: "aprendiendo juntas",
  },
];

const activities = [
  {
    title: "Natación",
    description: "Clases para todas las edades y diferentes niveles.",
    image: "/images/actividad-natacion.png",
  },
  {
    title: "Taekwondo",
    description: "Disciplina, coordinación, fuerza y desarrollo físico.",
    image: "/images/actividad-taekwondo.png",
  },
  {
    title: "Jazz",
    description: "Movimiento, expresión corporal, coordinación y ritmo.",
    image: "/images/actividad-jazz.png",
  },
  {
    title: "Zumba",
    description: "Ejercicio dinámico, música y actividad física.",
    image: "/images/actividad-zumba.png",
  },
  {
    title: "CrossFit",
    description: "Entrenamiento funcional para fuerza y condición física.",
    image: "/images/actividad-crossfit.png",
  },
  {
    title: "Yoga",
    description: "Movilidad, equilibrio, relajación y bienestar.",
    image: "/images/actividad-yoga.png",
  },
];

const facilities = [
  {
    title: "Alberca techada",
    description:
      "Un espacio amplio y cómodo para clases y entrenamiento durante todo el año.",
    image: "/images/instalacion-alberca.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Vestidores",
    description:
      "Espacios cómodos para prepararte antes y después de cada actividad.",
    image: "/images/instalacion-vestidores.png",
    className: "",
  },
  {
    title: "Recepción",
    description:
      "Atención cercana para resolver dudas, horarios y procesos de inscripción.",
    image: "/images/instalacion-recepcion.png",
    className: "",
  },
  {
    title: "Área de descanso",
    description:
      "Un espacio pensado para acompañantes y familias durante las actividades.",
    image: "/images/instalacion-descanso.png",
    className: "md:col-span-2",
  },
];

const levels = [
  {
    number: "01",
    title: "Principiante",
    description:
      "Adaptación al agua, respiración, flotación y fundamentos básicos.",
  },
  {
    number: "02",
    title: "Intermedio",
    description:
      "Mejora de técnica, coordinación, resistencia y dominio de estilos.",
  },
  {
    number: "03",
    title: "Avanzado",
    description:
      "Perfeccionamiento técnico, mayor resistencia y habilidades avanzadas.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`
    : "#contacto";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current;

    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>(
      "[data-carousel-card]",
    );

    const gap = 24;

    const amount = firstCard
      ? firstCard.offsetWidth + gap
      : container.clientWidth * 0.8;

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100">
              <span className="text-2xl font-bold text-cyan-600">≋</span>
            </div>

            <div className="leading-none">
              <p className="text-2xl font-extrabold tracking-tight text-blue-900">
                AQUATICA
              </p>

              <p className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-cyan-500">
                CHICOLOAPAN
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#inicio"
              className="text-sm font-semibold text-cyan-600 transition hover:text-blue-900"
            >
              Inicio
            </a>

            <a
              href="#natacion"
              className="text-sm font-semibold text-slate-700 transition hover:text-cyan-600"
            >
              Natación
            </a>

            <a
              href="#actividades"
              className="text-sm font-semibold text-slate-700 transition hover:text-cyan-600"
            >
              Actividades
            </a>

            <a
              href="#instalaciones"
              className="text-sm font-semibold text-slate-700 transition hover:text-cyan-600"
            >
              Instalaciones
            </a>

            <a
              href="#nosotros"
              className="text-sm font-semibold text-slate-700 transition hover:text-cyan-600"
            >
              Nosotros
            </a>

            <a
              href="#contacto"
              className="text-sm font-semibold text-slate-700 transition hover:text-cyan-600"
            >
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="hidden rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-600 lg:inline-flex"
          >
            Pedir informes
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-6">
            {[
              ["Inicio", "#inicio"],
              ["Natación", "#natacion"],
              ["Actividades", "#actividades"],
              ["Instalaciones", "#instalaciones"],
              ["Nosotros", "#nosotros"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 font-semibold text-slate-800 last:border-b-0"
              >
                {label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-teal-500 px-6 py-4 text-center text-sm font-bold text-white"
            >
              Pedir informes
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-[#0a4a78] pt-20"
      >
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-cyan-500/10 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
              Aquatica Chicoloapan
            </p>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Aprende a nadar
              <span className="mt-2 block text-cyan-300">a tu ritmo</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-blue-50 sm:text-xl">
              Clases para bebés, niños, jóvenes y adultos, en un ambiente
              seguro, profesional y pensado para disfrutar cada etapa del
              aprendizaje.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#natacion"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Ver clases →
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-600"
              >
                Pedir informes
              </a>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              {heroBenefits.map((item) => (
                <div key={item.title}>
                  <p className="text-2xl font-bold text-white">{item.title}</p>

                  <p className="mt-1 text-sm leading-6 text-blue-100">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-cyan-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl lg:max-w-[580px] lg:justify-self-end">
              <div className="relative aspect-[4/5] min-h-[480px]">
                <Image
                  src="/images/hero-aquatica.png"
                  alt="Clase de natación en Aquatica Chicoloapan"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="max-w-[290px] rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                      Más que un deporte
                    </p>

                    <p className="mt-2 text-lg font-extrabold text-blue-950">
                      Confianza, salud y bienestar dentro y fuera del agua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="natacion" className="scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            Nuestros programas
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
            Clases para cada etapa de la vida
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Programas diseñados para acompañar a cada alumno desde sus primeros
            contactos con el agua hasta el perfeccionamiento técnico.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <article
                key={program.title}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-60">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cyan-600">
                    {program.label}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-blue-950">
                    {program.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {program.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#f3fbff] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              ¿Por qué elegirnos?
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              Aquatica Chicoloapan
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Un espacio pensado para aprender, mejorar y disfrutar del agua en
              un ambiente familiar.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["30+", "Experiencia", "Más de tres décadas de trayectoria."],
              [
                "✓",
                "Instructores capacitados",
                "Acompañamiento durante cada etapa.",
              ],
              [
                "↗",
                "Todos los niveles",
                "Desde principiantes hasta alumnos avanzados.",
              ],
              [
                "≋",
                "Ambiente familiar",
                "Actividades para diferentes edades.",
              ],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-cyan-100 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 font-bold text-cyan-700">
                  {icon}
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-blue-950">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section id="actividades" className="scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
                Nuestras actividades
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                Mucho más que natación
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Diferentes opciones para mantenerte activo, aprender y disfrutar
                en familia.
              </p>
            </div>

            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-blue-950 transition hover:bg-cyan-50"
                aria-label="Actividad anterior"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-xl text-white transition hover:bg-cyan-600"
                aria-label="Actividad siguiente"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3"
          >
            {activities.map((activity) => (
              <article
                key={activity.title}
                data-carousel-card
                className="group relative min-h-[390px] min-w-[88%] snap-start overflow-hidden rounded-[2rem] bg-slate-200 sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#052f51] via-[#052f51]/30 to-transparent" />

                <div className="absolute bottom-0 p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    Actividad
                  </p>

                  <h3 className="mt-2 text-3xl font-extrabold">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-blue-50">
                    {activity.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALACIONES */}
      <section
        id="instalaciones"
        className="scroll-mt-20 bg-[#f4fbff] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            Nuestras instalaciones
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
            Un espacio diseñado para tu bienestar
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Espacios pensados para brindar comodidad a alumnos y familias
            durante cada visita.
          </p>

          <div className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-4">
            {facilities.map((facility) => (
              <article
                key={facility.title}
                className={`group relative overflow-hidden rounded-[2rem] bg-slate-200 ${facility.className}`}
              >
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-extrabold">{facility.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-blue-50">
                    {facility.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NIVELES */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Niveles de natación
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              Avanza a tu ritmo
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              El objetivo es avanzar de forma progresiva conforme desarrollas
              confianza y técnica.
            </p>
          </div>

          <div className="space-y-5">
            {levels.map((level) => (
              <article
                key={level.number}
                className="grid gap-5 rounded-[2rem] border border-slate-200 p-7 transition hover:border-cyan-200 hover:shadow-lg sm:grid-cols-[90px_1fr] sm:items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-50 text-2xl font-extrabold text-cyan-600">
                  {level.number}
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-blue-950">
                    {level.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {level.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section
        id="nosotros"
        className="scroll-mt-20 bg-[#073b68] py-24 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Nosotros
            </p>

            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Un lugar para aprender, crecer y disfrutar
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Aquatica Chicoloapan es un espacio dedicado a actividades
              acuáticas y deportivas para diferentes edades. Buscamos combinar
              aprendizaje, disciplina, salud y convivencia dentro de un ambiente
              cercano y familiar.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <p className="text-5xl font-extrabold text-cyan-300">30+</p>

              <p className="mt-3 text-lg text-blue-100">
                años de experiencia
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <p className="text-5xl font-extrabold text-cyan-300">6+</p>

              <p className="mt-3 text-lg text-blue-100">
                actividades disponibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
                Contacto
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                Ven a conocernos
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Llámanos para conocer horarios, disponibilidad y opciones de
                inscripción.
              </p>

              <div className="mt-10 space-y-5">
                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-600">
                    Teléfono
                  </p>

                  <a
                    href="tel:5559218329"
                    className="mt-2 block text-2xl font-extrabold text-blue-950"
                  >
                    55 5921 8329
                  </a>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-600">
                    Horario
                  </p>

                  <p className="mt-2 text-xl font-bold text-blue-950">
                    Lunes a viernes
                  </p>

                  <p className="mt-1 text-slate-600">9:00 a 19:00</p>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-600">
                    Dirección
                  </p>

                  <p className="mt-2 leading-7 text-slate-700">
                    Guadalupe #1-A, Barrio San Antonio
                    <br />
                    San Vicente Chicoloapan
                    <br />
                    Estado de México
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:5559218329"
                  className="rounded-full bg-blue-950 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-cyan-600"
                >
                  Llamar ahora
                </a>

                <a
                  href={whatsappUrl}
                  target={whatsappNumber ? "_blank" : undefined}
                  rel={whatsappNumber ? "noreferrer" : undefined}
                  className="rounded-full bg-teal-500 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-teal-600"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
              <iframe
                title="Mapa Aquatica Chicoloapan"
                src="https://www.google.com/maps?q=Guadalupe%201-A%20Barrio%20San%20Antonio%20San%20Vicente%20Chicoloapan%20Estado%20de%20Mexico&output=embed"
                className="h-[600px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#052f51] py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="text-2xl font-extrabold">AQUATICA</p>

            <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-cyan-300">
              CHICOLOAPAN
            </p>

            <p className="mt-5 max-w-xs leading-7 text-blue-100">
              Actividad, aprendizaje y bienestar para toda la familia.
            </p>
          </div>

          <div>
            <p className="font-bold">Ubicación</p>

            <p className="mt-4 leading-7 text-blue-100">
              Guadalupe #1-A
              <br />
              Barrio San Antonio
              <br />
              San Vicente Chicoloapan
              <br />
              Estado de México
            </p>
          </div>

          <div>
            <p className="font-bold">Contacto</p>

            <a
              href="tel:5559218329"
              className="mt-4 block text-blue-100 transition hover:text-white"
            >
              55 5921 8329
            </a>

            <p className="mt-2 text-blue-100">
              Lunes a viernes
              <br />
              9:00 a 19:00
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-7 text-sm text-blue-200 lg:px-8">
          © 2026 Aquatica Chicoloapan. Todos los derechos reservados.
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={whatsappUrl}
        target={whatsappNumber ? "_blank" : undefined}
        rel={whatsappNumber ? "noreferrer" : undefined}
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a]"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-8 w-8 fill-current"
        >
          <path d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.1.56 4.15 1.63 5.95L4 29l8.36-1.6a12.1 12.1 0 0 0 3.67.57h.01C22.68 27.97 28 22.64 28 16.07S22.68 3 16.04 3Zm0 22.82h-.01a10.03 10.03 0 0 1-3.45-.61l-.49-.18-4.96.95.96-4.82-.2-.5a9.78 9.78 0 0 1-1.68-5.49c0-5.42 4.41-9.83 9.84-9.83 5.42 0 9.83 4.41 9.83 9.83 0 5.43-4.41 9.84-9.84 9.84Zm5.4-7.35c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>
  );
}