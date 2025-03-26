
import React from "react";

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
              src="/lovable-uploads/6aeb96bd-16eb-41e8-8eef-44856e6cbc6c.png"
              alt="Create Your Profile"
              className="w-full h-full object-cover"
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
              src="https://images.unsplash.com/photo-1522204538344-922f76ecc041?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Match With Vendors"
              className="w-full h-full object-cover"
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Collaborate & Create"
              className="w-full h-full object-cover"
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
        <button className="bg-[#FCF890] text-black rounded-full px-8 py-3 font-normal hover:bg-[#f5f07a] transition-colors">
          Chat With Our Founder
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
