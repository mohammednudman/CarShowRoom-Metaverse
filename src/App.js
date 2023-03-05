import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import ShowRoom from "./components/ShowRoom";
import Lights from "./components/Lights";
import Player from "./components/Player";
import CarLoader from "./components/CarLoader";
import { Physics } from "@react-three/rapier";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
      >
        <Physics>
          <Lights />
          <ShowRoom />
          <Player position={[0, 0, 0]} />
          <CarLoader />
        </Physics>
      </Canvas>
    </Suspense>
  );
}

export default App;
