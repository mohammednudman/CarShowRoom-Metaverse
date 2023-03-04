import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "shift", keys: ["LeftShift", "RightShift"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas shadows>
          <App />
        </Canvas>
      </KeyboardControls>
    </div>
  </React.StrictMode>
);
