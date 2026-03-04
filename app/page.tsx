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
import SeeMoreButton from "./components/SeeMoreButton";

//function pour les nuages
function Weather({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <Clouds material={THREE.MeshBasicMaterial}>
      <Cloud
        seed={10}
        bounds={[10, 2, 10]}
        volume={2}
        color={isDarkMode ? "#151515" : "#ffffff"} // Gris foncé vs Blanc pur
        opacity={isDarkMode ? 0.4 : 0.8}
        fade={10}
        speed={0.2} // Rotation lente
        position={[0, 4, 0]}
      />
    </Clouds>
  );
}

//function pour les luciol
import { useFrame } from "@react-three/fiber";

function Fireflies({ count = 40 }) {
  const mesh = useRef<THREE.Points>(null);

  // Création de positions aléatoires
  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15; // X
      pos[i * 3 + 1] = Math.random() * 5; // Y (au-dessus du sol)
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15; // Z
    }
    return pos;
  }, [count]);

  // Animation de scintillement et mouvement léger
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]} // [le tableau de données, la taille d'un item (X,Y,Z)]
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffcc00"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Moon() {
  return (
    <mesh position={[5, 5, -10]}>
      {" "}
      {/* Plus proche et plus centrée */}
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#ffffcc" />{" "}
      {/* BasicMaterial pour être sûr qu'elle brille sans lumière externe */}
      <pointLight intensity={50} color="#ffffcc" distance={20} decay={1} />
    </mesh>
  );
}

//animation de cahrgement de l'elemnt 3d
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        {/* Un petit cercle de chargement stylé */}
        <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-xs font-bold uppercase tracking-widest dark:text-white">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
}

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

  const modelRef = useRef<THREE.Group>(null);
  useGSAP(() => {
    if (!modelRef.current) return;
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
  });
  return (
    <main>
      <section
        className={`fixed inset-0 h-screen w-full transition-all duration-1000 pointer-events-none 
    ${
      isDarkMode
        ? "bg-gradient-to-bl from-zinc-900 via-zinc-800  via-black to-black" // LED : Gris foncé (haut-gauche) vers Noir
        : "bg-gradient-to-bl  from-white via-sky-100 via-sky-200 to-sky-300" // CIEL : Blanc (haut-gauche) vers Bleu ciel
    }`}
      >
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <Weather isDarkMode={isDarkMode} />
          {isDarkMode ? (
            <>
              {/* Mode Sombre : Ambiance tamisée avec lumière jaune */}
              <ambientLight intensity={0.02} />
              {/* Ajout des éléments de vie */}
              <Fireflies count={50} />
              <Moon />
            </>
          ) : (
            <>
              {/* Mode Clair : Éclairage standard */}
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Environment preset="city" />
            </>
          )}
          {/* Brouillard */}
          <fog
            attach="fog"
            args={[isDarkMode ? "#020205" : "#f0f0f0", 10, 40]}
          />

          <Suspense fallback={<Loader />}>
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
            Immersive Digital Design
          </h2>
          <p className="text-lg font-bold uppercase mb-4 dark:text-white">
            Welcome to my creative universe
          </p>
          <p className="dark:text-slate-400">
            An exploration of motion, 3D interactions, and high-performance
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
            This portfolio is more than just a simple collection of links. It is
            a demonstration of what modern web standards can offer in terms of
            fluidity and performance.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="box3"
          className="w-1/3 p-6 relative z-20 backdrop-blur-md bg-white/80 dark:bg-zinc-900/50 border-2 border-dashed border-amber-400/50 dark:border-zinc-700 rounded-3xl mt-[50vh] mr-0 ml-auto shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 dark:bg-zinc-800 rounded-2xl">
              {isDarkMode ? (
                <span className="text-2xl">🌙</span>
              ) : (
                <span className="text-2xl animate-pulse">✨</span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold dark:text-white mb-2">
                {isDarkMode ? "Experience the Night" : "Reveal the Details"}
              </h3>
              <p className="text-sm dark:text-slate-400 leading-relaxed">
                {isDarkMode
                  ? "You are currently viewing the high-precision dark interface, optimized for 3D depth and atmospheric lighting."
                  : "Try switching your device to Dark Mode. Experience the dynamic lighting, fireflies, and the meticulous attention to detail hidden in the shadows."}
              </p>

              {!isDarkMode && (
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-amber-600 dark:text-amber-400">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  Recommended Experience
                </div>
              )}
            </div>
          </div>
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
            Technical Focus
          </h2>

          <p className="text-lg font-semibold dark:text-yellow-500 mb-2 italic">
            "For this project, I focused heavily on the 3D aspect and animations
            powered by GSAP."
          </p>
          <p className="dark:text-slate-400">
            Every movement is orchestrated to react to your scroll, creating a
            visual narrative between the code and the user.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          id="about-box"
          className="w-1/3 p-8 relative z-20 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-slate-400 dark:border-slate-700 rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            My Journey
          </h2>

          <p className="dark:text-slate-400 mb-4">
            I am a developer driven by the desire to merge technical performance
            with creative aesthetics. My journey is defined by a constant search
            for new ways to interact with the web.
          </p>

          <p className="dark:text-slate-400 mb-6">
            Beyond just writing code, I focus on the "feel" of an interface—how
            it moves, how it reacts, and how it immerses the user. This
            portfolio is the result of that passion for detail and motion.
          </p>

          <SeeMoreButton text="About Me" href="/About" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          id="box4"
          className=" w-1/3  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            Extended Portfolio
          </h2>
          <p className="dark:text-slate-400">
            Naturally, this isn't the only project I’m working on. To see my
            other works, what better way than to visit the page dedicated to
            them?
          </p>
          <SeeMoreButton text="View Projects" href="/Project" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          id="box5"
          className=" w-1/3  p-8 relative z-20 
                backdrop-blur-xs bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mt-[50vh] mr-0 ml-auto mb-[10%] dark:shadow-slate-700"
        >
          <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
            Let's Connect
          </h2>
          <p className="dark:text-slate-400 leading-relaxed">
            I would be very happy to receive your feedback or inquiries. Here,
            you will find everything you need to reach out. Please don't
            hesitate to leave a message or an email; I will personally ensure a
            response.
          </p>
          {/* Reusing the button for Contact */}
          <SeeMoreButton text="Contact Me" href="/contact" />
        </motion.div>
      </section>
    </main>
  );
}
