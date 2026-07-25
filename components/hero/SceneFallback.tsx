type SceneFallbackProps = {
  closing?: boolean;
};

export function SceneFallback({ closing = false }: SceneFallbackProps) {
  return (
    <div
      className={`scene-fallback ${closing ? "scene-fallback--closing" : ""}`}
      aria-hidden="true"
    >
      <div className="scene-stars" />
      <div className="scene-planet scene-planet--large" />
      <div className="scene-planet scene-planet--small" />
      <div className="scene-orbit scene-orbit--one" />
      <div className="scene-orbit scene-orbit--two" />
      <div className="scene-stream scene-stream--cyan" />
      <div className="scene-stream scene-stream--violet" />
      <div className="scene-stream scene-stream--coral" />
      <div className="scene-engine">
        <div className="scene-engine__halo" />
        <div className="scene-engine__orbit">
          {Array.from({ length: 8 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
        <div className="scene-engine__ring scene-engine__ring--outer" />
        <div className="scene-engine__ring scene-engine__ring--inner" />
        <div className="scene-engine__arc scene-engine__arc--violet" />
        <div className="scene-engine__arc scene-engine__arc--coral" />
        <div className="scene-engine__core">
          <span />
        </div>
      </div>
      <div className="scene-vignette" />
    </div>
  );
}
