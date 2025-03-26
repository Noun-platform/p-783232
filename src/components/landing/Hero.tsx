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
        <div className="flex justify-between items-center relative z-10 px-14 py-8 max-sm:px-5 max-sm:py-6">
          <div className="flex-1 flex justify-start h-8">
            <img 
              src="/noun_logo.png" 
              alt="Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <nav className="flex-1 flex justify-end gap-10 max-sm:hidden">
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
              href="#sign-in"
              className="text-center custom-nav-link hover:text-white transition-colors text-sm font-normal tracking-wide"
            >
              Sign In
            </a>
          </nav>
        </div>
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="text-white max-w-[700px] px-5 py-0 relative z-10">
            <h1 className="custom-header mb-12">
              Cut the noise. Build with the best.
            </h1>
            <div className="custom-div mb-12">
              Connect, create, and scale—all in one platform
            </div>
            <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
              <button
                className="w-[204px] bg-[#FCF890] py- px-4 h-[50px] rounded-full 
                text-[#000000] text-center text-[16px] font-normal 
                leading-normal tracking-[0.96px] capitalize 
                antialiased"
              >
                Try our AI Brief
              </button>
              <button
                className="w-[204px]  border-[1px] border-[#FFFFFF] py- px-4 h-[50px] rounded-full 
                text-[#FFFFFF] text-center text-[16px] font-normal 
                leading-normal tracking-[0.96px] capitalize 
                antialiased"
              >
                How it works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
