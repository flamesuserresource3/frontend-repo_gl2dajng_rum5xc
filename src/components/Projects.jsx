import React from 'react';
import { ExternalLink, Globe, Smartphone, Code } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Dashboard',
    icon: Globe,
    tagline: 'Analytics-first web app',
    description:
      'A responsive dashboard with real-time charts, role-based access, and dark mode. Built with React, Tailwind, and FastAPI.',
    tech: ['React', 'Tailwind', 'FastAPI', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Mobile Fitness App',
    icon: Smartphone,
    tagline: 'Cross-platform mobile',
    description:
      'A React Native app with offline tracking, streaks, and Apple/Google auth. Ships to iOS and Android from a single codebase.',
    tech: ['React Native', 'Expo', 'Zustand', 'Firebase'],
    link: '#',
  },
  {
    title: 'AI Content Assistant',
    icon: Code,
    tagline: 'Full‑stack product',
    description:
      'Generates, edits, and schedules content. Features prompt templates, team collaboration, and Stripe billing.',
    tech: ['Next.js', 'OpenAI', 'Stripe', 'MongoDB'],
    link: '#',
  },
];

const TechBadge = ({ label }) => (
  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
    {label}
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-teal-300/90 text-sm font-medium">Selected Work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A mix of web platforms, mobile apps, and full‑stack products. Clean UI, solid architecture, and delightful details.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, icon: Icon, tagline, description, tech, link }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-xs text-white/70">{tagline}</p>
                </div>
              </div>

              <p className="mt-4 text-white/80 text-sm">{description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={link}
                  className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200"
                >
                  View project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
