import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

const Character = () => {
  const body = useRef();
  const character = useGLTF("../models/character.glb");
  const [subscriberKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();
  const rapierWorld = world.raw();
  const [smoothedCameraPosition] = useState(() => new Vector3(0, 10, 10));
  const [smoothedCameraTarget] = useState(() => new Vector3());

  const { forward, backward, leftward, rightward, shift, jump } = getKeys();
  const { actions } = useAnimations(character.animations, character.scene);
  character.scene.scale.set(2.5, 2.5, 2.5);

  useEffect(() => {
    let action = "";
    if (forward || backward || leftward || rightward) {
      action = "Walk";
      if (shift) {
        action = "Run";
      }
    } else {
      action = "Idle";
    }
  }, [forward, backward, leftward, rightward, shift, jump]);
  return (
    <>
      <RigidBody
        ref={body}
        colliders="hull"
        restitution={0.2}
        friction={1}
        type="fixed"
        linearDamping={0.5}
        angularDamping={0.5}
      >
        <primitive object={character.scene} position={[0, 0, 0]} />
      </RigidBody>
    </>
  );
};

export default Character;
