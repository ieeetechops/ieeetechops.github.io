import { ArrowRight } from "lucide-react";
import { catalogAreas, criteria, links, stages } from "../data/site";
import { Container, Reveal, SectionHeading, useReveal } from "./ui";

export default function ProjectLab() {
  const lineRef = useReveal<HTMLDivElement>();

  return (
    <section id="project-lab" className="relative isolate overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute top-1/3 -left-60 -z-10 h-[48rem] w-[48rem] bg-[radial-gradient(closest-side,rgb(0_98_155/0.18),transparent)]" />

      <Container>
        <SectionHeading
          dark
          eyebrow="Project Lab"
          title="IEEE Project Lab"
          description="Project Lab, TechOps bünyesinde yürütülen öğrenci proje geliştirme programıdır. Öğrenciler iki veya üç kişilik ekipler halinde, proje kataloğundan seçtikleri ya da kendi önerdikleri bir mühendislik problemi üzerinde 14 haftalık bir dönem boyunca çalışır. Her projenin ayrı bir GitHub deposu, teknik belgeleri, testleri ve dönem içinde düzenli sunumları bulunur."
        />

        {/* Kabul ölçütleri */}
        <Reveal className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-white">Proje kabul ölçütleri</h3>
          <p className="mt-2 max-w-3xl text-slate-400">
            Proje önerileri Değerlendirme Kurulu tarafından incelenir. Projelerin IEEE İKÇÜ'nün iç sistemlerine bağlı olması
            gerekmez; kola, üniversiteye veya açık kaynak topluluğuna katkı sağlayan projeler de kabul edilir.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {criteria.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal
                key={c.title}
                delay={i * 0.1}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-ieee text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">{c.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Proje kataloğu */}
        <Reveal className="mt-24 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">Proje kataloğu</h3>
            <p className="mt-2 max-w-3xl text-slate-400">
              Katalog, 15 mühendislik alanında 60 proje içerir. Her proje sayfasında problem tanımı, araştırma sorusu,
              deney tasarımı, başarı ölçütleri, teknik terimler sözlüğü ve 14 haftalık çalışma planı yer alır.
            </p>
          </div>
          <a
            href={links.catalog}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ieee-light hover:underline"
          >
            Kataloğu incele →
          </a>
        </Reveal>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
          {catalogAreas.map((a) => (
            <li key={a.code} className="flex gap-4 bg-navy-950 p-5">
              <span className="font-mono text-sm font-semibold text-ieee-light">{a.code}</span>
              <div>
                <p className="text-sm font-medium text-white">{a.title}</p>
                <p className="mt-1 text-xs text-slate-500">{a.count} proje</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Proje dönemi */}
        <Reveal className="mt-24">
          <h3 className="font-display text-2xl font-semibold text-white">Proje dönemi</h3>
          <p className="mt-2 text-slate-400">Her aşama, Değerlendirme Kurulu'nun onayladığı bir değerlendirme kapısıyla tamamlanır.</p>
        </Reveal>
        <div className="relative mt-12">
          <div ref={lineRef} data-reveal aria-hidden="true" className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-white/10 lg:block">
            <div className="reveal-line h-full origin-left bg-ieee-light/60" />
          </div>
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {stages.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={0.2 + i * 0.2}
                className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-md border border-ieee-light/40 bg-navy-900 font-mono text-sm font-semibold text-ieee-light">
                  {s.gate}
                </span>
                <div className="lg:mt-5">
                  <p className="text-xs font-medium text-slate-500">{s.week}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">{s.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-16 flex flex-wrap gap-4">
          <a
            href={links.propose}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-slate-100"
          >
            Proje önerisi gönder
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={links.projectLab}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Program kuralları
          </a>
          <a
            href={links.rubric}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            Değerlendirme ölçütleri →
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
