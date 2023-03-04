import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ShowRoom from "./components/ShowRoom";
import Lights from "./components/Lights";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
        <Lights />
        <ShowRoom position={[0, 0, 0]} />
      </Canvas>
    </Suspense>
  );
}

export default App;
