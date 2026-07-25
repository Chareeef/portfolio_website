import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function ShootingStars({ active }: { active: boolean }) {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!active || !group.current) return;
    const phase = clock.getElapsedTime() % 13;
    const visible = phase > 10.7 && phase < 11.8;
    group.current.visible = visible;
    if (visible) {
      const progress = (phase - 10.7) / 1.1;
      group.current.position.x = -5 + progress * 6;
      group.current.position.y = 3.8 - progress * 2.1;
    }
  });

  return (
    <group ref={group} visible={false} position={[-5, 3.8, -5]}>
      <mesh rotation={[0, 0, -0.72]}>
        <cylinderGeometry args={[0.008, 0.035, 1.35, 6]} />
        <meshBasicMaterial color="#eee5c7" transparent opacity={0.72} />
      </mesh>
      <pointLight color="#e7c98d" intensity={1.2} distance={2.5} />
    </group>
  );
}
