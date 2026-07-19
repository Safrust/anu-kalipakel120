import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { activities } from "@/lib/site-data";

export default function KegiatanPage() {
  return (
    <div className="space-y-12 py-4">
      <SectionHeading
        eyebrow="Dokumentasi Kegiatan"
        title="Kronologi kegiatan dari awal sampai akhir"
        description="Urutan tanggal membantu pembaca memahami progres tim dari survei, pelaksanaan proker, hingga evaluasi rutin."
      />

      <div className="space-y-5">
        {activities.map((activity) => (
          <article
            key={activity.slug}
            className="rounded-3xl border border-[color:var(--border)] bg-white/80 p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[color:var(--accent-strong)]">
                  {activity.date}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {activity.title}
                </h3>
              </div>
              <span className="rounded-full bg-[color:var(--surface-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                {activity.category}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">
              {activity.summary}
            </p>
            <Link
              href={`/kegiatan/${activity.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-[color:var(--accent-strong)]"
            >
              Lihat detail kegiatan
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
