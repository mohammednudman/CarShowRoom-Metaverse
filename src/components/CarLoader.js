import React from "react";
import Car from "./Car";

const CarLoader = () => {
  return (
    <>
      <Car
        path="./models/cars/sci-fi_vehicle_019_02_-_public_domain_cc0.glb"
        scale={new Array(3).fill(3.5)}
        position={[-8, 0, 35]}
      />
      <Car
        path="./models/cars/sci-fi_vehicle_024_01_-_01_-_public_domain_cc0.glb"
        scale={new Array(3).fill(3.5)}
        position={[12, 0, 35]}
        rotation={[0, Math.PI, 0]}
      />
    </>
  );
};

export default CarLoader;
