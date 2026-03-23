import { timeLine } from "@/data/timeLine";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWebHaptics } from "web-haptics/react";

export default function TimeLine() {
  return (
    // Added overflow-x-hidden to prevent scrollbar flickering if animations go slightly off-screen
    <section className="flex flex-col py-3 w-full items-center justify-center gap-2 overflow-x-hidden">
      <Content />
    </section>
  );
}

/* ======================
    CONTENT (STATE OWNER)
====================== */
const Content = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [eventIndex, setEventIndex] = useState(0);

  const dayData = timeLine[activeDay - 1];
  const publicEvents = dayData.events.filter((e) => e.type === "Public");

  useEffect(() => {
    // eslint-disable-next-line
    setEventIndex(0);
  }, [activeDay]);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-6">
      <h2 className="text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl mb-12">Timeline</h2>

      {/* --- ANIMATED DATE CONTAINER --- */}
      <div className="relative h-12 md:h-14 w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${dayData.day}-${dayData.date}`}
            initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-100%", opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}

            className="text-yellow text-4xl md:text-5xl absolute left-0 right-0 mx-auto text-center w-full"
          >
            {dayData.day} - {dayData.date}
          </motion.div>
        </AnimatePresence>
      </div>

      <Feed
        events={publicEvents}
        eventIndex={eventIndex}
        setEventIndex={setEventIndex}
      />

      <TimeBar
        publicEvents={publicEvents}
        activeIndex={eventIndex}
        setEventIndex={setEventIndex}
      />

      <CurrDay activeDay={activeDay} setActiveDay={setActiveDay} />
    </div>
  );
};

/* ======================
    FEED 
====================== */
const Feed = ({ events, eventIndex, setEventIndex }) => {
  const { trigger } = useWebHaptics();
  const event = events[eventIndex];

  if (!event) {
    return <div className="text-gray-400">No public events</div>;
  }

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => {
          trigger("soft");
          setEventIndex(i => Math.max(i - 1, 0));
        }}
        disabled={eventIndex === 0}
        className={`p-4 py-2 rounded-full text-black
            ${eventIndex === 0 ? "bg-text/30" : "bg-text"}`}
      >
        {"<"}
      </button>

      <div className="bg-navy rounded-lg w-75 shrink-0 text-center">
        <div className="p-5 text-white font-semibold">
          {event.event}
        </div>
        <div className="bg-text text-black p-4 rounded-b-lg">
          {event.time} - {event.location}
        </div>
      </div>

      <button
        onClick={() => {
          trigger("soft");
          setEventIndex(i => Math.min(i + 1, events.length - 1));
        }}
        disabled={eventIndex === events.length - 1}
        className={`p-4 py-2 rounded-full text-black
            ${eventIndex === events.length - 1 ? "bg-text/30" : "bg-text"}`}
      >
        {">"}
      </button>
    </div>
  );
};


/* ======================
    TimeLine Bar
====================== */
const TimeBar = ({ publicEvents, activeIndex, setEventIndex }) => {
  return (
    <div className="flex m-25 items-center">
      <div className="w-5 h-5 bg-text rotate-45" />
      <EventObj
        EventList={publicEvents}
        activeIndex={activeIndex}
        setEventIndex={setEventIndex}
      />
      <div className="w-5 h-5 bg-text rotate-45 " />
    </div>
  );
};

const getHourFromTime = (timeStr) => {
  const [time, mod] = timeStr.split(" ");
  let [h] = time.split(":").map(Number);
  if (mod === "PM" && h !== 12)
    h += 12;
  if (mod === "AM" && h === 12)
    h = 0;
  return h;
};

