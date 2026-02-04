"use client";

import Link from "next/link";
import Container from "./Container";
import ConnectWallet from "./ConnectWallet";
import ButtonLink from "./ButtonLink";
import CollectionGrid from "./CollectionGrid";
import Footer from "./Footer";

type NFTItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string; // put images in /public/nfts
  opensea?: string;
  rarity?: string;
};

const site = {
  brand: "Sotaisho club NFT",
  dropTitle: "Sovereign 001 — The Genesis Artifact",
  domain: "sotaishoclub.xyz",
  tagline:
    "Built around scarcity, prestige, and unmistakable presence. Not just art — digital dominance.",
};

const featured: NFTItem[] = [
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

const stats = [
  { label: "Supply", value: "50" },
  { label: "Chain", value: "Ethereum" },
  { label: "Mint", value: "Invite Only" },
  { label: "Status", value: "Production Ready" },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      {/* background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_10%,rgba(129,140,248,0.20),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_30%,rgba(34,211,238,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_90%_55%,rgba(244,63,94,0.12),transparent_55%)]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
                <span className="text-sm font-semibold">SC</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{site.brand}</div>
                <div className="text-xs text-white/60">{site.domain}</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#gallery">
                Gallery
              </a>
              <a className="hover:text-white" href="#links">
                Links
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <ConnectWallet />
            </div>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="pt-10 md:pt-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Limited drop • 50 artifacts</Pill>
                <Pill>Invite-only mint</Pill>
                <Pill>High-status collection</Pill>
              </div>

              <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                {site.dropTitle}
              </h1>

              <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
                {site.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="#gallery" variant="primary">
                  View Gallery
                </ButtonLink>
                <ButtonLink href="https://opensea.io/" variant="ghost" target="_blank">
                  OpenSea
                </ButtonLink>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs text-white/60">{s.label}</div>
                    <div className="mt-1 text-sm font-semibold">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-white/45">
                Tip: ضع صور الـNFT داخل <b>/public/nfts</b> بأسماء مثل{" "}
                <b>cipher-01.png</b>
              </div>
            </div>

            {/* Right hero card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Featured Artifact</div>
                    <div className="text-xs text-white/60">Sovereign • Genesis</div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Invite Access
                  </span>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  {/* صورة كبيرة — ضعها في /public/nfts/hero.png أو غيّر المسار */}
                  <div className="aspect-[16/10] w-full bg-[url('/nfts/hero.png')] bg-cover bg-center" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-xs text-white/60">Prestige</div>
                    <div className="text-sm font-semibold">Elite</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-xs text-white/60">Utility</div>
                    <div className="text-sm font-semibold">Access</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-xs text-white/60">Drop</div>
                    <div className="text-sm font-semibold">001</div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3" id="links">
                  <ButtonLink href="https://opensea.io/" variant="primary" target="_blank">
                    View on OpenSea
                  </ButtonLink>
                  <ButtonLink href="#about" variant="ghost">
                    Learn More
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-16 border-t border-white/10 py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">About the Drop</h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Only 50 artifacts will ever exist — designed for collectors who demand
                authority, not noise. A clean, high-end presentation built for trust,
                clarity, and conversion.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                { t: "Step 01", d: "Connect (UI) — professional entry point" },
                { t: "Step 02", d: "Explore the gallery — curated rarity" },
                { t: "Step 03", d: "OpenSea / Links — direct conversion" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-xs text-white/60">{x.t}</div>
                  <div className="mt-1 text-sm font-semibold">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="pb-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Gallery</h2>
              <p className="mt-2 text-sm text-white/60">Featured ciphers ({featured.length})</p>
            </div>
            <a
              className="text-sm text-white/70 hover:text-white"
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
            >
              → View on OpenSea
            </a>
          </div>

          <div className="mt-6">
            <CollectionGrid items={featured} />
          </div>
        </Container>
      </section>

      <Footer brand={site.brand} domain={site.domain} />
    </main>
  );
}
