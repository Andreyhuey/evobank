import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  // Add this effect to handle body overflow
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Make sure to reset when unmounting
    };
  }, [nav]);

  return (
    <div className="text-white  pb-3 pt-4 h-auto fixed top-0 left-0 z-30 bg-[#3A61F0] w-full">
      {/* Navbar for tabs and pcs*/}
      <div className="md:flex items-center px-8 justify-between relative hidden">
        <div className="h3 text-white">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            className="cursor-pointer"
          >
            EVO
          </Link>
        </div>
        <ul
          className="flex items-center justify-between md:gap-4 lg:gap-10 absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2"
        >
          <li>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="FAQ"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              F.A.Q.
            </Link>
          </li>
          <li>
            <Link
              to="stories"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              Stories
            </Link>
          </li>
          <li>
            <Link
              to="insights"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-75}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              Insights
            </Link>
          </li>
        </ul>
        <div className="button">CREATE ACCOUNT</div>
      </div>
      {/*  */}

      {/* Navbar for mobile phones */}
      <div className="md:hidden flex px-4 justify-between items-center">
        <div className={`h3 text-white ${nav ? "text-transparent" : ""}`}>
          EVO
        </div>
        <div className="" onClick={handleNav}>
          {!nav ? (
            <AiOutlineMenu className="w-[30px] h-[30px]" />
          ) : (
            <div className="flex justify-end items-end">
              <IoCloseCircleOutline className="flex justify-end text-[30px]" />
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <ul
          className={`

          ${
            !nav
              ? "hidden"
              : "absolute h-screen w-full bg-opacity-95 bg-[#3A61F0]"
          }          
          `}
        >
          <div className="flex flex-col items-center justify-center pt-10 gap-14 w-full">
            <li>
              <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-50}
                onClick={handleNav}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-50}
                onClick={handleNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="FAQ"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-50}
                onClick={handleNav}
              >
                F.A.Q.
              </Link>
            </li>
            <li>
              <Link
                to="stories"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-50}
                onClick={handleNav}
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                to="insights"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-50}
                onClick={handleNav}
              >
                Insights
              </Link>
            </li>
            <div className="button" onClick={handleNav}>
              CREATE ACCOUNT
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
