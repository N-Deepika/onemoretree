import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <div className="mx-auto w-11/12">
      <Image src="https://i.imgur.com/ORwdzxR.jpg" height={400} width={1520} />
    </div>
    // <div>
    //   <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-16 py-9 sm:mb-64">
    //     <div className="relative rounded-md">
    //       <img
    //         src="https://i.imgur.com/ORwdzxR.jpg"
    //         alt="city view"
    //         className="w-full h-auto rounded-md  object-center object-fill absolute sm:block hidden"
    //       />
    //       <img
    //         src="https://i.ibb.co/LQpxBsc/mobile.png"
    //         alt="city view"
    //         className="w-full h-full rounded-md absolute object-center object-fill sm:hidden"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
