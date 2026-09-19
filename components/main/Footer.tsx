"use client";

import Reveal from "@/components/sub/Reveal";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const { profile, languages, education, certifications, ui } = t;

  return (
    <footer id="contact" className="scroll-mt-20 bg-primary text-on-dark">
      <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-20 sm:pt-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.02em] text-coral">
            04 · {ui.sections.contact}
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-normal leading-[1.1] tracking-[-0.01em] text-on-dark sm:text-5xl">
            {ui.footer.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-[1.4] text-white/70">
            {ui.footer.subhead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-85"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white underline underline-offset-4 transition-colors hover:text-white/70"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-16 space-y-2 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-[0.02em] text-muted">
            <p>
              {ui.footer.languagesLabel} · {languages}
            </p>
            <p>
              {ui.footer.educationLabel} · {education}
            </p>
            <p>
              {ui.footer.certificationsLabel} · {certifications}
            </p>
          </div>
          <p className="mt-10 text-xs text-muted">© 2026 {profile.name}</p>
        </Reveal>
      </div>
    </footer>
  );
}
