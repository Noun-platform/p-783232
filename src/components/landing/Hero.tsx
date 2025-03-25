import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center relative z-10 px-14 py-[50px] max-sm:px-5 max-sm:py-[30px]">
        <div className="text-2xl text-white">NOUN</div>
        <nav className="flex gap-10 max-sm:hidden">
          <a
            href="#"
            className="text-lg text-white no-underline tracking-[0.03em]"
          >
            How it works
          </a>
          <a
            href="#"
            className="text-lg text-white no-underline tracking-[0.03em]"
          >
            Vendors
          </a>
          <a
            href="#"
            className="text-lg text-white no-underline tracking-[0.03em]"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-lg text-white no-underline tracking-[0.03em]"
          >
            Sign In
          </a>
        </nav>
      </div>
      <div className="relative h-[835px] bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/7e4dcccdaf20318e1ffabf70a224d6ef65ca77ad')] bg-cover bg-center flex items-center justify-center text-center">
        <div className="text-white max-w-[934px] px-5 py-0">
          <h1 className="text-6xl font-normal tracking-[1.8px] leading-[60px] mb-5 max-sm:text-[40px] max-sm:leading-[44px]">
            Access the perfect vendors for your brand
          </h1>
          <div className="text-3xl font-normal tracking-[0.9px] mb-10">
            Connect, create, and scale—all in one platform
          </div>
          <div className="flex gap-5 justify-center max-sm:flex-col max-sm:items-center">
            <button className="w-[180px] h-[50px] rounded text-base cursor-pointer border-[none] bg-white text-black">
              Try our AI Brief
            </button>
            <button className="w-[180px] h-[50px] rounded text-base cursor-pointer border-[none] bg-transparent border border-white">
              How it Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
