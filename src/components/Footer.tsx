import { links } from "../data/site";
import { Container, GithubIcon, Logo } from "./ui";

const columns = [
  {
    title: "Program",
    items: [
      { label: "Project Lab", href: links.projectLab },
      { label: "Proje öner", href: links.propose },
      { label: "Proje döngüsü", href: links.lifecycle },
      { label: "Değerlendirme ölçütleri", href: links.rubric },
    ],
  },
  {
    title: "Kaynaklar",
    items: [
      { label: "Dokümantasyon", href: links.docs },
      { label: "Yol haritası", href: links.roadmap },
      { label: "Yönetişim", href: links.governance },
    ],
  },
  {
    title: "Topluluk",
    items: [
      { label: "GitHub", href: links.github },
      { label: "Katkı rehberi", href: links.contributing },
      { label: "Güvenlik politikası", href: links.security },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-semibold text-white">
              IEEE İKÇÜ <span className="text-ieee-light">TechOps</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Sürdürülebilir altyapı. Belgelenmiş süreçler. Devredilebilir sistemler.
          </p>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="mt-6 inline-grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/30 hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-white">{col.title}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {col.items.map((it) => (
                <li key={it.label}>
                  <a href={it.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu · TechOps</p>
          <a href={links.site} target="_blank" rel="noreferrer" className="hover:text-white">
            Bu site açık kaynaktır →
          </a>
        </Container>
      </div>
    </footer>
  );
}
