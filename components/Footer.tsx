import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <Container>
        <div className="py-10 text-sm text-white/60 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href={siteConfig.collectionUrl} target="_blank" rel="noreferrer">OpenSea</a>
            <a className="hover:text-white" href={`https://${siteConfig.domain}`} target="_blank" rel="noreferrer">{siteConfig.domain}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
