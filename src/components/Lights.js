import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper);

  // @ts-ignore
  return (
    <>
      <ambientLight intensity={0.7} color={"#ffffff"} />
      <directionalLight
        color={"#ffffff"}
        intensity={1}
        position={[-60, 100, -10]}
        castShadow={true}
        shadowCameraTop={50}
        shadowCameraBottom={-50}
        shadowCameraLeft={-50}
        shadowCameraRight={50}
        shadowCameraNear={0.1}
        shadowCameraFar={200}
        shadowMapSizeWidth={4096}
        shadowMapSizeHeight={4096}
      />
      <hemisphereLight args={["#7cdbe6", "#5e9c49", 0.7]} />
    </>
  );
};
export default Lights;
