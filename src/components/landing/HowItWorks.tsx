
import React from "react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="px-[149px] py-20 max-md:px-10 max-md:py-[60px]">
      <div className="text-center mb-[60px]">
        <h2 className="text-[40px] font-normal tracking-[1.2px] text-black mb-5">
          How NOUN works
        </h2>
        <p className="text-[25px] font-light tracking-[0.75px] text-black max-w-[614px] mx-auto my-0">
          Our simple process helps you find and connect with the perfect vendors
          in just a few steps.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(3,1fr)] gap-[30px] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <div className="border p-[30px] rounded-2xl border-solid border-[#B9B9B9] flex flex-col h-full">
          <div className="mb-5">
            <div className="w-10 h-10 rounded-full bg-[#2F6DE6] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9648 8.89648C16.5171 8.89648 16.9648 9.3442 16.9648 9.89648V10.8965H22.9648V9.89648C22.9648 9.3442 23.4126 8.89648 23.9648 8.89648C24.5171 8.89648 24.9648 9.3442 24.9648 9.89648V10.8965H26.9648C28.6217 10.8965 29.9648 12.2396 29.9648 13.8965V27.8965C29.9648 29.5533 28.6217 30.8965 26.9648 30.8965H12.9648C11.308 30.8965 9.96484 29.5533 9.96484 27.8965V13.8965C9.96484 12.2396 11.308 10.8965 12.9648 10.8965H14.9648V9.89648C14.9648 9.3442 15.4126 8.89648 15.9648 8.89648Z"
                  fill="white"
                />
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

        <div className="border p-[30px] rounded-2xl border-solid border-[#B9B9B9] flex flex-col h-full">
          <div className="mb-5">
            <div className="w-10 h-10 rounded-full bg-[#2F6DE6] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.9648 11.8965C15.0989 11.8965 11.9648 15.0305 11.9648 18.8965C11.9648 22.7625 15.0989 25.8965 18.9648 25.8965C20.8508 25.8965 22.5625 25.1507 23.8212 23.9379C23.8476 23.9036 23.8764 23.8707 23.9077 23.8394C23.9391 23.808 23.972 23.7792 24.0062 23.7529C25.219 22.4942 25.9648 20.7824 25.9648 18.8965C25.9648 15.0305 22.8308 11.8965 18.9648 11.8965Z"
                  fill="white"
                />
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

        <div className="border p-[30px] rounded-2xl border-solid border-[#B9B9B9] flex flex-col h-full">
          <div className="mb-5">
            <div className="w-10 h-10 rounded-full bg-[#2F6DE6] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8787 10.8103C16.4413 10.2477 17.2044 9.93164 18 9.93164H22C22.7956 9.93164 23.5587 10.2477 24.1213 10.8103C24.6839 11.3729 25 12.136 25 12.9316V13.9316H28C29.6569 13.9316 31 15.2748 31 16.9316V26.9316C31 28.5885 29.6569 29.9316 28 29.9316H12C10.3431 29.9316 9 28.5885 9 26.9316V16.9316C9 15.2748 10.3431 13.9316 12 13.9316H15V12.9316C15 12.136 15.3161 11.3729 15.8787 10.8103Z"
                  fill="white"
                />
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
        <Button className="bg-[#FFEF62] text-black hover:bg-[#FFEF62]/90">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;
