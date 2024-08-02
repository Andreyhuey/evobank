import App from "../assets/AppPicture.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="rounded-3xl bg-[#181C33] md:px-20 px-4 py-10 md:py-14 w-full">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-y-5">
          <div className="flex-1 flex flex-col gap-8 text-white">
            <div>
              <div className="border-[#F5A647] border-[1px] text-[#F5A647] font-semibold border-dashed p-2 inline-block rounded-3xl tracking-[3px] hover:scale-110 transition duration-300 ease-in-out cursor-pointer uppercase">
                Mobile App
              </div>
            </div>
            <p className="h1">Download Mobile App</p>
            <p className="lg:w-[370px]">
              The sky was cloudless and of a deep dark blue spectacle before us
              was indeed sublime.
            </p>
            <div>
              <button className="bg-[#F5A647] rounded-3xl px-6 py-2 hover:scale-110 transition duration-300 ease-in-out">
                Download
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src={App} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
