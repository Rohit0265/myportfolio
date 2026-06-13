"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = "hidden";

    // Simulate loading for 1.5s
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete();
        },
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Simple and elegant CSS spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">
          Loading Portfolio
        </span>
      </div>
    </div>
  );
};

export default Preloader;
