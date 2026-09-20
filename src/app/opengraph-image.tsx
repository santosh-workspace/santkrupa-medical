import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Santkrupa Medical & General Store — 24 hours medical store in Alandi Devachi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic OG card — English-only text on purpose:
 * OG image renderers (Satori) don't shape Devanagari conjuncts correctly,
 * so Marathi text here would render broken. Marathi stays in page content.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFFDF9",
          padding: "80px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 26,
              letterSpacing: 4,
              color: "#B35410",
              fontWeight: 700,
            }}
          >
            TRUSTED MEDICAL STORE • ALANDI DEVACHI
          </div>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 800,
              color: "#1C1917",
              marginTop: 24,
            }}
          >
            Santkrupa Medical &amp; General Store
          </div>
          <div style={{ fontSize: 34, color: "#57534E", marginTop: 28 }}>
            Open 24 × 7 • Medicines &amp; Daily Healthcare
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 36,
              fontSize: 30,
              fontWeight: 700,
              color: "#FFFFFF",
              backgroundColor: "#D96A12",
              borderRadius: 999,
              padding: "16px 40px",
              width: 470,
            }}
          >
            Call: +91 99229 69583
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 260,
            height: 260,
            borderRadius: 64,
            backgroundColor: "#1C1917",
            color: "#FEEFDC",
            fontSize: 150,
            fontWeight: 800,
          }}
        >
          +
        </div>
      </div>
    ),
    { ...size }
  );
}
