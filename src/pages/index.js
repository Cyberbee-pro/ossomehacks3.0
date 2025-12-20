import Themes from "@/components/themes/themes";
import Image from "next/image";
import About from "@/components/about/about";
import Sponsors from "@/components/sponsors/sponsors";
import ContactSection from "@/components/contactUs/contactUs";
import MapBox from "@/components/timeLine/mapbox";

export default function HomePage() {
  return (
    <>
      <section id="home" className="min-h-screen pt-32">
        {}
      </section>

      <section id="themes" className="min-h-screen pt-32">
        <Themes />
      </section>

      <section id="timeline" className="min-h-screen pt-32">
        <MapBox />
      </section>

      <section id="gallery" className="min-h-screen pt-32">
        {}
      </section>

      <section id="faqs" className="min-h-screen pt-32">
        {}
      </section>
    </>
  );
}
