import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ShowRoom from "./components/ShowRoom";
import Lights from "./components/Lights";
import Player from "./components/Player";
import Ground from "./components/Ground";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Lights />
        <ShowRoom />
        <Player position={[0, 0, 0]} />
      </Canvas>
    </Suspense>
  );
}

export default App;
