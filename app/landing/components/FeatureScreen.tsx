"use client";

import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";

interface FeatureScreenProps {
  /** Section label badge text */
  badge: string;
  /** Main heading */
  title: string;
  /** Highlighted part of heading (rendered in accent color) */
  titleAccent: string;
  /** Description paragraph */
  description: string;
  /** List of bullet points / highlights */
  highlights: {
    icon: React.ReactNode;
    text: string;
  }[];
  /** Path to illustration image */
  imageSrc: string;
  /** Alt text for illustration */
  imageAlt: string;
  /** Whether illustration appears on the right (default) or left */
  imagePosition?: "left" | "right";
  /** Accent color classes */
  accentColor: {
    gradient: string;       // e.g. "from-emerald-500 to-teal-500"
    badge: string;          // e.g. "bg-emerald-50 border-emerald-100 text-emerald-600"
    text: string;           // e.g. "text-emerald-600"
    glow: string;           // e.g. "bg-emerald-200/40"
    iconBg: string;         // e.g. "bg-emerald-50 text-emerald-600"
    border: string;         // e.g. "border-emerald-100/50"
    shadow: string;         // e.g. "shadow-emerald-100/30"
  };
}

export default function FeatureScreen({
  badge,
  title,
  titleAccent,
  description,
  highlights,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  accentColor,
}: FeatureScreenProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const contentBlock = (
    <div
      className={`space-y-8 transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : imagePosition === "right"
          ? "opacity-0 -translate-x-16"
          : "opacity-0 translate-x-16"
      }`}
    >
      {/* Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${accentColor.badge}`}
      >
        <span className="text-sm font-bold uppercase tracking-widest">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
        {title} <br />
        <span className={accentColor.text}>{titleAccent}</span>
      </h2>

      {/* Description */}
      <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
        {description}
      </p>

      {/* Highlights */}
      <div className="space-y-4 pt-2">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${400 + index * 150}ms` }}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${accentColor.iconBg}`}
            >
              {item.icon}
            </div>
            <span className="text-base lg:text-lg font-semibold text-slate-700">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const imageBlock = (
    <div
      className={`relative transition-all duration-1000 ease-out delay-200 ${
        isVisible
          ? "opacity-100 translate-x-0 scale-100"
          : imagePosition === "right"
          ? "opacity-0 translate-x-16 scale-95"
          : "opacity-0 -translate-x-16 scale-95"
      }`}
    >
      <div className="relative w-full aspect-square max-w-xl mx-auto">
        {/* Glow */}
        <div
          className={`absolute inset-0 ${accentColor.glow} rounded-[3rem] blur-2xl scale-90 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`relative bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] border ${accentColor.border} p-6 lg:p-8 shadow-2xl ${accentColor.shadow}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={600}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
