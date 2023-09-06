import CountUp from "react-countup";

// images
import Man from "../assets/pic.png";
import Avatar1 from "../assets/Oval-1.svg";
import Avatar2 from "../assets/Oval-2.svg";
import Avatar3 from "../assets/Oval-3.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div
      className="rounded-3xl bg-[#181C33] md:py-24 py-8 mt-[80px] md:px-20 px-4"
      id="home"
    >
      <div className="flex flex-col lg:flex-row  justify-between gap-10 items-center text-white">
        <div className="order-2 lg:order-1">
          <div className="flex flex-col gap-8">
            <div>
              <div className="border-[#F5A647] border-[1px] text-[#F5A647] font-semibold border-dashed p-2 inline-block rounded-3xl tracking-[3px] hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
                BANKING
              </div>
            </div>
            <p className="h1">Fast Banking Services</p>
            <p className="lg:w-[370px]">
              The sky was cloudless and of a deep dark blue spectacle before us
              was indeed sublime.
            </p>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-50}
            >
              <button className="bg-[#F5A647] rounded-3xl px-6 py-2 hover:scale-110 transition duration-300 ease-in-out">
                Explore Services
              </button>
            </Link>
          </div>
          <div className="hidden md:flex flex-row items-center gap-3 pt-20 relative">
            <div className="flex flex-row">
              <img src={Avatar1} alt="avatar 1" />
              <img src={Avatar2} alt="avatar 1" className="absolute left-10" />
              <img src={Avatar3} alt="avatar 1" className="absolute left-20" />
            </div>
            <div className="absolute left-36">
              <CountUp end={50000} duration={3} enableScrollSpy />+ clients
              around the world
            </div>
          </div>
        </div>
        <img src={Man} alt="header-image" className="order-1 lg:order-2" />
      </div>
    </div>
  );
};

export default Header;
