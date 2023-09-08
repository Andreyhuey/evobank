import { About, FAQs, Insights, Newsletter, Testimonials } from ".";

const MultiComponent = () => {
  return (
    <div className="rounded-3xl bg-white min-h-[300vh]">
      <About />
      <></>
      <FAQs />
      <Testimonials />
      <Insights />
      <Newsletter />
    </div>
  );
};

export default MultiComponent;
