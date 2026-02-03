export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const contract = searchParams.get("contract");
  const identifier = searchParams.get("identifier");
  const chain = searchParams.get("chain") || "ethereum";

  if (!contract || !identifier) {
    return Response.json({ error: "Missing contract or identifier" }, { status: 400 });
  }

  const url = `https://api.opensea.io/api/v2/chain/${chain}/contract/${contract}/nfts/${identifier}`;

  const res = await fetch(url, {
    headers: { accept: "*/*" },
    next: { revalidate: 120 }
  });

  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: {
      "content-type": res.headers.get("content-type") || "application/json",
      "cache-control": "public, s-maxage=120, stale-while-revalidate=600"
    }
  });
}
