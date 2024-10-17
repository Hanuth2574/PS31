import React, { useRef } from 'react'
import FloatingPacket from './FloatingPacket'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

function FloatingPackets() {
    const ref1=useRef<Group>(null);
    const ref2=useRef<Group>(null);
    const gref=useRef<Group>(null);
    useGSAP(()=>{
        if(
            !ref1.current||
            !ref2.current||
            !gref.current
        )
        return;
        gsap.set(ref1.current.position,{x:-1.5});
        gsap.set(ref1.current.position,{z:-0.5});
        gsap.set(ref2.current.position,{x:-1.5});
        gsap.set(ref2.current.position,{z:-0.5});
    })
    return (
    <>
    <group ref={gref}>
    <group ref={ref1} >
    <FloatingPacket texture='/lays1.jpg' />
    
    </group>
    <group ref={ref2} >
        <FloatingPacket texture='lay2.jpeg'/>
    </group>
    </group>
    </>
  )
}

export default FloatingPackets