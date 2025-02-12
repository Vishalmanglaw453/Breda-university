import React from "react";
import Icons from "../common/Icons";
import footerlogo from "../assets/images/svg/footer_logo.svg";
import appstore from "../assets/images/svg/appstore.svg";
import playstore from "../assets/images/svg/playstore.svg";

const FooterSection = () => {
  return (
    <footer className=" pt-[120px] max-lg:pt-[50px]">
      <div className=" container mx-auto pb-[67px] max-lg:pb-[40px]">
        <div className="flex -mx-3 flex-row flex-wrap pb-8 md:pb-[74px]">
          <div className="w-3/12 pt-[19px] max-lg:w-full px-3 ">
            <img className="cursor-pointer" src={footerlogo} alt="logo" />

            <p className="max-w-[246px] text-xs font-plus_jakarta font-medium text-Lynch leading-[18px] py-[21.5px]">
              JobBox is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>
            <div className="flex items-center gap-[11px]">
              <a
                href="https://www.facebook.com/"
                target="blank"
                className="bg-green hover:scale-[1.1] duration-300 ease-linear group rounded-full h-[30px] w-[30px] flex items-center justify-center"
              >
                <Icons icon="Facebook" />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                target="blank"
                className=" bg-green hover:scale-[1.1] duration-300 ease-linear group rounded-full h-[30px] w-[30px] flex items-center justify-center"
              >
                <Icons icon="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
                target="blank"
                className="bg-green hover:scale-[1.1] duration-300 ease-linear group rounded-full h-[30px] w-[30px] flex items-center justify-center"
              >
                <Icons icon="LinkedIn" />
              </a>
            </div>
          </div>
          <div className=" w-9/12 max-lg:w-full px-3  flex justify-between !flex-wrap">
            <div className="  max-xl:px-[30px] max-lg:pr-[40px] max-lg:pl-0 pt-[19px]  ">
              <ul className=" flex flex-col">
                <li className=" text-base pb-[6px] font-plus_jakarta font-bold text-Regal_Blue leading-[26px]">
                  Resources
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Press News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Careers Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="  max-xl:px-[30px] max-lg:pr-[40px] max-lg:pl-0 pt-[19px]  ">
              <ul className=" flex flex-col">
                <li className=" text-base pb-[6px] font-plus_jakarta font-bold text-Regal_Blue leading-[26px]">
                  Community
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Learners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Partener
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Transactions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="  max-xl:px-[30px] max-lg:pr-[40px] max-lg:pl-0 pt-[19px]   ">
              <ul className=" flex flex-col">
                <li className=" text-base pb-[6px] font-plus_jakarta font-bold text-Regal_Blue leading-[26px]">
                  Quick links
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Professional
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Admissions
                  </a>
                </li>
              </ul>
            </div>
            <div className="  max-xl:px-[30px] max-lg:pr-[40px] max-lg:pl-0 pt-[19px]  ">
              <ul className=" flex flex-col">
                <li className=" text-base pb-[6px] font-plus_jakarta font-bold text-Regal_Blue leading-[26px]">
                  Quick links
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Professional
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Admissions
                  </a>
                </li>
              </ul>
            </div>
            <div className="  max-xl:px-[30px] max-lg:pr-[40px] max-lg:pl-0 pt-[19px]  ">
              <ul className=" flex flex-col">
                <li className=" text-base pb-[6px] font-plus_jakarta font-bold text-Regal_Blue leading-[26px]">
                  More
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Privacy Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-sm leading-[28px] font-plus_jakarta font-medium hover:text-Regal_Blue duration-300 ease-linear text-Lynch"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="   max-xl:px-[30px] max-lg:pr-[40px] max-lg:pl-0 pt-[19px] ">
              <div className=" flex flex-col">
                <p className=" text-base font-plus_jakarta font-bold leading-[26px]">
                  Download App
                </p>
                <p className=" max-w-[238px] text-xs font-plus_jakarta font-medium text-Lynch leading-[18px] pt-3 pb-[18px]">
                  Download our Apps and get extra 15% Discount on your first
                  Order…!
                </p>
                <div className=" flex items-center gap-[12.9px] flex-wrap xl:flex-nowrap">
                  <a target="blank" href="https://www.apple.com/in/app-store/">
                    <img src={appstore} alt="logo" />
                  </a>
                  <a
                    target="blank"
                    href="https://play.google.com/store/games?hl=en"
                  >
                    <img src={playstore} alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-Link_Water h-[1px]"></div>
        <div className=" flex  justify-between pt-[31px]   max-md:flex-col sm:flex-nowrap ">
          <p className="text-xs leading-[18px] font-plus_jakarta font-medium text-Lynch">
            Copyright © 2024 JobBox all right reserved
          </p>
          <div className="flex items-center gap-4 md:gap-7 flex-wrap mt-4 sm:mt-0">
            <p className="text-xs leading-[18px] font-plus_jakarta font-medium text-Lynch">
              Privacy Policy
            </p>
            <p className="text-xs leading-[18px] font-plus_jakarta font-medium text-Lynch">
              Terms & Conditions
            </p>
            <p className="text-xs leading-[18px] font-plus_jakarta font-medium text-Lynch">
              Security
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
