import { ecosystem } from "../data/site";

function Items({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <>
      {ecosystem.map((e) => (
        <li
          key={e.system}
          aria-hidden={duplicate || undefined}
          className={`flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm ${
            duplicate ? "marquee-dup" : ""
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-ieee-light" />
          <span className="font-semibold text-slate-900">{e.system}</span>
          <span className="text-sm text-slate-500">{e.area}</span>
        </li>
      ))}
    </>
  );
}

export default function Ecosystem() {
  return (
    <section aria-label="Mevcut ekosistem" className="border-y border-slate-200 bg-slate-50 py-12">
      <p className="text-center text-sm font-semibold tracking-wider text-slate-500 uppercase">Birlikte çalıştığımız ekosistem</p>
      <div className="marquee-wrap marquee-mask mt-6 overflow-hidden">
        <ul className="marquee flex w-max gap-4 px-4">
          <Items />
          <Items duplicate />
        </ul>
      </div>
    </section>
  );
}
