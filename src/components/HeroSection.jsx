import React from "react";
import { useState } from "react";
import Icons from "../common/Icons";
import SearchIcon from "../assets/images/webp/SearchIcon.webp";
import TheOffice from "../assets/images/webp/UndrawInTheOffice.webp";
import Sketching from "../assets/images/webp/UndrawLearningSketching.webp";
const HeroSection = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("Industrie");
  const [selectedLocation, setSelectedLocation] = useState("Locatie");

  const TOGGLE_DROPDOWN = (dropdown) => {
    setActiveDropdown(dropdown === activeDropdown ? "" : dropdown);
  };

  const HANDLE_INDUSTRY_CHANGE = (option) => {
    setSelectedIndustry(option);
    setActiveDropdown("");
  };

  const HANDLE_LOCATION_CHANGE = (option) => {
    setSelectedLocation(option);
    setActiveDropdown("");
  };

  return (
    <section>
      <div id="home" className="container mx-auto pt-[29px]">
        <div className="bg-Selago relative z-0 rounded-[16px] w-full px-4 min-h-[193px] pb-[33px] lg:pb-[67px]">
          <img
            src={TheOffice}
            alt="TheOffice"
            className="absolute bottom-0 z-0 hidden xl:block left-0 2xl:left-5 opacity-65 max-w-[200px] 2xl:max-w-[232px]"
          />
          <img
            src={Sketching}
            alt="Sketching"
            className="absolute bottom-0 z-0 hidden xl:block right-2 2xl:right-3 opacity-65 max-w-[180px] 2xl:max-w-[213px]"
          />
          <h1 className="text-2xl leading-[30.2px] md:text-3xl md:leading-[35.2px] font-plus_jakarta text-orange text-center font-bold pt-[33px] md:pt-[25px]">
            312 vacatures <span className="text-Regal_Blue">beschikbaar</span>
          </h1>
          <p className="max-w-[929px] mx-auto text-sm font-plus_jakarta text-center font-medium leading-[22px] pt-[10px] pb-6 text-Lynch">
            Ben je op zoek naar een uitdagende stage? Bij BUas bieden we
            inspirerende en leerzame stageplekken aan. Of je nu een meewerkstage
            of een onderzoeksstage zoekt, wij hebben iets voor jou! Onze
            hogeschool staat bekend om zijn internationale karakter en betrokken
            community. Doe praktijkervaring op, ontwikkel je vaardigheden en
            maak deel uit van ons enthousiaste team.
          </p>
          <div className="flex flex-col shadow-[0px_37px_60px_-15px_#323B4F1A] md:flex-row p-5 items-center md:py-[7px] md:ps-[19px] md:pe-2 max-w-[726px] mx-auto lg:min-h-[67px] bg-white border border-[#E0E6F6] rounded-[8px]">
            <div className="md:pe-[37.5px] w-full border-b md:border-b-0  max-w-[576px] lg:max-w-[147px] md:pb-0 pb-[15px] md:border-r-[1.4px] border-Periwinkle_Gray">
              <div className="relative">
                <button
                  className="flex items-center gap-[18px] w-full justify-between text-sm font-plus_jakarta font-medium leading-[22px] text-River_Bed"
                  onClick={() => TOGGLE_DROPDOWN("industry")}
                >
                  <span className="flex items-center gap-[7px]">
                    <Icons icon="Industrie" />
                    {selectedIndustry}
                  </span>
                  <Icons icon="DropdownIcon" />
                </button>
                {activeDropdown === "industry" && (
                  <ul className="absolute bg-white shadow-md py-2 z-10">
                    <li>
                      <a
                        className="block px-4 py-1 text-sm font-plus_jakarta font-medium leading-[22px] text-River_Bed"
                        href="#"
                        onClick={() => HANDLE_INDUSTRY_CHANGE("Option1")}
                      >
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-1 text-sm font-plus_jakarta font-medium leading-[22px] text-River_Bed"
                        href="#"
                        onClick={() => HANDLE_INDUSTRY_CHANGE("Option2")}
                      >
                        Option 2
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="md:pe-[28.5px] max-w-[576px] lg:max-w-[170px] w-full justify-between pt-[28px] pb-[14px] md:pb-0 md:pt-0 md:ps-[19px] border-b md:border-b-0 md:border-r-[1.4px] border-Periwinkle_Gray">
              <div className="relative">
                <button
                  className="flex w-full justify-between items-center gap-[28.5px] text-sm font-plus_jakarta font-medium leading-[22px] text-River_Bed"
                  onClick={() => TOGGLE_DROPDOWN("location")}
                >
                  <span className="flex items-center gap-[7px]">
                    <Icons icon="Locatie" />
                    {selectedLocation}
                  </span>
                  <Icons icon="DropdownIcon" />
                </button>
                {activeDropdown === "location" && (
                  <ul className="absolute bg-white shadow-md py-2 z-10">
                    <li>
                      <a
                        className="block px-4 py-1 text-sm font-plus_jakarta font-medium leading-[22px] text-River_Bed"
                        href="#"
                        onClick={() => HANDLE_LOCATION_CHANGE("China")}
                      >
                        China
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-1 text-sm font-plus_jakarta font-medium leading-[22px] text-River_Bed"
                        href="#"
                        onClick={() => HANDLE_LOCATION_CHANGE("USA")}
                      >
                        USA
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="flex items-center  max-w-[576px] pt-7 pb-[26px] md:pt-0 md:pb-0 gap-[10px] md:ps-5 w-full md:pe-4">
              <Icons icon="Zoekwoorden" />
              <input
                type="text"
                placeholder="Zoekwoorden..."
                required
                className="text-sm font-plus_jakarta leading-[22px] text-River_Bed font-medium w-full outline-none border-0 placeholder:text-River_Bed"
              />
            </div>
            <button className="flex items-center duration-300 hover:shadow-btn_shadow ease-linear justify-start sm:justify-center w-full px-5 gap-[11px] bg-green py-3 lg:min-h-[53px] max-w-[576px] md:max-w-[122px] rounded-[8px] text-white text-sm leading-[22px] font-plus_jakarta font-medium">
              <img src={SearchIcon} alt="SearchIcon" />
              Zoeken
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