const EventObj = ({ EventList, activeIndex, setEventIndex }) => {
  const { trigger } = useWebHaptics();
  return (
    <div className="relative w-[79vw] h-2 bg-text md:w-[90vw]">
      {EventList.map((event, index) => {
        const hour = getHourFromTime(event.time);
        const left = (hour / 24) * 100;

        const positionLeft =
          EventList.length <= 4
            ? (index === 0 ? left * 0.6 :
              index === 1 ? left * 0.9 :
                index === 2 ? left * 1.25 :
                  left * 1.25)
            : EventList.length <= 7
              ? left
              : index === 0
                ? left * 0.4
                : index === 1
                  ? left * .89
                  : index === 2
                    ? left * 1
                    : index == 3
                      ? left * 1.23
                      : left * 1.3;

        return (
          <button
            key={index}
            onClick={() => {
              trigger("soft");
              setEventIndex(index);
            }}
            className="absolute top-1/2 -translate-y-1/2 group" // Added 'group' for hover effects if needed
            style={{ left: `${positionLeft}%` }}
          >


            <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-text z-10 group-hover:bg-yellow/80
                ${EventList.length <= 7
                ? (index % 2 !== 0
                  ? (index % 4 === 1 ? "-top-full h-5 translate-y-2" : "-bottom-full h-19 -translate-y-1/2 bg-text/50")
                  : (index % 4 === 2 ? "top-full h-3.5 -translate-y-1" : "top-full h-15 -translate-y-1 bg-text/50")
                )
                : (index % 2 !== 0
                  ? (index === 1 ? "-top-full h-1 translate-y-6" // First odd (Index 1)
                    : (index % 4 === 1 ? "-top-full h-20"
                      : index % 6 === 5)

                      ? "-top-full h-20 -translate-y-12 bg-text/50 "
                      : "-top-full h-8 -translate-y-.5 bg-text"
                  )
                  : (index === 0 ? "top-full h-4 -translate-y-1" //First Even (Index 0)
                    : index % 4 === 0 ? "top-full h-15 -translate-y-1 bg-text/50"
                      : (index % 6 === 2 ? "top-full h-2 -translate-y-1" : "top-full h-4 -translate-y-1 bg-text/50")
                  )
                )
              }
                
                ${index === activeIndex
                ? ("bg-yellow")
                : ("bg-text")
              }`}

            />



            {/* --- THE DOT CONTAINER --- */}
            <div className="relative flex items-center justify-center w-6 h-6 z-10 group-hover:scale-150 transition-transform">

              {/* 1. Base Static Dot (Always Visible as Gray) */}
              <div className="w-4 h-4 rounded-full bg-text absolute" />

              {/* 2. Animated Active Dot (Only renders on active index) */}
              {index === activeIndex && (
                <motion.div
                  layoutId="activeEventDot" // This ID makes it slide!
                  className="w-4 h-4 rounded-full bg-yellow absolute z-10"
                  initial={false}
                  animate={{ scale: 1.25 }} // Scale effect
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}
            </div>




            <div
              className={`absolute left-1/2 -translate-x-1/2 text-xs text-text text-center w-32 group-hover:text-yellow/80 group-active:text-yellow
                ${EventList.length <= 7
                  ? (index % 2 !== 0
                    ? (index % 4 === 1 ? "-top-16" : "-top-25")
                    : (index % 4 === 2 ? "top-8" : "top-20")
                  )
                  : (index % 2 !== 0 ? (index === 1 ? "-top-12" // First odd (Index 1)
                    : (index % 4 === 1 ? "-top-20"
                      : index % 6 === 5) ? "-top-30" : "-top-18 text-text"
                  )
                    : (index === 0 ? "top-10" // First Even (Index 0)
                      : index % 4 === 0 ? "top-20"
                        : (index % 6 === 2 ? "top-6" : "top-9"))
                  )
                }
                    
                    ${index === activeIndex
                  ? ("text-yellow")
                  : ("text-text")
                }`}
            >
              {event.event}
              <br />
              <span className="opacity-70">{event.time}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};




/* ======================
    DAY SELECTOR
====================== */
const CurrDay = ({ activeDay, setActiveDay }) => {
  return (
    <div className="flex bg-text p-1 m-2 rounded-4xl gap-2 isolate">
      <Button text="Day 1" day={1} activeDay={activeDay} setActiveDay={setActiveDay} />
      <Button text="Day 2" day={2} activeDay={activeDay} setActiveDay={setActiveDay} />
    </div>
  );
};

/* ======================
    BUTTON
====================== */
const Button = ({ text, day, activeDay, setActiveDay }) => {
  const { trigger } = useWebHaptics();
  return (
    <button
      onClick={() => {
        trigger("soft");
        setActiveDay(day);
      }}
      // 1. Added relative to contain the absolute background
      // 2. Removed bg-colors from here (handled by the motion div now)
      className={`relative text-lg rounded-4xl px-4 py-2 transition-colors duration-200 ${activeDay === day ? "text-text" : "text-black hover:text-black/70"
        }`}
    >
      {/* The Text (z-10 ensures it sits ON TOP of the sliding background) */}
      <span className="relative z-10">{text}</span>

      {activeDay === day && (
        <motion.div
          // Framer detects this ID moving 
          // from one component to another and animates the position/width.
          layoutId="activePill"

          // Style matches your original active state
          className="absolute inset-0 bg-background rounded-4xl"

          // "spring" gives it that liquid/bouncy physics feel
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      )}
    </button>
  );
};
