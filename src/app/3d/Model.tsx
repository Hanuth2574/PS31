"use client";
import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

interface SnackModelProps {
  texturePath: string;
  position?: [number, number, number];
}

type GLTFResult = GLTF & {
  nodes: {
    // Define the node types based on your GLB structure if needed
  };
  materials: {
    // Define the material types based on your GLB structure if needed
  };
};

const SnackModel: React.FC<SnackModelProps> = ({ texturePath, position = [0, 0, 0] }) => {
  const { scene } = useGLTF<GLTFResult>('/Snack.glb');
  const texture = useTexture(texturePath);
  texture.flipY = false;
  texture.offset.set(0.275, -0.07);
  texture.repeat.set(1, 1.4);

  React.useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.material.map = texture;
        object.material.metalness = 1;
        object.material.roughness = 0.2;
        object.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  return <primitive object={scene} scale={5} rotation={[0, 3.25, 0]} />;
};

export default SnackModel;