import React, { useState } from "react";
import image from "../assets/images/image2.png";
import Switcher from "./Switcher";

import { HashLink as Link } from "react-router-hash-link";
import "../style/nav.css";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="dark:bg-[url('../src/assets/images/bg_night.jpg')] bg-white text-black dark:text-white font-Rampart">
      <nav class="container mx-auto px-4">
        <div className="shadow-md w-full ">
          <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
            <img
              src={image}
              class="sm:w-20 sm:h-10 h-10 w-20 "
              alt="Flowbite Logo"
            />

            <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden flex justify-between ">
              <ion-icon
                name={open ? "close" : "menu"}
                onClick={() => setOpen(!open)}
              ></ion-icon>

              <Switcher />
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 dark:bg-[url('../src/assets/images/bg_night.jpg')] bg-white  ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              <li className="md:ml-8 text-xl md:my-0 my-7 text-center">
                <Link
                  to="#skills"
                  smooth
                  className="text-gray-700 rounded  md:hover:bg-transparent md:border-0 hover:text-primary-400 md:p-0 dark:text-white   text-xl duration-500"
                >
                  Skills
                </Link>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7 text-center">
                <Link
                  to="#projects"
                  smooth
                  className="text-gray-700 rounded  md:hover:bg-transparent md:border-0 hover:text-primary-400 md:p-0 dark:text-white    text-xl duration-500"
                >
                  Projects
                </Link>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7 text-center">
                <Link
                  to="#contact"
                  smooth
                  className="text-gray-700 rounded  md:hover:bg-transparent md:border-0 hover:text-primary-400 md:p-0 dark:text-white dark:hover:text-primary-400  dark:hover:text-white text-xl duration-500"
                >
                  Contact
                </Link>
              </li>
              <li className="md:ml-8 text-xl md:my-0 my-7 md:block hidden">
                <Switcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
