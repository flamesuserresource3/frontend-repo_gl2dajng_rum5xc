import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const email = 'hello@example.com';
  const phone = '+1 (555) 000-0000';

  return (
    <section id="contact" className="w-full bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-teal-300/90 text-sm font-medium">Let’s collaborate</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Have a project in mind or want to discuss an opportunity? I’d love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a className="text-sm text-teal-300 hover:text-teal-200" href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a className="text-sm text-teal-300 hover:text-teal-200" href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Social</h3>
                <div className="flex gap-3 mt-1">
                  <a className="text-sm text-teal-300 hover:text-teal-200 underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="text-sm text-teal-300 hover:text-teal-200 underline" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6">
          <form
            className="grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent('Portfolio inquiry');
              const body = encodeURIComponent(
                `Hi,\n\nMy name is ${fd.get('name')}.\n\n${fd.get('message')}\n\nYou can reach me at ${fd.get('email')}.`
              );
              window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            }}
          >
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-3 font-medium text-slate-900 hover:bg-teal-400 transition-colors w-full sm:w-auto"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
