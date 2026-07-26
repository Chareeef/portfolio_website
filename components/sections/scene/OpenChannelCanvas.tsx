"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AsteroidWorld } from "@/components/hero/scene/AsteroidWorld";
import { StarField } from "@/components/hero/scene/StarField";

function RenderScheduler({ active }: { active: boolean }) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    if (!active) {
      invalidate();
      return;
    }

    const interval = window.setInterval(invalidate, 34);
    invalidate();
    return () => window.clearInterval(interval);
  }, [active, invalidate]);

  return null;
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

function FoxScene({
  active,
  mobile,
  onReady,
}: {
  active: boolean;
  mobile: boolean;
  onReady: () => void;
}) {
  return (
    <>
      <ambientLight intensity={0.38} color="#7d87ad" />
      <hemisphereLight args={["#f1e7d8", "#080912", 1.05]} />
      <directionalLight position={[-5, 7, 6]} color="#ffd7a7" intensity={4.8} />
      <directionalLight position={[5, 1, 2]} color="#7566ad" intensity={1.2} />
      <StarField mobile={mobile} />
      <group
        position={mobile ? [3.55, 3.6, -2.8] : [3.5, -0.18, -0.55]}
        scale={mobile ? 0.5 : 1.12}
      >
        <AsteroidWorld active={active} subject="fox" motionOffset={2.8} />
      </group>
      <ReadySignal onReady={onReady} />
      <RenderScheduler active={active} />
    </>
  );
}

export function OpenChannelScene() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updatePreferences = () => {
      setMobile(mobileQuery.matches);
      setReducedMotion(motionQuery.matches);
    };
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "15% 0px" },
    );

    updatePreferences();
    observer.observe(wrapper);
    motionQuery.addEventListener("change", updatePreferences);
    mobileQuery.addEventListener("change", updatePreferences);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", updatePreferences);
      mobileQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`absolute inset-0 transition-opacity duration-1000 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas
        frameloop="demand"
        dpr={mobile ? 1 : [1, 1.25]}
        camera={{
          position: mobile ? [0.65, 1.1, 8] : [0.2, 1, 7.7],
          fov: mobile ? 52 : 43,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: !mobile,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.3,
        }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor("#03040b", 0);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          camera.lookAt(mobile ? 1.1 : 1.45, 0.65, -0.4);
        }}
        style={{ pointerEvents: "none" }}
      >
        <FoxScene
          active={visible && !reducedMotion}
          mobile={mobile}
          onReady={() => setReady(true)}
        />
      </Canvas>
    </div>
  );
}
