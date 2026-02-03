import Link from "next/link";
import { Container } from "./Container";
import { ConnectWallet } from "./ConnectWallet";
import { siteConfig } from "@/lib/site-config";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/20 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/10">
              SC
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{siteConfig.brandName}</div>
              <div className="text-xs text-white/60">{siteConfig.domain}</div>
            </div>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link className="text-white/80 hover:text-white" href="/gallery">Gallery</Link>
            <Link className="text-white/80 hover:text-white" href="/#about">About</Link>
            <Link className="text-white/80 hover:text-white" href="/#links">Links</Link>
          </nav>

          <div className="hidden sm:block">
            <ConnectWallet />
          </div>
        </div>
      </Container>
    </header>
  );
}
