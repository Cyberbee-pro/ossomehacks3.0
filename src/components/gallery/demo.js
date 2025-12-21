import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Gallery image paths
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

export default function GalleryHero() {
  // Reference to the scroll section
  const sectionRef = useRef(null);

  // Track scroll progress within section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Animate container size based on scroll
  const width = useTransform(scrollYProgress, [0.25, 0.75], ["72vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0.25, 0.75], ["40vh", "100vh"]);

  // Animate border radius (rounded → full screen)
  const radius = useTransform(scrollYProgress, [0.25, 0.75], [48, 0]);

  return (
    <section className="bg-background">
      {/* Scroll-controlled section */}
      <motion.section ref={sectionRef} className="relative h-[300vh]">
        
        {/* Title */}
        <div className="relative z-10 pt-20 pb-12 px-2 text-center">
          <h2 className="text-5xl md:text-8xl font-bold font-poppins text-yellow">
            Our Journey So Far
          </h2>
        </div>

        {/* Sticky video container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-background">
          <motion.div
            style={{ width, height, borderRadius: radius }}
            className="relative z-20 overflow-hidden shadow-2xl will-change-transform"
          >
            {/* Background video */}
            <video
              className="object-cover"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "100vw",
                height: "100vh",
              }}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/gallery/journey.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </motion.section>

      {/* Infinite image carousels */}
      <section className="py-36 space-y-4 overflow-hidden">
        <Carousal images={images} direction="left" offset={20} />
        <Carousal images={images} direction="right" offset={-200} />
      </section>
    </section>
  );
}

function Carousal({ images, direction = "left", offset = 0 }) {
  const loopImages = [...images, ...images];

  // Measure one card width
  const firstCardRef = useRef(null);

  // Distance to slide per image in the carousal
  const [slideDistance, setSlideDistance] = useState(0);

  const numImages = images.length;

  // Calculate distance to slideafter first render
  useEffect(() => {
    if (!firstCardRef.current) return;

    const cardWidth = firstCardRef.current.offsetWidth;
    const gap = 24;
    setSlideDistance(cardWidth + gap);
  }, []);

  // Animation keyframes and timing
  const keyframes = [];
  const keyframesTimes = [];

  if (!slideDistance) return null;

  for (let i = 0; i <= numImages; i++) {
    // Calculate x-position per step
    const position =
      direction === "left" ? -i * slideDistance : -slideDistance * (numImages - i);

    // Hold position briefly before moving
    keyframes.push(position, position);

    const timePerImage = 1 / numImages;
    const pauseDuration = 0.4;
    const moveDuration = 0.6;

    if (i === 0) {
      keyframesTimes.push(0, timePerImage * pauseDuration);
    } else {
      const prevTime =keyframesTimes[keyframesTimes.length - 1];
     keyframesTimes.push(
        prevTime + timePerImage * moveDuration,
        prevTime + timePerImage * moveDuration + timePerImage * pauseDuration
      );
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Horizontal offset adjustment */}
      <div style={{ transform: `translateX(${offset}px)` }}>
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: keyframes }}
          transition={{
            duration: numImages * 6,
            ease: "easeInOut",
            times: keyframesTimes,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* Render image cards */}
          {loopImages.map((src, i) => (
            <div
              key={`${direction}-${i}`}
              ref={i === 0 ? firstCardRef : null} // Measure first card only
              className="relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[435px] aspect-video overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              <Image
                src={src}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 320px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
