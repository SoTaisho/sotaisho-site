export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-6">
        
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="block">Sotaisho Club NFT</span>
          <span className="block text-white/60 text-2xl sm:text-3xl mt-3">
            Sovereign 001 — The Genesis Artifact
          </span>
        </h1>

        <p className="text-white/70 leading-relaxed">
          A boutique NFT identity built around scarcity, prestige, and unmistakable presence.
          Only 50 artifacts will ever exist.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://opensea.io"
            target="_blank"
            className="px-6 py-3 rounded-full bg-sky-500/20 border border-sky-400/30 hover:bg-sky-500/30 transition"
          >
            View on OpenSea
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            Connect Wallet
          </a>
        </div>

        <div className="pt-10 text-sm text-white/40">
          Official site of Sotaisho Club NFT
        </div>
      </div>
    </main>
  );
}
