import { useState } from "react";
import Feature1 from "../assets/Feature1.png";
import Feature2 from "../assets/Feature2.png";
import Feature3 from "../assets/Feature3.png";
import Serv from "../assets/Services.png";

const Services = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const nextTab = (index: number) => {
    setTabIndex(index);
  };

  return (
    <div className="rounded-3xl bg-white md:pt-24 pt-14 pb-8">
      {/* Features */}
      <div className="pb-14 md:px-20 px-4">
        <div className="flex flex-col gap-8">
          <div>
            <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
              Features
            </div>
          </div>
          <p className="h2">Features</p>
          <p className="text-[#333333]">
            The sky was cloudless and of a deep dark blue.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-16 h-full">
          <div className="flex flex-col gap-5 p-10 rounded-3xl shadow-lg min-h-[448px]">
            <div>
              <img src={Feature1} alt="Feature Img" />
            </div>
            <p className="h3 lg:pt-5">Secured</p>
            <p className="text-[#3333337e]">
              The sky was cloudless and of a deep dark blue spectacle before.
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col  text-left gap-5 p-10 rounded-3xl shadow-lg min-h-[448px]">
            <div className="flex items-center justify-center">
              <img src={Feature2} alt="Feature Img" className="" />
            </div>
            <p className="h3 lg:pt-6">Faster</p>
            <p className="text-[#3333337e]">
              Cloudless and of a deep dark blue spectacle before us was indeed.
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-5 p-10 rounded-3xl shadow-lg min-h-[448px]">
            <div>
              <img src={Feature3} alt="Feature Img" />
            </div>
            <p className="h3">Global</p>
            <p className="text-[#3333337e]">
              Deep dark blue spectacle before us was indeed sublime.
            </p>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="pt-14 md:px-20 px-4" id="services">
        <div className="flex flex-col items-center justify-center gap-8">
          <div>
            <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
              Services
            </div>
          </div>
          <p className="h2">Explore Services</p>
          <p className="text-[#333333]">
            Financial institution licensed to receive deposits and make loans.
          </p>
          <div className="relative bg-white pb-5">
            <div className="rounded-2xl inline-block w-full absolute bottom-[-30px]">
              <div className="flex flex-row items-center justify-center">
                <a
                  href="#overview"
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
        </div>
      </div>
      <div className="md:px-6">
        <div className="bg-[#F5F6FB] rounded-3xl px-6 min-h-[50vh] flex flex-col justify-center items-center lg:flex-row py-10 gap-24">
          <img src={Serv} alt="services image" />
          <div className="flex flex-col gap-7 lg:max-w-[400px]">
            <div className="h3 leading-10">
              Personal Loans Are Used for a Variety of Reasons
            </div>
            <p>
              The sky was cloudless and of a deep dark blue spectacle before us
              was indeed sublime.
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
  );
};

export default Services;
