"use client";

import { useEffect, useState } from "react";
import { NFTCard } from "@/components/NFTCard";
import type { NFTItem } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

type CollectionResponse = { nfts: any[]; next?: string };

function mapItem(x: any): NFTItem {
  return {
    identifier: String(x.identifier ?? x.token_id ?? ""),
    name: x.name ?? null,
    description: x.description ?? null,
    image_url: x.display_image_url ?? x.image_url ?? null,
    opensea_url: x.opensea_url ?? null,
    collection: x.collection ?? null,
    contract: x.contract ?? null
  };
}

export function CollectionGrid({ initialLimit = 50 }: { initialLimit?: number }) {
  const [items, setItems] = useState<NFTItem[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load(first = false) {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const url = new URL("/api/opensea/collection", window.location.origin);
      url.searchParams.set("limit", String(initialLimit));
      if (!first && next) url.searchParams.set("next", next);

      const res = await fetch(url.toString());
      const txt = await res.text();

      if (!res.ok) {
        setError("OpenSea blocked this request (rate limit). Showing fallback images.");
        setItems(
          (siteConfig.nftsFallback || []).map((n: any) =>
            mapItem({
              identifier: n.id,
              name: n.name,
              description: siteConfig.description,
              display_image_url: n.image,
              opensea_url: siteConfig.collectionUrl,
              collection: siteConfig.collectionSlug,
              contract: null
            })
          )
        );
        setNext(null);
        return;
      }

      const data = JSON.parse(txt) as CollectionResponse;
      const mapped = (data.nfts || []).map(mapItem);
      setItems((prev) => (first ? mapped : [...prev, ...mapped]));
      setNext(data.next || null);
    } catch {
      setError("Could not load from OpenSea. Showing fallback images.");
      setItems(
        (siteConfig.nftsFallback || []).map((n: any) =>
          mapItem({
            identifier: n.id,
            name: n.name,
            description: siteConfig.description,
            display_image_url: n.image,
            opensea_url: siteConfig.collectionUrl,
            collection: siteConfig.collectionSlug,
            contract: null
          })
        )
      );
      setNext(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      {error ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          {error}
        </div>
      ) : null}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <NFTCard key={`${item.contract ?? "x"}:${item.identifier}`} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-4">
        {next ? (
          <button
            onClick={() => load(false)}
            disabled={loading}
            className="rounded-2xl px-5 py-3 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition disabled:opacity-60"
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        ) : (
          <div className="text-xs text-white/50">{items.length ? "End of collection." : "Loading..."}</div>
        )}
      </div>
    </div>
  );
}
