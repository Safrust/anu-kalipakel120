import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { contacts } from "@/lib/site-data";

export default function KontakPage() {
  return (
    <div className="space-y-12 py-4">
      <SectionHeading
        eyebrow="Kontak"
        title="Jalur koordinasi dan arsip pendukung"
        description="Halaman ini tidak menampilkan nomor palsu; isinya diarahkan ke halaman yang memang dipakai untuk koordinasi, dokumentasi, dan penyimpanan arsip."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {contacts.map((contact) => {
          const content = (
            <article className="rounded-3xl border border-border bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">
                {contact.label}
              </p>
              <p className="mt-3 text-xl font-semibold tracking-tight">
                {contact.value}
              </p>
              {contact.href ? (
                <p className="mt-2 text-sm text-muted">
                  Buka halaman terkait untuk melihat detail.
                </p>
              ) : null}
            </article>
          );

          if (contact.href) {
            return (
              <Link
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
              >
                {content}
              </Link>
            );
          }

          return <div key={contact.label}>{content}</div>;
        })}
      </div>
    </div>
  );
}
