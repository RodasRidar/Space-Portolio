import { navLinks, profile } from "@/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#top"
          className="font-display text-lg tracking-[-0.01em] text-ink"
        >
          {profile.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-body-muted transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvPath}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-dark transition-opacity hover:opacity-85"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
