import { motion } from "motion/react";
import { Check } from "lucide-react";
import { links, roadmap } from "../data/site";
import { Container, Reveal, SectionHeading, ease } from "./ui";

export default function Roadmap() {
  return (
    <section id="yol-haritasi" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          center
          eyebrow="Yol haritası"
          title="Dönem planı"
          description={
            <>
              Öncelikler; etki, aciliyet, bakım maliyeti, güvenlik ve ekip kapasitesi dikkate alınarak belirlenir. Güncel görevler{" "}
              <a href={links.roadmap} target="_blank" rel="noreferrer" className="font-semibold text-ieee hover:underline">
                GitHub'da
              </a>{" "}
              takip edilir.
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {roadmap.map((col, i) => {
            const done = col.items.filter((it) => it.done).length;
            const pct = Math.round((done / col.items.length) * 100);
            return (
              <Reveal key={col.phase} delay={i * 0.1}>
                <div className="h-full rounded-lg border border-slate-200 bg-slate-50/60 p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded px-3 py-1 text-xs font-semibold ${
                        i === 0 ? "bg-ieee text-white" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {col.phase}
                    </span>
                    <span className="font-mono text-sm text-slate-500">
                      {done}/{col.items.length}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">{col.title}</h3>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-ieee to-ieee-light"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease }}
                    />
                  </div>
                  <ul className="mt-6 space-y-3">
                    {col.items.map((it) => (
                      <li key={it.text} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border ${
                            it.done ? "border-ieee bg-ieee text-white" : "border-slate-300 bg-white"
                          }`}
                        >
                          {it.done && <Check className="h-3 w-3" />}
                        </span>
                        <span className={it.done ? "text-slate-400 line-through decoration-slate-300" : "text-slate-700"}>
                          {it.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
