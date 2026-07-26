import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group } from "three";

type AsteroidWorldProps = {
  active: boolean;
  subject: "rose" | "fox";
  motionOffset?: number;
};

function createAsteroidGeometry() {
  const geometry = new THREE.IcosahedronGeometry(1.28, 4);
  const positions = geometry.attributes.position;
  const colors: number[] = [];
  const color = new THREE.Color();

  for (let index = 0; index < positions.count; index += 1) {
    const x = positions.getX(index);
    const y = positions.getY(index);
    const z = positions.getZ(index);
    const length = Math.sqrt(x * x + y * y + z * z);
    const nx = x / length;
    const ny = y / length;
    const nz = z / length;
    const roughness =
      Math.sin(nx * 11.3 + nz * 4.7) * 0.045 +
      Math.sin(ny * 17.1 - nx * 3.2) * 0.035 +
      Math.sin((nx + ny + nz) * 23.7) * 0.018;
    const radius = 1 + roughness;
    const top = ny > 0.7 ? Math.min(y * radius * 0.86, 0.98) : y * radius * 0.86;

    positions.setXYZ(index, x * radius * 1.12, top, z * radius);

    const shade = THREE.MathUtils.clamp(
      0.34 + roughness * 1.6 + (ny + 1) * 0.045,
      0.24,
      0.48,
    );
    color.setRGB(shade * 0.82, shade * 0.76, shade * 0.7);
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3),
  );
  geometry.computeVertexNormals();
  return geometry;
}

function RockFragment({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  return (
    <mesh position={position} scale={scale} rotation={[0.3, 0.7, 0.15]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#49413e" roughness={1} flatShading />
    </mesh>
  );
}

function Rose() {
  const petals = [
    [0, 0.08, 0],
    [-0.11, 0.02, 0.02],
    [0.1, 0.01, 0.04],
    [0.02, 0, 0.11],
    [-0.02, -0.01, -0.1],
    [-0.08, 0.1, 0.01],
    [0.08, 0.1, -0.01],
  ] as const;

  return (
    <group>
      <mesh position={[0, 1.24, 0]}>
        <cylinderGeometry args={[0.018, 0.025, 0.46, 10]} />
        <meshStandardMaterial color="#315f38" roughness={0.82} />
      </mesh>
      <mesh
        position={[-0.1, 1.16, 0]}
        rotation={[0.2, 0, -0.62]}
        scale={[0.18, 0.065, 0.09]}
      >
        <sphereGeometry args={[1, 14, 8]} />
        <meshStandardMaterial color="#3e7946" roughness={0.78} />
      </mesh>
      <mesh
        position={[0.11, 1.3, 0.01]}
        rotation={[-0.1, 0, 0.65]}
        scale={[0.17, 0.06, 0.085]}
      >
        <sphereGeometry args={[1, 14, 8]} />
        <meshStandardMaterial color="#356b3d" roughness={0.78} />
      </mesh>
      <group position={[0, 1.48, 0]}>
        {petals.map((position, index) => (
          <mesh
            key={index}
            position={[...position]}
            rotation={[index * 0.45, index * 0.85, index * 0.3]}
            scale={[0.14, 0.1, 0.1]}
          >
            <sphereGeometry args={[1, 16, 10]} />
            <meshStandardMaterial
              color={index < 3 ? "#e12938" : "#a80f24"}
              emissive="#4a050e"
              emissiveIntensity={0.3}
              roughness={0.52}
            />
          </mesh>
        ))}
        <mesh scale={0.075}>
          <sphereGeometry args={[1, 14, 10]} />
          <meshStandardMaterial color="#ff5260" roughness={0.5} />
        </mesh>
      </group>

      <mesh position={[0, 0.99, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.72, 48]} />
        <meshStandardMaterial
          color="#24211e"
          metalness={0.28}
          roughness={0.62}
        />
      </mesh>
      <mesh position={[0, 1.01, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.035, 10, 64]} />
        <meshStandardMaterial
          color="#b59a69"
          metalness={0.75}
          roughness={0.26}
        />
      </mesh>
      <mesh position={[0, 1.01, 0]}>
        <sphereGeometry
          args={[0.72, 48, 28, 0, Math.PI * 2, 0, Math.PI / 2]}
        />
        <meshPhysicalMaterial
          color="#dff7ff"
          roughness={0.04}
          metalness={0}
          transmission={0.92}
          thickness={0.08}
          transparent
          opacity={0.32}
          clearcoat={1}
          clearcoatRoughness={0.03}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Fox() {
  const tailCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.2, 1.25, -0.08),
        new THREE.Vector3(0.65, 1.13, 0),
        new THREE.Vector3(0.82, 1.52, 0.04),
        new THREE.Vector3(0.58, 1.87, 0.08),
      ]),
    [],
  );

  return (
    <group rotation={[0, -0.12, 0]}>
      <mesh position={[0, 1.39, 0]}>
        <capsuleGeometry args={[0.28, 0.42, 6, 12]} />
        <meshStandardMaterial color="#c75a27" roughness={0.82} flatShading />
      </mesh>
      <mesh position={[0, 1.83, 0.04]} scale={[1.05, 0.9, 0.92]}>
        <dodecahedronGeometry args={[0.34, 1]} />
        <meshStandardMaterial color="#d96a2b" roughness={0.78} flatShading />
      </mesh>
      {[-0.17, 0.17].map((x, index) => (
        <group key={x}>
          <mesh
            position={[x, 2.13, 0]}
            rotation={[0.08, 0, index === 0 ? 0.12 : -0.12]}
          >
            <coneGeometry args={[0.14, 0.38, 3]} />
            <meshStandardMaterial color="#c85425" roughness={0.82} />
          </mesh>
          <mesh
            position={[x, 2.12, 0.055]}
            scale={[0.48, 0.62, 0.25]}
          >
            <coneGeometry args={[0.14, 0.3, 3]} />
            <meshBasicMaterial color="#63302a" />
          </mesh>
        </group>
      ))}

      <mesh position={[0, 1.44, 0.265]} scale={[0.2, 0.42, 0.08]}>
        <sphereGeometry args={[1, 18, 12]} />
        <meshStandardMaterial color="#f0d2ac" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.75, 0.285]} scale={[0.23, 0.15, 0.17]}>
        <sphereGeometry args={[1, 18, 12]} />
        <meshStandardMaterial color="#f2d5ae" roughness={0.88} />
      </mesh>
      <mesh position={[0, 1.76, 0.43]} scale={[0.07, 0.055, 0.055]}>
        <sphereGeometry args={[1, 12, 10]} />
        <meshStandardMaterial color="#211b1b" roughness={0.62} />
      </mesh>

      {[-0.115, 0.115].map((x) => (
        <group key={x}>
          <mesh position={[x, 1.91, 0.29]} scale={[0.035, 0.045, 0.025]}>
            <sphereGeometry args={[1, 10, 8]} />
            <meshBasicMaterial color="#171313" />
          </mesh>
          <mesh position={[x, 1.1, 0.16]}>
            <capsuleGeometry args={[0.065, 0.28, 5, 8]} />
            <meshStandardMaterial color="#9d3e20" roughness={0.88} />
          </mesh>
          <mesh position={[x, 0.94, 0.2]} scale={[0.09, 0.055, 0.14]}>
            <sphereGeometry args={[1, 12, 8]} />
            <meshStandardMaterial color="#382520" roughness={0.92} />
          </mesh>
        </group>
      ))}

      <mesh>
        <tubeGeometry args={[tailCurve, 36, 0.14, 10, false]} />
        <meshStandardMaterial color="#c75a27" roughness={0.84} flatShading />
      </mesh>
      <mesh position={[0.58, 1.87, 0.08]} scale={[0.16, 0.23, 0.16]}>
        <sphereGeometry args={[1, 12, 10]} />
        <meshStandardMaterial color="#f0d2ac" roughness={0.9} />
      </mesh>
    </group>
  );
}

