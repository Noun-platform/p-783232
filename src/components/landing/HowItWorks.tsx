
import React from "react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-4 md:px-10 lg:px-[149px] py-10 md:py-20">
      <div className="text-center mb-[30px] md:mb-[60px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-normal tracking-[1.2px] text-black mb-5 px-4">
          How NOUN works
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-light tracking-[0.75px] text-black max-w-[614px] mx-auto my-0 px-4">
          Our simple process helps you find and connect with the perfect vendors
          in just a few steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-5 md:p-[30px] rounded-2xl border-solid border-[#B9B9B9] flex flex-col h-full">
          <div className="mb-5">
            <div className="w-10 h-10 rounded-full bg-[#2F6DE6] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96484 1.66797C9.51713 1.66797 9.96484 2.11568 9.96484 2.66797V3.66797H15.9648V2.66797C15.9648 2.11568 16.4126 1.66797 16.9648 1.66797C17.5171 1.66797 17.9648 2.11568 17.9648 2.66797V3.66797H19.9648C21.6217 3.66797 22.9648 5.01111 22.9648 6.66797V20.668C22.9648 22.3248 21.6217 23.668 19.9648 23.668H5.96484C4.30799 23.668 2.96484 22.3248 2.96484 20.668V6.66797C2.96484 5.01111 4.30799 3.66797 5.96484 3.66797H7.96484V2.66797C7.96484 2.11568 8.41256 1.66797 8.96484 1.66797ZM7.96484 5.66797H5.96484C5.41256 5.66797 4.96484 6.11568 4.96484 6.66797V9.66797H20.9648V6.66797C20.9648 6.11568 20.5171 5.66797 19.9648 5.66797H17.9648V6.66797C17.9648 7.22025 17.5171 7.66797 16.9648 7.66797C16.4126 7.66797 15.9648 7.22025 15.9648 6.66797V5.66797H9.96484V6.66797C9.96484 7.22025 9.51713 7.66797 8.96484 7.66797C8.41256 7.66797 7.96484 7.22025 7.96484 6.66797V5.66797ZM20.9648 11.668H4.96484V20.668C4.96484 21.2203 5.41256 21.668 5.96484 21.668H19.9648C20.5171 21.668 20.9648 21.2203 20.9648 20.668V11.668Z" fill="white"/>
            </svg>
            </div>
          </div>
          <h3 className="text-xl font-normal tracking-[0.6px] text-black mb-2.5">
            Create your profile
          </h3>
          <p className="text-base font-light tracking-[0.48px] text-black">
            Sign up and create a detailed brand profile with your specific
            requirements and needs.
          </p>
        </div>

        <div className="border p-5 md:p-[30px] rounded-2xl border-solid border-[#B9B9B9] flex flex-col h-full">
          <div className="mb-5">
            <div className="w-10 h-10 rounded-full bg-[#2F6DE6] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9648 4.66797C8.09885 4.66797 4.96484 7.80198 4.96484 11.668C4.96484 15.534 8.09885 18.668 11.9648 18.668C13.8508 18.668 15.5625 17.9221 16.8212 16.7094C16.8476 16.6751 16.8764 16.6422 16.9077 16.6109C16.9391 16.5795 16.972 16.5507 17.0062 16.5244C18.219 15.2657 18.9648 13.5539 18.9648 11.668C18.9648 7.80198 15.8308 4.66797 11.9648 4.66797ZM18.9967 17.2857C20.2284 15.746 20.9648 13.793 20.9648 11.668C20.9648 6.69741 16.9354 2.66797 11.9648 2.66797C6.99428 2.66797 2.96484 6.69741 2.96484 11.668C2.96484 16.6385 6.99428 20.668 11.9648 20.668C14.0899 20.668 16.0429 19.9315 17.5825 18.6999L21.2577 22.3751C21.6483 22.7656 22.2814 22.7656 22.672 22.3751C23.0625 21.9846 23.0625 21.3514 22.672 20.9609L18.9967 17.2857ZM11.9648 7.66797C12.5171 7.66797 12.9648 8.11568 12.9648 8.66797V10.668H14.9648C15.5171 10.668 15.9648 11.1157 15.9648 11.668C15.9648 12.2203 15.5171 12.668 14.9648 12.668H12.9648V14.668C12.9648 15.2203 12.5171 15.668 11.9648 15.668C11.4126 15.668 10.9648 15.2203 10.9648 14.668V12.668H8.96484C8.41256 12.668 7.96484 12.2203 7.96484 11.668C7.96484 11.1157 8.41256 10.668 8.96484 10.668H10.9648V8.66797C10.9648 8.11568 11.4126 7.66797 11.9648 7.66797Z" fill="white"/>
            </svg>
            </div>
          </div>
          <h3 className="text-xl font-normal tracking-[0.6px] text-black mb-2.5">
            Match with Vendors
          </h3>
          <p className="text-base font-light tracking-[0.48px] text-black">
            Our platform will match you with vendors who meet your criteria and
            specifications.
          </p>
        </div>

        <div className="border p-5 md:p-[30px] rounded-2xl border-solid border-[#B9B9B9] flex flex-col h-full">
          <div className="mb-5">
            <div className="w-10 h-10 rounded-full bg-[#2F6DE6] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.87868 3.5818C8.44129 3.0192 9.20435 2.70312 10 2.70312H14C14.7956 2.70312 15.5587 3.0192 16.1213 3.5818C16.6839 4.14441 17 4.90748 17 5.70312V6.70312H20C21.6569 6.70312 23 8.04627 23 9.70312V19.7031C23 21.36 21.6569 22.7031 20 22.7031H4C2.34315 22.7031 1 21.36 1 19.7031V9.70312C1 8.04627 2.34315 6.70312 4 6.70312H7V5.70312C7 4.90748 7.31607 4.14441 7.87868 3.5818ZM7 8.70312H4C3.44772 8.70312 3 9.15084 3 9.70312V19.7031C3 20.2554 3.44772 20.7031 4 20.7031H7V8.70312ZM9 20.7031V8.70312H15V20.7031H9ZM17 20.7031H20C20.5523 20.7031 21 20.2554 21 19.7031V9.70312C21 9.15084 20.5523 8.70312 20 8.70312H17V20.7031ZM15 6.70312H9V5.70312C9 5.43791 9.10536 5.18355 9.29289 4.99602C9.48043 4.80848 9.73478 4.70312 10 4.70312H14C14.2652 4.70312 14.5196 4.80848 14.7071 4.99602C14.8946 5.18355 15 5.43791 15 5.70312V6.70312Z" fill="white"/>
            </svg>
            </div>
          </div>
          <h3 className="text-xl font-normal tracking-[0.6px] text-black mb-2.5">
            Collaborate &amp; Create
          </h3>
          <p className="text-base font-light tracking-[0.48px] text-black">
            Connect with vendors, manage projects, and bring your beauty
            products to life.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="w-[204px] bg-[#FCF890] py-2 px-4 h-[50px] rounded-full 
          text-[#000000] text-center text-[16px] font-normal 
          leading-normal tracking-[0.96px] capitalize 
          antialiased"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
