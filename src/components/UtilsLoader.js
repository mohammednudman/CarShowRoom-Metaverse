import React from "react";
import Utils from "./Utils";

const UtilsLoader = () => {
  return (
    <Utils
      path="./models/utils/computer.glb"
      scale={new Array(3).fill(2.7)}
      position={[-95, 0, 25]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

export default UtilsLoader;
