
import React from "react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-4 md:px-10 lg:px-[149px] py-10 md:py-20 bg-black text-white">
      <div className="text-center mb-[30px] md:mb-[60px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-normal tracking-[1.2px] text-white mb-5">
          How NOUN works
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-light tracking-[0.75px] text-white max-w-[614px] mx-auto">
          Our simple process helps you find and connect with the
          perfect vendors in just a few steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="flex flex-col">
          <div className="relative h-[240px] mb-4 overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/861db2c6-dfd5-46c9-8b5b-e9bfc26967d4.png"
              alt="Create Your Profile"
              className="w-full h-full object-cover object-left-top"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <h3 className="text-white text-xl font-medium tracking-wider uppercase text-center">
                CREATE YOUR<br />PROFILE
              </h3>
            </div>
          </div>
          <p className="text-white text-sm md:text-base font-light">
            Sign up and create a detailed brand profile with your specific
            requirements and needs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col">
          <div className="relative h-[240px] mb-4 overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/861db2c6-dfd5-46c9-8b5b-e9bfc26967d4.png"
              alt="Match With Vendors"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <h3 className="text-white text-xl font-medium tracking-wider uppercase text-center">
                MATCH WITH<br />VENDORS
              </h3>
            </div>
          </div>
          <p className="text-white text-sm md:text-base font-light">
            Our AI-powered platform will match you with vendors who meet
            your criteria & specifications.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col">
          <div className="relative h-[240px] mb-4 overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/861db2c6-dfd5-46c9-8b5b-e9bfc26967d4.png"
              alt="Collaborate & Create"
              className="w-full h-full object-cover object-right-top"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <h3 className="text-white text-xl font-medium tracking-wider uppercase text-center">
                COLLABORATE &<br />CREATE
              </h3>
            </div>
          </div>
          <p className="text-white text-sm md:text-base font-light">
            Connect with vendors, manage projects, and bring your beauty
            products to life.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="bg-[#FCF890] text-black rounded-full px-8 py-3 font-normal hover:bg-[#f5f07a] transition-colors">
          Chat With Our Founder
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;
