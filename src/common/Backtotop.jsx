import React, { useState, useEffect } from "react";
import { BackToTopArrow } from "./Icons";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const HANDLE_SCROLL = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", HANDLE_SCROLL);
    return () => {
      window.removeEventListener("scroll", HANDLE_SCROLL);
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
          className="fixed size-12 cursor-pointer hover:shadow-btn_shadow  ease-linear flex  justify-center items-center bottom-10 right-6  bg-green text-white p-3 rounded-full shadow-md hover:bg-Regal_Blue-700 transition duration-300"
          onClick={SCROLL_TO_TOP}
        >
          <BackToTopArrow />
        </button>
      )}
    </>
  );
}

export default BackToTop;