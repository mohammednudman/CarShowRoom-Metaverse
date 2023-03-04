import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

const ShowRoom = () => {
  const showroom = useGLTF("./models/showroom.glb");
  showroom.scene.scale.set(0.01, 0.01, 0.01);
  return (
    <>
      <primitive object={showroom.scene} />
    </>
  );
};

export default ShowRoom;
