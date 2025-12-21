import Themes from "@/components/themes/themes";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import TimeLine from "@/components/timeLine/timeLine";
import About from "@/components/about/about";
import Sponsors from "@/components/sponsors/sponsors";
import ContactSection from "@/components/contactUs/contactUs";
import MapBox from "@/components/timeLine/mapbox";
import FAQSection from "@/components/faq/FAQSection";
import Gallery from "@/components/gallery/demo";

export default function HomePage() {
  return (
    <>
      <section id="home" className="">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="themes">
        <Themes />
      </section>
      {/* TODO: TIMELINE COMPONENT IS CREATING MARGING ISSUE */}
      <section id="timeline">
        <TimeLine />
        <MapBox />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
