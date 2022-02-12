import React from "react";
import Link from "next/link";

const Hero3 = () => {
  return (
    <div className="dark:bg-gray-200">
      <div className="mx-auto w-full">
        <div className="relative">
          <img
            src="https://i.imgur.com/jhykePn.png"
            alt="A work table with house plants"
            className="w-full h-full hidden lg:block"
          />
          <img
            src="https://i.imgur.com/jhykePn.png"
            alt="A work table with house plants"
            className="hidden sm:block lg:hidden w-full h-full"
          />
          <img
            src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png"
            alt="A work table with house plants"
            className="sm:hidden w-full h-full"
          />
          <div className="absolute h-full top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
            <div className="my-auto">
              <h1 className="text-4xl mb-6 sm:text-5xl  lg:text-7xl font-semibold text-gray-800 sm:w-8/12">
                Act Before Its Too Late
              </h1>
              <p className="text-xl bg-black px-3 py-1 text-white sm:text-2xl inline sm:w-8/12">
                &quot;TREES ARE GREEN GOLD&quot;
              </p>
              <p className="text-xl leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-5/12">
                Trees are a precios Natural Resource, and we must value them and
                treat them with care.
              </p>
              <div className="my-6">
                <Link href="/explore">
                  <a className="hidden sm:inline bg-gray-800 rounded-lg py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                    Explore
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
            Explore
          </button>
        </div>
      </div>
    </div>
    // <>
    //   <div>
    //     <div>
    //       <div><img src="" alt="Tree Image" /></div>
    //       <div>
    //         <div>Act before its too late</div>
    //         <div>Trees are green gold</div>
    //         <div>
    //           Trees are precious Natural Resource, and we must value them and
    //           treat them with care.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Hero3;
