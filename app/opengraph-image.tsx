import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Signature Detail — Premium Mobile Auto Detailing in Montreal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(200,169,106,0.12), rgba(10,10,10,0) 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: "50%",
            border: "1px solid rgba(200,169,106,0.6)",
            marginBottom: 36,
          }}
        >
          <span
            style={{
              fontSize: 44,
              color: "#C8A96A",
              fontStyle: "italic",
              fontFamily: "serif",
            }}
          >
            SD
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            color: "#F5F4F1",
            fontFamily: "serif",
            fontWeight: 300,
            letterSpacing: -1,
          }}
        >
          Signature&nbsp;<span style={{ color: "#C8A96A", fontStyle: "italic" }}>Detail</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#C0C0C0",
            marginTop: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Premium Mobile Auto Detailing — Montreal
        </div>
      </div>
    ),
    { ...size }
  );
}
