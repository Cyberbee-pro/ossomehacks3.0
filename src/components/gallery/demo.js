import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  // OPTIONAL: Mute state (enable if mute/unmute button is used)
  const [isMuted, setIsMuted] = useState(true);

  // Reference to the scroll section
  const sectionRef = useRef(null);

  // Check if video is at least 60% visible
  const isInView = useInView(videoContainerRef, {
    amount: 0.6, // 60% visible
  });

  // Play / pause video strictly based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {
        console.log("Video autoplay was prevented");
      });
    } else {
      video.pause();
    }
  }, [isInView]);


  // OPTIONAL: Handle mute/unmute (enable if button is included)
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    video.muted = newMutedState;
  };


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
            ref={videoContainerRef}
            style={{ width, height, borderRadius: radius }}
            className="relative z-20 overflow-hidden shadow-2xl will-change-transform"
          >
            {/* Video element */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              controls={false}
            >
              <source src="/gallery/journey.mp4" type="video/mp4" />
            </video>

            {/* OPTIONAL: Mute / Unmute button (commented for review) */}

            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-30 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ?
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 9h4l5-5v16l-5-5H3zm13.59 3L14 9.41L15.41 8L18 10.59L20.59 8L22 9.41L19.41 12L22 14.59L20.59 16L18 13.41L15.41 16L14 14.59z" /></svg> :
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5 6.5v11H1v-11zm2 11.71l8 4.5V1.29l-8 4.5zM21.581 7.78l-.602-.799l-1.596 1.206l.602.798a5 5 0 0 1-.002 6.03l-.603.797l1.595 1.206l.603-.797a7 7 0 0 0 .003-8.442" /><path fill="currentColor" d="m18.789 9.889l-.603-.798l-1.596 1.205l.603.798a1.5 1.5 0 0 1 0 1.809l-.604.797l1.595 1.207l.603-.798a3.5 3.5 0 0 0 .002-4.22" /></svg>}
            </button>

          </motion.div>
        </div>
      </motion.section>

      {/* Infinite image carousels */}
      <section className="py-36 space-y-4 overflow-hidden">
        <Carousel images={images} direction="left" offset={20} />
        <Carousel images={images} direction="right" offset={-200} />
      </section>
    </section>
  );
}

function Carousel({ images, direction = "left", offset = 0 }) {
  const loopImages = [...images, ...images];

  // Measure one card width
  const firstCardRef = useRef(null);

  // Distance to slide per image in the carousel
  const [slideDistance, setSlideDistance] = useState(0);

  const numImages = images.length;

  // Calculate distance to slide after first render
  useEffect(() => {
    if (!firstCardRef.current) return;

    const cardWidth = firstCardRef.current.offsetWidth;
    const gap = 24;
    setSlideDistance(cardWidth + gap);
  }, []);

  // Animation keyframes and timing
  const keyframes = [];
  const keyframeTimes = [];

  const shouldAnimate = slideDistance > 0;

  for (let i = 0; i <= numImages; i++) {
    // Calculate x-position per step
    const position =
      direction === "left"
        ? -i * slideDistance
        : -slideDistance * (numImages - i);

    // Hold position briefly before moving
    keyframes.push(position, position);

    const timePerImage = 1 / numImages;
    const pauseDuration = 0.4;
    const moveDuration = 0.6;

    if (i === 0) {
      keyframeTimes.push(0, timePerImage * pauseDuration);
    } else {
      const prevTime = keyframeTimes[keyframeTimes.length - 1];
      keyframeTimes.push(
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
          animate={shouldAnimate ? { x: keyframes } : { x: 0 }}
          transition={{
            duration: numImages * 6,
            ease: "easeInOut",
            times: keyframeTimes,
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
