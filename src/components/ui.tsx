import { useEffect, useRef, type CSSProperties, type MouseEvent, type ReactNode, type RefObject, type SVGProps } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

// Görünür alana giren [data-reveal] öğelerine "is-visible" sınıfını ekleyen tek, paylaşılan gözlemci.
// Animasyonun kendisi index.css'tedir; JavaScript çalışmazsa içerik gizlenmez.
let observer: IntersectionObserver | null = null;

function observe(el: Element) {
  if (typeof IntersectionObserver === "undefined") {
    el.classList.add("is-visible");
    return;
  }
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -80px 0px" },
  );
  observer.observe(el);
}

export function useReveal<T extends Element>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (ref.current) observe(ref.current);
  }, []);
  return ref;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useReveal<HTMLElement>();
  const props = {
    className,
    "data-reveal": "",
    style: delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined,
  };
  return as === "li" ? (
    <li ref={ref as RefObject<HTMLLIElement>} {...props}>
      {children}
    </li>
  ) : (
    <div ref={ref as RefObject<HTMLDivElement>} {...props}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-sm font-semibold tracking-wider uppercase ${dark ? "text-ieee-light" : "text-ieee"}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
      )}
    </Reveal>
  );
}

export function SpotlightCard({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight group relative h-full overflow-hidden rounded-lg border transition duration-300 hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/[0.03] hover:border-ieee-light/30"
          : "border-slate-200 bg-white hover:border-ieee/30 hover:shadow-xl hover:shadow-ieee/5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return <img src="/techops-mark.png" alt="" width={96} height={96} decoding="async" className={`object-contain ${className}`} />;
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
