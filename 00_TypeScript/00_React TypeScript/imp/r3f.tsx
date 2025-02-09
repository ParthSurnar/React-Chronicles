import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type BoxProps = {
  position: [number, number, number]; // XYZ Position
  color?: string;
};

const RotatingBox = ({ position, color = "red" }: BoxProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default function Scene() {
  return <RotatingBox position={[0, 1, 0]} color="blue" />;
}
