const Insights = () => {
  return (
    <div id="insights" className="md:px-6 py-10">
      <div className="bg-[#F5F6FB] rounded-3xl md:px-14 px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full">
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

        <div className="flex flex-col lg:flex-row"></div>
      </div>
    </div>
  );
};

export default Insights;
