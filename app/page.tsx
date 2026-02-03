import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { ShareBar } from "@/components/ShareBar";
import { ConnectWallet } from "@/components/ConnectWallet";
import { NFTCard } from "@/components/NFTCard";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const featured = siteConfig.nftsFallback ?? [];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-14 sm:py-24 overflow-hidden">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                Official Collection • {siteConfig.domain}
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                    {siteConfig.brandName}
                  </span>
                  <span className="block text-white/50 text-xl sm:text-2xl mt-4 font-light tracking-widest uppercase">
                    Sovereign 001 — The Genesis Artifact
                  </span>
                </h1>
                <p className="text-white/60 leading-relaxed max-w-lg text-lg">
                  {siteConfig.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/gallery" className="px-8 shadow-lg shadow-white/5">
                  View Gallery
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.collectionUrl}
                  target="_blank"
                  variant="ghost"
                  className="border-white/10 hover:bg-white/5"
                >
                  View on OpenSea
                </ButtonLink>
              </div>

              <div className="sm:hidden mt-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-sm font-medium text-white/70">Access Portal</span>
                  <ConnectWallet />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-10 rounded-[3rem] bg-white/5 blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
              
              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10">
                  <Image
                    src="/nfts/cipher-01.png"
                    alt="Genesis Artifact"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between px-2">
                  <div>
                    <div className="text-sm font-bold tracking-wider text-white">Aetheric #01</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Status: Rare</div>
                  </div>
                  <Link
                    href="/nft/01"
                    className="text-xs rounded-full px-4 py-2 bg-white text-black font-bold hover:bg-white/90 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-20 border-t border-white/5">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">The Collection</h2>
              <p className="text-white/50 text-sm mt-2 font-mono">Index: #01 → #50</p>
            </div>
            <Link href="/gallery" className="group text-sm text-white/70 hover:text-white flex items-center gap-2 transition-colors">
              Browse All <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.length > 0 ? (
              featured.map((item) => <NFTCard key={item.id} item={item} />)
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl text-white/20">
                No artifacts found in the vault.
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <Container>
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <div className="text-white/60 leading-relaxed space-y-4 max-w-3xl text-lg">
              <p>
                <span className="font-semibold text-white">
                  {siteConfig.brandName}
                </span>{" "}
                is a boutique NFT identity—built around scarcity, prestige, and unmistakable presence.
              </p>
              <p>
                Only <span className="font-semibold text-white">50</span> artifacts will ever exist. This site is the official showcase for the collection and the story behind it.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Total Supply", value: "50" },
                { label: "Blockchain", value: "Ethereum" },
                { label: "Marketplace", value: "OpenSea" }
              ].map((stat, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ShareBar />
        </Container>
      </section>
    </main>
  );
}
