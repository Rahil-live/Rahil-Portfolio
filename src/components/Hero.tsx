import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden section-pad pt-10 md:pt-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-overlay opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.18),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.1),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="fade-up max-w-2xl">
          <p className="section-eyebrow mb-4">{profile.eyebrow}</p>
          <h1
            id="hero-heading"
            className="text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-foreground"
          >
            {profile.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {profile.supporting}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(15,22,35,0.7)] px-3 py-1.5 text-sm text-[var(--muted)]">
            <MapPin size={14} className="text-[var(--accent)]" aria-hidden="true" />
            <span>{profile.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div
          className="fade-up card-surface relative overflow-hidden p-5 sm:p-6"
          style={{ animationDelay: "120ms" }}
          aria-hidden="true"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
            <span className="ml-2 font-mono text-xs text-[var(--muted-dim)]">
              profile.ts
            </span>
          </div>
          <pre className="overflow-x-auto font-mono text-[0.8rem] leading-7 text-[var(--muted)] sm:text-[0.85rem]">
            <code>
              <span className="text-[#c084fc]">const</span>{" "}
              <span className="text-[#67e8f9]">rahil</span> = {"{"}
              {"\n"}
              {"  "}
              <span className="text-[#93c5fd]">role</span>:{" "}
              <span className="text-[#86efac]">
                &quot;Mobile &amp; Frontend Developer&quot;
              </span>
              ,{"\n"}
              {"  "}
              <span className="text-[#93c5fd]">experience</span>:{" "}
              <span className="text-[#86efac]">&quot;5+ years&quot;</span>,{"\n"}
              {"  "}
              <span className="text-[#93c5fd]">focus</span>: [
              {"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;Frontend&quot;</span>,{"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;Mobile&quot;</span>,{"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;AI&quot;</span>
              {"\n"}
              {"  "}],{"\n"}
              {"  "}
              <span className="text-[#93c5fd]">stack</span>: [
              {"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;Angular&quot;</span>,{"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;Ionic&quot;</span>,{"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;React&quot;</span>,{"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;Next.js&quot;</span>,{"\n"}
              {"    "}
              <span className="text-[#86efac]">&quot;TypeScript&quot;</span>
              {"\n"}
              {"  "}]
              {"\n"}
              {"}"}
            </code>
          </pre>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[rgba(15,22,35,0.9)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
