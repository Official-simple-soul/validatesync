import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 200); // Show the button when user has scrolled 200 pixels
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 bg-pri text-white rounded-md shadow-3 hover:bg-priLight hover:text-pri ${
        showButton ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
