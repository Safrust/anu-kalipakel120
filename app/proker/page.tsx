import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { prokerItems } from "@/lib/site-data";

export default function ProkerPage() {
  return (
    <div className="space-y-12 py-4">
      <SectionHeading
        eyebrow="Program Kerja"
        title="Daftar proker sesuai dokumen final"
        description="Program unggulan dan pendukung ditampilkan bersama status, penanggung jawab, ringkasan, dan arah keberlanjutan agar mudah dipantau."
      />

      <div className="grid gap-6">
        {prokerItems.map((item) => (
          <article
            key={item.slug}
            className="rounded-3xl border border-[color:var(--border)] bg-white/80 p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                  {item.status}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[color:var(--muted)]">{item.owner}</p>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">
              {item.summary}
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl bg-[color:var(--surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                  Target
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--foreground)]">
                  {item.target}
                </p>
              </div>
              <div className="rounded-2xl bg-[color:var(--surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                  Output
                </p>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-[color:var(--foreground)]">
                  {item.outputs.map((output) => (
                    <li key={output}>- {output}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-[color:var(--surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                  Keberlanjutan
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--foreground)]">
                  {item.impact}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {item.timeline.map((step) => (
                <span
                  key={step}
                  className="rounded-full border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-medium text-[color:var(--muted)]"
                >
                  {step}
                </span>
              ))}
            </div>
            <Link
              href={`/proker/${item.slug}`}
              className="mt-6 inline-flex text-sm font-semibold text-[color:var(--accent-strong)]"
            >
              Buka halaman detail
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
