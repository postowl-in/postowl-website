import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#1E1B4B",
          borderRadius: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {/* Owl eyes */}
        <div style={{ display: "flex", gap: 18 }}>
          {[0, 1].map((i) => (
            <div
              key={i}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#F59E0B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(245,158,11,0.5)",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#1E1B4B",
                }}
              />
            </div>
          ))}
        </div>
        {/* Beak */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "16px solid #F59E0B",
          }}
        />
        {/* Brand text */}
        <div
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginTop: 4,
          }}
        >
          PostOwl<span style={{ color: "#F59E0B" }}>.in</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
