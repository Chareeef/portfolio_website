import { Stars } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

function createStarGlowTexture() {
  const size = 64;
  const data = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = (x + 0.5) / size - 0.5;
      const dy = (y + 0.5) / size - 0.5;
      const distance = Math.sqrt(dx * dx + dy * dy) * 2;
      const core = Math.max(0, 1 - distance * 6);
      const halo = Math.max(0, 1 - distance);
      const alpha = Math.min(1, core + Math.pow(halo, 3.2) * 0.42);
      const index = (y * size + x) * 4;

      data[index] = 255;
      data[index + 1] = 255;
      data[index + 2] = 255;
      data[index + 3] = alpha * 255;
    }
  }

  const texture = new THREE.DataTexture(
    data,
    size,
    size,
    THREE.RGBAFormat,
  );
  texture.needsUpdate = true;
  return texture;
}

const brightStars = [
  { position: [-6.5, 3.7, -13], scale: 0.44, color: "#d9e7ff" },
  { position: [-1.9, 4.5, -18], scale: 0.32, color: "#fff4d5" },
  { position: [3.6, 4.8, -17], scale: 0.35, color: "#c8ddff" },
  { position: [7.5, -0.6, -18], scale: 0.4, color: "#ffd1b6" },
  { position: [-5.5, -2.7, -16], scale: 0.28, color: "#d5e3ff" },
] as const;

export function StarField({ mobile }: { mobile: boolean }) {
  const glowTexture = useMemo(createStarGlowTexture, []);

  useEffect(() => () => glowTexture.dispose(), [glowTexture]);

  return (
    <>
      <Stars
        radius={80}
        depth={48}
        count={mobile ? 950 : 1900}
        factor={mobile ? 2.1 : 2.7}
        saturation={0.28}
        fade
        speed={0}
      />
      <Stars
        radius={38}
        depth={18}
        count={mobile ? 130 : 320}
        factor={0.8}
        saturation={0.42}
        fade
        speed={0}
      />
      {brightStars.slice(0, mobile ? 3 : brightStars.length).map((star) => (
        <sprite
          key={star.position.join("-")}
          position={[...star.position]}
          scale={[star.scale, star.scale, 1]}
        >
          <spriteMaterial
            map={glowTexture}
            color={star.color}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      ))}
    </>
  );
}
