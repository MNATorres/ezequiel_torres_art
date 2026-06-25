import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

// Shown automatically by Next while the page Server Component fetches data.
export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-4 pb-32 pt-28 md:px-12 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-white"
        >
          <FiArrowLeft className="h-4 w-4" />
          Volver
        </Link>

        <header className="mb-16 mt-10 text-center md:mb-20">
          <h1 className="font-serif text-5xl md:text-6xl">Trayectoria</h1>
          <div className="mx-auto mt-5 h-px w-24 bg-white" />
        </header>

        {/* Skeleton timeline */}
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" />
          <div className="flex flex-col gap-16 md:gap-20">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative animate-pulse pl-8 md:pl-12">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white/20 ring-4 ring-[#0a0a0a]" />
                <div className="h-3 w-28 rounded bg-white/10" />
                <div className="mt-3 h-7 w-2/3 rounded bg-white/10" />
                <div className="mt-4 h-4 w-full max-w-2xl rounded bg-white/10" />
                <div className="mt-2 h-4 w-5/6 max-w-2xl rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
