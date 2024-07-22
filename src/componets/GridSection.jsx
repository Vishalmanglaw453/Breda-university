import React from "react";
import Checkbox from "../common/Commoncheckbox";
import { Gridcommoncard } from "../common/Helper";
import {
  Begsvg,
  Cardloctionsvg,
  Numberarrow,
  Numberarrowright,
  Systamvactor,
  Timesvg,
  grid_svg,
} from "../common/Icons";
import Icons from "../common/Icons";
import { useState } from "react";
import { cardsData } from "../common/Helper";
import { useEffect } from "react";
const GridSection = () => {
  const [ActiveKey, setActiveKey] = useState("nav1");
  useEffect(() => {
    setActiveKey("nav1");
  }, []);

  const [nav, setNav] = useState(false);

  if (nav === true) {
    document.body.classList.add("max-xl:overflow-hidden");
  } else {
    document.body.classList.remove("max-xl:overflow-hidden");
  }
  const [activeDropdown, setActiveDropdown] = useState("");
  const [selectedLocation2, setSelectedLocation2] = useState("Locatie");
  const [activedown, setActivedown] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("12");

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(dropdown === activeDropdown ? "" : dropdown);
  };
  const handleLocationChange2 = (option) => {
    setSelectedLocation2(option);
    setActiveDropdown("");
  };

  const toggledown = (dropdown) => {
    setActivedown(dropdown === activedown ? "" : dropdown);
  };

  const handleExperienceChange = (option) => {
    setSelectedExperience(option);
    setActiveDropdown("");
  };
  const [activeDrop, setActiveDrop] = useState("");

  const [selected, setSelected] = useState("Nieuwste");

  const toggleDrop = (dropdown) => {
    setActiveDrop(dropdown === activeDrop ? "" : dropdown);
  };

  const handleExperience = (option) => {
    setSelected(option);
    setActiveDrop("");
  };

  return (
    <>
      <section>
        <div className="container">
          <button
            onClick={() => setNav(!nav)}
            className="px-3 py-2 min-h-[30px]    lg:hidden w-full my-[20px] flex items-center justify-center text-white text-xs leading-[12px] font-Plus-Jakarta font-medium bg-green rounded-[4px]"
          >
            Open Slidebaar
          </button>
          <div className="flex justify-between  max-2xl:gap-[40px]">
            {/* grid box */}
            <div
              className={`${
                nav ? " max-lg:left-0" : "max-lg:left-[-104%] "
              } filter_box  lg:min-w-[287px] max-lg:min-w-[360px]   max-lg:p-[30px] max-lg:max-h-[100vh]   max-lg:overflow-y-scroll    max-lg:fixed max-lg:bg-[#F8FAFF]    max-lg:h-[100vh]   max-lg:top-0   max-lg:ease-linear max-lg:duration-300   z-50 `}
            >
              <div className="">
                <div className=" flex justify-end mb-4  lg:hidden ">
                  <button
                    onClick={() => setNav(false)}
                    className="px-3 py-2 min-h-[30px] flex items-center justify-center text-white text-xs leading-[12px] font-Plus-Jakarta font-medium bg-green rounded-[4px]"
                  >
                    Close Slidebaar
                  </button>
                </div>
                <div className="pl-[14px] pr-[4px] flex justify-between items-center">
                  <p className=" font-Plus-Jakarta font-bold text-xl leading-[26px]  text-blue ">
                    Filter
                  </p>
                  <a
                    href="#"
                    className=" font-Plus-Jakarta font-medium text-sm  text-light-blue"
                  >
                    Reset
                  </a>
                </div>
                <div className="max-w-[269px] w-full h-[1px] bg-fade-blue2  ml-[14px] mr-[4px] mt-[10px] "></div>
                <div className="relative pl-[14px]">
                  <button
                    className="flex w-full border-[1px] border-fade-blue py-[18px] px-[22px] rounded-[10px] max-w-[269px] mt-[28px] justify-between items-center gap-[28.5px] text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                    onClick={() => toggleDropdown("location")}
                  >
                    <span className="flex items-center gap-[7px]">
                      <Icons icon="Locatie" />
                      {selectedLocation2}
                    </span>
                    <Icons icon="DropdownIcon" />
                  </button>
                  {activeDropdown === "location" && (
                    <ul className="absolute bg-white shadow-md py-2 z-10">
                      <li>
                        <a
                          className="block px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                          href="#"
                          onClick={() => handleLocationChange2("China")}
                        >
                          China
                        </a>
                      </li>
                      <li>
                        <a
                          className="block px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                          href="#"
                          onClick={() => handleLocationChange2("USA")}
                        >
                          USA
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="pl-sm ">
                  <div>
                    <p className=" font-Plus-Jakarta font-bold text-xlg text-blue leading-[26px] mt-[16px]">
                      Domein
                    </p>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Alles
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          312
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Facility
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          12
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Hotel
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          23
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Leisure & Events
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          43
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Media
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          56
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Tourism
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          76
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <div>
                    <p className=" font-Plus-Jakarta font-bold text-xlg text-blue leading-[26px] mt-[16px]">
                      Leerjaar
                    </p>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Vierderjaars
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          24
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Derdejaars
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          45
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Tweedejaars
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          56
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[277px] w-full h-[1px] bg-fade-blue  ml-[14px] mr-[4px] mt-[18px] "></div>
                <div className="pl-sm ">
                  <div>
                    <p className=" font-Plus-Jakarta font-bold text-xlg text-blue leading-[26px] mt-[16px]">
                      Position
                    </p>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Senior
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          12
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Junior
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          34
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Fresher
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          54
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[277px] w-full h-[1px] bg-fade-blue  ml-[14px] mr-[4px] mt-[18px] "></div>
                <div className="pl-sm ">
                  <div>
                    <p className=" font-Plus-Jakarta font-bold text-xlg text-blue leading-[26px] mt-[16px]">
                      Experience Level
                    </p>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Internship
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          56
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Entry Level
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          87
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Associate
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          34
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Mid Level
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          45
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Director
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          76
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Executive
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          89
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[277px] w-full h-[1px] bg-fade-blue  ml-[14px] mr-[4px] mt-[18px] "></div>
                <div className="pl-sm ">
                  <div>
                    <p className=" font-Plus-Jakarta font-bold text-xlg text-blue leading-[26px] mt-[16px]">
                      Onsite/Remote
                    </p>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          On-site
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          12
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Remote
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          56
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Hybrid
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          45
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[277px] w-full h-[1px] bg-fade-blue  ml-[14px] mr-[4px] mt-[18px] "></div>
                <div className="pl-sm ">
                  <div>
                    <p className=" font-Plus-Jakarta font-bold text-xlg text-blue leading-[26px] mt-[16px]">
                      Job Posted
                    </p>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          All
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          78
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          1 day
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          56
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          7 days
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          23
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          30 days
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          54
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[277px] w-full h-[1px] bg-fade-blue  ml-[14px] mr-[4px] mt-[18px] "></div>
                <div className="pl-sm ">
                  <div>
                    <p className=" font-Plus-Jakarta font-bold text-xlg text-blue leading-[26px] mt-[16px]">
                      Job Type
                    </p>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Full Time
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          25
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Part Time
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          65
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Remote Jobs
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          78
                        </p>
                      </div>
                    </div>
                    <div className=" pr-2sm flex items-center justify-between mt-[18px]">
                      <div className=" flex items-center gap-[12px] group ">
                        <Checkbox />
                        <p className="  group-hover:text-blue text-light-blue  font-Plus-Jakarta font-medium text-sm leading-[22px]">
                          Freelancer
                        </p>
                      </div>
                      <div className="w-[24px] h-[24px] flex justify-center items-center bg-fade-blue rounded-[7px] ">
                        <p className=" font-Plus-Jakarta font-medium text-xs  leading-[18px] text-green">
                          97
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* flat box */}
            <div
              id="Studiekeuze"
              onClick={() => setNav(false)}
              className=" max-w-[987px]   min-h-screen "
            >
              <div className=" flex justify-between items-center">
                <p className=" font-Plus-Jakarta font-medium text-sm leading-[22px] text-gray2">
                  41-60 van de 312 vacatures
                </p>
                <div className=" flex gap-[10px]">
                  <div className="relative max-md:hidden">
                    <button
                      className="flex w-full justify-between   py-[6px] px-[12px] items-center gap-[17px] border-[1px]  border-fade-blue rounded-[4px] text-sm font-Plus-Jakarta font-medium leading-[17px] text-gray2"
                      onClick={() => toggledown("experience")}
                    >
                      <span className="flex items-center gap-[7px]">
                        <p>toon:</p>
                        {selectedExperience}
                      </span>
                      <Icons icon="DropdownIcon" />
                    </button>
                    {activedown === "experience" && (
                      <ul className="absolute bg-white shadow-md py-2 z-10">
                        <div>
                          <div
                            className="block cursor-pointer px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                            onClick={() => handleExperienceChange("13")}
                          >
                            13
                          </div>
                        </div>
                        <div>
                          <div
                            className="block cursor-pointer px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                            onClick={() => handleExperienceChange("14")}
                          >
                            14
                          </div>
                        </div>
                      </ul>
                    )}
                  </div>
                  <div className="relative max-md:hidden">
                    <button
                      className="flex w-full justify-between   py-[6px] px-[12px] items-center gap-[17px] border-[1px]  border-fade-blue rounded-[4px] text-sm font-Plus-Jakarta font-medium leading-[17px] text-gray2"
                      onClick={() => toggleDrop("experience")}
                    >
                      <span className="flex items-center gap-[7px]">
                        <p>Sorteren op :</p>
                        {selected}
                      </span>
                      <Icons icon="DropdownIcon" />
                    </button>
                    {activeDrop === "experience" && (
                      <ul className="absolute bg-white shadow-md py-2 z-10">
                        <li>
                          <a
                            className="block px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                            href="#"
                            onClick={() => handleExperience("Junior")}
                          >
                            Junior
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                            href="#"
                            onClick={() => handleExperience("Senior")}
                          >
                            Senior
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>

                  <div
                    onClick={() => setActiveKey("nav1")}
                    className={`${
                      ActiveKey === "nav1"
                        ? "bg-[#3E8600]  border-[#3E8600] "
                        : "bg-transparent border-fade-blue2"
                    }   w-[30px] h-[30px] border-[1px] flex flex-col gap-[4px] justify-center  items-center  rounded-[4px]`}
                  >
                    <div
                      className={`${
                        ActiveKey === "nav1" ? "bg-white   " : "bg-fade-blue2"
                      } rounded-[2px] w-[14px] min-h-[2px] `}
                    ></div>
                    <div
                      className={`${
                        ActiveKey === "nav1" ? "bg-white   " : "bg-fade-blue2"
                      } rounded-[2px] w-[14px] min-h-[2px] `}
                    ></div>
                    <div
                      className={`${
                        ActiveKey === "nav1" ? "bg-white   " : "bg-fade-blue2"
                      } rounded-[2px] w-[14px] min-h-[2px] `}
                    ></div>
                  </div>
                  <div
                    onClick={() => setActiveKey("nav2")}
                    className={`${
                      ActiveKey === "nav2"
                        ? "bg-[#3E8600]  border-[#3E8600] "
                        : "bg-transparent border-fade-blue2"
                    }  w-[30px] h-[30px] border-[1px] flex flex-col gap-[4px] justify-center  items-center  rounded-[4px] `}
                  >
                    <div className=" flex flex-col gap-[2px]">
                      <div className=" flex gap-[2px]">
                        <svg
                          className={`${
                            ActiveKey === "nav2"
                              ? "  fill-white "
                              : " fill-fade-blue2"
                          } `}
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="6" height="6" rx="2" fill="" />
                        </svg>
                        <svg
                          className={`${
                            ActiveKey === "nav2"
                              ? "  fill-white "
                              : " fill-fade-blue2"
                          } `}
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="6" height="6" rx="2" fill="" />
                        </svg>
                      </div>
                      <div className=" flex gap-[2px]">
                        <svg
                          className={`${
                            ActiveKey === "nav2"
                              ? "  fill-white "
                              : " fill-fade-blue2"
                          } `}
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="6" height="6" rx="2" fill="" />
                        </svg>
                        <svg
                          className={`${
                            ActiveKey === "nav2"
                              ? "  fill-white "
                              : " fill-fade-blue2"
                          } `}
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="6" height="6" rx="2" fill="" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  flex md:hidden  justify-between mt-[16px]">
                <div className="relative  max-w-[120px] md:hidden">
                  <button
                    className="flex w-full justify-between   py-[6px] px-[12px] items-center gap-[17px] border-[1px]  border-fade-blue rounded-[4px] text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                    onClick={() => toggledown("experience")}
                  >
                    <span className="flex items-center gap-[7px]">
                      <p>toon:</p>
                      {selectedExperience}
                    </span>
                    <Icons icon="DropdownIcon" />
                  </button>
                  {activedown === "experience" && (
                    <ul className="absolute bg-white shadow-md py-2 z-10">
                      <div>
                        <div
                          className="block cursor-pointer px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                          onClick={() => handleExperienceChange("13")}
                        >
                          13
                        </div>
                      </div>
                      <div>
                        <div
                          className="block cursor-pointer px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                          onClick={() => handleExperienceChange("14")}
                        >
                          14
                        </div>
                      </div>
                    </ul>
                  )}
                </div>
                <div className="relative  max-w-[220px] md:hidden">
                  <button
                    className="flex w-full justify-between   py-[6px] px-[12px] items-center gap-[17px] border-[1px]  border-fade-blue rounded-[4px] text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                    onClick={() => toggleDrop("experience")}
                  >
                    <span className="flex items-center gap-[7px]">
                      <p>Sorteren op :</p>
                      {selected}
                    </span>
                    <Icons icon="DropdownIcon" />
                  </button>
                  {activeDrop === "experience" && (
                    <ul className="absolute bg-white shadow-md py-2 z-10">
                      <li>
                        <a
                          className="block px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                          href="#"
                          onClick={() => handleExperience("Junior")}
                        >
                          Junior
                        </a>
                      </li>
                      <li>
                        <a
                          className="block px-4 py-1 text-sm font-Plus-Jakarta font-medium leading-[22px] text-gray2"
                          href="#"
                          onClick={() => handleExperience("Senior")}
                        >
                          Senior
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className=" bg-fade-blue max-w-[987px] w-full h-[1px] mt-[14px] "></div>

              <div
                className={`${
                  ActiveKey === "nav2" ? "  block    " : "  hidden"
                }  `}
              >
                <div className=" pt-[30px] gap-[30px]  justify-center  flex flex-wrap ">
                  {Gridcommoncard.map((data, index) => (
                    <>
                      <div className=" max-w-[309px] duration-300 ease-linear group hover:bg-white hover:border-[#3AAB67] py-[31px] px-[23px]  rounded-[16px] bg-[#F8FAFF] min-h-[394px] border-fade-blue flex flex-col justify-between border-[2px] ">
                        <div>
                          {" "}
                          <div className=" flex justify-between">
                            <div className=" flex gap-[16px]">
                              <div>
                                <img src={data.logo} alt="logo" />
                              </div>
                              <div>
                                <h5 className=" font-Plus-Jakarta text-lg leading-[26px] text-blue font-bold ">
                                  {data.headingname}
                                </h5>
                                <p className=" flex items-center gap-[4px] mt-[6px]  font-Plus-Jakarta font-medium text-xs leading-[18px] text-gray ">
                                  <span>
                                    <Cardloctionsvg />
                                  </span>
                                  <span>{data.loctionname}</span>
                                </p>
                              </div>
                            </div>
                            <div>
                              <img
                                className="group-hover:hidden  block"
                                src={data.flash}
                                alt="flash"
                              />
                              <img
                                className=" group-hover:block hidden"
                                src={data.flash2}
                                alt="flash"
                              />
                            </div>
                          </div>
                          <h4 className=" font-Plus-Jakarta mt-[21px]  font-bold text-xlg leading-[26px] text-blue">
                            {data.secondheading}
                          </h4>
                          <div className=" flex gap-[24px] items-center mt-[7px] ">
                            <p className=" flex gap-[7px]  items-center font-Plus-Jakarta font-medium text-xs text-gray ">
                              <span>
                                <Begsvg />
                              </span>
                              <span>{data.begtext}</span>
                            </p>
                            <p className=" flex gap-[7px]  items-center font-Plus-Jakarta font-medium text-xs text-gray ">
                              <span>
                                <Timesvg />
                              </span>
                              <span>{data.timetext}</span>
                            </p>
                          </div>
                          <p className=" font-Plus-Jakarta mt-[14px] font-medium text-sm  text-gray2 ">
                            {data.pheragraph}
                          </p>
                        </div>
                        <div>
                          <button className="px-[10px]  py-[3px]    bg-[#EFF3FC]  text-gray2 rounded-[5px] font-Plus-Jakarta font-medium text-xs leading-[18px] ">
                            {data.btn1text}
                          </button>{" "}
                          <br />
                          <button className="px-[12px]  duration-300 ease-linear mt-[21px] py-[9px]  bg-[#EFF3FC] group-hover:bg-[#3E8600] group-hover:text-white     text-green rounded-[5px] font-Plus-Jakarta font-medium text-xs leading-[18px] ">
                            Solliciteren
                          </button>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div
                className={`${
                  ActiveKey === "nav1" ? "  block    " : "  hidden"
                }  `}
              >
                {cardsData.map((data, index) => (
                  <div
                    key={index}
                    className="hover:bg-transparent bg-light-gray max-w-[987px] duration-300 ease-linear mt-[30px] border border-fade-blue rounded-[16px] pt-6 pb-[30px] ps-[25px] pe-5"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div className="flex gap-[19px] items-center">
                        <img
                          src={data.employerLogo}
                          alt="EmployerLogo"
                          className="max-w-[52px] w-full"
                        />
                        <div className="flex flex-col">
                          <h4 className="text-lg leading-[26px] font-bold font-Plus-Jakarta text-blue">
                            {data.employerName}
                          </h4>
                          <p className="flex items-center gap-[3px] text-xs leading-[18px] text-gray font-Plus-Jakarta font-medium">
                            <Icons icon="LocationMark" />
                            {data.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        {data.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="px-[10px] py-[3px] bg-light-gray2 rounded-[5px]"
                          >
                            <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-gray2">
                              {skill}
                            </p>
                          </div>
                        ))}
                        <Icons icon="SystemIcon" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-Plus-Jakarta font-bold leading-[30.2px] text-blue pt-[28px] pb-2">
                      {data.jobTitle}
                    </h3>
                    <div className="flex gap-[19px] items-center">
                      <div className="flex gap-[7px] items-center">
                        <Icons icon="BriefCase" />
                        <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-gray">
                          {data.jobType}
                        </p>
                      </div>
                      <div className="flex gap-[7px] items-center">
                        <Icons icon="Clock" />
                        <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-gray">
                          {data.time}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-[22px] font-medium font-Plus-Jakarta text-gray2 pt-[14px]">
                      {data.description}
                    </p>
                    <div className="flex items-end justify-between pt-[17px]">
                      <p className="text-base leading-[26px] font-bold text-green font-Plus-Jakarta">
                        {data.salary}
                        <span className=" text-gray">{data.hour}</span>
                      </p>
                      <button className="px-3 py-2 min-h-[30px]   bg-fade-blue hover:bg-green text-green  hover:text-white  border-[1px] duration-300 ease-linear border-transparent hover:border-green flex items-center justify-center  text-xs leading-[12px] font-Plus-Jakarta font-medium  rounded-[4px]">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" flex gap-[9px] items-center mt-[30px]">
                <div className=" numberchangebox duration-300 ease-linear w-[48px] cursor-pointer h-[48px] flex justify-center items-center bg-fade-blue  rounded-[50%] ">
                  <Numberarrow />
                </div>
                <div className=" flex gap-[2px]">
                  <div className=" w-[28px] cursor-pointer h-[28px] rounded-[50%] duration-300 bg-transparent group hover:bg-fade-blue">
                    <p className=" font-Plus-Jakarta group-hover:text-blue text-gray font-medium text-lg leading-[26px] flex justify-center items-center ">
                      1
                    </p>
                  </div>
                  <div className=" w-[28px] cursor-pointer h-[28px] rounded-[50%] duration-300 bg-transparent group hover:bg-fade-blue">
                    <p className=" font-Plus-Jakarta group-hover:text-blue text-gray font-medium text-lg leading-[26px] flex justify-center items-center ">
                      2
                    </p>
                  </div>
                  <div className=" w-[28px] cursor-pointer h-[28px] rounded-[50%] duration-300 bg-transparent group hover:bg-fade-blue">
                    <p className=" font-Plus-Jakarta group-hover:text-blue text-gray font-medium text-lg leading-[26px] flex justify-center items-center ">
                      3
                    </p>
                  </div>
                  <div className=" w-[28px] cursor-pointer h-[28px] rounded-[50%] duration-300 bg-transparent group hover:bg-fade-blue">
                    <p className=" font-Plus-Jakarta group-hover:text-blue text-gray font-medium text-lg leading-[26px] flex justify-center items-center ">
                      4
                    </p>
                  </div>
                  <div className=" w-[28px] cursor-pointer h-[28px] rounded-[50%] duration-300 bg-transparent group hover:bg-fade-blue">
                    <p className=" font-Plus-Jakarta group-hover:text-blue text-gray font-medium text-lg leading-[26px] flex justify-center items-center ">
                      5
                    </p>
                  </div>
                  <div className=" w-[28px] cursor-pointer h-[28px] rounded-[50%] duration-300 bg-transparent group hover:bg-fade-blue">
                    <p className=" font-Plus-Jakarta group-hover:text-blue text-gray font-medium text-lg leading-[26px] flex justify-center items-center ">
                      6
                    </p>
                  </div>
                  <div className=" w-[28px] cursor-pointer h-[28px] rounded-[50%] duration-300 bg-transparent group hover:bg-fade-blue">
                    <p className=" font-Plus-Jakarta group-hover:text-blue text-gray font-medium text-lg leading-[26px] flex justify-center items-center ">
                      7
                    </p>
                  </div>
                </div>
                <div className=" numberchangebox duration-300 ease-linear w-[48px] cursor-pointer h-[48px] flex justify-center items-center bg-fade-blue  rounded-[50%] ">
                  <Numberarrowright />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridSection;
