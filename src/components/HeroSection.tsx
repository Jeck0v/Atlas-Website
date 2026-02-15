import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const accroche1Ref = useRef<HTMLParagraphElement>(null);
  const accroche2Ref = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });

    timeline
      .fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -45,
          z: -200,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          z: 0,
          duration: 1.4,
        }
      )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          x: -100,
          rotationY: -30,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
        },
        '-=0.8'
      )
      .fromTo(
        [accroche1Ref.current, accroche2Ref.current, taglineRef.current],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
        },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.7,
          rotationZ: -10,
        },
        {
          opacity: 1,
          scale: 1,
          rotationZ: 0,
          duration: 0.8,
        },
        '-=0.3'
      );
  }, []);

  const handleCTAHover = () => {
    gsap.to(ctaRef.current, {
      scale: 1.05,
      rotationZ: -2,
      backgroundColor: '#000000',
      boxShadow: '10px 10px 0px #1E40AF',
      duration: 0.3,
      ease: 'back.out(2)',
    });
  };

  const handleCTALeave = () => {
    gsap.to(ctaRef.current, {
      scale: 1,
      rotationZ: 0,
      backgroundColor: '#1E40AF',
      boxShadow: '6px 6px 0px #000000',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div className="relative flex flex-col justify-center h-full px-6 md:px-12 lg:px-20 py-8 lg:py-0" style={{ perspective: '1000px' }}>
      <div
        ref={subtitleRef}
        className="inline-block mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-black text-white font-black text-xs md:text-sm tracking-widest w-fit -rotate-1"
      >
        INFRASTRUCTURE PLATFORM
      </div>

      <h1
        ref={titleRef}
        className="text-[80px] md:text-[120px] lg:text-[180px] font-black text-black leading-[0.85] mb-8 -ml-1"
        style={{
          letterSpacing: '-0.02em',
          textShadow: '4px 4px 0px #1E40AF',
        }}
      >
        ATLAS
      </h1>

      <div className="space-y-6 max-w-2xl">
        <p
          ref={accroche1Ref}
          className="text-[18px] md:text-[22px] lg:text-[26px] text-black font-bold leading-tight border-l-4 md:border-l-8 border-black pl-4 md:pl-6"
        >
          Tired of wrestling with YAML, juggling tools, and debugging infrastructure nobody can read?
        </p>

        <p
          ref={accroche2Ref}
          className="text-[14px] md:text-[16px] lg:text-[18px] text-[#1a1a1a] font-medium leading-relaxed"
        >
          ATLAS is the orchestration platform that speaks human. Define your stack in readable DSL,
          deploy anywhere with one command, and get a gorgeous desktop interface for free.
        </p>

        <p
          ref={taglineRef}
          className="text-[16px] md:text-[18px] text-black font-bold bg-[#FACC15] inline-block px-3 py-2 md:px-4 border-2 border-black"
        >
          Docker Compose for dev. Kubernetes for prod. ATLAS for both.
        </p>
      </div>

      <button
        ref={ctaRef}
        onMouseEnter={handleCTAHover}
        onMouseLeave={handleCTALeave}
        className="mt-8 md:mt-12 bg-[#1E40AF] text-white font-black text-[16px] md:text-[18px] px-8 md:px-10 py-4 md:py-5 border-2 md:border-4 border-black w-fit cursor-pointer uppercase tracking-wider"
        style={{
          boxShadow: '6px 6px 0px #000000',
        }}
      >
        Try it now →
      </button>
    </div>
  );
};

export default HeroSection;
