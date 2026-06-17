import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1E1B4B",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {/* Owl eyes */}
        <div style={{ display: "flex", gap: 4 }}>
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#F59E0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#1E1B4B",
              }}
            />
          </div>
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#F59E0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#1E1B4B",
              }}
            />
          </div>
        </div>
        {/* Beak */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderTop: "4px solid #F59E0B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
