import React from "react";

export default function index() {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-16 py-9 sm:mb-64">
        <div className="relative rounded-md">
          <img
            src="https://i.imgur.com/ORwdzxR.jpg"
            alt="city view"
            className="w-full h-auto rounded-md  object-center object-fill absolute sm:block hidden"
          />
          <img
            src="https://i.ibb.co/LQpxBsc/mobile.png"
            alt="city view"
            className="w-full h-full rounded-md absolute object-center object-fill sm:hidden"
          />
          {/* <div className="text-xl relative  w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
            <div className="bottom-0 left-0">
              <button className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Explore Trees
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
