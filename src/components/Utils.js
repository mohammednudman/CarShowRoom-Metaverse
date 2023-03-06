import React from "react";
import { useGLTF } from "@react-three/drei";

const Utils = (props) => {
  const util = useGLTF(props.path);
  return <primitive object={util.scene} {...props} />;
};

export default Utils;
