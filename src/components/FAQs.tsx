import { useState } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { faqData } from "../constants";

const FAQs = () => {
  const [expandedItem, setExpandedItem] = useState(0);

  return (
    <div id="FAQ" className="md:px-6 py-10">
      <div className="flex flex-col gap-4 items-center justify-center px-6 md:px-14 py-10">
        <div>
          <div className="border-[#3A61F0] border-[1px] text-[#3A61F0] border-dashed px-4 py-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
            F.A.Q.
          </div>
        </div>
        <div className="text-center h3 lg:w-[425px] leading-[50px]">
          Frequently Asked Questions
        </div>
        <p>Cloudless and of a deep dark blue spectacle before us was.</p>
      </div>
      <div className="bg-[#FFF7ED] px-6 md:px-14 rounded-3xl py-10 ">
        <>
          {faqData?.map((item, index) => {
            // destructure service
            const { id, heading, details } = item;
            return (
              <div key={index} className="flex flex-col items-center">
                <Accordion
                  allowZeroExpanded={true}
                  className="flex flex-col gap-4 justify-center md:w-[600px] w-full"
                  onChange={() => {
                    console.log(id), setExpandedItem(id);
                  }}
                >
                  <AccordionItem className="border-b-[1px] py-3 border-[#F3E5D4]">
                    <AccordionItemHeading>
                      <AccordionItemButton className="flex items-center justify-between gap-10 w-full py-4 font-bold">
                        {heading}
                        <AiOutlineDownCircle className="text-[#3A61F0] h-[20px] w-[20px] font-thin" />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="">
                      {details}
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default FAQs;
