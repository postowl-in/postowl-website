import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PostOwl.in — Send personalised bulk email for free";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1E1B4B",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          position: "relative",
        }}
      >
        {/* Amber glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(245,158,11,0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Owl icon */}
          <div
            style={{
              width: 56,
              height: 56,
              background: "rgba(245,158,11,0.15)",
              borderRadius: 14,
              border: "1px solid rgba(245,158,11,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {[0, 1].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    background: "#F59E0B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#1E1B4B",
                    }}
                  />
                </div>
              ))}
            </div>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "6px solid #F59E0B",
              }}
            />
          </div>
          {/* Brand name */}
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ color: "white", fontSize: 32, fontWeight: 700 }}>
              PostOwl
            </span>
            <span style={{ color: "#F59E0B", fontSize: 32, fontWeight: 700 }}>
              .in
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: 760,
            }}
          >
            Send personalised emails to your whole list.
          </div>
          <div
            style={{
              color: "#F59E0B",
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: "-1.5px",
            }}
          >
            No monthly fees.
          </div>

          {/* Subline */}
          <div
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 22,
              marginTop: 4,
            }}
          >
            Free desktop app · Gmail · Outlook · Any email account · Mac + Windows
          </div>
        </div>

        {/* Bottom right: provider chips */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 80,
            display: "flex",
            gap: 10,
          }}
        >
          {["Gmail", "Outlook", "Zoho", "AWS SES"].map((p) => (
            <div
              key={p}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 20,
                padding: "6px 16px",
                color: "rgba(255,255,255,0.6)",
                fontSize: 16,
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
