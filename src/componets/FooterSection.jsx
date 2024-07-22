import React from "react";
import Icons from "../common/Icons";
import footerlogo from "../assets/images/svg/footer_logo.svg";
import appstore from "../assets/images/svg/appstore.svg";
import playstore from "../assets/images/svg/playstore.svg";

const FooterSection = () => {
  return (
    <>
      <section className=" pt-[155px] max-lg:pt-[50px]">
        <div className=" container mx-auto pb-[67px] max-lg:pb-[40px]">
          <div className="flex -mx-3 flex-wrap pb-8 md:pb-[74px]">
            <div className="w-full lg:w-[50%] px-3">
              <div className=" flex flex-wrap">
                <div className=" w-full sm:w-[50%] md:w-[33.33%]">
                  <div className="flex items-center gap-1">
                    <img className=" cursor-pointer" src={footerlogo} alt="logo" />
                  </div>
                  <p className=" max-w-[246px] text-xs font-Plus-Jakarta font-medium text-light-blue leading-[18px] py-[21.5px]">
                    JobBox is the heart of the design community and the best
                    resource to discover and connect with designers and jobs
                    worldwide.
                  </p>
                  <div className=" flex items-center gap-[11px]">
                    <a
                      href="https://www.facebook.com/"
                      target="blank"
                      className=" bg-green hover:scale-[1.1] duration-300 ease-linear group rounded-full h-[30px] w-[30px] flex items-center justify-center"
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
                      href="https://in.indeed.com/"
                      target="blank"
                      className=" bg-green hover:scale-[1.1] duration-300 ease-linear group rounded-full h-[30px] w-[30px] flex items-center justify-center"
                    >
                      <Icons icon="LinkedIn" />
                    </a>
                  </div>
                </div>
                <div className=" w-full sm:w-[50%] mt-5 sm:mt-0 md:w-[33.33%] flex justify-start sm:justify-center lg:justify-end">
                  <ul className=" flex flex-col">
                    <li className=" text-base pb-[6px] font-Plus-Jakarta font-bold text-blue leading-[26px]">
                      Resources
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        About{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Leadership{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Press News{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Careers Team{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Contact Us{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" w-full sm:w-[50%] mt-5 md:mt-0 md:w-[33.33%] flex md:justify-center justify-start">
                  <ul className=" flex flex-col">
                    <li className=" text-base pb-[6px] font-Plus-Jakarta font-bold text-blue leading-[26px]">
                      Community
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Learners{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Partener{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        {" "}
                        Developers{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Transactions{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Blog{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" w-full sm:w-[50%] mt-5 md:w-[33.33%] flex justify-start sm:!justify-center md:justify-start md:hidden ">
                  <ul className=" flex flex-col">
                    <li className=" text-base pb-[6px] font-Plus-Jakarta font-bold text-blue leading-[26px]">
                      Quick links
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Home{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Professional{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Education{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Courses{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Admissions{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] px-3">
              <div className=" flex flex-wrap">
                <div className=" w-full sm:w-[50%] md:w-[33.33%] mt-5 lg:mt-0 md:flex justify-start lg:justify-center max-md:hidden ">
                  <ul className=" flex flex-col">
                    <li className=" text-base pb-[6px] font-Plus-Jakarta font-bold text-blue leading-[26px]">
                      Quick links
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Home{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Professional{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Education{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Courses{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Admissions{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" w-full sm:w-[50%] md:w-[33.33%] mt-5 lg:mt-0 flex justify-start md:justify-center">
                  <ul className=" flex flex-col">
                    <li className=" text-base pb-[6px] font-Plus-Jakarta font-bold text-blue leading-[26px]">
                      More
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Press{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Investors{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Terms{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Privacy Help{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" text-sm leading-[28px] font-Plus-Jakarta font-medium hover:text-blue duration-300 ease-linear text-light-blue"
                      >
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" w-full sm:w-[50%] md:w-[33.33%] mt-5 lg:mt-0 flex justify-start sm:justify-end">
                  <div className=" flex flex-col">
                    <p className=" text-base font-Plus-Jakarta font-bold leading-[26px]">
                      Download App
                    </p>
                    <p className=" max-w-[238px] text-xs font-Plus-Jakarta font-medium text-light-blue leading-[18px] pt-3 pb-[18px]">
                      Download our Apps and get extra 15% Discount on your first
                      Order…!
                    </p>
                    <div className=" flex items-center gap-[12.9px] flex-wrap xl:flex-nowrap">
                      <a
                        target="blank"
                        href="https://www.apple.com/in/app-store/"
                      >
                        {" "}
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
          </div>
          <div className=" w-full bg-fade-blue h-[1px]"></div>
          <div className=" flex  justify-between pt-[31px]   max-md:flex-col sm:flex-nowrap ">
            <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-light-blue">
              Copyright © 2024 JobBox all right reserved
            </p>
            <div className="flex items-center gap-4 md:gap-7 flex-wrap mt-4 sm:mt-0">
              <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-light-blue">
                Privacy Policy
              </p>
              <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-light-blue">
                Terms & Conditions
              </p>
              <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-light-blue">
                Security
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
