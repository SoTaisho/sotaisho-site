import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Official NFT Gallery`,
  description: siteConfig.description,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    title: `${siteConfig.brandName} — Official NFT Gallery`,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.brandName,
    images: [{ url: "/nfts/cipher-01.png", width: 1024, height: 1024, alt: "Cipher #01" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — Official NFT Gallery`,
    description: siteConfig.description,
    images: ["/nfts/cipher-01.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen antialiased">
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
