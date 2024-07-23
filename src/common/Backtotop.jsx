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
  const SCROLLToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <button
          className="fixed size-12 cursor-pointer hover:shadow-[-3px_3px_37px_8px_rgba(62,134,0,1)] duration-300 ease-linear flex  justify-center items-center bottom-10 right-10  bg-green text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          onClick={SCROLLToTop}
        >
          <Backtotoparrow />
        </button>
      )}
    </>
  );
};

export default Backtotop;
