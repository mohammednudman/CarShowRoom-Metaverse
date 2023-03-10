import { useGLTF } from "@react-three/drei";
import React from "react";

const ShowRoom = () => {
  const showroom = useGLTF("./models/showroom.glb");
  showroom.scene.scale.set(0.1, 0.1, 0.1);
  return (
    <>
      <primitive castShadow receiveShadow object={showroom.scene} />
    </>
  );
};

export default ShowRoom;
