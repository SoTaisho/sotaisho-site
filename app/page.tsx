import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { ShareBar } from "@/components/ShareBar";
import { ConnectWallet } from "@/components/ConnectWallet";
import { NFTCard } from "@/components/NFTCard";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const featured = siteConfig.nftsFallback || [];

  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-skybrand-400"></span>
                Official site • {siteConfig.domain}
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                <span className="block">{siteConfig.brandName}</span>
                <span className="block text-white/70 text-2xl sm:text-3xl mt-3">
                  Sovereign 001 — The Genesis Artifact
                </span>
              </h1>

              <p className="text-white/70 leading-relaxed">
                {siteConfig.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/gallery">View Gallery</ButtonLink>
                <ButtonLink
                  href={siteConfig.collectionUrl}
                  target="_blank"
                  variant="ghost"
                >
                  View on OpenSea
                </ButtonLink>
              </div>

              <div className="sm:hidden">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-sm font-semibold">Connect wallet</div>
                  <ConnectWallet />
                </div>
              </div>

              <div className="text-xs text-white/50">
                Tip: put your NFT images in /public/nfts
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-skybrand-400/10 blur-2xl"></div>
              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10">
                  <Image
                    src="/nfts/cipher-01.png"
                    alt="Cipher #01"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Cipher #01</div>
                    <div className="text-xs text-white/60">Featured</div>
                  </div>
                  <Link
                    href="/nft/01"
                    className="text-xs rounded-full px-3 py-1 bg-skybrand-400/15 border border-skybrand-300/25 hover:bg-skybrand-400/25 transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Gallery</h2>
              <p className="text-white/60 text-sm">Featured ciphers</p>
            </div>
            <Link href="/gallery" className="text-sm text-white/70 hover:text-white">
              Open full gallery →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((item) => (
              <NFTCard key={item.id} item={item} />
            ))}
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
