"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">
            Sotaisho <span className="text-purple-400">ClubNFT</span>
          </h1>

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

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Enter the World of <br />
          <span className="text-purple-400">Sotaisho NFTs</span>
        </h2>

        <p className="max-w-2xl mx-auto text-white/70 text-lg mb-10">
          A premium NFT collection blending digital art, community, and future
          utility. Powered by Web3.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#collection"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            View Collection
          </a>

          <a
            href="https://opensea.io"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            OpenSea
          </a>
        </div>
      </section>

      {/* Collection */}
      <section
        id="collection"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <h3 className="text-3xl font-bold mb-10 text-center">
          Featured NFTs
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:scale-[1.02] transition"
            >
              <div className="aspect-square bg-zinc-800 flex items-center justify-center">
                <span className="text-white/30">NFT Image</span>
              </div>

              <div className="p-4">
                <h4 className="font-semibold">Sotaisho #{i}</h4>
                <p className="text-sm text-white/60">Ethereum</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="community"
        className="border-t border-white/10 py-10 text-center text-white/50"
      >
        <p>© 2026 Sotaisho ClubNFT. All rights reserved.</p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white">X</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Discord</a>
        </div>
      </footer>
    </main>
  );
}
