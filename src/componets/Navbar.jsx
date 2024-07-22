import React, { useState } from "react";
import Logo from "../assets/images/png/Logo.webp";
import Oval from "../assets/images/png/Oval.webp";
import Icons from "../common/Icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <section className="shadow-NavShadow">
      <div className=" container mx-auto">
        <nav className="flex items-center justify-between pt-[23px] pb-[18px]">
          <a href="#">
            <img
              src={Logo}
              alt="Logo"
              className="max-w-[137px] min-h-[44px] w-full"
            />
          </a>
          <ul
            className={`${
              isMenuOpen ? "right-0" : "right-[-100%]"
            } flex items-center gap-6 lg:gap-12 max-lg:flex-col max-lg:fixed duration-300 ease-linear max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:top-0 max-lg:bg-beschikbaar z-50`}
          >
            <li>
              <a
                href="#home"
                onClick={handleNavLinkClick}
                className="text-sm leading-[17.6px] font-Plus-Jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Studiekeuze"
                onClick={handleNavLinkClick}
                className="text-sm leading-[17.6px] font-Plus-Jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Studiekeuze
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleNavLinkClick}
                className="text-sm leading-[17.6px] font-Plus-Jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Samenwerken
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleNavLinkClick}
                className="text-sm leading-[17.6px] font-Plus-Jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Onderzoek
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleNavLinkClick}
                className="text-sm leading-[17.6px] font-Plus-Jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Meer BUas
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-[19.7px]">
            <Icons icon="Notification" />
            <div className="flex items-center gap-[8.8px]">
              <img src={Oval} alt="Oval" className=" max-w-[34.5px] w-full" />
              <div className=" hidden sm:block">
                <div className=" flex flex-col ">
                  <p className=" text-xsm font-bold font-Plus-Jakarta text-blue leading-[17.4px]">
                    Willem Beekhuis
                  </p>
                  <p className=" text-light-blue text-xxs font-medium font-Plus-Jakarta leading-[17.7px]">
                    Student
                  </p>
                </div>
              </div>
              <div
                onClick={handleMenuToggle}
                className={`${isMenuOpen ? "menu" : ""} z-50 lg:hidden`}
              >
                <span className="bar h-[5px] rounded-[6px] block bg-blue w-[30px] duration-300"></span>
                <span className="bar h-[5px] rounded-[6px] block  bg-blue w-[30px] my-[6px]"></span>
                <span className="bar h-[5px] rounded-[6px] block  bg-blue w-[30px]  duration-300"></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
