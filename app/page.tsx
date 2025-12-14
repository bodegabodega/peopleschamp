import Image from "next/image";
import { allPages, pageBySlug } from "@/lib/content/fetch";
import Link from "next/link";

export default async function Home() {
  const pages = await allPages();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ps-4 pe-4 pt-0">
      {pages.map((page) => (
        <Link
          key={page.slug}
          href={`/${page.slug}`}
          // aria-label={page.title}
          className="group relative block overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {/* Square wrapper */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={page.heroImage.url}
              alt={page.title}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-focus:scale-110"
            />
          </div>

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 group-focus:bg-black/20 transition-colors duration-300" />

          {/* Label animation */}
          <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-300">
            <span className="inline-block rounded-lg bg-black/70 px-2 py-1 text-xs font-medium text-white">
              {page.title}
            </span>
          </div>

          {/* Card lift effect */}
          <div className="absolute inset-0 rounded-xl shadow-none group-hover:shadow-lg group-focus:shadow-lg transform group-hover:-translate-y-1 group-focus:-translate-y-1 transition-all duration-300" />
        </Link>
      ))}
    </div>
  );
}
