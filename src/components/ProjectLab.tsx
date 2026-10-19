import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";
import { criteria, links, stages, tracks } from "../data/site";
import { Container, Reveal, SectionHeading, SpotlightCard, ease } from "./ui";

export default function ProjectLab() {
  return (
    <section id="project-lab" className="relative isolate overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden="true" className="absolute top-1/3 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-ieee/20 blur-[140px]" />

      <Container>
        <SectionHeading
          dark
          eyebrow="IEEE Project Lab"
          title={
            <>
              Gerçek problemler. <span className="text-gradient">Ölçülebilir sonuçlar.</span>
            </>
          }
          description="Project Lab tek bir yazılım değil; TechOps bünyesinde öğrencilerin özgün mühendislik problemlerini çözmek için çalıştığı bir proje geliştirme programı. Her projenin ayrı GitHub deposu, teknik belgeleri, testleri ve düzenli sunumları olur."
        />

        {/* Ekip dağılımı */}
        <Reveal className="mt-16">
          <p className="text-sm text-slate-400">
            Örnek: TechOps'a 6 stajyer katıldığında herkesi tek bir ürüne atamak yerine{" "}
            <span className="font-semibold text-white">3 ekip, 3 farklı problem</span>.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 0.1}>
                <SpotlightCard dark className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-ieee-light/10 text-ieee-light">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="flex items-center gap-1.5" aria-label="2 kişilik ekip">
                      {[0, 1].map((k) => (
                        <span key={k} className="h-2.5 w-2.5 rounded-full bg-ieee-light/70" />
                      ))}
                      <span className="ml-1 text-xs text-slate-400">2 kişi</span>
                    </span>
                  </div>
                  <p className="mt-6 text-xs font-semibold tracking-wider text-ieee-light uppercase">{t.type}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{t.text}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* İlke */}
        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <figure className="relative">
              <Quote className="h-10 w-10 text-ieee-light/40" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-2xl leading-snug font-semibold text-white sm:text-3xl">
                Sadece bir model eğitip <span className="text-gradient">“%95 accuracy aldık”</span> demek yeterli değil.
              </blockquote>
              <figcaption className="mt-6 leading-relaxed text-slate-400">
                Her proje gerçekten çözülmesi gereken bir probleme, ölçülebilir bir sonuca ve mümkünse mevcut çözümlerden
                ayrılan bir yaklaşıma sahip olmalı. Projelerin IEEE Hub'a bağlı olması gerekmez; IEEE'ye, üniversiteye veya
                daha geniş mühendislik topluluğuna fayda sağlayabilir.
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {criteria.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ieee text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{c.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{c.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Yaşam döngüsü */}
        <Reveal className="mt-24">
          <h3 className="font-display text-2xl font-semibold text-white">14 haftalık proje döngüsü</h3>
          <p className="mt-2 text-slate-400">Her aşama, Değerlendirme Kurulu'nun onayladığı bir kapıyla biter.</p>
        </Reveal>
        <div className="relative mt-12">
          <div aria-hidden="true" className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-white/10 lg:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-ieee via-ieee-light to-ieee"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease }}
            />
          </div>
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {stages.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.25, ease }}
                className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ieee-light/40 bg-navy-900 font-mono text-sm font-semibold text-ieee-light shadow-[0_0_24px_rgba(0,181,226,0.25)]">
                  {s.gate}
                </span>
                <div className="lg:mt-5">
                  <p className="text-xs font-medium text-slate-500">{s.week}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">{s.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-16 flex flex-wrap gap-4">
          <a
            href={links.propose}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-slate-100"
          >
            Proje öner
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={links.projectLab}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Yönetişim ve kurallar
          </a>
          <a
            href={links.rubric}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            Değerlendirme ölçütleri →
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
