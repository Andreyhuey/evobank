import { useState } from "react";
import Serv from "../assets/Services.png";
import { Features } from ".";

const Services = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const nextTab = (index: number) => {
    setTabIndex(index);
  };

  return (
    <div className="container">
      <div className="bg-white pb-8 w-full rounded-3xl">
        {/* Features */}

        <Features />

        {/* Services */}
        <div className="pt-14 relative container px-4" id="services">
          <div className="flex flex-col items-center justify-center gap-8">
            <div>
              <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
                Services
              </div>
            </div>
            <p className="h2">Explore Services</p>
            <p className="text-[#333333] pb-[74px]">
              Financial institution licensed to receive deposits and make loans.
            </p>
            <div
              className="flex flex-row items-center justify-center bg-white rounded-3xl shadow-md -bottom-4 absolute"
              id="loans"
            >
              <a
                href="#loans"
                className={`${
                  tabIndex === 1 && "text-[black]"
                } text-[#3333337e] border-r px-8 py-2`}
                onClick={() => nextTab(1)}
              >
                {" "}
                Loans
              </a>
              <a
                href="#credit-card"
                className={`${
                  tabIndex === 2 && "text-[black]"
                } text-[#3333337e] border-r px-8 py-2 text-center`}
                onClick={() => nextTab(2)}
              >
                {" "}
                Credit Card
              </a>
              <a
                href="#business"
                className={`${
                  tabIndex === 3 && "text-[black]"
                } text-[#3333337e] px-8 py-2`}
                onClick={() => nextTab(3)}
              >
                {" "}
                Business
              </a>
            </div>
          </div>
        </div>
        <div className="md:px-6 ">
          <div className="bg-[#F5F6FB] rounded-3xl px-6 min-h-[50vh] flex flex-col justify-center items-center lg:flex-row py-10 gap-24">
            <img src={Serv} alt="services image" />
            <div className="flex flex-col gap-7 lg:max-w-[400px]">
              <div className="h3 leading-10">
                Personal Loans Are Used for a Variety of Reasons
              </div>
              <p>
                The sky was cloudless and of a deep dark blue spectacle before
                us was indeed sublime.
              </p>
              <div>
                <button className="bg-[#3A61F0] rounded-3xl px-6 py-2 hover:scale-110 transition duration-300 ease-in-out text-white">
                  GET LOAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
