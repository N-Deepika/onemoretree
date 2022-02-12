import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/tree.json";

const Feature10 = () => {
  const defautOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="xl:mx-auto hover:bg-gray-100 xl:container hover:shadow-2xl hover:rounded-lg">
      <div className="lg:px-12 md:px-6 px-4 md:py-2 py-8">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 md:py-8 py-6">
            {/* <img
              src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/luxe2.png"
              alt="bag"
              className="lg:w-full h-full object-cover object-center w-full"
            /> */}
            <Lottie options={defautOptions} height={300} width={300} />
          </div>
          <div className="lg:w-1/2 lg:pl-12 lg:pr-24 p-6">
            <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">
              Why are we doing this?
            </p>
            <p className="text-md leading-5 text-gray-600 md:pb-10 pb-8">
              Trees play an important role on our planet, we need to take a step
              before its too late to save Earth. It is high time for us to do
              something for our planet and we can reverse climate change.
            </p>
            <div className="md:block flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature10;
