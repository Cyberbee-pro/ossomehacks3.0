'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import Image from 'next/image';

gsap.registerPlugin(ScrambleTextPlugin);

export default function AnimatedHacks() {
    const hacksLanguages = [
        {
            id: 'hi',
            text: 'हैक्स',
            versionSvg: '/hero/hero-version-bg.svg',
        },
        // {
        //     id: 'te',
        //     text: 'హ్యాక్స్',
        //     versionSvg: '/hero/version-te.svg',
        // },
        {
            id: 'en',
            text: 'HACKS',
            versionSvg: '/hero/version-en.svg',
        },
        {
            id: 'ta',
            text: 'ஹேக்ஸ்',
            versionSvg: '/hero/version-ta.svg',
        },
    ];

    const [index, setIndex] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % hacksLanguages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!textRef.current) return;

        const current = hacksLanguages[index];

        gsap.to(textRef.current, {
            duration: 1.5,
            scrambleText: {
                text: current.text,
                chars: "lowerCase",
                revealDelay: 0.2,
                speed: 0.3,
            },
            ease: "power2.inOut",
        });

    }, [index]);

    const current = hacksLanguages[index];

    return (
        <div className="relative inline-block">
            <div className="relative inline-block">
                {/* Hacks Text */}
                <div
                    ref={textRef}
                    className="font-poppins font-bold text-center text-[clamp(72px,19vw,232px)] leading-[1] text-[#1f4047]"
                    style={{
                        WebkitTextStroke: 'clamp(2px,0.5vw,6px) #ffc627',
                        paintOrder: 'stroke fill',
                        minWidth: '3ch' // prevent layout shift
                    }}
                >
                    {current.text}
                </div>

                {/* Version Badge */}
                <div
                    className="absolute"
                    style={{
                        left: 'calc(100% + 4px)',
                        top: 'clamp(8px,2vw,24px)',
                        height: '100%',
                        maxWidth: 'clamp(65px,8vw,95px)',
                        aspectRatio: '120/190',
                    }}
                >
                    <Image
                        src={current.versionSvg}
                        alt="Version"
                        fill
                        style={{ objectFit: 'contain' }}
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
}
