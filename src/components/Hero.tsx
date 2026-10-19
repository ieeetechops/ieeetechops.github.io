import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { flow, links, stats } from "../data/site";
import { Container, Counter, GithubIcon, ease } from "./ui";

const lines = ["Sürdürülebilir altyapı.", "Belgelenmiş süreçler.", "Devredilebilir sistemler."];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % flow.length), 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <motion.div
        aria-hidden="true"
        className="absolute -top-56 left-1/4 -z-10 h-[40rem] w-[40rem] rounded-full bg-ieee/30 blur-[140px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 50, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-ieee-light/15 blur-[120px]"
        animate={{ x: [0, -60, 30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ieee-light opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ieee-light" />
            </span>
            IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu
          </motion.p>

          <h1 className="mt-8 font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
            {lines.map((line, i) => (
              <span key={line} className="-mb-[0.2em] block overflow-hidden pb-[0.2em]">
                <motion.span
                  className={`block ${i === lines.length - 1 ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.15, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            IEEE İKÇÜ'nün dijital servislerini, entegrasyonlarını ve teknik bilgisini kişilere bağımlı olmadan
            sürdürülebilir hale getiren ekibiz. Yeni sistemler kurar, mevcutları standartlaştırır ve sonraki ekibe güvenle
            devrederiz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#project-lab"
              className="group inline-flex items-center gap-2 rounded-full bg-ieee px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ieee/30 transition hover:bg-[#0072b4]"
            >
              Project Lab'i keşfet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub'da incele
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="relative"
        >
          <div aria-hidden="true" className="absolute -inset-px rounded-3xl bg-gradient-to-b from-ieee-light/40 via-white/10 to-transparent" />
          <div className="relative rounded-3xl bg-navy-900/90 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">TechOps yaşam döngüsü</p>
              <span className="font-mono text-xs text-slate-400">
                {String(active + 1).padStart(2, "0")} / {String(flow.length).padStart(2, "0")}
              </span>
            </div>

            <div className="relative mt-6">
              <div aria-hidden="true" className="absolute top-7 bottom-7 left-7 w-px bg-white/10">
                <motion.div
                  className="w-full bg-gradient-to-b from-ieee-light to-ieee"
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
                    <li key={step.label} className="relative flex items-center gap-4 rounded-xl p-2">
                      {current && (
                        <motion.span
                          layoutId="flow-active"
                          className="absolute inset-0 rounded-xl bg-white/5"
                          transition={{ duration: 0.5, ease }}
                        />
                      )}
                      <motion.span
                        animate={{ scale: current ? 1.08 : 1 }}
                        className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-colors duration-500 ${
                          reached ? "border-ieee-light/50 bg-ieee text-white" : "border-white/10 bg-navy-800 text-slate-500"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>
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
          </div>
        </motion.div>
      </Container>

      <Container className="mt-20">
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4"
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
