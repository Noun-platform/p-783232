
import React from "react";
import { Button } from "@/components/ui/button";

const BrandSection = () => {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[900px] w-full mx-auto overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/image2.png" 
            alt="Product Containers" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-10">
        <p className="text-lg sm:text-xl md:text-[25px] font-medium tracking-[0.75px] text-white mb-[20px]">
  You've got the idea, we've got the infrastructure
</p>

<p className="text-lg sm:text-xl md:text-[25px] font-thin tracking-[0.75px] text-white mb-[48px]">
  Your brand deserves the best.
</p>


          <button
                className="w-[170px] bg-[#FCF890] py-2 px-4 h-[50px] rounded-full 
                text-[#000000] text-center text-[18px] font-thin 
                leading-normal tracking-[0.96px] capitalize 
                antialiased"
              >
               Book a Call
              </button>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
