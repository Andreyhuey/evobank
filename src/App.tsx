import { Banner, Header, Navbar, Services } from "./components";

function App() {
  return (
    <>
      <div className="bg-[#3A61F0] lg:px-6 md:px-3 flex flex-col gap-6  relative">
        <Navbar />
        <Header />
        <Services />
        <Banner />
      </div>
    </>
  );
}

export default App;
