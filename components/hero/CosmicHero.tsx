"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useRef, useState } from "react";
import { HeroContent } from "./HeroContent";
import { SceneFallback } from "./SceneFallback";

const HeroScene = dynamic(
  () => import("./scene/HeroScene").then((module) => module.HeroScene),
  { ssr: false },
);

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function CosmicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [enhance, setEnhance] = useState(false);
  const [visible, setVisible] = useState(true);
  const [sceneReady, setSceneReady] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    const updatePreferences = () => {
      setReducedMotion(motionQuery.matches);
      setMobile(mobileQuery.matches);
    };

    updatePreferences();
    motionQuery.addEventListener("change", updatePreferences);
    mobileQuery.addEventListener("change", updatePreferences);

    const canEnhance = supportsWebGL() && !connection?.saveData;
    setEnhance(canEnhance);

    return () => {
      motionQuery.removeEventListener("change", updatePreferences);
      mobileQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "20% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-[#050713]"
    >
      <div className="absolute inset-0">
        <SceneFallback />
        {enhance ? (
          <SceneBoundary>
            <div
              aria-hidden="true"
              className={`absolute inset-0 transition-opacity duration-1000 ${
                sceneReady ? "opacity-100" : "opacity-0"
              }`}
            >
              <HeroScene
                active={visible && !reducedMotion}
                mobile={mobile}
                onReady={() => setSceneReady(true)}
              />
            </div>
          </SceneBoundary>
        ) : null}
      </div>
      <div className="hero-lightfield absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#050713]" />
      <div className="noise" />

      <div className="sr-only">
        <p>
          YC-01 is a small floating asteroid carrying a red rose protected
          beneath a glass dome.
        </p>
      </div>
      <HeroContent />

      <div className="hero-object-card" aria-hidden="true">
        <div className="flex items-center justify-between">
          <span>OBJECT / YC-01</span>
          <span className="hero-signal">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="hero-object-card__line" />
        <div className="hero-object-card__readout flex justify-between text-[#d9f7ff]">
          <span>DISTANCE 4.24 LY</span>
          <span>VEL 0.18 LY/YR</span>
        </div>
      </div>
    </section>
  );
}
