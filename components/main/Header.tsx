"use client";

import { navHrefs, type Locale } from "@/constants";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Header() {
  const { locale, setLocale, t } = useLanguage();

  const links = [
    { href: navHrefs.experience, label: t.ui.nav.experience },
    { href: navHrefs.skills, label: t.ui.nav.skills },
    { href: navHrefs.projects, label: t.ui.nav.projects },
    { href: navHrefs.contact, label: t.ui.nav.contact },
  ];

  const options: Locale[] = ["en", "es"];

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#top"
          className="font-display text-lg tracking-[-0.01em] text-ink"
        >
          {t.profile.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-body-muted transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}

          <div
            role="group"
            aria-label={locale === "en" ? "Cambiar idioma" : "Change language"}
            className="flex items-center rounded-full border border-hairline p-0.5 font-mono text-xs uppercase tracking-[0.02em]"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLocale(option)}
                aria-pressed={locale === option}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === option
                    ? "bg-primary text-on-dark"
                    : "text-body-muted hover:text-ink"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <a
            href={t.profile.cvPath}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-dark transition-opacity hover:opacity-85"
          >
            {t.ui.nav.downloadCv}
          </a>
        </nav>
      </div>
    </header>
  );
}
