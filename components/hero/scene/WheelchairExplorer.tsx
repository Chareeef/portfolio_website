import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

type ExplorerProps = {
  active: boolean;
};

const silhouette = "#070912";
const edge = "#555f8d";

export function WheelchairExplorer({ active }: ExplorerProps) {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!active || !group.current) return;
    group.current.rotation.y =
      -0.14 + Math.sin(clock.getElapsedTime() * 0.18) * 0.012;
  });

  return (
    <group
      ref={group}
      position={[1.75, -1.1, 1.15]}
      rotation={[0.02, -0.14, 0]}
      scale={0.92}
    >
      {/* Replaceable procedural explorer: the full group can later become a GLB. */}
      <group>
        {[-0.57, 0.57].map((x) => (
          <group key={x} position={[x, 0.62, 0.02]}>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[0.66, 0.055, 12, 48]} />
              <meshStandardMaterial color={silhouette} roughness={0.72} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[0.53, 0.008, 6, 48]} />
              <meshBasicMaterial color={edge} transparent opacity={0.42} />
            </mesh>
          </group>
        ))}

        <mesh position={[0, 0.83, -0.05]}>
          <boxGeometry args={[1.03, 0.13, 0.76]} />
          <meshStandardMaterial color={silhouette} roughness={0.8} />
        </mesh>
        <mesh position={[0, 1.23, 0.24]} rotation={[-0.18, 0, 0]}>
          <boxGeometry args={[0.98, 0.78, 0.12]} />
          <meshStandardMaterial color={silhouette} roughness={0.82} />
        </mesh>

        {[-0.48, 0.48].map((x) => (
          <group key={`front-${x}`} position={[x, 0.24, -0.78]}>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[0.22, 0.04, 10, 32]} />
              <meshStandardMaterial color={silhouette} roughness={0.75} />
            </mesh>
            <mesh position={[0, 0.22, 0.33]} rotation={[0.68, 0, 0]}>
              <cylinderGeometry args={[0.025, 0.025, 0.85, 8]} />
              <meshStandardMaterial color={edge} />
            </mesh>
          </group>
        ))}

        <mesh position={[0, 0.58, -0.52]} rotation={[0.18, 0, 0]}>
          <boxGeometry args={[0.86, 0.06, 0.7]} />
          <meshStandardMaterial color={edge} roughness={0.7} />
        </mesh>
      </group>

      <group>
        <mesh position={[0, 1.58, 0.02]} rotation={[-0.1, 0, 0]}>
          <capsuleGeometry args={[0.34, 0.62, 6, 16]} />
          <meshStandardMaterial color={silhouette} roughness={0.88} />
        </mesh>
        <mesh position={[0, 2.26, -0.06]}>
          <sphereGeometry args={[0.3, 24, 24]} />
          <meshStandardMaterial color={silhouette} roughness={0.92} />
        </mesh>
        <mesh position={[0.08, 2.23, -0.3]} rotation={[0.15, 0, 0]}>
          <sphereGeometry args={[0.13, 18, 18]} />
          <meshStandardMaterial color={silhouette} roughness={0.92} />
        </mesh>

        {[-0.42, 0.42].map((x) => (
          <mesh
            key={`arm-${x}`}
            position={[x, 1.5, -0.12]}
            rotation={[0.52, 0, x > 0 ? 0.18 : -0.18]}
          >
            <capsuleGeometry args={[0.085, 0.62, 4, 12]} />
            <meshStandardMaterial color={silhouette} roughness={0.88} />
          </mesh>
        ))}

        {[-0.23, 0.23].map((x) => (
          <mesh
            key={`leg-${x}`}
            position={[x, 0.9, -0.48]}
            rotation={[0.92, 0, 0]}
          >
            <capsuleGeometry args={[0.11, 0.66, 4, 12]} />
            <meshStandardMaterial color={silhouette} roughness={0.88} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
