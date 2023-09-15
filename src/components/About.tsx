import CountUp from "react-countup";
// images
import Ab from "../assets/About.png";
import ba from "../assets/business-activity.png";
import sh from "../assets/business-shape.png";
// icons
import { VscPassFilled } from "react-icons/vsc";

const About = () => {
  return (
    <div className="md:px-6 py-10" id="about">
      <div className="bg-[#F5F6FB] rounded-3xl md:px-14 px-6 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col gap-8">
            <div>
              <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
                About
              </div>
            </div>
            <p className="h2 lg:max-w-[380px] md:leading-[60px] font-semibold">
              We Help With Any Problem
            </p>
            <p className="text-[#333333] lg:max-w-[470px]">
              There are several different kinds of banks including retail banks,
              commercial or corporate banks.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-3">
                <VscPassFilled className="text-[#181C33] h-[18px] w-[18px]" />
                <p>Management</p>
              </div>
              <div className="flex items-center gap-3">
                <VscPassFilled className="text-[#181C33] h-[18px] w-[18px]" />
                <p>Exchange</p>
              </div>
              <div className="flex items-center gap-3">
                <VscPassFilled className="text-[#181C33] h-[18px] w-[18px]" />
                <p>Deposit</p>
              </div>
              <div className="flex items-center gap-3">
                <VscPassFilled className="text-[#181C33] h-[18px] w-[18px]" />
                <p>Licensed</p>
              </div>
            </div>
            <div>
              <button className="rounded-3xl font-bold border-[1px] border-[#3A61F0] text-[#3A61F0] py-2 px-4 cursor-pointer text-[14px] hover:scale-110 transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
          {/*  */}
          <img src={Ab} alt="Image of About section" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between py-20 md:px-14 px-6">
        <div className="h4 lg:max-w-[370px]">
          A bank is a financial institution licensed to receive deposits and
          make loans.
        </div>
        <div className="flex flex-col lg:flex-row gap-7 items-center justify-center">
          <div className="flex gap-5 items-center justify-between p-6 rounded-3xl shadow-md">
            <div className="h-[64px] w-[64px] bg-[#3A61F0] rounded-full flex items-center justify-center">
              <img src={ba} alt="card icon" className="w-[24px] h-[16px]" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#3333337e]">Business Activity</p>
              <div className="h4">
                <CountUp end={73} duration={3} enableScrollSpy className="h2" />
                %
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center p-6 rounded-3xl shadow-md">
            <div className="h-[64px] w-[64px] bg-[#F5A647] rounded-full flex items-center justify-center">
              <img src={sh} alt="card icon" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#3333337e]">Safe Guarding</p>
              <div className="h4">
                <CountUp end={42} duration={3} enableScrollSpy className="h2" />
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
