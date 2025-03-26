
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center relative z-10 px-14 py-8 max-sm:px-5 max-sm:py-6">
        <div className="text-3xl text-white font-medium">noun</div>
        <nav className="flex gap-8 max-sm:hidden">
          <a
            href="#how-it-works"
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-wide"
          >
            How it works
          </a>
          <a
            href="#vendors"
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-wide"
          >
            Vendors
          </a>
          <a
            href="#projects"
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-wide"
          >
            Projects
          </a>
          <a
            href="#sign-in"
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-wide"
          >
            Sign In
          </a>
        </nav>
      </div>
      <div
        className="relative min-h-[90vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/lovable-uploads/de68cac7-263b-4e89-a093-2a1e767d0f46.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="text-white max-w-[700px] px-5 py-0 relative z-10">
          <h1 className="text-5xl font-normal tracking-wide leading-[1.2] mb-6 max-sm:text-[36px] max-sm:leading-[1.3]">
            Cut the noise. Build with the best.
          </h1>
          <div className="text-xl font-normal opacity-90 mb-12">
            Connect, create, and scale—all in one platform
          </div>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
            <Button
              className="bg-[#f7f06d] hover:bg-[#f5ed5e] text-black rounded-full px-8 py-6 h-auto font-normal text-sm"
            >
              Try our AI Brief
            </Button>
            <Button
              variant="outline"
              className="border-white/50 hover:bg-white/10 text-white rounded-full px-8 py-6 h-auto font-normal text-sm"
            >
              How it Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
