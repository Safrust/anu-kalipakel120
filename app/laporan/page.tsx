import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { reports } from "@/lib/site-data";

export default function LaporanPage() {
  return (
    <div className="space-y-12 py-4">
      <SectionHeading
        eyebrow="Laporan / Unduhan"
        title="Tempat penyimpanan dokumen resmi"
        description="Halaman ini merangkum dokumen yang akan diunggah, sehingga arsip tetap satu pintu tanpa menampilkan tautan kosong."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {reports.map((report) => (
          <article
            key={report.title}
            className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm sm:p-6"
          >
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-surface-strong px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
                {report.format}
              </span>
              {report.status ? (
                <span className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted">
                  {report.status}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
              {report.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {report.description}
            </p>
            {report.href ? (
              <Link
                href={report.href}
                className="mt-5 inline-flex text-sm font-semibold text-accent-strong"
              >
                Unduh dokumen
              </Link>
            ) : (
              <p className="mt-5 text-sm font-semibold text-muted">
                Dokumen disiapkan untuk unggahan final.
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
