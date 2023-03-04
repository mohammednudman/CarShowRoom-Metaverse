import "./App.css";
import { Physics } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import Ground from "./components/Ground";
import Lights from "./components/Lights";
import Character from "./components/Character";

function App() {
  return (
    <>
      <Physics>
        <OrbitControls
          enabledDamping={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.05}
        />
        <Lights />
        <Ground />
        <Character />
      </Physics>
    </>
  );
}

export default App;
