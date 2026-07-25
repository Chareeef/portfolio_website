import { useMemo } from "react";
import * as THREE from "three";

function terrainHeight(x: number, y: number) {
  return (
    Math.sin(x * 0.38) * 0.28 +
    Math.cos(y * 0.31) * 0.2 +
    Math.sin((x + y) * 0.75) * 0.08 -
    Math.exp(-Math.pow(x + 1.4, 2) * 0.4) * 0.18
  );
}

export function AlienTerrain() {
  const geometry = useMemo(() => {
    const plane = new THREE.PlaneGeometry(34, 28, 38, 34);
    const positions = plane.attributes.position;

    for (let index = 0; index < positions.count; index += 1) {
      const x = positions.getX(index);
      const y = positions.getY(index);
      positions.setZ(index, terrainHeight(x, y));
    }

    positions.needsUpdate = true;
    plane.computeVertexNormals();
    return plane;
  }, []);

  const pathCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.55, -0.15, 3.2),
        new THREE.Vector3(1.25, -0.07, 1.5),
        new THREE.Vector3(0.6, 0.02, -0.5),
        new THREE.Vector3(-0.2, 0.05, -3),
        new THREE.Vector3(0.1, 0.12, -6.5),
      ]),
    [],
  );

  return (
    <group position={[0, -1.45, -0.8]}>
      <mesh
        geometry={geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow={false}
      >
        <meshStandardMaterial
          color="#111831"
          roughness={0.96}
          metalness={0.03}
          flatShading
        />
      </mesh>

      <mesh position={[0, 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[34, 28, 22, 20]} />
        <meshBasicMaterial
          color="#6274b2"
          wireframe
          transparent
          opacity={0.035}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <tubeGeometry args={[pathCurve, 48, 0.025, 6, false]} />
        <meshBasicMaterial color="#ecd596" transparent opacity={0.62} />
      </mesh>
      <mesh>
        <tubeGeometry args={[pathCurve, 48, 0.11, 6, false]} />
        <meshBasicMaterial
          color="#bcaeeb"
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
