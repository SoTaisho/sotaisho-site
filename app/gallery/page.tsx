import { Container } from "@/components/Container";
import { CollectionGrid } from "@/components/CollectionGrid";
import { siteConfig } from "@/lib/site-config";

export default function GalleryPage() {
  return (
    <main className="py-10">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Gallery</h1>
            <p className="text-white/60 text-sm">
              Auto-synced from OpenSea — {siteConfig.brandName}
            </p>
          </div>
          <a
            href={siteConfig.collectionUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm rounded-2xl px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            OpenSea collection →
          </a>
        </div>

        <CollectionGrid initialLimit={50} />
      </Container>
    </main>
  );
}
