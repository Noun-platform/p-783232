
import React from "react";

const Features = () => {
  return (
    <section className="px-4 sm:px-10 md:px-20 lg:px-[149px] bg-[#000] w-full py-10 sm:py-20 text-white">
      <div className="text-center mb-8 sm:mb-[60px] w-full">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] mt-[25px] sm:mt-[50px] font-normal tracking-[1.2px] text-white">
          Tired of slow responses, high MOQs,<br className="hidden sm:block"></br> and outdated systems?
        </h2>
        <div className="mt-4 sm:mt-[25px]">
          <p className="text-lg sm:text-xl md:text-[25px] font-light tracking-[0.75px] text-white">
            Connect with vetted experts, create breakthrough products, <br className="hidden sm:block"></br>and scale with confidence—all in one platform.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4 sm:gap-[50px] max-w-[600px] mx-auto">
        <div className="border border-[#B9B9B9] rounded-[16px] w-full p-4">
          <div className="mb-[15px]">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-[#FFF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="blue">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.7325 5.6662C18.0579 5.99163 18.0579 6.51927 17.7325 6.84471L8.56582 16.0114C8.24038 16.3368 7.71274 16.3368 7.38731 16.0114L3.22064 11.8447C2.8952 11.5193 2.8952 10.9916 3.22064 10.6662C3.54608 10.3408 4.07371 10.3408 4.39915 10.6662L7.97656 14.2436L16.554 5.6662C16.8794 5.34076 17.407 5.34076 17.7325 5.6662Z" fill="black"/>
                </svg>
              </div>
              <div className="text-white text-base sm:text-[21px] tracking-[2.94px]">PEOPLE</div>
            </div> 
          </div>

          <p className="text-base sm:text-[20px] font-light tracking-[0.6px] text-white mb-[25px]">
            Every vendor is thoroughly vetted to ensure quality, reliability, and expertise in the beauty industry.
          </p>
        </div>

        <div className="border border-[#B9B9B9] rounded-[16px] w-full p-4">
          <div className="mb-[15px]">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-[#FFF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <g clipPath="url(#clip0_13_222)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.474 2.01237C8.70585 2.01237 7.01015 2.71475 5.75991 3.96499C4.50967 5.21523 3.80729 6.91093 3.80729 8.67904C3.80729 11.2608 5.48707 13.7659 7.32892 15.7101C8.2328 16.6642 9.13951 17.4453 9.82119 17.9881C10.0749 18.1901 10.2965 18.3584 10.474 18.4895C10.6514 18.3584 10.873 18.1901 11.1267 17.9881C11.8084 17.4453 12.7151 16.6642 13.619 15.7101C15.4608 13.7659 17.1406 11.2608 17.1406 8.67904C17.1406 6.91093 16.4382 5.21523 15.188 3.96499C13.9378 2.71475 12.2421 2.01237 10.474 2.01237ZM10.474 19.5124C10.0117 20.2057 10.0113 20.2054 10.0113 20.2054L10.0089 20.2039L10.0033 20.2001L9.98422 20.1872C9.968 20.1762 9.94485 20.1604 9.91525 20.1399C9.85607 20.0989 9.77101 20.0391 9.66378 19.9617C9.44941 19.8069 9.14592 19.5809 8.78298 19.2919C8.0584 18.7149 7.09011 17.8814 6.119 16.8563C4.21084 14.8422 2.14062 11.9307 2.14062 8.67904C2.14063 6.4689 3.0186 4.34928 4.5814 2.78648C6.1442 1.22368 8.26382 0.345703 10.474 0.345703C12.6841 0.345703 14.8037 1.22368 16.3665 2.78648C17.9293 4.34928 18.8073 6.4689 18.8073 8.67904C18.8073 11.9307 16.7371 14.8422 14.8289 16.8563C13.8578 17.8814 12.8895 18.7149 12.1649 19.2919C11.802 19.5809 11.4985 19.8069 11.2841 19.9617C11.1769 20.0391 11.0918 20.0989 11.0327 20.1399C11.0031 20.1604 10.9799 20.1762 10.9637 20.1872L10.9446 20.2001L10.939 20.2039L10.9373 20.205C10.9373 20.205 10.9362 20.2057 10.474 19.5124ZM10.474 19.5124L10.9362 20.2057C10.6563 20.3924 10.2912 20.3921 10.0113 20.2054L10.474 19.5124ZM10.474 7.01237C9.55348 7.01237 8.80729 7.75856 8.80729 8.67904C8.80729 9.59951 9.55348 10.3457 10.474 10.3457C11.3944 10.3457 12.1406 9.59951 12.1406 8.67904C12.1406 7.75856 11.3944 7.01237 10.474 7.01237ZM7.14062 8.67904C7.14062 6.83809 8.63301 5.3457 10.474 5.3457C12.3149 5.3457 13.8073 6.83809 13.8073 8.67904C13.8073 10.52 12.3149 12.0124 10.474 12.0124C8.63301 12.0124 7.14062 10.52 7.14062 8.67904Z" fill="#0E0B06"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_13_222">
                      <rect width="20" height="20" fill="white" transform="translate(0.476562 0.345703)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-white text-base sm:text-[21px] tracking-[2.94px]">PLACES</div>
            </div> 
          </div>

          <p className="text-base sm:text-[20px] font-light tracking-[0.6px] text-white mb-[25px]">
            Find vendors in your area or within your preferred geographic range to simplify logistics and communication.
          </p>
        </div>
        
        <div className="border border-[#B9B9B9] rounded-[16px] w-full p-4">
          <div className="mb-[15px]">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-[#FFF] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.22574 1.86125C9.60535 1.6425 10.0358 1.52734 10.474 1.52734C10.9121 1.52734 11.3426 1.64251 11.7222 1.86128C11.7228 1.86161 11.7234 1.86195 11.724 1.86228L17.5573 5.19561C17.8656 5.37362 18.1315 5.61493 18.3381 5.9026C18.3884 5.95291 18.433 6.01053 18.4703 6.07503C18.5024 6.13059 18.5274 6.18831 18.5456 6.24714C18.717 6.5917 18.8069 6.97187 18.8073 7.35811V14.0265C18.8068 14.4649 18.6911 14.8955 18.4717 15.275C18.2523 15.6546 17.937 15.9698 17.5573 16.189L17.5541 16.1908L11.724 19.5223C11.7235 19.5226 11.723 19.5229 11.7225 19.5232C11.4581 19.6756 11.1691 19.7777 10.87 19.8257C10.7522 19.8894 10.6173 19.9256 10.474 19.9256C10.3306 19.9256 10.1957 19.8894 10.0779 19.8257C9.77883 19.7777 9.48983 19.6756 9.2255 19.5232C9.22498 19.5229 9.22447 19.5226 9.22396 19.5223L3.39384 16.1908L3.39062 16.189C3.01095 15.9698 2.6956 15.6546 2.4762 15.275C2.2568 14.8955 2.14107 14.4649 2.14062 14.0265V7.35811C2.14102 6.97187 2.2309 6.5917 2.40231 6.24715C2.42047 6.18832 2.44548 6.13059 2.47762 6.07503C2.51493 6.01053 2.55956 5.95291 2.60986 5.9026C2.8164 5.61493 3.08231 5.37362 3.39062 5.19561L3.39384 5.19376L9.22574 1.86125ZM3.80729 7.80692V14.0251C3.8075 14.1712 3.84608 14.3145 3.91915 14.441C3.99203 14.567 4.09667 14.6718 4.22264 14.7449C4.22308 14.7451 4.22352 14.7454 4.22396 14.7456L9.64062 17.8408V11.1813L3.80729 7.80692ZM11.3073 11.1813V17.8408L16.724 14.7456C16.7244 14.7454 16.7248 14.7451 16.7253 14.7448C16.8512 14.6718 16.9559 14.567 17.0288 14.441C17.1019 14.3144 17.1405 14.1709 17.1406 14.0248V7.80692L11.3073 11.1813ZM16.2748 6.38234L10.8906 3.30566C10.7639 3.23252 10.6202 3.19401 10.474 3.19401C10.3277 3.19401 10.184 3.23252 10.0573 3.30566L10.0541 3.30751L4.67312 6.38234L10.474 9.73792L16.2748 6.38234Z" fill="#0E0B06"/>
                </svg>
              </div>
              <div className="text-white text-base sm:text-[21px] tracking-[2.94px]">THINGS</div>
            </div> 
          </div>

          <p className="text-base sm:text-[20px] font-light tracking-[0.6px] text-white mb-[25px]">
            Manage all your beauty product development projects in one centralized, intuitive dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
