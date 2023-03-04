import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";

const Ground = () => {
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      {/* <MeshReflectorMaterial
        envMapIntensity={0}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        depthToBlurRatioBias={0.25}
        debug={0}
        reflectorOffset={0.2}
      /> */}
      <meshBasicMaterial />
    </mesh>
  );
};

export default Ground;
