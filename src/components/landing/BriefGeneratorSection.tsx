
import React, { useState } from 'react';
import ChatInterface from '@/components/landing/ChatInterface';
import ProductBrief from '@/components/landing/ProductBrief';
import EmailCaptureForm from '@/components/EmailCaptureForm';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BriefGeneratorSectionProps {
  userEmail: string | null;
  onEmailSubmit: (email: string) => void;
  onBriefGenerated: (brief: any) => void;
  brief: any;
}

const BriefGeneratorSection = ({ 
  userEmail, 
  onEmailSubmit, 
  onBriefGenerated,
  brief 
}: BriefGeneratorSectionProps) => {
  return (
    <section id="brief-generator" className="bg-white py-10 sm:py-20 px-4">
      <div className="container">
        {!userEmail ? (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-[#333] mb-4">
              Be the first to try our beta AI assistant
            </h2>
            <p className="mx-auto mt-4 mb-8 text-base sm:text-lg text-[#555]">
              Create detailed products briefs for manufacturers in seconds.
            </p>
            <EmailCaptureForm onSubmit={onEmailSubmit} buttonText="Try Our AI Brief" />
          </div>
        ) : (
          <>
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#333] mb-4">
                Generate Your Product Brief
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[#555]">
                Create a comprehensive product brief for manufacturers in minutes.
                Simply describe your product idea and our AI will do the rest.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ChatInterface onBriefGenerated={onBriefGenerated} />
              <ProductBrief brief={brief} />
            </div>
          </>
        )}
        
       
      </div>
    </section>
  );
};

export default BriefGeneratorSection;
