import { About, FAQs, Insights, Testimonials } from ".";

const MultiComponent = () => {
  return (
    <div className="container">
      <div className="rounded-3xl bg-white">
        <About />
        <></>
        <FAQs />
        <Testimonials />
        <Insights />
      </div>
    </div>
  );
};

export default MultiComponent;
