
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="relative min-h-[95vh] bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: "url('/image1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="flex justify-between items-center relative z-10 px-5 sm:px-10 lg:px-14 py-6 sm:py-8">
          <div className="flex-1 flex justify-start h-8">
            <img 
              src="/noun_logo.png" 
              alt="Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <nav className="flex-1 flex justify-end gap-4 md:gap-10 max-sm:hidden">
            <a
              href="#how-it-works"
              className="text-center custom-nav-link hover:text-white transition-colors text-sm font-normal tracking-wide"
            >
              How it works
            </a>
            <a
              href="#vendors"
              className="text-center custom-nav-link hover:text-white transition-colors text-sm font-normal tracking-wide"
            >
              Vendors
            </a>
            <a
              href="#projects"
              className="text-center custom-nav-link hover:text-white transition-colors text-sm font-normal tracking-wide"
            >
              Projects
            </a>
            <a
              href="https://noun-project.vercel.app/apps/loginLanding"
              className="text-center custom-nav-link hover:text-white transition-colors text-sm font-normal tracking-wide"
            >
              Sign In
            </a>
          </nav>
        </div>
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="text-white px-5 py-0 relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal tracking-[1.5px] text-center max-w-[981px] mx-auto mb-4">
              Find the right vendors for your beauty brand
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-[40px] font-normal tracking-[1.2px] text-white mb-[46px]">
              Connect, create, and scale—all in one platform
            </div>
            <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
              <button
                className="w-[170px] bg-[#FCF890] py-2 px-4 h-[50px] rounded-full 
                text-[#000000] text-center text-[18px] font-thin 
                leading-normal tracking-[0.96px] capitalize 
                antialiased"
              >
                Connect
              </button>
              <button
                className="w-[170px] border-[1px] border-[#FCFCFA] px-4 h-[50px] rounded-full 
                text-[#FCFCFA] text-center text-[18px] font-thin 
                leading-normal tracking-[0.96px] capitalize antialiased"
              >
                Try our AI Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
