import Navigation from "../components/Navigation";
import Hero from "../components/Home/Hero";
import Feature from "../components/Home/Feature";
import CTA from "../components/Home/CTA";
import Section from "../components/Home/Section";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Form from "../components/FormWithCompany/Form";
import animationData from "../assets/tree5.json";
import Lottie from "react-lottie";

export default function Home() {
  const defautOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Hero />
      <div className="mt-28" />
      {/* <Feature /> */}
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <CTA />
      <div className="w-4/5 my-16 relative bg-gray-100 rounded-xl px-10 py-5 mx-auto">
        <div className="text-5xl text-center mb-8 pt-2 border-b-2 border-gray-400 pb-6">
          Register with Us
        </div>
        <div className="flex flex-col sm:flex-row">
          <br />
          <div className="w-1/2 relative z-30">
            <div className="flex justify-center items-center flex-col">
              <div className=" opacity-90 -z-20">
                <Lottie options={defautOptions} height={600} width={600} />
              </div>
            </div>
          </div>
          <div className="w-1/2 ml-auto">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
