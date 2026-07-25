"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";
import { CelestialBodies } from "./CelestialBodies";
import { HorizonEngine } from "./HorizonEngine";
import { ShootingStars } from "./ShootingStars";
import { StarField } from "./StarField";

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
        interval = window.setInterval(invalidate, 34);
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
      <color attach="background" args={["#03040b"]} />
      <fog attach="fog" args={["#050614", 13, 31]} />
      <ambientLight intensity={1.15} color="#aeb9ff" />
      <hemisphereLight args={["#c8d5ff", "#17152c", 1.8]} />
      <directionalLight position={[-4, 7, 6]} color="#d8e3ff" intensity={4.2} />
      <directionalLight position={[6, 2, 1]} color="#9d7dff" intensity={3.4} />
      <Suspense fallback={null}>
        <EnvironmentDrift active={active} mobile={mobile} />
        <group position={mobile ? [-0.95, 1.2, -1.1] : [0, 0, 0]}>
          <HorizonEngine active={active} />
        </group>
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
        position: mobile ? [0.7, 1.05, 7.9] : [0.25, 1.05, 7.5],
        fov: mobile ? 52 : 43,
        near: 0.1,
        far: 100,
      }}
      gl={{
        antialias: !mobile,
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.35,
      }}
      onCreated={({ gl, camera }) => {
        gl.setClearColor("#03040b");
        gl.outputColorSpace = THREE.SRGBColorSpace;
        camera.lookAt(mobile ? 1.15 : 1.25, 0.7, -0.6);
        onReady();
      }}
      style={{ pointerEvents: "none" }}
    >
      <Scene active={active} mobile={mobile} />
    </Canvas>
  );
}
