import Link from "next/link";

type NFTItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  opensea?: string;
  rarity?: string;
};

const BRAND = "Sotaisho club NFT";
const DROP_TITLE = "Sovereign 001 — The Genesis Artifact";
const DOMAIN = "sotaishoclub.xyz";

const FEATURED: NFTItem[] = [
  {
    id: "cipher-01",
    title: "Cipher #01",
    subtitle: "Genesis Series",
    image: "/nfts/cipher-01.png",
    opensea: "https://opensea.io/",
    rarity: "Legendary",
  },
  {
    id: "cipher-02",
    title: "Cipher #02",
    subtitle: "Genesis Series",
    image: "/nfts/cipher-02.png",
    opensea: "https://opensea.io/",
    rarity: "Mythic",
  },
  {
    id: "cipher-03",
    title: "Cipher #03",
    subtitle: "Genesis Series",
    image: "/nfts/cipher-03.png",
    opensea: "https://opensea.io/",
    rarity: "Rare",
  },
  {
    id: "cipher-04",
    title: "Cipher #04",
    subtitle: "Genesis Series",
    image: "/nfts/cipher-04.png",
    opensea: "https://opensea.io/",
    rarity: "Rare",
  },
];

const STATS = [
  { label: "Supply", value: "50" },
  { label: "Chain", value: "Ethereum" },
  { label: "Mint", value: "Invite Only" },
];

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06161a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute left-[-200px] top-[35%] h-[520px] w-[520px] rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-20">
        {/* Top bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Official site: <span className="font-semibold text-white">{DOMAIN}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              OpenSea
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              About
            </a>
          </div>
        </div>

        {/* Hero */}
        <section className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                Limited drop • 50 artifacts
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              {BRAND}
              {/* هذا السطر يعالج مشكلة “ملتصقة” */}
              <span className="mt-4 block text-2xl font-semibold text-white/80 sm:text-3xl">
                {DROP_TITLE}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              A high-stakes identity of neo-royalty and digital defiance. Built around scarcity, prestige,
              and unmistakable presence. This is not just art — it is digital dominance.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#gallery"
                className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                View Gallery
              </Link>

              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                OpenSea Collection
              </a>

              <a
                href="#about"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <div className="text-xs text-white/60">{s.label}</div>
                  <div className="mt-1 text-xl font-bold">{s.value}</div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-white/50">
              Tip: put your NFT images in <span className="text-white/70">/public/nfts</span> with names like{" "}
              <span className="text-white/70">cipher-01.png</span>.
            </p>
          </div>

          {/* Right visual card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/80">Featured Artifact</div>
                <div className="text-xs text-white/50">Sovereign • Genesis</div>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                {/* صورة كبيرة (لو ما عندك صورة الآن، سيظهر إطار فقط) */}
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-sky-500/10 to-emerald-400/10" />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-xs text-white/60">Access</div>
                  <div className="mt-1 text-sm font-semibold">Invite-only mint</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-xs text-white/60">Status</div>
                  <div className="mt-1 text-sm font-semibold">Production Ready</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-14 sm:mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 max-w-3xl text-white/70 leading-relaxed">
              <span className="font-semibold text-white">{BRAND}</span> is a boutique NFT identity built around
              scarcity, prestige, and unmistakable presence. Only{" "}
              <span className="font-semibold text-white">50</span> artifacts will ever exist — designed for
              collectors who demand authority, not noise.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mt-10 sm:mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Gallery</h2>
              <p className="mt-2 text-white/60">Featured ciphers ({FEATURED.length})</p>
            </div>
            <a
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-sky-300 hover:text-sky-200"
            >
              View on OpenSea →
            </a>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.06]"
              >
                <div className="relative">
                  <div className="aspect-square w-full bg-gradient-to-br from-sky-500/10 to-emerald-400/10" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {item.rarity && (
                    <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
                      {item.rarity}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="text-sm font-bold">{item.title}</div>
                  {item.subtitle && <div className="mt-1 text-xs text-white/60">{item.subtitle}</div>}

                  <div className="mt-4 flex gap-2">
                    {item.opensea ? (
                      <a
                        href={item.opensea}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-center text-xs font-semibold text-white/90",
                          "transition hover:bg-white/10"
                        )}
                      >
                        OpenSea
                      </a>
                    ) : (
                      <span className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-white/50">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {BRAND} • Built for the few.
        </footer>
      </div>
    </main>
  );
}
