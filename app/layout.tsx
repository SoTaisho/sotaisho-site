import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Sotaisho ClubNFT",
  description: "Premium NFT landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
