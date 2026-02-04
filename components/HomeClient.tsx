"use client";

import ConnectWallet from "./ConnectWallet";

export default function HomeClient() {
  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <header style={styles.nav}>
        <div style={styles.logo}>Sotaisho Club NFT</div>

        <nav style={styles.links}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#gallery" style={styles.link}>Gallery</a>
          <a href="#roadmap" style={styles.link}>Roadmap</a>
          <a href="#community" style={styles.link}>Community</a>
        </nav>

        <div style={styles.navRight}>
          <a style={styles.ghostBtn} href="#gallery">Explore</a>
          <a style={styles.ghostBtn} href="https://opensea.io/collection/immortal-crown-unit-001" target="_blank" rel="noreferrer">
            OpenSea
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroCard}>
          <div style={styles.badge}>Limited Drop • Only 50</div>

          <h1 style={styles.h1}>
            <span style={{ display: "block" }}>Sotaisho Club NFT</span>
            <span style={styles.h1Sub}>Sovereign 001 — The Genesis Artifact</span>
          </h1>

          <p style={styles.p}>
            Elite lineage. Scarcity by design. Built for collectors who command presence.
            Own the origin, claim the throne.
          </p>

          <div style={styles.actions}>
            <ConnectWallet />
            <a
              href="#gallery"
              style={styles.secondaryBtn}
            >
              View Gallery
            </a>
          </div>

          <div style={styles.stats}>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Supply</div>
              <div style={styles.statValue}>50</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Chain</div>
              <div style={styles.statValue}>Ethereum</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Marketplace</div>
              <div style={styles.statValue}>OpenSea</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={styles.section}>
        <div style={styles.sectionHead}>
          <div>
            <h2 style={styles.h2}>Gallery</h2>
            <div style={styles.muted}>Featured ciphers</div>
          </div>

          <a
            href="https://opensea.io/collection/immortal-crown-unit-001"
            target="_blank"
            rel="noreferrer"
            style={styles.sectionLink}
          >
            View on OpenSea →
          </a>
        </div>

        <div style={styles.grid}>
          {[
            "Cipher #01",
            "Cipher #02",
            "Cipher #03",
            "Cipher #04",
            "Cipher #05",
            "Cipher #06",
            "Cipher #07",
            "Cipher #08",
          ].map((name) => (
            <div key={name} style={styles.nftCard}>
              <div style={styles.nftImg} />
              <div style={styles.nftBody}>
                <div style={styles.nftTitle}>{name}</div>
                <div style={styles.nftMeta}>Genesis Series</div>
                <a
                  href="https://opensea.io/collection/immortal-crown-unit-001"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.nftBtn}
                >
                  OpenSea
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" style={styles.section}>
        <h2 style={styles.h2}>Roadmap</h2>
        <div style={styles.steps}>
          <div style={styles.step}>
            <div style={styles.stepNum}>01</div>
            <div>
              <div style={styles.stepTitle}>Genesis Launch</div>
              <div style={styles.muted}>Release the first artifacts and establish the lineage.</div>
            </div>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNum}>02</div>
            <div>
              <div style={styles.stepTitle}>Collector Prestige</div>
              <div style={styles.muted}>Exclusive perks, private access, and future drops.</div>
            </div>
          </div>

          <div style={styles.step}>
            <div style={styles.stepNum}>03</div>
            <div>
              <div style={styles.stepTitle}>Scarcity Forever</div>
              <div style={styles.muted}>Only 50 total. The few stay powerful.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="community" style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLogo}>Sotaisho Club NFT</div>
          <div style={styles.muted}>Claim the throne • Digital dominance • 2026</div>
          <div style={styles.socials}>
            <a style={styles.social} href="#" aria-label="X">X</a>
            <a style={styles.social} href="#" aria-label="Instagram">IG</a>
            <a style={styles.social} href="#" aria-label="Discord">DS</a>
            <a style={styles.social} href="#" aria-label="TikTok">TT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(56,189,248,.18), transparent 45%), radial-gradient(circle at bottom right, rgba(16,185,129,.12), transparent 40%), #050b14",
    color: "white",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
  },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "16px 22px",
    borderBottom: "1px solid rgba(255,255,255,.10)",
    background: "rgba(5,11,20,.65)",
    backdropFilter: "blur(12px)",
  },

  logo: { fontWeight: 950, fontSize: 18, letterSpacing: 0.2 },

  links: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" },

  link: {
    fontSize: 13,
    color: "rgba(255,255,255,.78)",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.08)",
    background: "rgba(255,255,255,.03)",
  },

  navRight: { display: "flex", gap: 10, flexWrap: "wrap" },

  ghostBtn: {
    fontSize: 13,
    color: "rgba(255,255,255,.85)",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.03)",
    padding: "8px 12px",
    borderRadius: 12,
    textDecoration: "none",
  },

  hero: { padding: "46px 16px 8px" },

  heroCard: {
    maxWidth: 980,
    margin: "0 auto",
    borderRadius: 26,
    border: "1px solid rgba(255,255,255,.10)",
    background: "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",
    boxShadow: "0 30px 120px rgba(0,0,0,.45)",
    padding: "34px 22px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: 12,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.04)",
    color: "rgba(255,255,255,.85)",
  },

  h1: { marginTop: 18, fontSize: 44, fontWeight: 950, lineHeight: 1.05, letterSpacing: -0.6 },

  h1Sub: { display: "block", marginTop: 10, fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,.75)" },

  p: { marginTop: 16, maxWidth: 720, lineHeight: 1.7, color: "rgba(255,255,255,.72)", fontSize: 15 },

  actions: { marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" },

  secondaryBtn: {
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.18)",
    background: "transparent",
    color: "white",
    fontWeight: 800,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  stats: { marginTop: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 },

  statCard: { borderRadius: 16, border: "1px solid rgba(255,255,255,.10)", background: "rgba(0,0,0,.18)", padding: 14 },

  statLabel: { fontSize: 12, color: "rgba(255,255,255,.60)" },
  statValue: { marginTop: 6, fontSize: 20, fontWeight: 900 },

  section: { maxWidth: 1100, margin: "0 auto", padding: "44px 16px" },

  sectionHead: { display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" },

  h2: { fontSize: 22, fontWeight: 950, margin: 0 },

  muted: { marginTop: 6, color: "rgba(255,255,255,.62)", fontSize: 13 },

  sectionLink: { color: "rgba(125,211,252,.92)", fontWeight: 900, textDecoration: "none" },

  grid: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 },

  nftCard: { borderRadius: 22, overflow: "hidden", border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)" },

  nftImg: { height: 170, background: "linear-gradient(135deg, rgba(56,189,248,.25), rgba(16,185,129,.18))" },

  nftBody: { padding: 14 },

  nftTitle: { fontWeight: 950 },
  nftMeta: { marginTop: 4, fontSize: 12, color: "rgba(255,255,255,.65)" },

  nftBtn: {
    display: "inline-block",
    marginTop: 12,
    textDecoration: "none",
    textAlign: "center",
    width: "100%",
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(0,0,0,.20)",
    color: "white",
    fontWeight: 900,
    fontSize: 13,
  },

  steps: { marginTop: 16, display: "grid", gap: 12 },

  step: { display: "flex", gap: 14, alignItems: "flex-start", borderRadius: 20, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)", padding: 16 },

  stepNum: { width: 42, height: 42, borderRadius: 14, display: "grid", placeItems: "center", fontWeight: 950, background: "rgba(56,189,248,.18)", border: "1px solid rgba(56,189,248,.22)" },

  stepTitle: { fontWeight: 950 },

  footer: { padding: "40px 16px 60px", borderTop: "1px solid rgba(255,255,255,.08)" },

  footerInner: { maxWidth: 980, margin: "0 auto", textAlign: "center", display: "grid", gap: 10 },

  footerLogo: { fontWeight: 950 },

  socials: { marginTop: 10, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" },

  social: { width: 40, height: 40, borderRadius: 14, display: "grid", placeItems: "center", border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)", color: "white", textDecoration: "none", fontWeight: 950 },
};
