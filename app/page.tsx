import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import {
  activities,
  heroStats,
  prokerItems,
  villageHighlights,
} from "@/lib/site-data";

export default function Home() {
  const latestActivities = activities.slice(0, 3);
  const featuredProker = prokerItems.slice(0, 3);
  const archivePillars = [
    {
      title: "Konteks desa yang jelas",
      description:
        "Profil desa merangkum sejarah, struktur, potensi, dan catatan verifikasi agar pembaca punya dasar sebelum membuka dokumentasi lain.",
    },
    {
      title: "Jejak kegiatan yang kronologis",
      description:
        "Setiap kegiatan disusun berdasarkan tanggal, ringkasan, dan narasi supaya alur kerja tim mudah ditelusuri seperti buku harian lapangan.",
    },
    {
      title: "Arsip yang bisa dipakai ulang",
      description:
        "Program kerja, galeri, tim, dan laporan disusun sebagai arsip yang rapi sehingga tetap berguna untuk kenang-kenangan maupun administrasi.",
    },
  ];

  return (
    <div className="space-y-14 pb-8 pt-4 lg:space-y-24 lg:pt-8">
      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="space-y-7 sm:space-y-8">
          <span className="inline-flex w-fit items-center rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong shadow-sm backdrop-blur">
            Website Dokumentasi KKN
          </span>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Tim KKN Kalipakel 120 menyusun arsip dokumentasi yang hangat,
              informatif, dan mudah dibaca kembali.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8 lg:text-lg">
              Website ini dirancang sebagai kenang-kenangan sekaligus pusat
              dokumentasi KKN: profil desa, program kerja, kronologi kegiatan,
              galeri, tim, laporan, dan jalur koordinasi disusun agar mudah
              dipahami oleh kampus, warga, dan anggota kelompok sendiri.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/proker"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-accent-strong"
            >
              Lihat Program Kerja
            </Link>
            <Link
              href="/kegiatan"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
            >
              Buka Dokumentasi
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border bg-surface p-4 shadow-sm sm:p-5"
              >
                <div className="text-3xl font-semibold tracking-tight text-accent-strong">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-4xl border border-border bg-surface p-5 shadow-[0_24px_80px_rgba(17,33,31,0.08)] sm:p-6">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">
                Fokus arsip
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Apa yang disimpan di website ini
              </h2>
            </div>
            <div className="space-y-3">
              {villageHighlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-border bg-white/70 p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-sm leading-6 text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(234,179,8,0.14))] p-4 text-sm leading-7 text-foreground">
              Seluruh konten disusun dari catatan lapangan, diskusi tim, dan
              dokumen final agar pembaruan tetap rapi, jujur, dan mudah
              ditelusuri.
            </div>
          </div>
        </aside>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Tujuan Website"
          title="Bukan sekadar galeri, tetapi arsip yang bercerita"
          description="Tiga fokus di bawah ini membantu pengunjung memahami fungsi website sejak awal: sebagai dokumentasi, sebagai arsip, dan sebagai kenang-kenangan KKN."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {archivePillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-border bg-white/75 p-5 shadow-sm sm:p-6"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Program Kerja"
          title="Prioritas yang selaras dengan kebutuhan lapangan"
          description="Setiap proker disusun dengan status, penanggung jawab, target, dan hasil yang diharapkan agar mudah dipantau selama masa KKN."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredProker.map((item) => (
            <article
              key={item.slug}
              className="rounded-3xl border border-border bg-white/75 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-surface-strong px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
                  {item.status}
                </span>
                <span className="text-xs text-muted">{item.owner}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {item.summary}
              </p>
              <Link
                href={`/proker/${item.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-accent-strong"
              >
                Buka detail
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Dokumentasi Terbaru"
          title="Kronologi kegiatan yang bisa dibaca sebagai cerita lapangan"
          description="Entri dibuat berurutan agar perkembangan aktivitas mudah dilihat oleh DPL, kampus, warga desa, dan anggota tim sendiri."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {latestActivities.map((activity) => (
            <article
              key={activity.slug}
              className="rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-6"
            >
              <p className="text-sm font-medium text-accent-strong">
                {activity.date}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {activity.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{activity.category}</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {activity.summary}
              </p>
              <Link
                href={`/kegiatan/${activity.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-accent-strong"
              >
                Baca cerita lengkap
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
