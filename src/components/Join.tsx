import { ArrowUpRight, BookOpen, Briefcase, GitPullRequest, Rocket } from "lucide-react";
import { links } from "../data/site";
import { Container, Reveal } from "./ui";

const actions = [
  { icon: Rocket, title: "Proje önerisi", text: "Project Lab kapsamında yeni bir proje önerin.", href: links.propose },
  { icon: GitPullRequest, title: "Katkı rehberi", text: "Depolara katkı verme kuralları ve süreçleri.", href: links.contributing },
  { icon: BookOpen, title: "Dokümantasyon", text: "Çalışma standartları, kılavuzlar ve teknik kararlar.", href: links.docs },
  { icon: Briefcase, title: "Kariyer", text: "IEEE İKÇÜ kariyer platformu ve açık pozisyonlar.", href: links.career },
];

export default function Join() {
  return (
    <section id="katil" className="bg-white pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-xl bg-navy-950 px-6 py-16 sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute -top-48 -right-48 -z-10 h-[36rem] w-[36rem] bg-[radial-gradient(closest-side,rgb(0_98_155/0.35),transparent)]" />

            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Katılım ve katkı</h2>
              <p className="mt-5 text-lg text-slate-300">
                TechOps'un kaynak kodu, belgeleri ve teknik kararları GitHub üzerinde herkese açık olarak tutulur. Kol
                üyeleri katkı rehberindeki kurallara uyarak çalışmalara katılabilir.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {actions.map((a) => {
                const Icon = a.icon;
                return (
                  <a
                    key={a.title}
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-ieee-light/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-ieee-light" />
                      <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-white" />
                    </div>
                    <p className="mt-5 font-semibold text-white">{a.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{a.text}</p>
                  </a>
                );
              })}
            </div>

            <p className="mt-10 text-sm text-slate-400">
              Güvenlik açıkları herkese açık issue olarak paylaşılmamalıdır. Bildirim için{" "}
              <a href={links.security} target="_blank" rel="noreferrer" className="text-slate-200 underline-offset-4 hover:underline">
                güvenlik politikasındaki
              </a>{" "}
              yöntemi kullanınız veya{" "}
              <a href={links.contact} className="text-slate-200 underline-offset-4 hover:underline">
                {links.email}
              </a>{" "}
              adresine e-posta gönderiniz.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
