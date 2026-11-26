"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { BEFORE_AFTER, type BeforeAfterItem } from "@/lib/constants";

function Slider({ item }: { item: BeforeAfterItem }) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card">
      <div className="relative aspect-[4/3] select-none">
        <Image
          src={item.after}
          alt={`${item.title} — after`}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.title} — before`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `${pos}%` }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-neutral-950/80 px-3 py-1 text-xs font-semibold text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          After
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${item.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="p-5">
        <p className="text-xs uppercase tracking-widest text-red-500">
          {item.service}
        </p>
        <p className="font-semibold text-neutral-900">{item.title}</p>
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  if (BEFORE_AFTER.length === 0) return null;

  return (
    <Section bg="light-alt">
      <div className="mb-10 max-w-2xl md:mb-12">
        <Eyebrow>Real Results</Eyebrow>
        <H2 className="mb-6">Before &amp; After</H2>
        <Body muted className="mb-0">
          Drag the slider to see the difference our work makes.
        </Body>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {BEFORE_AFTER.map((item) => (
          <Slider key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}
