"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import SnackModel from './Model';
import FloatingPacket from './FloatingPacket';
import FloatingPackets from './FloatingPackets';

const App = () => {
  return (
    <Canvas 
      camera={{ position: [0, 1, 5], fov: 50 }}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "auto", // Changed from "none" to allow interaction
        zIndex: "30",
        width: "100%",
        height: "100vh",
      }}
    >
      <ambientLight intensity={0.5} />
      <FloatingPackets />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Environment files="/lobby.hdr" />
    </Canvas>
  );
};

export default App;