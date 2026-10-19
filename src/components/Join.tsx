import { ArrowUpRight, BookOpen, GitPullRequest, Rocket } from "lucide-react";
import { links } from "../data/site";
import { Container, Reveal } from "./ui";

const actions = [
  { icon: Rocket, title: "Project Lab'e proje öner", text: "Gerçek bir problemin mi var? Öneri formunu doldur.", href: links.propose },
  { icon: GitPullRequest, title: "Katkıda bulun", text: "Issue aç, bir işi üstlen veya belgeleri geliştir.", href: links.contributing },
  { icon: BookOpen, title: "Dokümantasyonu oku", text: "Standartlar, rehberler ve teknik kararlar.", href: links.docs },
];

export default function Join() {
  return (
    <section id="katil" className="bg-white pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-16 sm:px-12 sm:py-20">
            <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
            <div aria-hidden="true" className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-ieee/40 blur-[120px]" />
            <div aria-hidden="true" className="absolute -bottom-40 -left-20 -z-10 h-80 w-80 rounded-full bg-ieee-light/20 blur-[120px]" />

            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">Birlikte inşa edelim</h2>
              <p className="mt-5 text-lg text-slate-300">
                TechOps herkese açık çalışır. Kod, belgeler ve kararlar GitHub'da; katkı vermek için yönetimde olman
                gerekmiyor.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {actions.map((a) => {
                const Icon = a.icon;
                return (
                  <a
                    key={a.title}
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-ieee-light/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-ieee-light" />
                      <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-5 font-semibold text-white">{a.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{a.text}</p>
                  </a>
                );
              })}
            </div>

            <p className="mt-10 text-sm text-slate-400">
              Güvenlik açıklarını herkese açık issue olarak paylaşma;{" "}
              <a href={links.security} target="_blank" rel="noreferrer" className="text-slate-200 underline-offset-4 hover:underline">
                güvenlik politikasındaki
              </a>{" "}
              özel bildirim yöntemini kullan.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
