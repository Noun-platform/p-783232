import React from "react";

const AiBeta = () => {
  return (
    <section className="px-[149px] py-20 max-md:px-10 max-md:py-[60px]">
      <div className="text-center mb-[60px]">
        <h2 className="text-[40px] font-normal tracking-[1.2px] text-black mb-5">
          Be the first to try our beta AI assistant
        </h2>
        <p className="text-[25px] font-light tracking-[0.75px] text-black max-w-[614px] mx-auto my-0">
          Create detailed products briefs for manufacturers in seconds.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-[19px] max-sm:grid-cols-[1fr]">
        <div className="h-[268px] border rounded-2xl border-solid border-[#B9B9B9] flex items-center justify-center">
          <form className="w-full max-w-[80%]">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2F6DE6] text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>
        <div className="h-[268px] border rounded-2xl border-solid border-[#B9B9B9] flex items-center justify-center p-6">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">
              AI-Powered Brief Creation
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI assistant helps you create comprehensive product briefs by
              asking the right questions and organizing your requirements.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#2F6DE6] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 16V12L14 14"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiBeta;
