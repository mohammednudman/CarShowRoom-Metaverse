import React from "react";
import * as THREE from "three";

const Ground = () => {
  THREE.ColorManagement.legacyMode = false;
  return (
    <mesh rotation-x={-Math.PI / 2} recieveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={"#458745"} />
    </mesh>
  );
};
export default Ground;
