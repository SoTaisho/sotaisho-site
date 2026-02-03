import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const featured = siteConfig.nftsFallback || [];

  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
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
              </div>
            </div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10">
              <Image
                src="/nfts/cipher-01.png"
                alt="Cipher #01"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
