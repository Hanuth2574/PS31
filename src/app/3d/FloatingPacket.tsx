import { Float } from '@react-three/drei';
import React from 'react';
import SnackModel from './Model';

interface FloatingPacketProps {
  texture: string; // Defining the expected prop type
}

const FloatingPacket: React.FC<FloatingPacketProps> = ({ texture }) => {
  return (
    <>
      {/* First SnackModel with an upward position offset */}
      <Float
        speed={1}
        rotationIntensity={0}
        floatIntensity={1}
        floatingRange={[-0.1, 0.5]}
      >
        <SnackModel texturePath={texture} />
      </Float>
    </>
  );
};

export default FloatingPacket;
