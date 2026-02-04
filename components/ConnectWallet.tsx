"use client";

import { useMemo, useState } from "react";

function shortAddr(addr: string) {
  return addr.slice(0, 6) + "…" + addr.slice(-4);
}

export default function ConnectWallet() {
  const [connected, setConnected] = useState(false);

  // عنوان وهمي للعرض فقط (UI) — لا يوجد ربط حقيقي الآن
  const fakeAddress = useMemo(() => "0x7E57d0049A0b7E57d0049A0b", []);

  return connected ? (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      <span className="text-xs text-white/80">{shortAddr(fakeAddress)}</span>
      <button
        onClick={() => setConnected(false)}
        className="ml-2 rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70 hover:text-white"
      >
        Disconnect
      </button>
    </div>
  ) : (
    <button
      onClick={() => setConnected(true)}
      className="rounded-xl bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400"
    >
      Connect Wallet
    </button>
  );
}
