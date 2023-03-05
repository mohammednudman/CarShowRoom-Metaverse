import React from "react";
import { useGLTF } from "@react-three/drei";

const Car = (props) => {
  const car = useGLTF(props.path);
  return <primitive object={car.scene} {...props} />;
};

export default Car;
