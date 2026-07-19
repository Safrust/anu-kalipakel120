import Link from "next/link";
import { navigation } from "@/lib/site-data";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.16),transparent_50%)]" />
      <div className="pointer-events-none absolute right-[-10rem] top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(234,179,8,0.18),transparent_70%)] blur-3xl" />
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[rgba(246,241,231,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 sm:h-11 sm:w-11">
                KKN
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-[color:var(--accent-strong)] uppercase sm:text-sm">
                  Kalipakel 120
                </p>
                <p className="text-xs text-[color:var(--muted)] sm:text-sm">
                  Dokumentasi, proker, dan profil desa
                </p>
              </div>
            </div>
            <nav className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 text-sm font-medium text-[color:var(--foreground)] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full border border-transparent px-3 py-2 transition hover:border-[color:var(--border)] hover:bg-white/70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        {children}
      </main>
      <footer className="border-t border-[color:var(--border)] bg-[rgba(255,250,242,0.55)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            Website ini disusun untuk kebutuhan dokumentasi dan arsip KKN
            Kalipakel 120.
          </p>
          <p>Next.js static-friendly layout, siap dipublikasikan ke Vercel.</p>
        </div>
      </footer>
    </div>
  );
}
