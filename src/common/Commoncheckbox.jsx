import React from "react";
import { useState } from "react";
import { Checksvg } from "./Icons";

const CommonCheckBox = () => {
  const [check, setCheck] = useState(false);
  function handleclick() {
    setCheck(!check);
  }
  return (
      <div
        className={`${
          check ? " bg-green border-transparent" : " bg-transparent "
        } w-[24px] h-[24px] cursor-pointer flex justify-center items-center border-[1.5px] border-[#E0E6F6]  rounded-[7px] `}
        onClick={handleclick}
      >
        <span className={`${check ? "block" : " hidden"}`}>
          <Checksvg />
        </span>
      </div>
  );
};

export default CommonCheckBox;
