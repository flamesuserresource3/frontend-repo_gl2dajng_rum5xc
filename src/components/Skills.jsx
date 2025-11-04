import React from 'react';

const Skill = ({ name }) => (
  <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 border border-white/10">
    {name}
  </span>
);

const SkillGroup = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((i) => (
        <Skill key={i} name={i} />
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-teal-300/90 text-sm font-medium">Capabilities</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            I design, build, and ship production apps across web and mobile with scalable systems and polished UX.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillGroup
            title="Frontend"
            items={[
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Framer Motion',
              'Vite',
              'Shadcn/UI',
              'Redux / Zustand',
            ]}
          />
          <SkillGroup
            title="Mobile"
            items={['React Native', 'Expo', 'iOS', 'Android', 'Native Modules', 'App Store / Play Store']}
          />
          <SkillGroup
            title="Backend & DevOps"
            items={[
              'Node.js',
              'FastAPI',
              'MongoDB',
              'PostgreSQL',
              'REST / GraphQL',
              'Auth (JWT/OAuth)',
              'CI/CD',
              'Docker',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
