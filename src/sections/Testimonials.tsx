"use client"

import React, { useRef, useState } from 'react';
import { DotLottieCommonPlayer, DotLottiePlayer } from '@dotlottie/react-player';
import a1 from "@/sections/l1.json";
import a2 from "@/sections/l4.json";
import a3 from "@/sections/l3.json";

type ServiceItem = {
  title: string;
  description: string;
  animation: any;
};

const serviceItems: ServiceItem[] = [
  {
    title: 'Querying',
    description: 'Lorem accusantium praesentium maiores aliquam in eveniet sunt saepe corrupt.',
    animation: a1
  },
  {
    title: 'Automation',
    description: 'Lorem accusantium praesentium maiores aliquam in eveniet sunt saepe corrupt.',
    animation: a2
  },
  {
    title: 'Support',
    description: 'Lorem accusantium praesentium maiores aliquam in eveniet sunt saepe corrupt.',
    animation: a3
  }
];

const ServiceCard: React.FC<ServiceItem> = ({ title, description, animation }) => {
  const animationRef = useRef<DotLottieCommonPlayer>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      animationRef.current.play();
      animationRef.current.setLoop(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  return (
    <div 
      className="flex flex-col items-center text-center gap-4 max-w-xs cursor-pointer"
     
    >
      <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="h-12 md:h-14 w-12 md:w-14">
        <DotLottiePlayer
          ref={animationRef}
          src={animation}
          autoplay={false}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <span className="text-3xl">{title}</span>
      <div className="text-white/60 text-lg">{description}</div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="mt-32 relative">
        <div className="text-lg tracking-tight font-sans text-center">
          Our services
        </div>
        <div className="text-4xl md:text-6xl mx-auto text-center max-w-4xl tracking-tighter font-sans mt-4">
          Our simple 3-step process to{' '}
          <span className="italic font-sans text-transparent bg-clip-text bg-[radial-gradient(circle_at_top_right,#eb5d0f,orange)]">
            skyrocket
          </span>{' '}
          your progress
        </div>
        <div className="text-md md:text-lg mx-auto text-center max-w-3xl mt-10 text-white/40">
          Lorem consectetur adipisicing elit. Voluptatibus dignissimos, ut autem magnam a iure fuga ex temporibus officiis sint fugiat.
        </div>
      </div>

      <div className="flex justify-center flex-col md:flex-row lg:flex-row items-center md:items-start mt-28 md:gap-3 gap-24 mb-40">
        {serviceItems.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            animation={item.animation}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;