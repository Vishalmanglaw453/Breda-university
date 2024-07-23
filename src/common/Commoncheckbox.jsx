import React from "react";
import { useState } from "react";
import { CheckIcons } from "./Icons";

const CommonCheckBox = () => {
  const [check, setCheck] = useState(false);
  function HANDLE_CLICK() {
    setCheck(!check);
  }
  return (
    <>
      <div
        className={`${
          check ? " bg-green border-transparent" : " bg-transparent "
        } w-[24px] h-[24px] cursor-pointer flex justify-center items-center border-[1.5px] border-[#E0E6F6]  rounded-[7px] `}
        onClick={HANDLE_CLICK}
      >
        <span className={`${check ? "block" : " hidden"}`}>
          <CheckIcons />
        </span>
      </div>
    </>
  );
};

export default CommonCheckBox;
