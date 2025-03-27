import React from "react";
import ProcessCard from "./ProcessCard";
import { Button } from "@/components/ui/button";

const HowItWorks: React.FC = () => {
  const processSteps = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/497015a2143f4ad09bb0e605d6b21baf6f2f44ec",
      title: "CREATE YOUR PROFILE",
      description:
        "Sign up and create a detailed brand profile with your specific requirements and needs.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/194ff5bfd99859c229cc3a2dc0f32ce5a5669642",
      title: "MATCH WITH VENDORS",
      description:
        "Our AI-powered platform will match you with vendors who meet your criteria & specifications.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/06ecbcb2be8c27b2c4441ecf21dbc06056e6c042",
      title: "COLLABORATE & CREATE",
      description:
        "Connect with vendors, manage projects, and bring your beauty products to life.",
    },
  ];

  return (
    <section className="w-full min-h-[832px] bg-[#000] flex flex-col items-center px-6 py-[50px]">
      <header className="max-w-[981px] w-full flex flex-col items-center gap-5 mb-16">
        <h2 className="text-[#FCFCFA] text-[40px] text-center tracking-[1.2px] max-md:text-4xl max-sm:text-[32px]">
          How NOUN works
        </h2>
        <p className="text-gray-400 text-[25px] font-light text-center tracking-[0.75px] max-w-[614px] max-md:text-[22px] max-sm:text-xl">
          Our simple process helps you find and connect with the perfect vendors
          in just a few steps.
        </p>
      </header>

      <div className="flex justify-center gap-[70px] max-md:flex-wrap max-sm:gap-10">
        {processSteps.map((step, index) => (
          <ProcessCard
            key={index}
            imageUrl={step.imageUrl}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>

      <button
                className="mt-[50px] w-[250px] bg-[#FCF890] py-2 px-4 h-[50px] rounded-full 
                text-[#000000] text-center text-[18px] font-thin 
                leading-normal tracking-[0.96px] capitalize 
                antialiased"
              >
              Chat with our Founder
              </button>
    </section>
  );
};

export default HowItWorks;