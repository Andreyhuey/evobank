import CountUp from "react-countup";
import credit1 from "../assets/credit-card.png";

const CreditCard = () => {
  return (
    <div className="container">
      <div
        className="rounded-3xl bg-[#181C33] lg:py-12 py-14 md:px-20 px-4 w-full "
        id="credit"
      >
        <div className="flex flex-col lg:flex-row gap-5 text-white items-center justify-between">
          <div className="flex flex-col gap-8">
            <div>
              <div className="border-[#F5A647] border-[1px] text-[#F5A647] border-dashed p-2 font-semibold inline-block rounded-3xl tracking-[3px] uppercase hover:scale-110 transition duration-300 ease-in-out  cursor-pointer">
                Credit card
              </div>
            </div>
            <p className="h2 text-white">Credit Card</p>
            <p className="text-[#333333e] md:max-w-[350px]">
              Banks may also provide financial services such as wealth
              management, currency exchange.
            </p>
          </div>
          <img src={credit1} alt="credit-card" />
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2">
              <div className=" text-white h3">
                <CountUp
                  end={3}
                  duration={3}
                  enableScrollSpy
                  className="h2 text-white"
                />
                %
              </div>
              <p className="text-[14px] max-w-[84px]">on card every month</p>
            </div>
            <button className="bg-[#F5A647] rounded-3xl px-6 py-3 hover:scale-110 transition duration-300 ease-in-out mt-7 w-full text-[14px] font-bold">
              GET NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
