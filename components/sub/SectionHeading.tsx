export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="border-t border-hairline pt-10">
      <p
        aria-hidden="true"
        className="font-mono text-sm uppercase tracking-[0.02em] text-muted"
      >
        {index}
      </p>
      <h2 className="mt-4 font-display text-4xl font-normal leading-[1.1] tracking-[-0.01em] text-ink sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
