"use client";

import Reveal from "@/components/sub/Reveal";
import SectionHeading from "@/components/sub/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" className="scroll-mt-20 pb-28">
      <SectionHeading index="03" title={t.ui.sections.projects} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.06}
            className="rounded-sm bg-soft-stone p-8"
          >
            <h3 className="font-display text-[2rem] font-normal leading-[1.2] tracking-[-0.01em] text-ink">
              {project.name}
            </h3>
            <p className="mt-4 text-base leading-[1.5] text-body-muted">
              {project.description}
            </p>
            <p className="mt-8 border-t border-ink/10 pt-4 font-mono text-xs uppercase tracking-[0.02em] text-body-muted">
              {project.tech.join(" · ")}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
