import { timeLine } from "@/data/timeLine";
import { useState,useEffect } from "react";

export default function TimeLine() {
    return (
    <section className="flex flex-col w-full items-center justify-center gap-2">
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
const publicEvents = dayData.events.filter(e => e.type === "Public");

// reset event when day changes
useEffect(() => {
    setEventIndex(0);
}, [activeDay]);

return (
    <div className="flex flex-col w-full items-center justify-center gap-6">
        <div className="text-yellow font-bold text-6xl md:text-7xl">
        Timeline
    </div>

    <div className="text-yellow text-4xl md:text-5xl">
        {dayData.day} - {dayData.date}
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
const event = events[eventIndex];

if (!event) {
    return <div className="text-gray-400">No public events</div>;
}

return (
    <div className="flex gap-4 items-center">
        <button
        onClick={() => setEventIndex(i => Math.max(i - 1, 0))}
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
                {event.time} at {event.location}
            </div>
        </div>

        <button
            onClick={() =>
            setEventIndex(i => Math.min(i + 1, events.length - 1))
        }
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
return (
    <div className="relative w-[79vw] h-2 bg-text">
        {EventList.map((event, index) => {
        const hour = getHourFromTime(event.time);
        const left = (hour / 24) * 100 ;

        return (
            <button
            key={index}
            onClick={() => setEventIndex(index)}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${EventList.length<=7?left
                                :index==0?left*.5
                                :index==1?left*1
                                :index==2?left*1.1
                                :left*1.3
                            }%` }}
            >
            <div className={`w-4 h-4 rounded-full transition
                ${index === activeIndex 
                    ? "bg-yellow scale-125" 
                    : "bg-text"}`}
            />
            <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-text z-10
                ${
                    EventList.length <= 7 
                    ? (index % 2 !== 0 
                        ? (index % 4 === 1 ? "-top-full h-8" : "-bottom-full h-16 -translate-y-1/2 ") 
                        : (index % 4 === 2 ? "top-full h-4" : "top-full h-16")
                    )
                    : (index % 2 !== 0 
                        ? (index === 1 ? "-top-full h-0.5 translate-y-3.5" // First odd (Index 1)
                            : (index % 4 === 1 ? "-top-full h-20"
                            : index % 6 === 5) ? "-top-full h-18 -translate-y-14 bg-text/70" : "-top-full h-8 -translate-y-2.5 bg-text/50" 
                            )
                        : (index===0 ? "top-full h-6 " //First Even (Index 0)
                        :index % 4 === 0 ? "top-full h-16 bg-text/30" 
                        : (index % 6 === 2 ? "top-full h-3" : "top-full h-5")
                        )
                    )
                }`}
            />
            <div
            className={`absolute left-1/2 -translate-x-1/2 text-xs text-text text-center w-32
                ${
                    EventList.length <= 7 
                    ? (index % 2 !== 0 
                        ? (index % 4 === 1 ? "-top-16" : "-top-25") 
                        : (index % 4 === 2 ? "top-8" : "top-20")
                    )
                    :(index % 2 !== 0 ? (index === 1 ? "-top-12" // First odd (Index 1)
                            : (index % 4 === 1 ? "-top-20"
                                : index % 6 === 5) ? "-top-30" : "-top-18 text-text" 
                            ) 
                    : (index===0 ? "top-10" // First Even (Index 0)
                    :index % 4 === 0 ? "top-20" 
                    : (index % 6 === 2 ? "top-6" : "top-9"))
                    )
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
    <div className="flex bg-text p-1 m-2 rounded-4xl gap-2">
        <Button text="Day 1" day={1} activeDay={activeDay} setActiveDay={setActiveDay} />
        <Button text="Day 2" day={2} activeDay={activeDay} setActiveDay={setActiveDay} />
        <Button text="Day 3" day={3} activeDay={activeDay} setActiveDay={setActiveDay} />
    </div>
    );
};

/* ======================
    BUTTON
====================== */
const Button = ({ text, day, activeDay, setActiveDay }) => {
    return (
    <button
        onClick={() => setActiveDay(day)}
        className={`text-lg rounded-4xl px-3 py-1 transition-all duration-200
        ${
            activeDay === day
            ? "bg-background text-text"
            : "bg-transparent text-black"
        }`}
    >
        {text}
    </button>
    );
};
