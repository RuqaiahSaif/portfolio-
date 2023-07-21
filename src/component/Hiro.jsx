import React from "react";
import image from "../assets/images/undraw_programmer_re_owql.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/hiro.css";
function Hiro() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white dark:bg-[url('../src/assets/images/bg_night.jpg')] text-black dark:text-white h-1/2  py-20 flex font-Rampart">
      <div class="container mx-auto px-4 grid md:grid-cols-2 md:gap-16 sm:grid-cols-1 sm:gap-10  ">
        <div class="flex flex-wrap flex-col ">
          <span className="md:text-5xl sm:text-2xl py-4 font-Rampart">
            I'm Ruqaiah Saif
            <span className=" text-5xl p-7 text-center">
              👋🏻
            </span>
          </span>
          <div class="typewriter">
            <p class="typed">Full Stack Devloper</p>
          </div>
          <span className="md:text-xl sm:text-2xl py-4 font-Rampart">
            "Strive to build things that make a difference!"
          </span>
        </div>
        <div>
          <img
            src={image}
            alt="hiro"
            className="h-80 w-80"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
    </div>
  );
}

export default Hiro;
