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
  const source = new THREE.IcosahedronGeometry(1.32, 3);
  const geometry = source.index ? source.toNonIndexed() : source;
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
      Math.sin(nx * 9.1 + nz * 5.7) * 0.018 +
      Math.sin(ny * 15.3 - nx * 4.2) * 0.012 +
      Math.sin((nx + ny + nz) * 27.7) * 0.007;
    const radius = 1 + roughness;
    const displacedX = x * radius;
    const displacedY = y * radius;
    const displacedZ = z * radius;
    const terraceRadius = Math.hypot(displacedX, displacedZ);
    const terrace =
      (1 - THREE.MathUtils.smoothstep(terraceRadius, 0.88, 1.12)) *
      THREE.MathUtils.smoothstep(displacedY, 0.55, 0.92);

    positions.setXYZ(
      index,
      displacedX,
      THREE.MathUtils.lerp(displacedY, 1.205, terrace),
      displacedZ,
    );
  }

  for (let index = 0; index < positions.count; index += 3) {
    const ax = positions.getX(index);
    const ay = positions.getY(index);
    const az = positions.getZ(index);
    const bx = positions.getX(index + 1);
    const by = positions.getY(index + 1);
    const bz = positions.getZ(index + 1);
    const cx = positions.getX(index + 2);
    const cy = positions.getY(index + 2);
    const cz = positions.getZ(index + 2);
    const height = (ay + by + cy) / 3;
    const mineral =
      Math.sin((ax + bx + cx) * 5.8 + (az + bz + cz) * 3.1) * 0.018;
    const shade = THREE.MathUtils.clamp(
      0.26 + height * 0.025 + mineral,
      0.2,
      0.34,
    );

    color.setRGB(shade * 0.92, shade * 0.88, shade * 0.84);
    for (let vertex = 0; vertex < 3; vertex += 1) {
      colors.push(color.r, color.g, color.b);
    }
  }

  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function createPetalGeometry() {
  const columns = 6;
  const rows = 9;
  const vertices: number[] = [];
  const indices: number[] = [];

  for (let row = 0; row <= rows; row += 1) {
    const v = row / rows;
    const width =
      0.055 + Math.pow(Math.sin(Math.PI * Math.pow(v, 0.86)), 0.72) * 0.47;

    for (let column = 0; column <= columns; column += 1) {
      const u = column / columns;
      const side = u * 2 - 1;
      const x = side * width;
      const y = v;
      const z =
        side * side * (0.11 + v * 0.11) +
        Math.sin(v * Math.PI) * 0.055 -
        Math.pow(v, 3) * 0.095;
      vertices.push(x, y, z);
    }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const current = row * (columns + 1) + column;
      const next = current + columns + 1;
      indices.push(current, next, current + 1, current + 1, next, next + 1);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3),
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createLeafGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.15, 0.02, 0.27, 0.15, 0.42, 0.25);
  shape.bezierCurveTo(0.22, 0.28, 0.09, 0.2, 0, 0);
  const geometry = new THREE.ShapeGeometry(shape, 8);
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
  const petalGeometry = useMemo(createPetalGeometry, []);
  const leafGeometry = useMemo(createLeafGeometry, []);
  const stemCurve = useMemo(
    () =>
      new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 0.11, 0),
        new THREE.Vector3(-0.025, 0.27, 0.01),
        new THREE.Vector3(0.045, 0.43, -0.01),
        new THREE.Vector3(0, 0.57, 0),
      ),
    [],
  );
  const outerPetals = [
    { angle: 0.1, tilt: -0.72, scale: [0.31, 0.29, 0.24] },
    { angle: 1.37, tilt: -0.64, scale: [0.3, 0.28, 0.24] },
    { angle: 2.58, tilt: -0.69, scale: [0.32, 0.3, 0.24] },
    { angle: 3.82, tilt: -0.63, scale: [0.29, 0.28, 0.23] },
    { angle: 5.05, tilt: -0.7, scale: [0.31, 0.29, 0.24] },
  ] as const;
  const middlePetals = [
    { angle: 0.58, tilt: -0.39 },
    { angle: 1.83, tilt: -0.36 },
    { angle: 3.08, tilt: -0.4 },
    { angle: 4.33, tilt: -0.35 },
    { angle: 5.58, tilt: -0.39 },
  ] as const;

  return (
    <group>
      <mesh castShadow>
        <tubeGeometry args={[stemCurve, 28, 0.018, 8, false]} />
        <meshStandardMaterial color="#24462f" roughness={0.78} />
      </mesh>

      <mesh
        geometry={leafGeometry}
        position={[-0.012, 0.29, 0]}
        rotation={[0.3, -0.52, -0.5]}
        scale={[0.72, 0.72, 0.72]}
      >
        <meshStandardMaterial
          color="#315f3d"
          roughness={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={leafGeometry}
        position={[0.005, 0.39, -0.005]}
        rotation={[-0.24, 2.48, -0.55]}
        scale={[0.58, 0.58, 0.58]}
      >
        <meshStandardMaterial
          color="#294f35"
          roughness={0.72}
          side={THREE.DoubleSide}
        />
      </mesh>

      <group position={[0, 0.545, 0]} rotation={[0.04, 0, -0.05]}>
        {outerPetals.map((petal, index) => (
          <group key={`outer-${index}`} rotation={[0, petal.angle, 0]}>
            <mesh
              geometry={petalGeometry}
              rotation={[0, 0, petal.tilt]}
              scale={[...petal.scale]}
              castShadow
            >
              <meshPhysicalMaterial
                color={index % 2 === 0 ? "#8f1428" : "#a91931"}
                roughness={0.44}
                clearcoat={0.22}
                clearcoatRoughness={0.34}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        ))}
        {middlePetals.map((petal, index) => (
          <group key={`middle-${index}`} rotation={[0, petal.angle, 0]}>
            <mesh
              geometry={petalGeometry}
              rotation={[0, 0, petal.tilt]}
              scale={[0.235, 0.25, 0.2]}
              castShadow
            >
              <meshPhysicalMaterial
                color={index % 2 === 0 ? "#b42339" : "#781020"}
                roughness={0.42}
                clearcoat={0.25}
                clearcoatRoughness={0.32}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        ))}
        {[0, 1, 2, 3].map((index) => (
          <group key={`inner-${index}`} rotation={[0, index * 1.57 + 0.4, 0]}>
            <mesh
              geometry={petalGeometry}
              position={[0, 0.015, 0]}
              rotation={[0, 0, -0.17]}
              scale={[0.15, 0.2, 0.15]}
            >
              <meshStandardMaterial
                color={index % 2 === 0 ? "#c33043" : "#6f0d1d"}
                roughness={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0.035, 0]} scale={[0.07, 0.12, 0.07]}>
          <sphereGeometry args={[1, 12, 10]} />
          <meshStandardMaterial color="#4f0b17" roughness={0.5} />
        </mesh>
      </group>

      {[0.34, 0.46].map((height, index) => (
        <mesh
          key={height}
          position={[index === 0 ? 0.012 : -0.01, height, 0.018]}
          rotation={[0.1, 0, index === 0 ? -1.05 : 1.08]}
          scale={[0.018, 0.045, 0.018]}
        >
          <coneGeometry args={[1, 1, 5]} />
          <meshStandardMaterial color="#213d2a" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function RoseCloche() {
  return (
    <group>
      <mesh position={[0, 0.035, 0]} receiveShadow>
        <cylinderGeometry args={[0.5, 0.53, 0.07, 48]} />
        <meshStandardMaterial
          color="#28241f"
          metalness={0.58}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0.075, 0]}>
        <cylinderGeometry args={[0.43, 0.46, 0.025, 48]} />
        <meshStandardMaterial
          color="#40382d"
          metalness={0.72}
          roughness={0.25}
        />
      </mesh>
      <mesh position={[0, 0.105, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.018, 10, 64]} />
        <meshStandardMaterial
          color="#9d8250"
          metalness={0.88}
          roughness={0.2}
        />
      </mesh>

      <Rose />

      <mesh position={[0, 0.105, 0]} scale={[1, 1.62, 1]} renderOrder={2}>
        <sphereGeometry args={[0.5, 56, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#d9f3f5"
          roughness={0.06}
          transmission={0.95}
          thickness={0.045}
          ior={1.47}
          transparent
          opacity={0.28}
          clearcoat={1}
          clearcoatRoughness={0.025}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, 0.925, 0]} scale={[1, 0.72, 1]}>
        <sphereGeometry args={[0.035, 20, 12]} />
        <meshStandardMaterial
          color="#a68b58"
          metalness={0.85}
          roughness={0.22}
        />
      </mesh>
    </group>
  );
}

function Fox() {
  const tailCurves = useMemo(
    () => ({
      body: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.14, 1.28, -0.16),
        new THREE.Vector3(-0.52, 1.12, -0.08),
        new THREE.Vector3(-0.72, 1.34, 0.02),
        new THREE.Vector3(-0.64, 1.58, 0.09),
      ]),
      tip: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.64, 1.58, 0.09),
        new THREE.Vector3(-0.58, 1.73, 0.12),
        new THREE.Vector3(-0.42, 1.82, 0.13),
      ]),
    }),
    [],
  );

  return (
    <group rotation={[0, -0.08, 0.035]}>
      <mesh position={[0, 1.4, -0.04]} scale={[0.32, 0.5, 0.3]} castShadow>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#b94f24" roughness={0.78} flatShading />
      </mesh>

      {[-0.25, 0.25].map((x) => (
        <mesh
          key={`haunch-${x}`}
          position={[x, 1.17, -0.07]}
          scale={[0.25, 0.31, 0.27]}
          rotation={[0.08, 0, x < 0 ? -0.12 : 0.12]}
          castShadow
        >
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#9c3f22" roughness={0.83} flatShading />
        </mesh>
      ))}

      <mesh
        position={[0, 1.42, 0.265]}
        scale={[0.19, 0.4, 0.09]}
        rotation={[-0.08, 0, 0]}
      >
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ead0a4" roughness={0.86} flatShading />
      </mesh>

      {[-0.17, 0.17].map((x, index) => (
        <group key={`ear-${x}`}>
          <mesh
            position={[x, 2.16, -0.005]}
            rotation={[0.04, 0, index === 0 ? 0.1 : -0.1]}
            scale={[0.88, 1, 0.72]}
            castShadow
          >
            <coneGeometry args={[0.145, 0.43, 4]} />
            <meshStandardMaterial
              color="#ac4624"
              roughness={0.78}
              flatShading
            />
          </mesh>
          <mesh
            position={[x, 2.155, 0.055]}
            rotation={[0.04, 0, index === 0 ? 0.1 : -0.1]}
            scale={[0.48, 0.7, 0.2]}
          >
            <coneGeometry args={[0.145, 0.35, 4]} />
            <meshStandardMaterial color="#4d302b" roughness={0.9} />
          </mesh>
        </group>
      ))}

      <mesh position={[0, 1.87, 0.03]} scale={[0.34, 0.31, 0.31]} castShadow>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#c45b28" roughness={0.75} flatShading />
      </mesh>

      {[-0.12, 0.12].map((x) => (
        <mesh
          key={`cheek-${x}`}
          position={[x, 1.82, 0.3]}
          scale={[0.13, 0.115, 0.075]}
        >
          <dodecahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#e7cba0" roughness={0.84} flatShading />
        </mesh>
      ))}

      <mesh
        position={[0, 1.81, 0.325]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.86]}
        castShadow
      >
        <coneGeometry args={[0.175, 0.46, 8]} />
        <meshStandardMaterial color="#e7cba0" roughness={0.82} flatShading />
      </mesh>
      <mesh position={[0, 1.81, 0.575]} scale={[0.065, 0.05, 0.06]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#171719"
          metalness={0.08}
          roughness={0.48}
          flatShading
        />
      </mesh>

      {[-0.13, 0.13].map((x) => (
        <group key={`eye-${x}`}>
          <mesh position={[x, 1.94, 0.35]} scale={[0.052, 0.043, 0.02]}>
            <sphereGeometry args={[1, 16, 10]} />
            <meshStandardMaterial color="#242025" roughness={0.45} />
          </mesh>
          <mesh
            position={[x - 0.013, 1.953, 0.372]}
            scale={[0.012, 0.012, 0.008]}
          >
            <sphereGeometry args={[1, 8, 6]} />
            <meshBasicMaterial color="#fff2d9" />
          </mesh>
        </group>
      ))}

      {[-0.12, 0.12].map((x) => (
        <group key={`foreleg-${x}`}>
          <mesh position={[x, 1.1, 0.19]}>
            <capsuleGeometry args={[0.065, 0.32, 5, 8]} />
            <meshStandardMaterial color="#91371f" roughness={0.84} />
          </mesh>
          <mesh position={[x, 0.865, 0.225]} scale={[0.085, 0.05, 0.14]}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#282126" roughness={0.92} />
          </mesh>
        </group>
      ))}

      <mesh castShadow>
        <tubeGeometry args={[tailCurves.body, 32, 0.15, 10, false]} />
        <meshStandardMaterial color="#b84a23" roughness={0.79} flatShading />
      </mesh>
      <mesh castShadow>
        <tubeGeometry args={[tailCurves.tip, 18, 0.135, 10, false]} />
        <meshStandardMaterial color="#d8c4a4" roughness={0.87} flatShading />
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
      world.current.position.y = Math.sin(time * 0.35) * 0.07;
      world.current.rotation.x = 0.015 + Math.sin(time * 0.16) * 0.012;
      world.current.rotation.y = -0.12 + time * 0.05;
      world.current.rotation.z = -0.035 + Math.sin(time * 0.13) * 0.01;
    }
    if (fragments.current) {
      fragments.current.rotation.y = time * 0.035;
      fragments.current.rotation.z = Math.sin(time * 0.1) * 0.12;
    }
  });

  return (
    <group ref={world} rotation={[0.02, -0.08, -0.05]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          vertexColors
          roughness={0.92}
          metalness={0.025}
          flatShading
        />
      </mesh>

      <mesh position={[-0.85, 0.68, 0.35]} scale={[0.16, 0.13, 0.18]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#55504d" roughness={1} flatShading />
      </mesh>

      {subject === "rose" ? (
        <group position={[0, 1.205, 0]}>
          <RoseCloche />
        </group>
      ) : (
        <>
          <group position={[-0.12, 0.51, 0.42]} scale={0.8}>
            <Fox />
          </group>
          <group position={[0.12, 1.205, -0.3]} scale={0.82}>
            <RoseCloche />
          </group>
        </>
      )}

      <group ref={fragments}>
        <RockFragment position={[-1.85, -0.6, 0.1]} scale={0.09} />
        <RockFragment position={[1.72, 0.3, -0.4]} scale={0.065} />
        <RockFragment position={[0.92, -1.35, 0.3]} scale={0.055} />
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
