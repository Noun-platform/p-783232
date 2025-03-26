import React, { useState } from 'react';
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


  const handleBriefGenerated = (newBrief: any) => {
    setBrief(newBrief);
    toast.success('Product brief generated successfully!');
  };

  const handleEmailSubmit = async (email: string) => {
    try {
      setUserEmail(email); // This will cause the UI to re-render
      const scriptURL = "https://script.google.com/macros/s/AKfycbwHKvLMrVET7-TnGl1xejXOdAeK4E54MdpM6hQrRSrQu5B5IK30PuJOtATrfQ0VlODW/exec";
  
      const form = new FormData();
      form.append("email", email);
  
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: form, 
      });
  
      toast.success("Thank you for subscribing!");
    } catch (error) {
      console.error("Failed to submit email:", error);
      toast.error("Failed to subscribe. Please try again.");
    }
  };



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
