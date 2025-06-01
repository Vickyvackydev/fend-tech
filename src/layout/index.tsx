import { AIRPLANE, BOXES, SHOPPING_BAG, WAREHOUSE } from "../assets";
import Footer from "../components/footer";
import About from "../ui/about";
import Advert from "../ui/advert";
import Contact from "../ui/contact";

import Hero from "../ui/hero";
import More from "../ui/more";
import Quote from "../ui/quote";

function MainPage() {
  return (
    <>
      <Hero />
      <div className="w-[70vw] lg:-bottom-14 -bottom-10 rounded-sm p-5 right-1/6 space-x-4 space-y-4 shadow-lg bg-white z-40 absolute flex items-center lg:flex-row flex-col justify-center">
        <div className="flex items-start gap-x-3">
          <img src={SHOPPING_BAG} className="w-[46.83px] h-[50px]" alt="" />
          <div className="flex flex-col items-start gap-y-1">
            <span className="text-[#9B9B9B] font-medium text-sm">Reliable</span>
            <span className="text-[16px] font-medium text-black">
              Procurement & Sourcing
            </span>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <img src={WAREHOUSE} className="w-[46.83px] h-[50px]" alt="" />
          <div className="flex flex-col items-start gap-y-1">
            <span className="text-[#9B9B9B] font-medium text-sm">
              Sustainable
            </span>
            <span className="text-[16px] font-medium text-black">
              Warehousing & Logistics
            </span>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <img src={AIRPLANE} className="w-[46.83px] h-[50px]" alt="" />
          <div className="flex flex-col items-start gap-y-1">
            <span className="text-[#9B9B9B] font-medium text-sm">
              Innovation
            </span>
            <span className="text-[16px] font-medium text-black">
              Import & Export Services
            </span>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <img src={BOXES} className="w-[46.83px] h-[50px]" alt="" />
          <div className="flex flex-col items-start gap-y-1">
            <span className="text-[#9B9B9B] font-medium text-sm">Flexible</span>
            <span className="text-[16px] font-medium text-black">
              General Merchandise
            </span>
          </div>
        </div>
      </div>
      <About />
      <Advert />
      <Quote />
      <More />
      <Contact />
      <Footer />
    </>
  );
}

export default MainPage;
