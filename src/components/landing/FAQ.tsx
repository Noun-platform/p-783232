
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "About us",
      answer: "NOUN is a platform that connects beauty brands with the perfect vendors for their product creation needs. We leverage AI and industry expertise to streamline the beauty product development process."
    },
    {
      question: "Why NOUN?",
      answer: "NOUN offers an innovative approach to beauty product development. Our platform eliminates the hassle of finding reliable vendors, manages the entire process from concept to creation, and provides access to industry-leading expertise and technology."
    },
    {
      question: "Become a Member",
      answer: "Joining NOUN is simple. Create an account, complete your brand profile, and gain immediate access to our network of vetted vendors. Members receive personalized matches based on their unique requirements and ongoing support throughout the development process."
    },
    {
      question: "Vendors Fees",
      answer: "Our vendor fee structure is transparent and competitive. We offer flexible options based on your project scope and requirements. Contact us for a detailed breakdown of costs specific to your needs."
    },
    {
      question: "Talk to us",
      answer: "We're here to help! Reach out through our contact form, email us at info@noun.com, or schedule a consultation with one of our product development experts."
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-10 lg:px-[149px]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] text-white font-normal tracking-[1.2px] mb-2">FAQ</h2>
          <p className="text-lg md:text-xl lg:text-[25px] text-white font-light tracking-[0.75px]">
            What you need to know
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white rounded-full overflow-hidden px-6 border-opacity-50 data-[state=open]:rounded-[20px]"
            >
              <AccordionTrigger className="text-white py-4 text-base md:text-lg font-light hover:no-underline">
                <span className="pl-2">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-white text-sm md:text-base font-light pb-5 pl-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* Footer section moved outside the max-w-4xl container and adjusted with full width */}
      <div className="flex justify-between mt-16 text-white text-sm px-4 md:px-10 lg:px-[149px] w-full">
        <div>NOUN 2025</div>
        <div className="flex space-x-8">
          <a href="#" className="hover:underline">Vendors</a>
          <a href="#" className="hover:underline">Brands</a>
          <a href="#" className="hover:underline">Sign In</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