export function AsteroidWorld({
  active,
  subject,
  motionOffset = 0,
}: AsteroidWorldProps) {
  const world = useRef<Group>(null);
  const fragments = useRef<Group>(null);
  const geometry = useMemo(createAsteroidGeometry, []);

  useFrame(({ clock }) => {
    if (!active) return;
    const time = clock.getElapsedTime() + motionOffset;

    if (world.current) {
      world.current.position.y = Math.sin(time * 0.48) * 0.11;
      world.current.rotation.x = 0.02 + Math.sin(time * 0.21) * 0.025;
      world.current.rotation.y = -0.08 + Math.sin(time * 0.18) * 0.07;
      world.current.rotation.z = -0.05 + Math.sin(time * 0.16) * 0.025;
    }
    if (fragments.current) {
      fragments.current.rotation.y = time * 0.055;
      fragments.current.rotation.z = Math.sin(time * 0.12) * 0.18;
    }
  });

  return (
    <group ref={world} rotation={[0.02, -0.08, -0.05]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          vertexColors
          roughness={0.98}
          metalness={0.015}
          flatShading
        />
      </mesh>

      <mesh position={[-0.48, 0.05, 1.17]} scale={[0.27, 0.18, 0.045]}>
        <circleGeometry args={[1, 24]} />
        <meshStandardMaterial color="#211e20" roughness={1} />
      </mesh>
      <mesh position={[0.42, -0.38, 1.03]} scale={[0.19, 0.12, 0.035]}>
        <circleGeometry args={[1, 20]} />
        <meshStandardMaterial color="#292426" roughness={1} />
      </mesh>
      <mesh position={[-0.85, 0.68, 0.35]} scale={[0.16, 0.13, 0.18]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#5a504b" roughness={1} flatShading />
      </mesh>

      {subject === "rose" ? (
        <Rose />
      ) : (
        <>
          <Fox />
          <group position={[-0.72, 0.52, 0.48]} scale={0.52}>
            <Rose />
          </group>
        </>
      )}

      <group ref={fragments}>
        <RockFragment position={[-1.8, -0.55, 0.1]} scale={0.11} />
        <RockFragment position={[1.7, 0.32, -0.35]} scale={0.08} />
        <RockFragment position={[0.9, -1.25, 0.28]} scale={0.07} />
        <RockFragment position={[-0.72, 1.46, -0.7]} scale={0.06} />
      </group>

      <pointLight
        position={[-0.2, 2.6, 1.8]}
        color={subject === "rose" ? "#ffd8cf" : "#ffc58b"}
        intensity={5.5}
        distance={5}
      />
    </group>
  );
}
