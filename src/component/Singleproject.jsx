import React from "react";

function Singleproject({ projectImage, name, gitLink, proLink, tools }) {
  // const mylink = gitLink;

  return (
    <>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full group font-Rampart">
        <div class="border-2 border-gray-600 rounded-lg transform transition duration-500 hover:scale-110">
          <img
            class="h-60 w-full object-cover aspect-square"
            src={projectImage}
            alt=""
          />
          <div class="absolute h-full w-full bg-black/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex flex-col">
              <div class="font-bold text-xl mb-2 text-white ">{name}</div>

              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <a href={gitLink}>
                    <i class="fa-brands fa-github"></i>
                  </a>
                </span>

                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <a href={proLink}>
                    <i class="fa-solid fa-link"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="px-6 pt-4 pb-2">
            {tools.map((tool) => {
              return (
                <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold dark:text-white text-black  mr-2 mb-2">
                  #{tool}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Singleproject;
