"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";
import { AlienTerrain } from "./AlienTerrain";
import { CelestialBodies } from "./CelestialBodies";
import { ShootingStars } from "./ShootingStars";
import { StarField } from "./StarField";
import { WheelchairExplorer } from "./WheelchairExplorer";

type HeroSceneProps = {
  active: boolean;
  mobile: boolean;
  onReady: () => void;
};

function RenderScheduler({ active }: { active: boolean }) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    if (!active) return;

    let interval: number | undefined;

    const updateSchedule = () => {
      if (document.visibilityState === "visible" && interval === undefined) {
        invalidate();
        interval = window.setInterval(invalidate, 90);
      } else if (
        document.visibilityState !== "visible" &&
        interval !== undefined
      ) {
        window.clearInterval(interval);
        interval = undefined;
      }
    };

    updateSchedule();
    document.addEventListener("visibilitychange", updateSchedule);
    return () => {
      document.removeEventListener("visibilitychange", updateSchedule);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [active, invalidate]);

  return null;
}

function EnvironmentDrift({
  active,
  mobile,
}: {
  active: boolean;
  mobile: boolean;
}) {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!active || !group.current) return;
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.035) * 0.014;
  });

  return (
    <group ref={group}>
      <CelestialBodies />
      <StarField mobile={mobile} />
    </group>
  );
}

function Scene({ active, mobile }: Omit<HeroSceneProps, "onReady">) {
  return (
    <>
      <color attach="background" args={["#050713"]} />
      <fog attach="fog" args={["#080b1b", 8, 25]} />
      <ambientLight intensity={0.28} color="#a8b1ea" />
      <directionalLight
        position={[-4, 6, 3]}
        color="#b7b7ec"
        intensity={1.35}
      />
      <directionalLight
        position={[5, 1, -3]}
        color="#d7bc83"
        intensity={0.42}
      />
      <Suspense fallback={null}>
        <EnvironmentDrift active={active} mobile={mobile} />
        <AlienTerrain />
        <WheelchairExplorer active={active} />
        {!mobile ? <ShootingStars active={active} /> : null}
      </Suspense>
      <RenderScheduler active={active} />
    </>
  );
}

export function HeroScene({ active, mobile, onReady }: HeroSceneProps) {
  return (
    <Canvas
      frameloop="demand"
      dpr={mobile ? 1 : [1, 1.35]}
      camera={{
        position: mobile ? [0.9, 1.15, 6.6] : [0.25, 1.1, 6.2],
        fov: mobile ? 53 : 46,
        near: 0.1,
        far: 100,
      }}
      gl={{
        antialias: !mobile,
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      onCreated={({ gl, camera }) => {
        gl.setClearColor("#050713");
        camera.lookAt(0.45, 0.25, -1.4);
        onReady();
      }}
      style={{ pointerEvents: "none" }}
    >
      <Scene active={active} mobile={mobile} />
    </Canvas>
  );
}
