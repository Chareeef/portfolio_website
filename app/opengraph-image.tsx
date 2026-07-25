import { ImageResponse } from "next/og";

export const alt =
  "Beyond the Horizon — Youssef Charif Hamidi, software engineer and product builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const starPositions = [
  [68, 82],
  [144, 190],
  [250, 74],
  [360, 134],
  [476, 55],
  [556, 230],
  [654, 96],
  [770, 184],
  [892, 61],
  [1034, 126],
  [1140, 48],
  [1088, 300],
  [812, 356],
  [940, 474],
  [696, 528],
  [1110, 570],
] as const;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 78% 24%, #22275a 0, #0c1027 30%, #050713 67%)",
        color: "#f3efe4",
        fontFamily: "sans-serif",
      }}
    >
      {starPositions.map(([left, top], index) => (
        <span
          key={`${left}-${top}`}
          style={{
            position: "absolute",
            left,
            top,
            display: "flex",
            width: index % 4 === 0 ? 4 : 2,
            height: index % 4 === 0 ? 4 : 2,
            borderRadius: 99,
            background: index % 5 === 0 ? "#e7c98d" : "#d9ddf7",
            opacity: 0.72,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          right: -46,
          top: -76,
          display: "flex",
          width: 490,
          height: 490,
          border: "3px solid rgba(210,214,239,.17)",
          borderRadius: 999,
          background:
            "radial-gradient(circle at 35% 32%, #4b4d82, #171b43 55%, #090b1e 78%)",
          boxShadow: "0 0 100px rgba(125,122,218,.18)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 250,
          bottom: 120,
          display: "flex",
          width: 58,
          height: 58,
          borderRadius: 99,
          background: "#d8bd82",
          boxShadow: "0 0 40px rgba(231,201,141,.4)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#e7c98d",
            fontSize: 18,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Beyond the Horizon
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 790 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 650,
              lineHeight: 1.02,
              letterSpacing: -4,
            }}
          >
            I build software that expands what people can do.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              color: "#b5bbd1",
              fontSize: 22,
            }}
          >
            Youssef Charif Hamidi · Software Engineer & Product Builder
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
