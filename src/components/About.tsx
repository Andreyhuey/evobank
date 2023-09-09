import Ab from "../assets/About.png";

const About = () => {
  return (
    <div className="px-6 py-10" id="about">
      <div className="bg-[#F5F6FB] rounded-xl md:px-14 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-7">
          <div className="flex flex-col gap-8">
            <div>
              <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
                About
              </div>
            </div>
            <p className="h2 lg:max-w-[380px] lg:leading-[60px] font-semibold">
              We Help With Any Problem
            </p>
            <p className="text-[#333333] lg:max-w-[470px]">
              There are several different kinds of banks including retail banks,
              commercial or corporate banks.
            </p>
          </div>
          {/*  */}
          <img src={Ab} alt="Image of About section" />
        </div>
      </div>
    </div>
  );
};

export default About;
