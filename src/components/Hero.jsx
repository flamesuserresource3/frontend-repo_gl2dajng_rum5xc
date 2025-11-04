import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
  >
    {children}
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 lg:pt-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <Rocket className="h-4 w-4 text-teal-300" />
            <span>Web & Mobile App Developer</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I build modern, high‑performance web and mobile experiences.
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
            I craft delightful products with a blend of clean UX, robust engineering, and playful 3D touches.
            From design to deployment, I turn ideas into polished, production‑ready apps.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-medium text-slate-900 hover:bg-teal-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink href="https://github.com/" label="GitHub">
              <Github className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://linkedin.com/" label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="#contact" label="Email">
              <Mail className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  );
}
