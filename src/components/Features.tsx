// images

import Feature1 from "../assets/Feature1.png";
import Feature2 from "../assets/Feature2.png";
import Feature3 from "../assets/Feature3.png";

const Features = () => {
  return (
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
  );
};

export default Features;
