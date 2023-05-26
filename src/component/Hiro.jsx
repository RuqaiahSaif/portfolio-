import React from "react";
import Typical from "react-typical";
import image from "../assets/images/undraw_programmer_re_owql.svg";
function Hiro() {
  return (
    <div className="bg-white dark:bg-[url('../src/assets/images/bg_night.jpg')] text-black dark:text-white h-1/2  py-20 flex font-Rampart">
      <div class="container mx-auto px-4 grid md:grid-cols-2 md:gap-56 sm:grid-cols-1 sm:gap-10  ">
        <div class="flex flex-wrap flex-col ">
          <span className="animate-waving-hand text-5xl p-7 text-center">
            👋🏻
          </span>

          <span className="md:text-5xl sm:text-2xl py-4 font-Rampart">
            I'm Ruqaiah Saif
          </span>

          <strong className="text-primary-400 py-4 md:text-2xl sm:text-xl">
            <Typical
              steps={[" Full Stack Devloper", 3000]}
              wrapper="p"
              loop={Infinity}
            />
          </strong>
          <span className="md:text-xl sm:text-2xl py-4 font-Rampart">
            "Strive to build things that make a difference!"
          </span>
        </div>

        <img src={image} className="h-80 w-80  mt-10" />
      </div>
    </div>
  );
}

export default Hiro;
