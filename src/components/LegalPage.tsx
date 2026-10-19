import { legalDocs, legalUpdated, type LegalDoc } from "../data/legal";
import { links } from "../data/site";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Container } from "./ui";

const tabs = [
  { slug: "kvkk", label: "KVKK Aydınlatma Metni", href: links.kvkk },
  { slug: "gizlilik", label: "Gizlilik Politikası", href: links.privacy },
  { slug: "cerez-politikasi", label: "Çerez Politikası", href: links.cookies },
] as const;

export default function LegalPage({ slug }: { slug: LegalDoc["slug"] }) {
  const doc = legalDocs[slug];

  return (
    <>
      <Navbar solid />
      <main className="bg-white pt-32 pb-24 sm:pt-40">
        <Container>
          <div className="max-w-3xl">
          <nav aria-label="Yasal metinler" className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <a
                key={t.slug}
                href={t.href}
                aria-current={t.slug === slug ? "page" : undefined}
                className={`rounded-md border px-3 py-1.5 text-sm font-medium transition ${
                  t.slug === slug ? "border-ieee bg-ieee text-white" : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {t.label}
              </a>
            ))}
          </nav>

          <h1 className="mt-10 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{doc.title}</h1>
          <p className="mt-2 text-sm text-slate-500">Son güncelleme: {legalUpdated}</p>
          <p className="mt-8 text-lg leading-relaxed text-slate-700">{doc.intro}</p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-xl font-semibold text-slate-900">{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-slate-400">
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
