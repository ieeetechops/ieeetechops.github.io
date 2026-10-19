import { useEffect, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { links, projects, type Status } from "../data/site";
import { Container, GithubIcon, Reveal, SectionHeading, SpotlightCard } from "./ui";

const statusStyle: Record<Status, string> = {
  Aktif: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Hazırlanıyor: "bg-sky-50 text-sky-700 ring-sky-600/20",
  Planlama: "bg-amber-50 text-amber-700 ring-amber-600/20",
};

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

type RepoState = { status: "loading" } | { status: "ok"; repos: Repo[] } | { status: "error" };

function useRepos() {
  const [state, setState] = useState<RepoState>({ status: "loading" });
  useEffect(() => {
    const ctrl = new AbortController();
    fetch("https://api.github.com/users/ieeetechops/repos?sort=pushed&per_page=30", {
      signal: ctrl.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<Repo[]>;
      })
      .then((repos) =>
        setState({ status: "ok", repos: repos.filter((r) => !r.fork && r.name !== "ieeetechops.github.io").slice(0, 6) }),
      )
      .catch((e: unknown) => {
        if (!(e instanceof DOMException && e.name === "AbortError")) setState({ status: "error" });
      });
    return () => ctrl.abort();
  }, []);
  return state;
}

const date = (iso: string) => new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" });

export default function Projects() {
  const repos = useRepos();

  return (
    <section id="projeler" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projeler"
          title="Yürütülen projeler"
          description="TechOps tarafından yürütülen ve planlanan projeler. Her proje; tanımlı bir problem, sorumlu kişi, başarı ölçütü ve tamamlanma kriteriyle başlatılır."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const card = (
              <SpotlightCard className="flex flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className={`rounded px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyle[p.status]}`}>
                    {p.status}
                  </span>
                  {p.href && (
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ieee" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed">{p.text}</p>
              </SpotlightCard>
            );
            return (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer" className="block h-full">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-slate-900">Açık kaynak depolar</h3>
            <p className="mt-1 text-slate-500">Liste GitHub üzerinden otomatik olarak güncellenir.</p>
          </div>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ieee hover:underline"
          >
            <GithubIcon className="h-4 w-4" /> Tümünü gör
          </a>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.status === "loading" &&
            Array.from({ length: 3 }, (_, i) => <div key={i} className="h-36 animate-pulse rounded-lg bg-slate-100" />)}

          {repos.status === "error" && (
            <p className="text-slate-500 sm:col-span-2 lg:col-span-3">
              Depolar şu an yüklenemedi.{" "}
              <a href={links.github} className="font-semibold text-ieee hover:underline" target="_blank" rel="noreferrer">
                GitHub sayfasını ziyaret edin →
              </a>
            </p>
          )}

          {repos.status === "ok" &&
            repos.repos.map((r, i) => (
              <Reveal key={r.id} delay={(i % 3) * 0.06}>
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-lg border border-slate-200 p-6 transition hover:border-ieee/30 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-900">
                    <GithubIcon className="h-4 w-4 text-slate-400" />
                    <span className="truncate group-hover:text-ieee">{r.name}</span>
                  </div>
                  <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed">{r.description ?? "Açıklama eklenmemiş."}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    {r.language && <span>{r.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {r.stargazers_count}
                    </span>
                    <span>Güncelleme: {date(r.pushed_at)}</span>
                  </div>
                </a>
              </Reveal>
            ))}
        </div>
      </Container>
    </section>
  );
}
