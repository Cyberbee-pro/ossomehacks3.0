import Themes from "@/components/themes/themes";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/about";
import Sponsors from "@/components/sponsors/sponsors";
import ContactSection from "@/components/contactUs/contactUs";
import MapBox from "@/components/timeLine/mapbox";

export default function Home() {
  return (
    <>
      <About />
      <Themes />
      <Sponsors />
      <MapBox />
      <ContactSection />
      <Hero />
      {/* <div className="font-poppins text-textColor space-y-2">
        <p className="font-light text-yellow">Light (300)</p>
        <p className="font-normal text-text">Regular (400)</p>
        <p className="font-medium text-navy">Medium (500)</p>
        <p className="font-semibold text-black-custom">Semi Bold (600)</p>
        <p className="font-bold text-green-custom">Bold (700)</p>
      </div>
      </div> */}
    </>
  );
}
