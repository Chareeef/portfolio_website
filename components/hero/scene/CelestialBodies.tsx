export function CelestialBodies() {
  return (
    <group>
      <mesh position={[4.7, 3.4, -9]}>
        <sphereGeometry args={[2.1, 36, 36]} />
        <meshStandardMaterial
          color="#55527f"
          roughness={0.9}
          emissive="#1a1b3c"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[4.1, 3.8, -7.35]} rotation={[0.25, 0.2, -0.32]}>
        <torusGeometry args={[2.6, 0.045, 8, 96]} />
        <meshBasicMaterial color="#b7b9dc" transparent opacity={0.2} />
      </mesh>

      <mesh position={[-3.5, 1.8, -9.5]}>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshBasicMaterial color="#d9c98e" />
      </mesh>
      <pointLight
        position={[-3.5, 1.8, -8.8]}
        color="#e7c98d"
        intensity={3}
        distance={8}
      />
    </group>
  );
}
