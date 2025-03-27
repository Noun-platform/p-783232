
import React from "react";

const Partners = () => {
  const handleJoinClick = () => {
    window.location.href = "https://noun-project.vercel.app/apps/loginLanding";
  };
  
  // Array of partner logo URLs
  const partnerLogos = [
    "partner1.png",
    "partner2.png",
    "partner3.png",
    "partner4.png",
    "partner5.png",
    "partner6.png",
    "partner7.png",
    "partner8.png",
    "partner9.png",
   
    "partner11.png",
    "partner12.png",
    "partner14.png",
    "partner15.png",
    "partner16.png",
    "partner17.png",
    "partner18.png"
     
    
  ];
  

  return (
    <section className="px-4 md:px-10 lg:px-[149px] py-10 md:py-20">
      <div className="text-center mb-[40px] md:mb-[60px]">
        <h2 className="mb-[20px]text-2xl  font-medium md:text-3xl lg:text-[40px]  tracking-[1.2px] text-black mb-5">
          Our vendors have also worked with
        </h2>
        <p className="text-lg md:text-xl lg:text-[25px] font-light tracking-[0.75px] text-black   mx-auto my-0 px-4">
          No more gatekeeping, have access to the best of the best.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Partner"
            className="w-full max-w-[120px] md:max-w-[149px] h-auto max-h-[61px] object-contain"
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button 
          onClick={handleJoinClick}
          className="w-[204px] bg-[#FCF890] py-2 px-4 h-[50px] rounded-full 
          text-[#000000] text-center text-[16px] font-normal 
          leading-normal tracking-[0.96px] capitalize 
          antialiased"
        >
          Join our beta
        </button>
      </div>
    </section>
  );
};

export default Partners;
