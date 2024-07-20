import React from "react";
import { useState } from "react";
import { Checksvg } from "./Icons";

const Commoncheckbox = () => {
  const [check, setCheck] = useState(false);
  function handleclick() {
    setCheck(!check);
  }
  return (
    <>
      <div
        className={`${check ? " bg-[#3E8600] border-transparent" : " bg-transparent "} w-[24px] h-[24px] flex justify-center items-center border-[1.5px] border-[#E0E6F6]  rounded-[7px] `}
        onClick={handleclick}
      >
        <span className={`${check ? "block" : " hidden"}`}>
          <Checksvg />
        </span>
      </div>
    </>
  );
};

export default Commoncheckbox;