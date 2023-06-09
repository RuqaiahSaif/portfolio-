import React from "react";
// import '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../style/contact.css";
import "animate.css";
function Contact() {
  return (
    <div
      className="bg-white dark:bg-[url('../src/assets/images/bg_night.jpg')] text-black dark:text-white h-1/2 font-Rampart py-20 "
      id="contact"
    >
      <div className="container  mx-auto p-x flex flex-col justify-center items-center">
        <p className="md:text-5xl p-7 sm:text-2xl text-primary-400">
          FIND ME ON
        </p>
        <div className="grid md:grid-cols-2 md:gap-16 sm:grid-cols-1 sm:gap-10">
          <div>
            <p className="text-xl font-Rampart leading-10">
              Don't let your ideas remain just that.Let's work together to BRING
              YOUR NEXT PROJECT TO LIFE!
              <span className="text-3xl">&#10024;</span>
            </p>
          </div>
          <div>
            {/* <p className="text-center">
              Feel free to <span className="text-primary-400">connect</span>
              with me
            </p> */}
            <div class="grid grid-cols-2  gap-2 md:gap-4  p-5 relative r">
              <nav class="menu">
                <input type="checkbox" class="menu-toggler" />
                <i class="fa-solid fa-phone-volume text-3xl animate-bounce"></i>
                {/* <label for="menu-toggler"></label> */}

                <ul>
                  <li class="menu-item">
                    <a
                      href="https://www.linkedin.com/in/ruqaiah-saif-086b8a24b/"
                      className="bg-primary-400 hover:opacity-50"
                    >
                      <p>
                        <i class="fa-brands fa-whatsapp"></i>
                      </p>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="#https://www.linkedin.com/in/ruqaiah-saif-086b8a24b/"
                      className="bg-primary-400 hover:opacity-50"
                    >
                      <p>
                        <i class="fa-brands fa-linkedin"></i>
                      </p>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://github.com/RuqaiahSaif"
                      className="bg-primary-400 hover:opacity-50"
                    >
                      <p>
                        <i class="fa-brands fa-github"></i>
                      </p>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.linkedin.com/in/ruqaiah-saif-086b8a24b/"
                      className="bg-primary-400 hover:opacity-50"
                    >
                      <p>
                        <i class="fa-brands fa-facebook"></i>
                      </p>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.linkedin.com/in/ruqaiah-saif-086b8a24b/"
                      className="bg-primary-400 hover:opacity-50"
                    >
                      <p>
                        <i class="fa-brands fa-instagram"></i>
                      </p>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.linkedin.com/in/ruqaiah-saif-086b8a24b/"
                      className="bg-primary-400 hover:opacity-50"
                    >
                      <p>
                        <i class="fa-regular fa-envelope"></i>
                      </p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* <i class="fa-brands fa-linkedin rounded-full text-center w-5 h-5 bg-white text-black"></i>

              <i class="fa-brands fa-github rounded-full  w-5 h-5 bg-white text-black text-center"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
