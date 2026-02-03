import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { ShareBar } from "@/components/ShareBar";
import { siteConfig } from "@/lib/site-config";

type NFTResponse = { nft: any };

export default async function NFTPage({
  params,
  searchParams
}: {
  params: { id: string };
  searchParams: { contract?: string };
}) {
  const identifier = params.id;
  const contract = searchParams.contract;

  let nft: any | null = null;

  if (contract) {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
    const abs = baseUrl
      ? `${baseUrl}/api/opensea/nft?contract=${contract}&identifier=${identifier}`
      : null;

    try {
      if (abs) {
        const res = await fetch(abs, { next: { revalidate: 120 } });
        if (res.ok) {
          const data = (await res.json()) as NFTResponse;
          nft = data.nft ?? null;
        }
      }
    } catch {
      // ignore
    }
  }

  const name = nft?.name || `NFT #${identifier}`;
  const img = nft?.display_image_url || nft?.image_url || "/nfts/cipher-01.png";
  const desc = nft?.description || siteConfig.description;
  const osUrl = nft?.opensea_url || siteConfig.collectionUrl;

  if (!identifier) return notFound();

  return (
    <main className="py-10">
      <Container>
        <div className="mb-6">
          <Link href="/gallery" className="text-sm text-white/70 hover:text-white">
            ← Back to gallery
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-skybrand-400/10 blur-2xl"></div>
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-bold">{name}</h1>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-skybrand-400"></span>
              Identifier: #{identifier}
            </div>

            <p className="text-white/70 leading-relaxed">{desc}</p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href={osUrl} target="_blank">
                View on OpenSea
              </ButtonLink>
              <ButtonLink href="/" variant="ghost">
                Home
              </ButtonLink>
            </div>

            <ShareBar text={`${name} — ${siteConfig.brandName}`} />

            {!contract ? (
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-sm text-white/70">
                Tip: open this NFT from the Gallery so the page knows the correct contract address.
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </main>
  );
}
