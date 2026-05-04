"use client";
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

interface HoverProps {
  video: string;
  isVisible: boolean;
}

const Hover = ({ video, isVisible }: HoverProps) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate backdrop and video entry
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.fromTo(
        videoContainerRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
      if (videoRef.current) {
        playPromiseRef.current = videoRef.current.play();
      }
    } else {
      // Animate exit
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(videoContainerRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.in",
      });

      if (videoRef.current) {
        if (playPromiseRef.current !== null) {
          playPromiseRef.current
            .then(() => {
              videoRef.current?.pause();
              if (videoRef.current) videoRef.current.currentTime = 0;
            })
            .catch(() => {
              // Ignore interruption errors
            });
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    }
  }, [isVisible]);

  if (!mounted || !video) return null;

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[999999] flex items-center justify-center opacity-0 pointer-events-none transition-all duration-500 backdrop-blur-md bg-black/40"
    >
      <div
        ref={videoContainerRef}
        className="relative w-[70%] max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border-2 border-white/20"
      >
        <video
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>
    </div>,
    document.body
  );
};

export default Hover;
