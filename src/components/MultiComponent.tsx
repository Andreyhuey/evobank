import { About, FAQs, Insights, Testimonials } from ".";

const MultiComponent = () => {
  return (
    <div className="rounded-3xl bg-white min-h-[300vh]">
      <About />
      <></>
      <FAQs />
      <Testimonials />
      <Insights />
    </div>
  );
};

export default MultiComponent;
