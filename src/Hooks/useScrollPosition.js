import React, { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
  };
  return scrollPosition;
};

export default useScrollPosition;
