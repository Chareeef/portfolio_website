export function CelestialBodies() {
  return (
    <group>
      <mesh position={[6.2, 3.35, -10]}>
        <sphereGeometry args={[4.15, 56, 56]} />
        <meshStandardMaterial
          color="#413d72"
          roughness={0.72}
          metalness={0.06}
          emissive="#171638"
          emissiveIntensity={0.72}
        />
      </mesh>
      <mesh position={[6.2, 3.35, -9.9]} rotation={[1.14, 0.25, -0.38]}>
        <torusGeometry args={[5.1, 0.055, 8, 128]} />
        <meshBasicMaterial color="#a9b9ff" transparent opacity={0.34} />
      </mesh>
      <mesh position={[6.2, 3.35, -9.92]} rotation={[1.14, 0.25, -0.38]}>
        <torusGeometry args={[5.35, 0.012, 5, 128]} />
        <meshBasicMaterial color="#62e5ff" transparent opacity={0.25} />
      </mesh>

      <mesh position={[-4.2, 2.7, -8.5]}>
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshBasicMaterial color="#ffb46f" />
      </mesh>
      <pointLight
        position={[-4.2, 2.7, -7.8]}
        color="#ff9167"
        intensity={8}
        distance={12}
      />
    </group>
  );
}
