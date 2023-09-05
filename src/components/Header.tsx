import Man from "../assets/pic.png";

const Header = () => {
  return (
    <div
      className="rounded-3xl bg-[#181C33] md:py-24 py-8 mt-20 md:px-16 px-4"
      id="home"
    >
      <div className="flex flex-col md:flex-row  justify-between gap-6 items-center text-white">
        <div className="order-2 md:order-1">
          <div className="gap-4">
            <div className="border-[#F5A647] border-[1px] text-[#F5A647] border-dashed p-3 inline-block rounded-3xl tracking-[3px]">
              BANKING
            </div>
            <p className="h1">Fast Banking Services</p>
            <p>
              The sky was cloudless and of a deep dark blue spectacle before us
              was indeed sublime.
            </p>
          </div>
        </div>
        <img src={Man} alt="header-image" className="order-1 md:order-2" />
      </div>
    </div>
  );
};

export default Header;
