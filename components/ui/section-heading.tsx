import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p className="mb-6 text-xs uppercase tracking-ritual text-bronze/80">
        {eyebrow}
      </p>
      <h2 className="font-serif text-5xl font-medium leading-[0.95] text-sand text-balance md:text-7xl lg:text-8xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-8 max-w-2xl text-base leading-8 text-sand/68 md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
