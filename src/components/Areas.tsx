import { areas } from "../data/site";
import { Container, Reveal, SectionHeading, SpotlightCard } from "./ui";

export default function Areas() {
  return (
    <section id="alanlar" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          center
          eyebrow="Çalışma alanları"
          title="Kolun dijital omurgasını işletiyoruz"
          description="Üyelikten etkinliklere, otomasyondan teknik hafızaya kadar IEEE İKÇÜ'nün ihtiyaç duyduğu teknik altyapıyı kuruyor ve sürdürüyoruz."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.08}>
                <SpotlightCard className="p-8">
                  <span className="absolute top-6 right-6 font-mono text-sm text-slate-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ieee/10 text-ieee transition-colors duration-300 group-hover:bg-ieee group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">{a.title}</h3>
                  <p className="mt-2 leading-relaxed">{a.text}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
