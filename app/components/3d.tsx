"use client";
import { useGLTF, Float } from "@react-three/drei";
import { forwardRef } from "react";

export const Ile = forwardRef((props, ref) => {
  const { scene } = useGLTF("/house.glb");
  return (
    <Float speed={2} rotationIntensity={0.5}>
      <primitive ref={ref} object={scene} scale={1} />
    </Float>
  );
});
