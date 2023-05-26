import React from "react";
// import '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Contact() {
  return (
    <div
      className="bg-white dark:bg-[url('../src/assets/images/bg_night.jpg')] text-black dark:text-white h-1/2 font-Rampart py-20 "
      id="contact"
    >
      <div className="container p-x flex flex-col justify-center items-center">
        Don't let your ideas remain just that. Let's work together to BRING YOUR
        NEXT PROJECT TO LIFE!
        <p className="md:text-5xl p-7 sm:text-2xl text-primary-400">
          FIND ME ON
        </p>
        <p>
          Feel free to <span className="text-primary-400">connect</span> with me
        </p>
        <div class="grid grid-cols-2  gap-2 md:gap-4  p-5">
          <i class="fa-brands fa-linkedin rounded-full text-center w-5 h-5 bg-white text-black"></i>

          <i class="fa-brands fa-github rounded-full  w-5 h-5 bg-white text-black text-center"></i>
        </div>
      </div>
    </div>
  );
}

export default Contact;
