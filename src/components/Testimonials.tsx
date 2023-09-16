import styled from "styled-components";
import { TestimonialData } from "../constants";
import { Stories } from ".";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Main = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Testimonials = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider === null) {
      return "";
    }
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider === null) {
      return "";
    }
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <div id="stories" className="px-6 md:px-20 py-10 ">
      <>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div>
            <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
              Testimonials
            </div>
          </div>
          <div className="text-center h3 lg:w-[425px] leading-[50px]">
            People Stories
          </div>
          <p>Cloudless and of a deep dark blue spectacle before us was.</p>
        </div>
      </>

      <Main id="slider" className="w-[100%] py-10">
        <div className="flex items-center gap-x-8 lg:gap-x-10 ">
          {TestimonialData?.map((item, index) => (
            <>
              <Stories item={item} key={index} index={index} />
            </>
          ))}
        </div>
      </Main>

      <div className="flex justify-center pt-7 items-center">
        <div className="flex items-center justify-center gap-4">
          <span onClick={slideLeft}>
            <BsArrowLeftCircle
              size={32}
              className="text-[#3A61F0] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
          </span>
          <span onClick={slideRight}>
            <BsArrowRightCircle
              size={32}
              className="text-[#3A61F0] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
