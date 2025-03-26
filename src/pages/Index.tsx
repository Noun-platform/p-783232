
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ImageSection from "@/components/landing/ImageSection";
import Partners from "@/components/landing/Partners";
import HowItWorks from "@/components/landing/HowItWorks";
import BriefGeneratorSection from "@/components/landing/BriefGeneratorSection";
import { toast } from 'sonner';

const Index = () => {
  const [brief, setBrief] = useState<any>(null);
  const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem('user_email'));
  const navigate = useNavigate();

  const handleBriefGenerated = (newBrief: any) => {
    setBrief(newBrief);
    toast.success('Product brief generated successfully!');
  };

  const handleEmailSubmit = (email: string) => {
    localStorage.setItem('user_email', email);
    setUserEmail(email);
    toast.success('Thank you for subscribing!');
  };

  return (
    <main className="w-full bg-white mx-auto my-0 overflow-x-hidden">
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
      <div className="mt-[50px]">
        <ImageSection
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3f759d38909503b26b802d5d58a0744764ac0769"
          altText="Infrastructure"
          overlayText="You've got the idea, we've got the infrastructure"
        />
      </div>
      <Partners />
      <HowItWorks />
      <BriefGeneratorSection 
          userEmail={userEmail} 
          onEmailSubmit={handleEmailSubmit}
          onBriefGenerated={handleBriefGenerated}
          brief={brief}
      />
    </main>
  );
};

export default Index;
