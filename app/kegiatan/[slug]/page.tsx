import { notFound } from "next/navigation";
import { activities, getActivityBySlug } from "@/lib/site-data";

type ActivityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return activities.map((item) => ({ slug: item.slug }));
}

export default async function ActivityDetailPage({
  params,
}: ActivityDetailPageProps) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="space-y-10 py-4">
      <section className="rounded-[2rem] border border-[color:var(--border)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
          {activity.category}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          {activity.title}
        </h1>
        <p className="mt-3 text-sm font-medium text-[color:var(--muted)]">
          {activity.date}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
          {activity.summary}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Narasi Kegiatan</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            {activity.content}
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--border)] bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Media Pendukung</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            {activity.media.map((media) => (
              <li key={media} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>{media}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
