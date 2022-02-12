import Navigation from "../components/Navigation";
import Hero from "../components/Home/Hero";
import Feature from "../components/Home/Feature";
import CTA from "../components/Home/CTA";
import Section from "../components/Home/Section";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";

export default function Home() {
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
    </div>
  );
}
