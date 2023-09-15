const Newsletter = () => {
  return (
    <div className="py-6">
      <div className="border-t-[1px] border-[#DFE2EE] pt-16">
        <div className="flex flex-col lg:flex-row md:items-start lg:items-center lg:justify-between gap-x-5 lg:gap-0 gap-y-8">
          <div className="flex-1">
            <p className="h3 pb-3">Subscribe Now</p>
            <p className="text-[#3333337e]">
              Was cloudless and of a deep dark blue spectacle before.
            </p>
          </div>
          <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-3 w-full">
            <div className="rounded-3xl flex items-center justify-center w-full bg-white border-[#DADADA] border-[1px] py-2 px-4">
              <input
                className="w-full ml-2 focus:outline-none text-black"
                placeholder="Your Email"
              />
            </div>

            <button className="w-full md:w-auto rounded-3xl font-bold border-[0.5px] border-[#3A61F0] text-[#3A61F0] py-2 px-8 cursor-pointer text-[14px] hover:scale-110 transition duration-300 ease-in-out uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
