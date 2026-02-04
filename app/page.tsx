export default function Page() {
  // عدّل هذه القيم كما تريد
  const brandName = "Sotaisho club NFT";
  const artifactTitle = "Sovereign 001 — The Genesis Artifact";
  const description =
    "Sovereign 001. The Genesis Artifact. This is the cornerstone of an elite lineage—only 50 will ever exist. A high-stakes fusion of neo-royalty and digital defiance, crafted to anchor the most prestigious portfolios. In a sea of noise, we offer the power of the few. Own the origin, command the scarcity. This is not just art; it is digital dominance.";
  const domain = "sotaishoclub.xyz";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          Official site • {domain}
        </div>

        {/* Hero */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            {/* العنوان الرئيسي */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              {brandName}
              <span className="mt-3 block text-2xl font-semibold text-white/70 sm:text-3xl">
                {artifactTitle}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/gallery"
                className="rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-400/20 hover:bg-sky-300 transition"
              >
                View Gallery
              </a>

              <a
                href="/about"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                About
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Tip: Put your NFT images in <span className="text-white/70">/public/nfts</span> (e.g. cipher-01.png)
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-white/60 text-sm">Supply</div>
              <div className="mt-2 text-2xl font-bold">50</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-white/60 text-sm">Chain</div>
              <div className="mt-2 text-2xl font-bold">Ethereum</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-white/60 text-sm">Status</div>
              <div className="mt-2 text-2xl font-bold text-emerald-300">
                Live
              </div>
            </div>

            <div className="sm:col-span-3 rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="text-white/60 text-sm">Featured ciphers</div>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["cipher-01.png", "cipher-02.png", "cipher-03.png", "cipher-04.png"].map(
                  (img) => (
                    <div
                      key={img}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
                    >
                      {img}
                    </div>
                  )
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  View on OpenSea
                </a>

                <a
                  href="/contact"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/50">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
