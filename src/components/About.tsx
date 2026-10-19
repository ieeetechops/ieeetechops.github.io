import { motion } from "motion/react";
import { Check } from "lucide-react";
import { links, principles } from "../data/site";
import { Container, Reveal, SectionHeading, ease } from "./ui";

export default function About() {
  return (
    <section id="hakkimizda" className="bg-white py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Hakkımızda"
            title="TechOps nedir?"
            description="TechOps; IEEE İKÇÜ'nün dijital servislerini, entegrasyonlarını ve teknik bilgisini kişilere bağımlı olmadan sürdürülebilir hale getirir."
          />
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed">
              Yeni sistemler geliştirmenin yanında mevcut sistemleri standartlaştırır, belgeler ve sonraki ekibe güvenli
              şekilde devrederiz. Amacımız, her yeni yönetimin sistemi sıfırdan kurmak yerine mevcut yapının üzerine
              geliştirme yapabilmesi.
            </p>
            <a
              href={links.governance}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-ieee hover:underline"
            >
              Yönetişim modelimizi okuyun →
            </a>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h3 className="font-display text-lg font-semibold text-slate-900">Çalışma ilkelerimiz</h3>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {principles.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-ieee/30 hover:bg-white"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ieee text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
