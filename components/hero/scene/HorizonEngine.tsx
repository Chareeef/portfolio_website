import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group, Mesh } from "three";

type HorizonEngineProps = {
  active: boolean;
};

const streamColors = ["#64e9ff", "#a890ff", "#ff8d73"] as const;

export function HorizonEngine({ active }: HorizonEngineProps) {
  const assembly = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const orbit = useRef<Group>(null);
  const packetRefs = useRef<Array<Mesh | null>>([]);

  const streams = useMemo(
    () => [
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.8, -3.5, -1.8),
        new THREE.Vector3(-0.5, -2.1, -0.8),
        new THREE.Vector3(-1.1, -0.9, 0.1),
        new THREE.Vector3(-0.45, -0.25, 0.08),
        new THREE.Vector3(0, 0, 0),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(4.6, -1.8, -2.5),
        new THREE.Vector3(3.2, -1.2, -1.1),
        new THREE.Vector3(2.35, -0.25, -0.2),
        new THREE.Vector3(1.3, 0.4, 0.08),
        new THREE.Vector3(0, 0, 0),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(3.6, 3.6, -2.2),
        new THREE.Vector3(2.5, 2.6, -1.1),
        new THREE.Vector3(1.4, 2.2, -0.2),
        new THREE.Vector3(0.8, 1.1, 0.08),
        new THREE.Vector3(0, 0, 0),
      ]),
    ],
    [],
  );

  const satellites = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => {
        const angle = (index / 9) * Math.PI * 2;
        const radius = 2.15 + (index % 3) * 0.16;
        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            Math.sin(angle * 2) * 0.28,
          ] as [number, number, number],
          scale: index % 3 === 0 ? 0.11 : 0.055,
          color: streamColors[index % streamColors.length],
        };
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!active) return;
    const time = clock.getElapsedTime();

    if (assembly.current) {
      assembly.current.position.y = 0.5 + Math.sin(time * 0.45) * 0.08;
      assembly.current.rotation.x = Math.sin(time * 0.22) * 0.025;
      assembly.current.rotation.y = Math.sin(time * 0.18) * 0.04;
    }
    if (core.current) {
      core.current.rotation.x = time * 0.18;
      core.current.rotation.y = time * 0.24;
    }
    if (orbit.current) {
      orbit.current.rotation.z = time * 0.055;
      orbit.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }

    packetRefs.current.forEach((packet, index) => {
      if (!packet) return;
      const streamIndex = Math.floor(index / 2);
      const offset = index % 2 === 0 ? 0 : 0.48;
      const progress = (time * (0.08 + streamIndex * 0.012) + offset) % 1;
      const point = streams[streamIndex].getPointAt(progress);
      packet.position.copy(point);
      packet.scale.setScalar(0.75 + Math.sin(time * 3 + index) * 0.2);
    });
  });

  return (
    <group
      ref={assembly}
      position={[2.05, 0.5, -0.15]}
      rotation={[0.02, -0.08, -0.04]}
    >
      {streams.map((stream, index) => (
        <group key={streamColors[index]}>
          <mesh>
            <tubeGeometry args={[stream, 72, 0.014, 6, false]} />
            <meshBasicMaterial
              color={streamColors[index]}
              transparent
              opacity={0.52}
              depthWrite={false}
            />
          </mesh>
          <mesh>
            <tubeGeometry args={[stream, 72, 0.065, 6, false]} />
            <meshBasicMaterial
              color={streamColors[index]}
              transparent
              opacity={0.055}
              depthWrite={false}
            />
          </mesh>
          {[0, 1].map((packetIndex) => (
            <mesh
              key={packetIndex}
              ref={(node) => {
                packetRefs.current[index * 2 + packetIndex] = node;
              }}
            >
              <sphereGeometry args={[0.065, 12, 12]} />
              <meshBasicMaterial color={streamColors[index]} />
            </mesh>
          ))}
        </group>
      ))}

      <mesh position={[0, 0, -0.16]}>
        <circleGeometry args={[1.5, 80]} />
        <meshBasicMaterial
          color="#18214b"
          transparent
          opacity={0.24}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh>
        <torusGeometry args={[1.62, 0.105, 18, 128]} />
        <meshStandardMaterial
          color="#a9dce8"
          roughness={0.24}
          metalness={0.86}
          emissive="#164b5d"
          emissiveIntensity={1.2}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[1.36, 0.018, 8, 128]} />
        <meshBasicMaterial color="#68eaff" transparent opacity={0.88} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI * 0.63]}>
        <torusGeometry args={[1.88, 0.025, 8, 80, Math.PI * 0.72]} />
        <meshBasicMaterial color="#a991ff" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI * 0.08]}>
        <torusGeometry args={[2.02, 0.012, 6, 80, Math.PI * 0.32]} />
        <meshBasicMaterial color="#ff8e73" transparent opacity={0.82} />
      </mesh>

      <group ref={orbit} rotation={[0.22, -0.18, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.25, 0.009, 6, 128]} />
          <meshBasicMaterial color="#7d8bb8" transparent opacity={0.24} />
        </mesh>
        {satellites.map((satellite, index) => (
          <group key={index} position={satellite.position}>
            <mesh scale={satellite.scale}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial
                color={satellite.color}
                emissive={satellite.color}
                emissiveIntensity={1.5}
                roughness={0.28}
              />
            </mesh>
            {index % 3 === 0 ? (
              <mesh scale={satellite.scale * 2.1}>
                <sphereGeometry args={[1, 12, 12]} />
                <meshBasicMaterial
                  color={satellite.color}
                  transparent
                  opacity={0.08}
                  depthWrite={false}
                />
              </mesh>
            ) : null}
          </group>
        ))}
      </group>

      <mesh ref={core} scale={0.84}>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshPhysicalMaterial
          color="#8a7af2"
          roughness={0.13}
          metalness={0.48}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#312a79"
          emissiveIntensity={1.05}
        />
      </mesh>
      <mesh scale={0.87}>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshBasicMaterial
          color="#c7f7ff"
          wireframe
          transparent
          opacity={0.26}
        />
      </mesh>
      <mesh scale={0.36}>
        <sphereGeometry args={[1, 28, 28]} />
        <meshBasicMaterial color="#d9fbff" />
      </mesh>

      <pointLight
        position={[0, 0, 1.4]}
        color="#6be7ff"
        intensity={18}
        distance={6}
      />
      <pointLight
        position={[1.8, 1.4, 0.4]}
        color="#a481ff"
        intensity={10}
        distance={5}
      />
    </group>
  );
}
