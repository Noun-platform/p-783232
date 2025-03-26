
import React, { useState } from 'react';
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import BrandSection from "@/components/landing/BrandSection";
import ImageSection from "@/components/landing/ImageSection";
import Partners from "@/components/landing/Partners";
import HowItWorks from "@/components/landing/HowItWorks";
import BriefGeneratorSection from "@/components/landing/BriefGeneratorSection";
import FAQ from "@/components/landing/FAQ";
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
      localStorage.setItem('user_email', email);
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
    <main className="w-full bg-white mx-auto my-0 overflow-x-hidden">
      <Hero />
      <Features />
      <BrandSection />
      
       
       
      <Partners />
      <HowItWorks />
      <BriefGeneratorSection 
          userEmail={userEmail} 
          onEmailSubmit={handleEmailSubmit}
          onBriefGenerated={handleBriefGenerated}
          brief={brief}
      />
      <FAQ />
    </main>
  );
};

export default Index;
