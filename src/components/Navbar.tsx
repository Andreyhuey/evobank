import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="text-white px-8 py-4 h-auto fixed top-0 left-0 z-30 bg-[#3A61F0] w-full">
      {/* Navbar for tabs and pcs completed */}
      <div className="flex items-center justify-between relative">
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
    </div>
  );
};

export default Navbar;
