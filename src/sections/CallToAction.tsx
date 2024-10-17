"use client";

import Button from "@/components/Button";
import starbg from "@/assets/stars.png";
import gridLine from "@/assets/grid-lines.png";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { RefObject, useEffect, useRef, useCallback } from "react";

export const CallToAction = () => {
  return (
    <section className="mb-5">
      <div className="container flex flex-col gap-4">
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
        <div style={{ backdropFilter: "blur(100px)" }} className="backdrop-blur-lg flex-1">
          <div className="h-60 w-full p-0 border border-white/20 rounded-lg">
            <div className="h-full relative w-full bg-[radial-gradient(circle_at_0%_-40%,#fcd34d,#ae5534,transparent_50%)] rounded-lg">
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
                <h2 className="text-5xl tracking-tighter font-sans text-center text-white">Diet plan</h2>
                <p className="text-md text-white/50 font-sans tracking-tight text-center max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum aut ab doloremque quaerat od amet!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ backdropFilter: "blur(100px)" }} className="backdrop-blur-lg flex-1">
          <div className="h-60 w-full p-0 border border-white/20 rounded-lg">
            <div className="h-full relative w-full bg-[radial-gradient(circle_at_100%_-40%,aqua,#1c63a4,transparent_50%)] rounded-lg">
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
                <h2 className="text-5xl tracking-tighter font-sans text-center text-white">Work plan</h2>
                <p className="text-md text-white/50 font-sans tracking-tight text-center max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum aut ab doloremque quaerat od amet!
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="w-full h-56 border border-white/20 p-0 rounded-lg relative">
  <div className="absolute inset-0 h-full w-full  md:bg-[radial-gradient(circle_at_-20%_-280%,#fcd34d_40%,#ae5534,transparent_60%)] bg-[radial-gradient(circle_at_-20%_-120%,#fcd34d_40%,#ae5534,transparent_60%)] lg:bg-[radial-gradient(circle_at_-20%_-280%,#fcd34d_40%,#ae5534,transparent_60%)] rounded-lg">
  
  </div>
  <div className="absolute inset-0 h-full w-full md:bg-[radial-gradient(circle_at_110%_290%,aqua_30%,#1c63a4,transparent_50%)] lg:bg-[radial-gradient(circle_at_110%_290%,aqua_30%,#1c63a4,transparent_50%)] bg-[radial-gradient(circle_at_110%_130%,aqua_0%,#1c63a4,transparent_50%)]  rounded-lg">
    
  </div>
  <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
                <h2 className="text-5xl tracking-tighter font-sans text-center text-white"> Poster analysis </h2>
                <p className="text-md text-white/50 font-sans tracking-tight text-center max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum aut ab doloremque quaerat od amet!
                </p>
              </div>
</div>


      </div>
    </section>
  );
};
