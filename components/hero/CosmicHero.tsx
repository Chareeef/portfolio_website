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

    const lowPowerDevice =
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency <= 2;
    const canEnhance =
      supportsWebGL() &&
      !mobileQuery.matches &&
      !connection?.saveData &&
      !lowPowerDevice;
    const idleWindow = window as unknown as {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const idleId = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(() => setEnhance(canEnhance), {
          timeout: 1800,
        })
      : window.setTimeout(() => setEnhance(canEnhance), 600);

    return () => {
      motionQuery.removeEventListener("change", updatePreferences);
      mobileQuery.removeEventListener("change", updatePreferences);
      if (idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,19,.98)_0%,rgba(5,7,19,.83)_43%,rgba(5,7,19,.2)_78%,rgba(5,7,19,.48)_100%)] md:bg-[linear-gradient(90deg,rgba(5,7,19,.97)_0%,rgba(5,7,19,.76)_47%,rgba(5,7,19,.06)_75%,rgba(5,7,19,.26)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#050713]" />
      <div className="noise" />

      <div className="sr-only">
        <p>
          A wheelchair explorer is seen from behind on an extraterrestrial
          ridge, following a starlit path toward distant planets and an open
          horizon.
        </p>
      </div>
      <HeroContent />

      <div className="absolute bottom-7 right-5 z-20 hidden max-w-[19rem] items-start gap-3 text-xs leading-5 text-[#8991aa] lg:flex">
        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#e7c98d]" />
        <p>
          An explorer, a working interface, and the belief that the most
          meaningful product is still ahead.
        </p>
      </div>
    </section>
  );
}
