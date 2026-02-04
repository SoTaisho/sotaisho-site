import Link from "next/link";

type NFTItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string; // put images in /public/nfts
  opensea?: string;
  rarity?: string;
};

const BRAND = "Sotaisho club NFT";
const DROP_TITLE = "Sovereign 001 — The Genesis Artifact";
const DOMAIN = "sotaishoclub.xyz";

// ✅ put your images inside: /public/nfts/
// example: /public/nfts/cipher-01.png
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
  { label: "Status", value: "Production Ready" },
];

function pillClass(rarity?: string) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border";
  if (!rarity) return `${base} border-white/15 text-white/70`;
  const r = rarity.toLowerCase();
  if (r.includes("legend"))
    return `${base} border-amber-300/40 bg-amber-400/10 text-amber-200`;
  if (r.includes("myth"))
    return `${base} border-fuchsia-300/40 bg-fuchsia-400/10 text-fuchsia-200`;
  if (r.includes("rare"))
    return `${base} border-sky-300/40 bg-sky-400/10 text-sky-200`;
  return `${base} border-white/15 text-white/70`;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[520px] w-[720px] rounded-full bg-fuchsia-500/10 blur-[130px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold">
              SC
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">
                {BRAND}
              </div>
              <div className="text-xs text-white/60">{DOMAIN}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#gallery" className="hover:text-white">
              Gallery
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#links" className="hover:text-white">
              Links
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 md:inline-flex"
              onClick={(e) => e.preventDefault()}
              title="Wallet not enabled yet"
            >
              Connect Wallet (soon)
            </a>

            <Link
              href="#gallery"
              className="inline-flex rounded-xl bg-sky-500/90 px-4 py-2 text-sm font-semibold text-black hover:bg-sky-400"
            >
              Explore
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Limited drop • 50 artifacts
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {BRAND}{" "}
              <span className="text-white/60">—</span>{" "}
              <span className="bg-gradient-to-r from-sky-200 to-fuchsia-200 bg-clip-text text-transparent">
                {DROP_TITLE}
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              A high-end NFT identity built around scarcity, prestige, and
              unmistakable presence. This is not just art — it is digital
              dominance for collectors who demand authority, not noise.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#gallery"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                View Gallery
              </Link>

              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/10"
              >
                OpenSea Collection
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-white/70 hover:bg-white/5"
              >
                Learn more
              </a>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Tip: Put your NFT images in{" "}
              <span className="rounded bg-white/10 px-1.5 py-0.5">
                /public/nfts
              </span>{" "}
              with names like{" "}
              <span className="rounded bg-white/10 px-1.5 py-0.5">
                cipher-01.png
              </span>
            </p>
          </div>

          {/* Hero card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white/90">
                    Featured Artifact
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    Sovereign • Genesis
                  </div>
                </div>
                <span className={pillClass("Legendary")}>Legendary</span>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                {/* Using <img> to avoid Next/Image config issues */}
                <img
                  src={FEATURED[0]?.image}
                  alt={FEATURED[0]?.title || "Featured"}
                  className="h-56 w-full object-cover md:h-64"
                  onError={(e) => {
                    // fallback if image missing
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="p-4">
                  <div className="text-base font-semibold">
                    {FEATURED[0]?.title}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    {FEATURED[0]?.subtitle}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={FEATURED[0]?.opensea || "https://opensea.io/"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-xl bg-sky-500/90 px-4 py-2 text-sm font-semibold text-black hover:bg-sky-400"
                    >
                      View on OpenSea
                    </a>
                    <a
                      href="#gallery"
                      className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
                    >
                      See all artifacts
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-xs text-white/60">{s.label}</div>
                    <div className="mt-1 text-lg font-semibold">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                <span className="font-semibold text-white">Access:</span>{" "}
                invite-only mint. Join the collection story and secure your
                position among the few.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Gallery
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Featured ciphers from the Genesis series. Replace images and links
              anytime by editing this file.
            </p>
          </div>

          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 md:inline-flex"
          >
            OpenSea
          </a>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative">
                <div className="absolute left-3 top-3 z-10">
                  <span className={pillClass(item.rarity)}>{item.rarity}</span>
                </div>

                <div className="h-44 w-full bg-gradient-to-br from-sky-500/20 via-white/5 to-fuchsia-500/15">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover opacity-95 transition group-hover:opacity-100"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="mt-1 text-xs text-white/60">{item.subtitle}</div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={item.opensea || "https://opensea.io/"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
                  >
                    OpenSea
                  </a>

                  <Link
                    href="#links"
                    className="inline-flex items-center justify-center rounded-xl bg-sky-500/90 px-3 py-2 text-xs font-semibold text-black hover:bg-sky-400"
                  >
                    Links
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                About the drop
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                <span className="font-semibold text-white">{BRAND}</span> is a
                boutique NFT identity crafted for collectors who value
                scarcity, story, and presence.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Only <span className="font-semibold text-white">50</span>{" "}
                artifacts will ever exist — curated, deliberate, and designed
                for the few.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Visit OpenSea
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/10"
                  title="Wallet not enabled yet"
                >
                  Connect Wallet (soon)
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="text-xs text-white/60">{s.label}</div>
                  <div className="mt-2 text-xl font-semibold">{s.value}</div>
                  <div className="mt-2 text-xs text-white/50">
                    Controlled, intentional, and premium.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section id="links" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Links
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Replace these with your real links anytime.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href={`https://${DOMAIN}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30"
            >
              <div className="text-sm font-semibold">Official site</div>
              <div className="mt-1 text-xs text-white/60">{DOMAIN}</div>
            </a>

            <a
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30"
            >
              <div className="text-sm font-semibold">OpenSea</div>
              <div className="mt-1 text-xs text-white/60">
                Collection / Listings
              </div>
            </a>

            <a
              href="#gallery"
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-black/30"
            >
              <div className="text-sm font-semibold">Gallery</div>
              <div className="mt-1 text-xs text-white/60">
                Featured artifacts
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-12">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <div className="text-sm text-white/60">
            <span className="font-semibold text-white">{BRAND}</span> • Built for
            the few • © {year}
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#about" className="text-white/60 hover:text-white">
              About
            </a>
            <a href="#gallery" className="text-white/60 hover:text-white">
              Gallery
            </a>
            <a href="#links" className="text-white/60 hover:text-white">
              Links
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
