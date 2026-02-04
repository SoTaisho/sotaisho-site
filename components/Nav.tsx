import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide text-white">
          Sotaisho <span className="text-purple-400">ClubNFT</span>
        </div>

        <nav className="flex gap-6 text-sm text-white/80">
          <Link href="#collection" className="hover:text-white">
            Collection
          </Link>
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#community" className="hover:text-white">
            Community
          </Link>
        </nav>
      </div>
    </header>
  );
}
