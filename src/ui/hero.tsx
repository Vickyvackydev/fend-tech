import Header from "../components/header";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div id="hero-section" className="w-full relative h-screen overflow-hidden">
      <div className="w-full h-full absolute inset-0">
        <img src="/fend-bg.png" alt="" />
      </div>
      <div className="absolute inset-0 bg-[#00000099] z-10"></div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute flex-col gap-y-2 inset-0 flex z-40 items-center text-white justify-center"
      >
        <span className="text-[43px] font-bold text-center">
          Smarter Procurement. Seamless <br /> Export. Trusted Trade.
        </span>
        <p className="text-lg font-medium text-center">
          Empowering African businesses with reliable sourcing, cross-border
          logistics, and <br /> ethical trade—backed by technology and integrity
        </p>
      </motion.div>
    </div>
  );
}

export default Hero;
