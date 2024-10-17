"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import pd from "@/assets/logo-apex.png";
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false, 
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-medium text-center tracking-tighter">
        Get a <span className="bg-gradient-to-tr from-orange-600 via-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">detailed</span> analysis
        </h2>
        <p className="text-white/70 text-md md:text-lg lg:text-lg tracking-tight text-center mt-5">
          Get your detailed analysis of your whole day by using our summrization AI
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, index) => (
            <div
              key={index} // Add a unique key here
              className="border border-white/20 flex p-2.5 rounded-lg gap-2.5 items-center flex-1"
            >
              <div className="border border-white/20 rounded-xl h-12 w-12 inline-flex justify-center items-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay />
              </div>
              <div>{tab.title}</div>
              {tab.isNew && <div>New</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
