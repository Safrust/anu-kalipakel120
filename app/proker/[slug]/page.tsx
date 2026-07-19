import { notFound } from "next/navigation";
import { getProkerBySlug, prokerItems } from "@/lib/site-data";

type ProkerDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return prokerItems.map((item) => ({ slug: item.slug }));
}

export default async function ProkerDetailPage({
  params,
}: ProkerDetailPageProps) {
  const { slug } = await params;
  const item = getProkerBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="space-y-10 py-4">
      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white/80 p-5 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
          {item.status}
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          {item.title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">
          {item.summary}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6">
          <h2 className="text-lg font-semibold">Penanggung Jawab</h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
            {item.owner}
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6">
          <h2 className="text-lg font-semibold">Target</h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
            {item.target}
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6">
          <h2 className="text-lg font-semibold">Keberlanjutan</h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
            {item.impact}
          </p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--border)] bg-white/80 p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold">Output yang Diharapkan</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            {item.outputs.map((output) => (
              <li key={output} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-semibold">Alur Pengerjaan</h2>
          <div className="mt-4 space-y-3">
            {item.timeline.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl bg-white/70 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-xs font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-[color:var(--foreground)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
