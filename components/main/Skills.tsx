import Reveal from "@/components/sub/Reveal";
import SectionHeading from "@/components/sub/SectionHeading";
import { skillGroups } from "@/constants";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 pb-28">
      <SectionHeading index="02" title="Skills" />
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.06}
            className="border-t border-hairline pt-6"
          >
            <h3 className="font-mono text-sm uppercase tracking-[0.02em] text-body-muted">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-base leading-[1.5] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
