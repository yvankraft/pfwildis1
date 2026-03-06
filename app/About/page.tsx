"use client";
import * as THREE from "three"; // Importez Three pour les types
import { motion } from "framer-motion";
import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";

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
      y: 1,
      duration: 1,
      ease: "expo",
    })
      .to(meshRef.current.position, {
        z: 1.2,
        duration: 0.5,
        ease: "expo",
      })
      .to(meshRef.current.rotation, {
        y: -Math.PI * 0.6, // 90 degrés seulement
        duration: 1,
        ease: "expo",
      })
      .to(meshRef.current.scale, {
        x: 3,
        y: 3,
        z: 3,
        duration: 1.5,
        ease: "expo",
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
  const INFO_DATA = {
    electronics: {
      title: "Électronique",
      text: "Conception de systèmes embarqués et microcontrôleurs.",
      media: "/media/pcb-render.jpg", // Chemin vers ton image
      type: "image",
      color: "border-blue-500",
    },
    drones: {
      title: "Drones FPV",
      text: "Intégration de propulsion brushless et télémétrie temps réel.",
      media: "/media/drone-flight.mp4", // Chemin vers ta vidéo
      type: "video",
      color: "border-purple-500",
    },
  };

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
    <div className="grid dark:bg-zinc-900">
      <section className="fixed inset-0 h-screen w-full transition-all duration-1000 pointer-events-none bg-transparent dark:bg-from-zinc-900">
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          {" "}
          {isDarkMode ? (
            <>
              {/* Mode Sombre : Ambiance tamisée avec lumière jaune */}
              <ambientLight intensity={1} />
            </>
          ) : (
            <>
              {/* Mode Clair : Éclairage standard */}
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Environment preset="city" />
            </>
          )}
          <SingleModel url="/turbine.glb" position={[0, -4, -5]} />
        </Canvas>
      </section>

      <section className="relative pointer-events-auto">
        <div className="h-screen flex flex-col justify-center items-center z-20 ">
          <h1 className=" text-7xl font-bold uppercase tracking-tighter mix-blend-difference text-shadow-white">
            Technic and Sofware
          </h1>
          <p className="text-3xl font-mono tracking-tighter text-shadow-white">
            side by side
          </p>
        </div>
        <div
          className=" lg:w-4/7  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mr-[1%] ml-auto dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            Sofware
          </h2>
          <p className="text-l font-bold uppercase mb-4 dark:text-white">
            What makes me credible?
          </p>
          <p className="mb-4">
            From the moment I could afford a laptop, I became interested in
            programming. Although I already had a good foundation in C, I really
            started spending nights programming with HTML and CSS thanks to
            YouTube tutorials. Then I moved on to JavaScript.
            <br />
            Over time I became familiar with frameworks like React and for a
            while I was very interested in React Native. But not for long.
            <br />
            Until recently I mainly used it quickly when I discovered three.js
            then I switched to nextjs to familiarize myself with next and also
            to have fewer problems with Vercel.
            <br />
            App development remains a field that greatly interests me, but for
            the moment I prefer to refine my knowledge of Three.js.
          </p>
        </div>
        <div className="lg:flex p-2 mt-50">
          <div
            className=" lg:w-4/7  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mr-[1%] ml-auto dark:shadow-slate-700"
          ></div>
          <div
            className=" lg:w-4/7  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mr-[1%] ml-auto dark:shadow-slate-700"
          >
            <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
              technical and software
            </h2>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              What technical aspect are we going to talk about?
            </p>
            <p className="mb-4">
              Before becoming a programmer, I first went through the field of
              electronics, studying refrigeration and air conditioning in
              secondary school, and subsequently my current studies in
              electronics.
              <br />
              In my opinion, this aspect of my life is what pushes me, day by
              day, to become interested in programming.
              <br />
            </p>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              But in practice, what does that mean?
            </p>
            <p className="mb-4">
              It's not the knowledge of a principle, whether it's programming or
              electronic wiring, that motivates me, but rather the fascination
              of learning how human intelligence pushes the boundaries and laws
              of physics.
            </p>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              Here is some of my technical knowledge
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
