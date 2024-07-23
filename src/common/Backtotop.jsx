import React, { useState, useEffect } from "react";
import { Backtotoparrow } from "./Icons";

const Backtotop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const HANDLEScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", HANDLEScroll);
    return () => {
      window.removeEventListener("scroll", HANDLEScroll);
    };
  }, []);
  const SCROLL_TO_TOP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <button
          className="fixed size-12 cursor-pointer hover:shadow-btn_shadow  ease-linear flex  justify-center items-center bottom-10 right-6  bg-green text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          onClick={SCROLL_TO_TOP}
        >
          <Backtotoparrow />
        </button>
      )}
    </>
  );
};

export default Backtotop;
