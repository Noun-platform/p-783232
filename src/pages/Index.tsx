import React from "react";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ImageSection from "@/components/landing/ImageSection";
import Partners from "@/components/landing/Partners";
import HowItWorks from "@/components/landing/HowItWorks";
import AiBeta from "@/components/landing/AiBeta";

const Index = () => {
  return (
    <main className="w-full bg-white mx-auto my-0">
      <Hero />
      <Features />
      <ImageSection
        imageUrl="/image2.png"
        altText="Create"
        overlayText=" "
      /> 
      <div className="flex justify-center mt-[50px]">
        <button
          className="w-[204px] bg-[#FCF890] py-2 px-4 h-[50px] rounded-full 
          text-[#000000] text-center text-[16px] font-normal 
          leading-normal tracking-[0.96px] capitalize 
          antialiased"
        >
          Try our AI Brief
        </button>
      </div>
      <div className ="mt-[50px]">
      <ImageSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3f759d38909503b26b802d5d58a0744764ac0769"
        altText="Infrastructure"
        overlayText="You've got the idea, we've got the infrastructure"
      />
      </div>
      <Partners />

      <HowItWorks />
      <AiBeta />
    </main>
  );
};

export default Index;
