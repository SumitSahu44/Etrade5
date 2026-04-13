import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har baar jab 'pathname' (URL) badlega, scroll top pe chala jayega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" bhi kar sakte ho, par B2B ke liye instant best hai
    });
  }, [pathname]);

  return null; // Yeh component kuch dikhayega nahi, bas logic chalayega
};

export default ScrollToTop;
