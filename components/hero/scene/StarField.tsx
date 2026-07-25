import { Stars } from "@react-three/drei";

export function StarField({ mobile }: { mobile: boolean }) {
  return (
    <>
      <Stars
        radius={80}
        depth={42}
        count={mobile ? 750 : 1500}
        factor={mobile ? 2.5 : 3.3}
        saturation={0.08}
        fade
        speed={0}
      />
      <Stars
        radius={45}
        depth={20}
        count={mobile ? 120 : 280}
        factor={1.2}
        saturation={0.18}
        fade
        speed={0}
      />
    </>
  );
}
