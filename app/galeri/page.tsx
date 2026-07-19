import { SectionHeading } from "@/components/section-heading";
import { galleryItems } from "@/lib/site-data";

export default function GaleriPage() {
  return (
    <div className="space-y-12 py-4">
      <SectionHeading
        eyebrow="Galeri"
        title="Kumpulan foto dan video pendukung"
        description="Galeri dibuat terpisah dari dokumentasi kegiatan agar file visual pendukung tetap rapi dan mudah dipakai ulang."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[1.8rem] border border-[color:var(--border)] bg-white/80 shadow-sm"
          >
            <div className="flex aspect-[4/3] items-end bg-[linear-gradient(135deg,rgba(15,118,110,0.2),rgba(255,250,242,1))] p-4 sm:p-5">
              <div className="rounded-2xl bg-white/80 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)] sm:px-4 sm:text-xs">
                {item.type}
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-base font-semibold sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)] sm:leading-7">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
