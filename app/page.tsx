"use client";
import * as THREE from "three"; // Importez Three pour les types
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";

// On enregistre le plugin à l'extérieur du composant
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
    // ✅ Vérification de sécurité
    if (!meshRef.current) return;

    // La magie du Scroll : Le modèle tourne quand on descend
    const timeline = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Lissage du mouvement
      },
    });
    timeline.to(
      meshRef.current.rotation,
      {
        y: Math.PI * 2, // 1 tours complets
      },
      0,
    );
    timeline.to(
      meshRef.current.scale,
      {
        x: 5,
        y: 5,
        z: 5,
      },
      0,
    );
  });

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

export default function Home() {
  const modelRef = useRef<THREE.Group>(null);
  useGSAP(() => {
    if (modelRef.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // 2. Utiliser modelRef.current au lieu de "#model1"
      timeline.to(modelRef.current.position, { x: 5, y: 5, z: 5 });
      timeline.to(modelRef.current.rotation, { y: Math.PI * 2 });
    }
  });
  return (
    <main>
      <section className="fixed flex h-screen w-full max-w-400 bg-linear-to-b pointer-events-none ">
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <Suspense>
            {/* placons le modèle dans une position */}
            <SingleModel url="/house.glb" position={[-6, -4, -5]} />
          </Suspense>
        </Canvas>
      </section>
      <section className="grid relative gap-[50vh] pointer-events-auto">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="box1"
          className=" w-1/3  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            Crafting Digital Experiences with Purpose
          </h2>
          <p className="text-l font-bold uppercase mb-4 dark:text-white">
            Welcome to a Crafting Digital Experiences with Purpose
          </p>
          <p className="dark:text-slate-400">
            A journey through motion, 3D interactions, and high-performance
            engineering.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="box2"
          className=" w-1/3  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            Beyond the Pixels.
          </h2>
          <p className="text-l font-bold uppercase mb-4 dark:text-white">
            A journey through motion, 3D interactions, and high-performance
            engineering.
          </p>
          <p className="dark:text-slate-400">
            This portfolio isn't just a collection of links. It's an exploration
            of what happens when logic meets aesthetics. I built this space to
            push the boundaries of modern web standards, focusing on fluid
            motion and seamless user experiences.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="box3"
          className=" w-1/3  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            The Purpose
          </h2>

          <p className="dark:text-slate-400">
            This platform is a dedicated space to showcase my evolution as a
            developer. It aims to demonstrate how modern web standards can be
            pushed to create high-performance, immersive environments.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="box4"
          className=" w-1/3  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            What’s inside
          </h2>

          <p className="dark:text-slate-400 ">
            Through these pages, you will find a breakdown of my technical
            stack, a deep dive into my creative process, and a curated selection
            of my most impactful work
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="box5"
          className=" w-1/3  p-8 relative z-20 
                backdrop-blur-xs bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto mb-[10%] dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            Ready to see more? Head over to About to learn about my journey, or
            jump straight into Projects to see these concepts in action.
          </h2>
        </motion.div>
      </section>
    </main>
  );
}
