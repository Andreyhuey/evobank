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
    <div className="text-white  py-4 h-auto fixed top-0 left-0 z-30 bg-[#3A61F0] w-full">
      {/* Navbar for tabs and pcs*/}
      <div className="md:flex items-center px-8 justify-between relative hidden">
        <div className="h3">EVO</div>
        <ul
          className="flex items-center justify-between gap-3 absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2"
        >
          <li>
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
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
              offset={-200}
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
              offset={-200}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              to="stories"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
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
              offset={-200}
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
      <div className="md:hidden flex px-8 justify-between items-center">
        <div className={`h3 ${nav ? "hidden" : ""}`}>EVO</div>
        <div className="" onClick={handleNav}>
          {!nav ? (
            <AiOutlineMenu className="w-[40px] h-[40px]" />
          ) : (
            <IoCloseCircleOutline className="text-[26px] fixed right-0" />
          )}
        </div>
      </div>

      <div className="w-full">
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute h-screen w-full bg-opacity-95 bg-[#3A61F0] transform transition-transform duration-300 ease-in-out"
          }
        >
          <div className="flex flex-col items-center justify-center pt-10 gap-16 w-full">
            <li onClick={handleNav}>
              <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
              ></Link>
            </li>
            <li>
              <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
              ></Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
