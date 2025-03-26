
import React from "react";
import { Button } from "@/components/ui/button";

const BrandSection = () => {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full mx-auto overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/566266c4-1c7c-476a-9225-c7246af05441.png" 
            alt="Product Containers" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal tracking-[1.2px] text-white mb-2 sm:mb-4">
            You've got the idea, we've got the infrastructure
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-[800px]">
            Your brand deserves the best manufacturing partners
          </p>
          <Button
            className="bg-[#FCF890] text-black hover:bg-[#f5f07a] rounded-full px-8 py-6 h-auto text-base font-normal"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
