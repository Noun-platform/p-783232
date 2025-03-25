import React from "react";

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
        <div className="border h-[207px] p-[30px] rounded-2xl border-solid border-[#B9B9B9]">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;38:920&quot; width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;step-icon&quot; style=&quot;width: 39px; height: 39px; margin-bottom: 20px&quot;> <circle cx=&quot;19.9648&quot; cy=&quot;19.8965&quot; r=&quot;19.4648&quot; fill=&quot;#2F6DE6&quot;></circle> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M15.9648 8.89648C16.5171 8.89648 16.9648 9.3442 16.9648 9.89648V10.8965H22.9648V9.89648C22.9648 9.3442 23.4126 8.89648 23.9648 8.89648C24.5171 8.89648 24.9648 9.3442 24.9648 9.89648V10.8965H26.9648C28.6217 10.8965 29.9648 12.2396 29.9648 13.8965V27.8965C29.9648 29.5533 28.6217 30.8965 26.9648 30.8965H12.9648C11.308 30.8965 9.96484 29.5533 9.96484 27.8965V13.8965C9.96484 12.2396 11.308 10.8965 12.9648 10.8965H14.9648V9.89648C14.9648 9.3442 15.4126 8.89648 15.9648 8.89648ZM14.9648 12.8965H12.9648C12.4126 12.8965 11.9648 13.3442 11.9648 13.8965V16.8965H27.9648V13.8965C27.9648 13.3442 27.5171 12.8965 26.9648 12.8965H24.9648V13.8965C24.9648 14.4488 24.5171 14.8965 23.9648 14.8965C23.4126 14.8965 22.9648 14.4488 22.9648 13.8965V12.8965H16.9648V13.8965C16.9648 14.4488 16.5171 14.8965 15.9648 14.8965C15.4126 14.8965 14.9648 14.4488 14.9648 13.8965V12.8965ZM27.9648 18.8965H11.9648V27.8965C11.9648 28.4488 12.4126 28.8965 12.9648 28.8965H26.9648C27.5171 28.8965 27.9648 28.4488 27.9648 27.8965V18.8965Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
          </div>
          <h3 className="text-xl font-normal tracking-[0.6px] text-black mb-2.5">
            Create your profile
          </h3>
          <p className="text-base font-light tracking-[0.48px] text-black">
            Sign up and create a detailed brand profile with your specific
            requirements and needs.
          </p>
        </div>
        <div className="border h-[207px] p-[30px] rounded-2xl border-solid border-[#B9B9B9]">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;38:923&quot; width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;step-icon&quot; style=&quot;width: 39px; height: 39px; margin-bottom: 20px&quot;> <circle cx=&quot;19.9648&quot; cy=&quot;19.8965&quot; r=&quot;19.4648&quot; fill=&quot;#2F6DE6&quot;></circle> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M18.9648 11.8965C15.0989 11.8965 11.9648 15.0305 11.9648 18.8965C11.9648 22.7625 15.0989 25.8965 18.9648 25.8965C20.8508 25.8965 22.5625 25.1507 23.8212 23.9379C23.8476 23.9036 23.8764 23.8707 23.9077 23.8394C23.9391 23.808 23.972 23.7792 24.0062 23.7529C25.219 22.4942 25.9648 20.7824 25.9648 18.8965C25.9648 15.0305 22.8308 11.8965 18.9648 11.8965ZM25.9967 24.5142C27.2284 22.9745 27.9648 21.0215 27.9648 18.8965C27.9648 13.9259 23.9354 9.89648 18.9648 9.89648C13.9943 9.89648 9.96484 13.9259 9.96484 18.8965C9.96484 23.867 13.9943 27.8965 18.9648 27.8965C21.0899 27.8965 23.0429 27.16 24.5825 25.9284L28.2577 29.6036C28.6483 29.9941 29.2814 29.9941 29.672 29.6036C30.0625 29.2131 30.0625 28.5799 29.672 28.1894L25.9967 24.5142ZM18.9648 14.8965C19.5171 14.8965 19.9648 15.3442 19.9648 15.8965V17.8965H21.9648C22.5171 17.8965 22.9648 18.3442 22.9648 18.8965C22.9648 19.4488 22.5171 19.8965 21.9648 19.8965H19.9648V21.8965C19.9648 22.4488 19.5171 22.8965 18.9648 22.8965C18.4126 22.8965 17.9648 22.4488 17.9648 21.8965V19.8965H15.9648C15.4126 19.8965 14.9648 19.4488 14.9648 18.8965C14.9648 18.3442 15.4126 17.8965 15.9648 17.8965H17.9648V15.8965C17.9648 15.3442 18.4126 14.8965 18.9648 14.8965Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
          </div>
          <h3 className="text-xl font-normal tracking-[0.6px] text-black mb-2.5">
            Match with Vendors
          </h3>
          <p className="text-base font-light tracking-[0.48px] text-black">
            Our platform will match you with vendors who meet your criteria and
            specifications.
          </p>
        </div>
        <div className="border h-[207px] p-[30px] rounded-2xl border-solid border-[#B9B9B9]">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;38:926&quot; width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;step-icon&quot; style=&quot;width: 39px; height: 39px; margin-bottom: 20px&quot;> <circle cx=&quot;19.9648&quot; cy=&quot;19.8965&quot; r=&quot;19.4648&quot; fill=&quot;#2F6DE6&quot;></circle> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M15.8787 10.8103C16.4413 10.2477 17.2044 9.93164 18 9.93164H22C22.7956 9.93164 23.5587 10.2477 24.1213 10.8103C24.6839 11.3729 25 12.136 25 12.9316V13.9316H28C29.6569 13.9316 31 15.2748 31 16.9316V26.9316C31 28.5885 29.6569 29.9316 28 29.9316H12C10.3431 29.9316 9 28.5885 9 26.9316V16.9316C9 15.2748 10.3431 13.9316 12 13.9316H15V12.9316C15 12.136 15.3161 11.3729 15.8787 10.8103ZM15 15.9316H12C11.4477 15.9316 11 16.3794 11 16.9316V26.9316C11 27.4839 11.4477 27.9316 12 27.9316H15V15.9316ZM17 27.9316V15.9316H23V27.9316H17ZM25 27.9316H28C28.5523 27.9316 29 27.4839 29 26.9316V16.9316C29 16.3794 28.5523 15.9316 28 15.9316H25V27.9316ZM23 13.9316H17V12.9316C17 12.6664 17.1054 12.4121 17.2929 12.2245C17.4804 12.037 17.7348 11.9316 18 11.9316H22C22.2652 11.9316 22.5196 12.037 22.7071 12.2245C22.8946 12.4121 23 12.6664 23 12.9316V13.9316Z&quot; fill=&quot;white&quot;></path> </svg>",
              }}
            />
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
    </section>
  );
};

export default HowItWorks;
