import { isExternal, links } from "../data/site";
import { Container, GithubIcon, Logo } from "./ui";

const columns = [
  {
    title: "Project Lab",
    items: [
      { label: "Program", href: links.projectLab },
      { label: "Proje kataloğu", href: links.catalog },
      { label: "Proje önerisi", href: links.propose },
      { label: "Değerlendirme ölçütleri", href: links.rubric },
    ],
  },
  {
    title: "Kurumsal",
    items: [
      { label: "Yönetişim", href: links.governance },
      { label: "Dokümantasyon", href: links.docs },
      { label: "Yol haritası", href: links.roadmap },
      { label: "Kariyer", href: links.career },
    ],
  },
  {
    title: "Yasal",
    items: [
      { label: "KVKK Aydınlatma Metni", href: links.kvkk },
      { label: "Gizlilik Politikası", href: links.privacy },
      { label: "Çerez Politikası", href: links.cookies },
      { label: "Güvenlik politikası", href: links.security },
    ],
  },
];

const external = (href: string) => (isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {});

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <a href="/" className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <span>
              <span className="block font-display text-lg leading-tight font-semibold text-white">
                IEEE İKÇÜ <span className="text-techops">TechOps</span>
              </span>
              <span className="block text-xs text-slate-400">Teknik Operasyonlar ve Altyapı Dairesi Başkanlığı</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu'nun dijital altyapısını ve teknik süreçlerini yürüten birim.
          </p>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="mt-6 inline-grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:border-white/30 hover:text-white"
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
                  <a href={it.href} {...external(it.href)} className="transition-colors hover:text-white">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu · TechOps</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={links.kvkk} className="hover:text-white">KVKK</a>
            <a href={links.privacy} className="hover:text-white">Gizlilik</a>
            <a href={links.cookies} className="hover:text-white">Çerezler</a>
            <a href={links.site} target="_blank" rel="noreferrer" className="hover:text-white">
              Kaynak kodu
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
