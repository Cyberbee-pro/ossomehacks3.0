import Themes from "@/components/themes/themes";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import TimeLine from "@/components/timeLine/timeLine";
import About from "@/components/about/about";
import Sponsors from "@/components/sponsors/sponsors";
import ContactSection from "@/components/contactUs/contactUs";
import MapBox from "@/components/timeLine/mapbox";
import FAQSection from "@/components/faq/FAQSection";
import Gallery from "@/components/gallery/gallery";

export default function HomePage() {
  return (
    <>
      <section id="home" className="">
        <Hero />
      </section>

      <section id="about" className="pt-20">
        <About />
      </section>

      <section id="themes" className="pt-14">
        <Themes />
      </section>

      <section id="timeline" className="pt-20">
        <TimeLine />
        <MapBox />
      </section>

      <section id="gallery" className="pt-20">
        <Gallery />
      </section>

      <section id="sponsors" className="pt-8">
        <Sponsors />
      </section>

      <section id="faq" className="pt-20">
        <FAQSection />
      </section>

      <section id="contact" className="pt-20">
        <ContactSection />
      </section>
    </>
  );
}
