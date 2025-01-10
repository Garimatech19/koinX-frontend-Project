import React from "react";
import Frame from "../assets/Frame.png";
import Top3 from "./Top3"

function Getstarted() {
  return (
    <div className="w-auto h-full   md:ml-[2rem] md:mr-[2rem] md:w-auto sm:ml-[1rem] sm:mr-[1rem] sm:w-auto">
      <div className="flex flex-col items-center justify-center bg-[#0052FE]  text-white mr-[4rem] mt-[1rem] sm:mr-[0rem] md:mr-[0rem] rounded-2xl p-[3rem] ">
        <h1 className="text-3xl text-center font-semibold p-[1rem]">
          Get Started with KoinX for FREE
        </h1>
        <p className="text-center pb-[2rem]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img className="mb-[1rem]" src={Frame} alt="frame" />
        <button
          type="button"
          class="text-black bg-white hover:bg-blue-80 font-semibold rounded-lg text-lg px-6 py-2.5 text-center inline-flex items-center justify-between "
        >
          Get Started for FREE
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>

      <Top3 />


    </div>
  );
}

export default Getstarted;
