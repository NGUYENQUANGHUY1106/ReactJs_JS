import React from "react";
import { useEffect } from "react";

const DemoEventListener = () => {
  useEffect(() => {
    // const scrollHandler = () => {
    //   console.log("Scrolling");
    // };
    // document.addEventListener("scroll", scrollHandler);
    // return () => {
    //   document.removeEventListener("scroll",scrollHandler);
    // };
    const resizeHandler = () => {
      console.log("resizeHandler");
    };
    window.addEventListener("resize",resizeHandler);
    return () =>
    {
      window.removeEventListener("resize" ,resizeHandler);
    }
  }, []);
  return <div>DemoEventListener</div>;
};

export default DemoEventListener;
