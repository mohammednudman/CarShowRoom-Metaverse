import React from "react";
import Car from "./Car";

const CarLoader = () => {
  return (
    <>
      <Car
        path="./models/cars/sci-fi_car2.glb"
        scale={new Array(3).fill(3)}
        position={[-8, 0, 35]}
      />
      <Car
        path="./models/cars/sci-fi_car3.glb"
        scale={new Array(3).fill(3.5)}
        position={[12, 0, 35]}
        rotation={[0, Math.PI, 0]}
      />

      <Car
        path="./models/cars/sci-fi_car4.glb"
        scale={new Array(3).fill(3)}
        position={[-4, 0, -25]}
        rotation={[0, (3 * Math.PI) / 2, 0]}
      />
      <Car
        path="./models/cars/sci-fi_car5.glb"
        scale={new Array(3).fill(5)}
        position={[-60, 0, -27]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Car
        path="./models/cars/sci-fi_car1.glb"
        scale={new Array(3).fill(3.5)}
        position={[-72, 0, 17]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </>
  );
};

export default CarLoader;
