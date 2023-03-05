import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import useInput from "../hooks/useInput";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({ forward, backward, left, right }) => {
  var directionOffset = 0;
  if (forward) {
    if (left) {
      directionOffset = Math.PI / 4; // forward + left
    } else if (right) {
      directionOffset = -Math.PI / 4; // forward + right
    }
  } else if (backward) {
    if (left) {
      directionOffset = Math.PI / 4 + Math.PI / 2; // backward + left
    } else if (right) {
      directionOffset = -Math.PI / 4 - Math.PI / 2; // backward + right
    } else {
      directionOffset = Math.PI; // backward
    }
  } else if (left) {
    directionOffset = Math.PI / 2; // left
  } else if (right) {
    directionOffset = -Math.PI / 2; // right
  }

  return directionOffset;
};

const Player = () => {
  const { forward, backward, left, right, jump, shift } = useInput();
  const player = useGLTF("./models/player.glb");
  const { actions } = useAnimations(player.animations, player.scene);

  player.scene.scale.set(1.5, 1.5, 1.5);

  player.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  const body = useRef();
  const currentAction = useRef("");
  const controlRef = useRef();
  const camera = useThree((state) => state.camera);

  const updateCameraTarget = (moveX, moveZ) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;
    cameraTarget.x = player.scene.position.x;
    cameraTarget.z = player.scene.position.z;
    cameraTarget.y = player.scene.position.y + 2;

    if (controlRef.current) {
      controlRef.current.target = cameraTarget;
    }
  };

  useEffect(() => {
    let action = "";

    if (forward || backward || left || right) {
      action = "walking";
      if (shift) {
        action = "running";
      }
    } else if (jump) {
      action = "jump";
    } else {
      action = "idle";
    }

    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift]);

  useFrame((state, delta) => {
    if (
      currentAction.current === "running" ||
      currentAction.current === "walking"
    ) {
      // Calculate towards camera direction
      let angleYCameraDirection = Math.atan2(
        camera.position.x - player.scene.position.x,
        camera.position.z - player.scene.position.z
      );

      // Diagonal movement angle offset
      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });

      // rotate model
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );

      player.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

      // Calculate Direction
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

      // run/walk velocity
      const velocity = currentAction.current == "running" ? 8 : 4;

      // move model & camera
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;

      player.scene.position.x += moveX;
      player.scene.position.z += moveZ;

      updateCameraTarget(moveX, moveZ);
    }
  });

  return (
    <>
      <OrbitControls ref={controlRef} />
      <primitive ref={body} object={player.scene} castShadow />;
    </>
  );
};

export default Player;
