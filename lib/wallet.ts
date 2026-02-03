import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "wagmi/chains";
import { siteConfig } from "@/lib/site-config";

// Replace with your WalletConnect Project ID (free):
// https://cloud.walletconnect.com
// Set env var: NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "YOUR_WALLETCONNECT_PROJECT_ID";

export const wagmiConfig = getDefaultConfig({
  appName: siteConfig.brandName,
  projectId,
  chains: [mainnet],
  ssr: true
});
