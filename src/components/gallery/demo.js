import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const images = [
  "/gallery/DSC_0076.JPG",
  "/gallery/DSC_0083.JPG",
  "/gallery/IMG_2008.jpg",
  "/gallery/IMG_2025.jpg",
  "/gallery/IMG_4799 (1).JPG",
  "/gallery/IMG_4850.JPG",
  "/gallery/IMG_4869.JPG",
  "/gallery/IMG_4879.JPG",
];

export default function Gallery() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  const [scale, setScale] = useState(0.5);
  const [minHeight, setMinHeight] = useState(0);

  const baseSize = useRef({ w: 0, h: 0 });

  useEffect(() => {
    if (!videoRef.current) return;

    const updateMetrics = () => {
      if (videoRef.current) {
        baseSize.current = {
          w: videoRef.current.offsetWidth,
          h: videoRef.current.offsetHeight,
        };
      }
    };

    const handleScroll = () => {
      if (!videoRef.current || !containerRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const {innerHeight: vh, innerWidth: vw} = window;

      if (rect.top < -vh || rect.top > vh) return;

      const videoCenter = rect.top + rect.height/2;
      const centerOffset = (vh/2) - videoCenter + (vh/2) - 50;
      const progress = clamp(centerOffset / (vh*0.5), 0, 1);

      const currentBase = baseSize.current;
      const maxScale = Math.max(vw/currentBase.w, vh/currentBase.h);

      setScale(0.5 + progress * (maxScale - 0.5));
      setMinHeight(progress *100);
    };

    updateMetrics();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateMetrics);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMetrics);
    };
}, []);

return (
    <section className="bg-background overflow-hidden">
      <div className="pt-24 pb-12">
        <h2 className="text-center text-5xl md:text-8xl font-bold text-yellow">
          Our Journey So Far
        </h2>
      </div>

      <div
        ref={containerRef}
        style={{ minHeight: `${minHeight}vh` }}
        className="mt-4 flex items-center justify-center transition-[min-height] duration-500 ease-out">
        <div
          ref={videoRef}
          style={{ transform: `scale(${scale})` }}
          className="w-[70vw] origin-center transition-transform duration-500 ease-out">
          <video className="w-full rounded-2xl shadow-2xl"
            autoPlay muted loop playsInline>
            <source src="/gallery/journey.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="py-28 space-y-12">
        <Carousal direction="left" />
        <Carousal direction="right" />
      </div>
    </section>
  );
}

function Carousal({ direction }) {
  return (
    <div className="relative overflow-hidden">
      <div className={`flex gap-6 w-max ${direction === "left" ? "scroll-left" : "scroll-right"}`}
        style={{ animationDuration: "40s" }}>
        {[...images, ...images].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="Gallery"
            width={288}
            height={176}
            sizes="288px"
            className="w-90 h-50 object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}