import { Link } from "react-router-dom";
import { FEND_FOOTER_LOGO, FEND_LOGO } from "../assets";
import Button from "./button";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight || 300;
      const scrollY = window.scrollY;
      setScrolled(scrollY > heroHeight - 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToElem = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`w-full fixed left-0 px-20 py-7  z-50 top-0 right-0 flex items-center justify-between ${
        scrolled ? "bg-white shadow-md " : "bg-transparent"
      } transition-colors duration-300`}
    >
      <Link to={"/"}>
        <img
          src={scrolled ? FEND_FOOTER_LOGO : FEND_LOGO}
          className="w-[113.62px] h-[42px]"
          alt=""
        />
      </Link>
      <div
        className={`flex items-center justify-center space-x-7 ${
          scrolled ? "text-black " : "text-white"
        } transition-colors duration-300 font-normal text-[16px]`}
      >
        <span
          onClick={() => handleScrollToElem("hero-section")}
          className="cursor-pointer"
        >
          Home
        </span>
        <span
          onClick={() => handleScrollToElem("about")}
          className="cursor-pointer"
        >
          About Us
        </span>
        <span
          onClick={() => handleScrollToElem("why-fend")}
          className="cursor-pointer"
        >
          Why Fend
        </span>
        <span
          onClick={() => handleScrollToElem("contact")}
          className="cursor-pointer"
        >
          Contact
        </span>
      </div>
      <Button
        title={"Get a Quote"}
        handleClick={() => {}}
        btnStyles={"px-4 py-2"}
        textStyle={""}
      />
    </div>
  );
}

export default Header;
