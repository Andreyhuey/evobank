import {
  CreditCard,
  Header,
  Navbar,
  Services,
  MultiComponent,
  Footer,
  Banner,
} from "./components";

function App() {
  return (
    <>
      <div className="bg-[#3A61F0] flex flex-col gap-6">
        <Navbar />
        <Header />
        <Services />
        <CreditCard />
        <MultiComponent />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default App;
