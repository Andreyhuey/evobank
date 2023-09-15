import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="md:py-10 py-8 md:px-20 px-4 text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-14 items-start justify-center lg:justify-between gap-y-10 w-full text-center md:text-start">
        <div className="h2 text-white">EVO</div>
        <div>
          <p className="h5 text-[#F5A647]">MENU</p>
          <div className="flex flex-col gap-3 pt-5">
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="FAQ"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              F.A.Q.
            </Link>
            <Link
              to="stories"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              Stories
            </Link>
            <Link
              to="insights"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              Insights
            </Link>
          </div>
        </div>
        {/*  */}
        <div>
          <p className="h5 text-[#F5A647]">SERVICE</p>
          <div className="flex flex-col gap-3 pt-5">
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              Loans
            </Link>

            <Link
              to="stories"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              Credit Card
            </Link>
            <Link
              to="insights"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              Business Banking
            </Link>
            <Link
              to="FAQ"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer"
            >
              Know More
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center md:justify-start lg:justify-end items-center gap-3">
          <div className="rounded-full p-3 bg-[#F5A647] hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <FaFacebookF className="text-white" />
          </div>
          <div className="rounded-full p-3 bg-[#F5A647] hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <FaTwitter className="text-white" />
          </div>
          <div className="rounded-full p-3 bg-[#F5A647] hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            <FaInstagram className="text-white" />
          </div>
        </div>
      </div>
      <div className="border-[#f2f2f26b] border-t-[1px]">
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-y-4">
          <p className="text-[#f2f2f26b]">
            Copyright © 2020 Laaqiq. All Rights Reserved.
          </p>
          <div className="flex flex-row gap-10">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
