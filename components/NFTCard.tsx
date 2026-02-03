import Image from "next/image";
import Link from "next/link";
import type { NFTItem } from "@/lib/site-config";

export function NFTCard({ item }: { item: NFTItem }) {
  const id = item.identifier;
  const img = item.image_url || "/nfts/cipher-01.png";
  const name = item.name || `NFT #${id}`;
  const contract = item.contract || "";

  return (
    <Link
      href={`/nft/${id}${contract ? `?contract=${contract}` : ""}`}
      className="group rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
    >
      <div className="relative aspect-square">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={id === "1" || id === "01"}
        />
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-white/60">OpenSea collection</div>
        </div>
        <div className="text-xs rounded-full px-2 py-1 bg-skybrand-400/15 border border-skybrand-300/25 text-white/80">
          #{id}
        </div>
      </div>
    </Link>
  );
}
