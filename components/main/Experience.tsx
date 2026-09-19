"use client";

import Reveal from "@/components/sub/Reveal";
import SectionHeading from "@/components/sub/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className="scroll-mt-20 pb-28">
      <SectionHeading index="01" title={t.ui.sections.experience} />
      <ol className="mt-14">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="border-t border-hairline py-10 first:border-t-0 first:pt-0"
          >
            <Reveal className="grid gap-4 sm:grid-cols-[11rem_1fr] sm:gap-10">
              <p className="font-mono text-sm uppercase tracking-[0.02em] text-muted sm:pt-1.5">
                {job.period}
              </p>
              <div>
                <h3 className="font-display text-2xl font-normal leading-[1.3] text-ink">
                  {job.role}
                </h3>
                <p className="mt-1 text-base text-body-muted">
                  {job.company} · {job.context}
                </p>
                <ul className="mt-5 max-w-[65ch] space-y-2.5">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-base leading-[1.5] text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[11px] h-px w-3 shrink-0 bg-muted"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-xl border border-border-light px-3 py-1 font-mono text-xs text-body-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
