"use client";
import Meta from "@/assets/meta.svg";
import BoxReveal from "@/components/BoxReveal";
import Button from "@/components/Button";
import Image from "next/image";
import log from "@/assets/logo-acme.png";
import Logm from "@/assets/logom.svg";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationdata from "./l1.json";
import animationData from "./l3.json";
import Animationdata from "./l4.json";

export const Testimonials = () => {
  // State to control whether each animation is playing
  const [isAnimating, setIsAnimating] = useState([false, false, false]);

  useEffect(() => {
    // Function to trigger animations sequentially
    const triggerAnimations = () => {
      setIsAnimating([true, false, false]); // Trigger the first animation
      setTimeout(() => {
        setIsAnimating([false, true, false]); // Trigger the second animation after 5s
      }, 5000);
      setTimeout(() => {
        setIsAnimating([false, false, true]); // Trigger the third animation after 10s
      }, 10000);
      setTimeout(() => {
        setIsAnimating([false, false, false]); // Reset after 15s
      }, 15000);
    };

    // Run the trigger function on a loop every 15 seconds
    const interval = setInterval(triggerAnimations, 15000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container mt-32 relative">
        <div className="text-lg tracking-tight font-sans text-center">Our services</div>
        <div className="text-6xl mx-auto text-center max-w-4xl tracking-tighter font-sans mt-4">
          Our simple 3-step process to{' '}
          <span className="italic font-sans text-transparent bg-clip-text bg-[radial-gradient(circle_at_top_right,#eb5d0f,orange)]">
            skyrocket
          </span>{' '}
          your progress
        </div>
        <div className="text-lg mx-auto text-center max-w-3xl mt-10 text-white/40">
          Lorem consectetur adipisicing elit. Voluptatibus dignissimos, ut autem magnam a iure fuga ex temporibus officiis sint fugiat.
        </div>
      </div>

      {/* Adjusted Flex Layout */}
      <div className="flex justify-center flex-col md:flex-row lg:flex-row items-center md:items-start mt-28 md:gap-3 gap-24 mb-40">
        {/* First Item */}
        <div className="flex flex-col items-center text-center gap-4 max-w-xs">
          <div className="h-14 w-14">
            {/* Icon is always visible, but animation plays when isAnimating[0] is true */}
            <Lottie
              animationData={animationData}
              autoplay={isAnimating[0]}
              loop={false}
            />
          </div>
          <span className="text-3xl ">Querying</span>
          <div className="text-white/60 text-lg">
            Lorem  accusantium praesentium maiores aliquam in eveniet sunt saepe corrupt.
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-center text-center gap-4 max-w-xs">
          <div className="h-14 w-14">
            {/* Icon is always visible, but animation plays when isAnimating[1] is true */}
            <Lottie
              animationData={animationdata}
              autoplay={isAnimating[1]}
              loop={false}
            />
          </div>
          <span className="text-3xl ">Automation</span>
          <div className="text-white/60 text-lg">
            Lorem  accusantium praesentium maiores aliquam in eveniet sunt saepe corrupt.
          </div>
        </div>

        {/* Third Item */}
        <div className="flex flex-col items-center  text-center gap-4 max-w-xs">
          <div className="h-14 w-14">
            {/* Icon is always visible, but animation plays when isAnimating[2] is true */}
            <Lottie
              animationData={Animationdata}
              autoplay={isAnimating[2]}
              loop={false}
            />
          </div>
          <span className="text-3xl ">Support</span>
          <div className="text-white/60 text-lg">
            Lorem  accusantium praesentium maiores aliquam in eveniet sunt saepe corrupt.
          </div>
        </div>
      </div>
    </section>
  );
};
  