import Navigation from "../components/Navigation";
import Hero from "../components/Home/Hero";
import CTA from "../components/Home/CTA";
import Section from "../components/Home/Section";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-10" />
      <div className="sm:w-11/12 mb-12 mx-auto">
        <Section />
        <Section2 />
        <Section3 />
      </div>
      <CTA />
    </div>
  );
}
