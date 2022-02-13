import React from "react";
import { useMediaQuery } from "react-responsive";
import Lottie from "react-lottie";
import animationData from "../../assets/tree.json";

const Feature10 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const defautOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="xl:mx-auto xl:container my-3 hover:bg-gray-100 hover:shadow-2xl hover:rounded-lg">
      <div className="lg:px-12 md:px-6 px-4 md:py-2 py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="w-full flex flex-col  justify-between sm:flex-row md:w-11/12 items-center md:py-8 p-2">
            {!isMobile ? (
              <div className="flex-1">
                <Lottie options={defautOptions} height={300} width={300} />
              </div>
            ) : (
              ""
            )}
            <div className="w-11/12 sm:w-1/2">
              <p className="md:text-3xl lg:text-5xl text-3xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">
                Why Are We Doing This?
              </p>
              <p className="text-xl sm:text-2xl leading-7 text-gray-600 md:pb-10 pb-8">
                Trees play an important role on our planet, we need to take a
                step before its too late to save Earth. It is high time for us
                to do something for our planet and we can reverse climate
                change.
              </p>
            </div>
            {isMobile ? (
              <div className="flex-1">
                <Lottie options={defautOptions} height={300} width={300} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature10;
