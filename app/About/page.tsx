"use client";
import * as THREE from "three"; // Importez Three pour les types
import { motion } from "framer-motion";
import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Float,
  Html,
  useProgress,
  Cloud,
  Clouds,
} from "@react-three/drei";

//initialisation du srollTrigger
gsap.registerPlugin(ScrollTrigger);

// Composant interne pour gérer chaque modèle
function SingleModel({
  url,
  position,
}: {
  url: string;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  useGSAP(() => {
    if (!meshRef.current) return;

    // On crée la timeline ici, elle s'appliquera à cet objet précis
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body", // Le scroll de toute la page pilote l'objet
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    tl.to(meshRef.current.position, {
      z: 0.5,
      duration: 1,
      ease: "power2.inOut",
    })
      .to(meshRef.current.position, {
        z: 2.2,
        duration: 0.5,
      })
      .to(meshRef.current.rotation, {
        y: Math.PI * 0.5, // 90 degrés seulement
        duration: 1,
      })
      .to(meshRef.current.scale, {
        x: 4,
        y: 4,
        z: 4,
        duration: 1.5,
      });
  }, []); // [] pour ne l'exécuter qu'au montage

  return (
    <Float speed={2} rotationIntensity={0.5}>
      <primitive
        ref={meshRef}
        object={scene.clone()}
        position={position}
        scale={2}
      />
    </Float>
  );
}

const page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 1. Vérification initiale
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    // 2. Écouteur de changement en temps réel
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return (
    <div className="grid ">
      <section className="fixed inset-0 h-screen w-full transition-all duration-1000 pointer-events-none bg-transparent dark:bg-from-zinc-900">
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          {" "}
          {isDarkMode ? (
            <>
              {/* Mode Sombre : Ambiance tamisée avec lumière jaune */}
              <ambientLight intensity={0.02} />
              {/* Ajout des éléments de vie */}
            </>
          ) : (
            <>
              {/* Mode Clair : Éclairage standard */}
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Environment preset="city" />
            </>
          )}
        </Canvas>
      </section>
      <section className="h-screen flex flex-col justify-center items-center">
        <h1 className=" text-7xl font-mono">Technic and Sofware</h1>
        <p className="text-3xl font-mono">side by side</p>
      </section>
      <section>
        <div
          className=" lg:w-1/3  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mr-[1%] ml-auto dark:shadow-slate-700"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit
          doloremque quo animi quam repellat rem id! Culpa labore suscipit
        </div>
      </section>
    </div>
  );
};

export default page;
