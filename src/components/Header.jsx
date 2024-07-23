import React, { useState } from "react";
import Logo from "../assets/images/webp/Logo.webp";
import Oval from "../assets/images/webp/Oval.webp";
import Icons from "../common/Icons";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const HANDLE_MENU_TOGGLE = () => {
    setOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const HANDLE_NAVLINK_CLICK = () => {
    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
      setOpen(false)
    }
  };

  return (
    <section className=" shadow-nav_shadow">
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
              isOpen ? "right-0" : "right-[-100%]"
            } flex items-center gap-6 xl:gap-12 max-lg:flex-col max-lg:fixed duration-300 ease-linear max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:top-0 max-lg:bg-beschikbaar z-50`}
          >
            <li>
              <a
                href="#home"
                onClick={HANDLE_NAVLINK_CLICK}
                className="text-sm max-lg:text-lg leading-[17.6px] font-plus_jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Studiekeuze"
                onClick={HANDLE_NAVLINK_CLICK}
                className="text-sm max-lg:text-lg leading-[17.6px] font-plus_jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Studiekeuze
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={HANDLE_NAVLINK_CLICK}
                className="text-sm max-lg:text-lg leading-[17.6px] font-plus_jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Samenwerken
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={HANDLE_NAVLINK_CLICK}
                className="text-sm max-lg:text-lg leading-[17.6px] font-plus_jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Onderzoek
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={HANDLE_NAVLINK_CLICK}
                className="text-sm max-lg:text-lg leading-[17.6px] font-plus_jakarta text-blue font-medium relative after:absolute after:w-0 after:left-0 after:bottom-[-10px] after:h-[2px] after:bg-green hover:after:w-full after:duration-300 after:ease-linear hover:text-green duration-300"
              >
                Meer BUas
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-[19.7px]">
            <Icons icon="Notification" className=" cursor-pointer" />
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Oval} alt="Oval" className=" max-w-[34.5px] w-full" />
              <div className=" hidden sm:block">
                <div className=" flex flex-col ">
                  <p className=" text-sm opacity-70 font-bold font-plus_jakarta text-blue leading-[17.4px]">
                    Willem Beekhuis
                  </p>
                  <p className=" text-light-blue text-xs font-medium font-plus_jakarta leading-[17.7px]">
                    Student
                  </p>
                </div>
              </div>
            </div>
            <div
                onClick={HANDLE_MENU_TOGGLE}
                className={`${isOpen && "menu"} z-50 lg:hidden`}
              >
                <span className="h-[5px] rounded-[6px] block bg-blue w-[30px] duration-300"></span>
                <span className="h-[5px] rounded-[6px] block  bg-blue w-[30px] my-1.5"></span>
                <span className="h-[5px] rounded-[6px] block  bg-blue w-[30px]  duration-300"></span>
              </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
