"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";
import { AsteroidWorld } from "./AsteroidWorld";
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
      <StarField mobile={mobile} />
    </group>
  );
}

function ReadySignal({ onReady }: { onReady: () => void }) {
  const sent = useRef(false);

  useFrame(() => {
    if (sent.current) return;
    sent.current = true;
    onReady();
  });

  return null;
}

function Scene({ active, mobile, onReady }: HeroSceneProps) {
  return (
    <>
      <color attach="background" args={["#03040b"]} />
      <ambientLight intensity={0.42} color="#7888b4" />
      <hemisphereLight args={["#dce9ff", "#090a14", 1.2]} />
      <directionalLight position={[-4, 7, 6]} color="#fff0da" intensity={4.6} />
      <directionalLight position={[6, 2, 1]} color="#8272bd" intensity={1.4} />
      <Suspense fallback={null}>
        <EnvironmentDrift active={active} mobile={mobile} />
        <group
          position={mobile ? [1.72, 2, -2.7] : [2.35, 0.28, -0.2]}
          scale={mobile ? 0.8 : 1.05}
        >
          <AsteroidWorld active={active} subject="rose" />
        </group>
        {!mobile ? <ShootingStars active={active} /> : null}
      </Suspense>
      <ReadySignal onReady={onReady} />
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
      }}
      style={{ pointerEvents: "none" }}
    >
      <Scene active={active} mobile={mobile} onReady={onReady} />
    </Canvas>
  );
}
