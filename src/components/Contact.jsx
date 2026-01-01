import React from "react";
import Spline from "@splinetool/react-spline";

const Contact = () => {
  return (
    <div id="contact" className="lg:h-[100vh] py-20 md:py-0 flex flex-col lg:flex-row">
      <div className="lg:w-full h-[60vh] md:h-full ">
        <Spline scene="https://prod.spline.design/dL4AfSmGcFrZe6B1/scene.splinecode" />
      </div>
    </div>
  );
};

export default Contact;