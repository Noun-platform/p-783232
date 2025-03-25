
import React from "react";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ImageSection from "@/components/landing/ImageSection";
import Partners from "@/components/landing/Partners";
import HowItWorks from "@/components/landing/HowItWorks";
import AiBeta from "@/components/landing/AiBeta";

const Index = () => {
  return (
    <main className="max-w-screen-xl w-full bg-white mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Hero />
      <Features />
      <ImageSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4aacef62056528c09ffc981f94930ae4192cb8cf"
        altText="Create"
        overlayText="Ideate, create, and manufacture"
      />
      <Partners />
      <ImageSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3f759d38909503b26b802d5d58a0744764ac0769"
        altText="Infrastructure"
        overlayText="You've got the idea, we've got the infrastructure"
      />
      <HowItWorks />
      <AiBeta />
    </main>
  );
};

export default Index;
