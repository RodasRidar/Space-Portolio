"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const { profile, metrics } = t;

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-label="Introduction"
        variants={container}
        initial="hidden"
        animate="show"
        className="pb-24 pt-20 sm:pt-28"
      >
        <motion.p
          variants={rise}
          className="font-mono text-sm uppercase tracking-[0.02em] text-body-muted"
        >
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1
          variants={rise}
          className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-normal leading-none tracking-[-0.02em] text-ink"
        >
          {t.ui.hero.headline}
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-8 max-w-2xl text-lg leading-[1.4] text-body-muted"
        >
          {profile.summary}
        </motion.p>

        <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-dark transition-opacity hover:opacity-85"
          >
            {t.ui.hero.getInTouch}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-ink underline underline-offset-4 transition-colors hover:text-action-blue"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-ink underline underline-offset-4 transition-colors hover:text-action-blue"
          >
            GitHub
          </a>
        </motion.div>

        <motion.dl
          variants={rise}
          className="mt-24 grid grid-cols-1 gap-10 rounded-lg bg-deep-green px-8 py-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15 sm:px-12 sm:py-16"
        >
          {metrics.map((metric) => (
            <div key={metric.context} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <dt className="sr-only">{metric.label}</dt>
              <dd className="font-display text-5xl font-normal tracking-[-0.01em] text-on-dark sm:text-6xl">
                {metric.value}
              </dd>
              <dd className="mt-3 text-base text-white/80">{metric.label}</dd>
              <dd className="mt-2 font-mono text-xs uppercase tracking-[0.02em] text-white/60">
                {metric.context}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.section>
    </MotionConfig>
  );
}
