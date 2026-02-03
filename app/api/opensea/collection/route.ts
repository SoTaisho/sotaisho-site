import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const next = searchParams.get("next") || "";
  const limit = searchParams.get("limit") || "50";

  const slug = siteConfig.collectionSlug;
  const url = new URL(`https://api.opensea.io/api/v2/collection/${slug}/nfts`);
  url.searchParams.set("limit", limit);
  if (next) url.searchParams.set("next", next);

  const res = await fetch(url.toString(), {
    headers: { accept: "*/*" },
    next: { revalidate: 60 }
  });

  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: {
      "content-type": res.headers.get("content-type") || "application/json",
      "cache-control": "public, s-maxage=60, stale-while-revalidate=300"
    }
  });
}
