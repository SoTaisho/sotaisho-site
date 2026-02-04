"use client";

export default function ConnectWallet() {
  return (
    <button
      onClick={() => alert("Wallet connect (coming soon)")}
      style={{
        padding: "12px 16px",
        borderRadius: 12,
        background: "linear-gradient(135deg,#38bdf8,#10b981)",
        border: "none",
        color: "#001018",
        fontWeight: 950,
        cursor: "pointer",
      }}
    >
      Connect Wallet
    </button>
  );
}
