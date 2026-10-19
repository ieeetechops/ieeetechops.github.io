import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { flow, links, stats } from "../data/site";
import { Container, Counter, GithubIcon, ease } from "./ui";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % flow.length), 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div aria-hidden="true" className="absolute -top-56 left-1/4 -z-10 h-[40rem] w-[40rem] rounded-full bg-ieee/25 blur-[140px]" />
      <div aria-hidden="true" className="absolute top-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-ieee-light/10 blur-[120px]" />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-sm font-semibold tracking-wider text-ieee-light uppercase"
          >
            IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 font-display text-4xl leading-[1.15] font-bold tracking-tight text-white sm:text-5xl xl:text-6xl"
          >
            Teknik Operasyonlar ve Altyapı Dairesi Başkanlığı
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            TechOps, IEEE İKÇÜ'nün dijital altyapısını, yazılım projelerini ve teknik süreçlerini yürüten birimdir. Kolun
            kullandığı sistemlerin güvenli, belgelenmiş ve yönetim dönemleri arasında devredilebilir şekilde işletilmesinden
            sorumludur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#project-lab"
              className="group inline-flex items-center gap-2 rounded-md bg-ieee px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0072b4]"
            >
              Project Lab
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="rounded-xl border border-white/10 bg-navy-900/90 p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Çalışma modeli</p>
            <span className="font-mono text-xs text-slate-400">
              {String(active + 1).padStart(2, "0")} / {String(flow.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative mt-6">
            <div aria-hidden="true" className="absolute top-7 bottom-7 left-7 w-px bg-white/10">
              <motion.div
                className="w-full bg-ieee-light"
                animate={{ height: `${(active / (flow.length - 1)) * 100}%` }}
                transition={{ duration: 0.6, ease }}
              />
            </div>
            <ol className="space-y-1">
              {flow.map((step, i) => {
                const Icon = step.icon;
                const reached = i <= active;
                const current = i === active;
                return (
                  <li key={step.label} className="relative flex items-center gap-4 rounded-md p-2">
                    {current && (
                      <motion.span
                        layoutId="flow-active"
                        className="absolute inset-0 rounded-md bg-white/5"
                        transition={{ duration: 0.5, ease }}
                      />
                    )}
                    <span
                      className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-md border transition-colors duration-500 ${
                        reached ? "border-ieee-light/50 bg-ieee text-white" : "border-white/10 bg-navy-800 text-slate-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="relative">
                      <p className={`text-sm font-semibold transition-colors duration-500 ${reached ? "text-white" : "text-slate-500"}`}>
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-400">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.div>
      </Container>

      <Container className="mt-20">
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-navy-950/80 p-6 backdrop-blur">
              <dt className="mt-1 text-sm text-slate-400">{s.label}</dt>
              <dd className="order-first font-display text-3xl font-bold text-white sm:text-4xl">
                <Counter to={s.value} prefix={s.prefix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
