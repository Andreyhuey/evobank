import insight1 from "../assets/insight1.png";
import insight2 from "../assets/insight12.png";
import insight3 from "../assets/insight12.png";
import insight4 from "../assets/insight13.png";

const Insights = () => {
  return (
    <div id="insights" className="md:px-6 py-10">
      <div className="bg-[#F5F6FB] rounded-3xl md:px-14 px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 w-full">
            <div className="flex flex-col gap-5">
              <div>
                <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
                  insights
                </div>
              </div>
              <p className="h2 lg:leading-[60px] font-semibold">
                Latest Insights
              </p>
              <p className="text-[#333333] lg:max-w-[470px]">
                Banking is defined as the business activity of accepting.
              </p>
            </div>

            <div>
              <button className="rounded-3xl font-bold border-[1px] border-[#3A61F0] text-[#3A61F0] py-2 px-4 cursor-pointer text-[14px] hover:scale-110 transition duration-300 ease-in-out uppercase">
                All insights
              </button>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-7 py-14">
          <div className="flex flex-col lg:max-w-[275px]">
            <img
              src={insight1}
              alt="insights 1"
              className="h-[190px] rounded-t-3xl"
            />
            <div className="p-7 h4 bg-white rounded-b-3xl">
              What is the greatest form of wealth
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col lg:max-w-[275px]">
            <img
              src={insight2}
              alt="insights 1"
              className="h-[190px] rounded-t-3xl"
            />
            <div className="p-7 h4 bg-white rounded-b-3xl">
              How does one stop earning a living creating wealth
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col lg:max-w-[275px]">
            <img
              src={insight4}
              alt="insights 1"
              className="h-[190px] rounded-t-3xl"
            />
            <div className="p-7 h4 bg-white rounded-b-3xl">
              Is it too late to start investing in 2023?
            </div>
          </div>
          <div className="flex flex-col lg:max-w-[275px]">
            <img
              src={insight3}
              alt="insights 1"
              className="h-[190px] rounded-t-3xl"
            />
            <div className="p-7 h4 bg-white rounded-b-3xl">
              Mistakes people make when trying to become wealthy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
