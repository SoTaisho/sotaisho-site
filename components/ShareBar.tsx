"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const enc = encodeURIComponent;

export function ShareBar({ title, text }: { title?: string; text?: string }) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    if (typeof window === "undefined") return `https://${siteConfig.domain}`;
    return window.location.href;
  }, []);

  const shareText = text || siteConfig.share?.defaultText || siteConfig.brandName;
  const tweet = `https://x.com/intent/tweet?text=${enc(shareText)}&url=${enc(url)}${
    siteConfig.share?.hashtags?.length ? `&hashtags=${enc(siteConfig.share.hashtags.join(","))}` : ""
  }`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  async function quickShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title: title || siteConfig.brandName, text: shareText, url });
      } else {
        await copyLink();
      }
    } catch {
      // cancelled
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold">Share</div>
          <div className="text-xs text-white/60">Repost to socials (or copy link).</div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={quickShare}
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Quick Share
          </button>

          <a
            href={tweet}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-skybrand-400/20 border border-skybrand-300/30 hover:bg-skybrand-400/30 transition"
          >
            X
          </a>

          <a
            href={fb}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Facebook
          </a>

          <button
            onClick={copyLink}
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>

          <a
            href={siteConfig.social?.instagram || "https://instagram.com/"}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Instagram
          </a>

          <a
            href={siteConfig.social?.tiktok || "https://tiktok.com/"}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            TikTok
          </a>

          <a
            href={siteConfig.social?.discord || "https://discord.com/"}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
