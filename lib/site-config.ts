export const siteConfig = {
  "brandName": "Sotaisho club",
  "domain": "sotaishoclub.xyz",
  "collectionUrl": "https://opensea.io/collection/immortal-crown-unit-001",
  "primaryColors": {
    "accent": "#33c0ff",
    "text": "#ffffff"
  },
  "nfts": [],
  "description": "Sovereign 001: The Genesis Artifact. This is the cornerstone of an elite lineage\u2014only 50 will ever exist. A high-stakes fusion of neo-royalty and digital defiance, crafted to anchor the most prestigious portfolios. In a sea of noise, we offer the power of the few. Own the origin, command the scarcity. This is not just art; it is digital dominance. Claim the throne.",
  "social": {
    "x": "https://x.com/",
    "instagram": "https://instagram.com/",
    "facebook": "https://facebook.com/",
    "tiktok": "https://tiktok.com/@",
    "discord": "https://discord.gg/"
  },
  "share": {
    "defaultText": "Sotaisho Club \u2014 Official NFT Gallery",
    "hashtags": [
      "NFT",
      "Web3"
    ]
  },
  "collectionSlug": "immortal-crown-unit-001",
  "nftsFallback": [
    {
      "id": "01",
      "name": "Cipher #01",
      "image": "/nfts/cipher-01.png"
    },
    {
      "id": "02",
      "name": "Cipher #02",
      "image": "/nfts/cipher-02.png"
    },
    {
      "id": "03",
      "name": "Cipher #03",
      "image": "/nfts/cipher-03.png"
    },
    {
      "id": "04",
      "name": "Cipher #04",
      "image": "/nfts/cipher-04.png"
    },
    {
      "id": "05",
      "name": "Cipher #05",
      "image": "/nfts/cipher-05.png"
    },
    {
      "id": "06",
      "name": "Cipher #06",
      "image": "/nfts/cipher-06.png"
    },
    {
      "id": "07",
      "name": "Cipher #07",
      "image": "/nfts/cipher-07.png"
    },
    {
      "id": "08",
      "name": "Cipher #08",
      "image": "/nfts/cipher-08.png"
    }
  ]
} as const;

export type NFTItem = {
  identifier: string;
  name: string | null;
  description: string | null;
  image_url: string | null;
  opensea_url: string | null;
  collection: string | null;
  contract: string | null;
};
