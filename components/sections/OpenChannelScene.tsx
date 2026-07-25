"use client";

import dynamic from "next/dynamic";

const OpenChannelCanvas = dynamic(
  () =>
    import("./scene/OpenChannelCanvas").then(
      (module) => module.OpenChannelScene,
    ),
  { ssr: false },
);

export function OpenChannelScene() {
  return <OpenChannelCanvas />;
}
