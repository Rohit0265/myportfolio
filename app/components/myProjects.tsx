// @ts-nocheck
"use client"
import React, { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Image from 'next/image'
import { div } from 'framer-motion/client'
import Link from 'next/link'



const data = [
  {
    title: "1. YOOM - Zoom Like Meeting Platform",
    description: "This project is a fully functional Zoom Clone that enables users to create, join, and manage video meetings in real time. It features secure authentication, instant meeting links, and smooth video streaming powered by Stream’s real-time infrastructure.",
    github: "https://github.com/Rohit0265/meeting",
    live: "https://meeting-two-lac.vercel.app/",
    image: "/photo2.jpg",
    video: "/p2.webm",

  }, {
    title: "2. Full Stack Ecommerce Web Application",
    description: "Developed a full-stack eCommerce web application with features like user authentication, product listing, cart management, and order processing. The platform provides a seamless shopping experience with a responsive interface and secure backend APIs.",
    github: "https://github.com/Rohit0265/Full-Stack-E-Commerce-Platform",
    live: "https://full-stack-e-commerce-platform-one.vercel.app/",
    image: "/be.jpg",
    video: "/Ecomm.webm",

  }, {
    title: "3. Edemy - Online Learning Platform",
    description: "Edemy is a comprehensive online learning platform designed to connect students with expert instructors. It features a wide range of courses, secure payment integration, and progress tracking tools to facilitate effective remote education.",
    github: "https://github.com/Rohit0265/Edemy",
    live: "https://edemy-one.vercel.app/",
    image: "/2.webp",
    video: "/Edemy.webm",

  }, {
    title: "4. VulnsWeb - Web Security Platform",
    description: "VulnsWeb is a comprehensive web security platform designed to connect students with expert instructors. It features a wide range of courses, secure payment integration, and progress tracking tools to facilitate effective remote education.",
    github: "https://github.com/Rohit0265/VulnsWeb",
    live: "https://vulns-web.vercel.app/",
    image: "/bee.jpg",
    video: "/VulnsWeb.webm",

  }
]



gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger)


const Myprojects = () => {


  const textRef = useRef();
  const sectionRef = useRef();
  const stack = useRef();
  const pinProject = useRef();
  const container = useRef(null);

  useGSAP(() => {


    if (window.innerWidth < 768) return;
    const panels = gsap.utils.toArray(".panel");


    panels.forEach((panel, i) => {
      gsap.set(panel, { willChange: "transform, opacity" });

      gsap.fromTo(
        panel as gsap.TweenTarget, {
        scale: 1, opacity: 1
      },
        {
          scale: 0.85,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top-=150 top",
            end: "bottom top",
            scrub: 1.5,
            pin: true,
            pinSpacing: false,
          }
        }
      )
    })

    const text = textRef.current;
    const stackContainer = stack.current;

    if (!text || !stackContainer) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: stackContainer,
        start: "top top",
        end: () => "+=" + stackContainer.offsetHeight,
        scrub: true,
        pin: text,              
        pinSpacing: false,
        anticipatePin: 1,
      }
    })
      .to(text, {
        backgroundPosition: "0% 0%",
        ease: "none",
      });



    const videos = document.querySelectorAll(".scroll-video");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });
    videos.forEach(video => observer.observe(video));

  })




  return (
    <div className='bg-black' ref={stack}>

      <div className="bg-black relative" style={{ zIndex: 9999 }}>
        <section className="relative">
          <div
            ref={sectionRef}
            className="flex items-center justify-center bg-black px-4"
          >
            <h1
              ref={textRef}
              className="text-[40px] sm:text-[55px] md:text-[70px] lg:text-[90px] bg-black uppercase font-bold tracking-tight text-transparent text-center"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 50%, #4b5563 50%)",
                backgroundSize: "200% 100%",
                backgroundPosition: "100% 0%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              My Selected Works
            </h1>
          </div>
        </section>
      </div>


      <div>
        {data.map((item, index) => {

          return (
            <div key={index} className="flex flex-col lg:flex-row panel transform-gpu bg-[rgb(18,18,18)] mt-10 pb-20 gap-10">
              {index % 2 == 0 ? (
                <>
                  <div className="w-full lg:w-1/2 flex flex-col text-white px-6 lg:pl-20 justify-center order-2 lg:order-1">

                    <div>
                      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
                        {item.title}
                      </h1>

                      <p className="text-base md:text-lg lg:text-2xl text-gray-400 mb-8">
                        {item.description}
                      </p>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-4 items-center">

                      <Link
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gray-900 border border-white rounded-xl px-5 py-3 hover:bg-gray-700 transition"
                      >
                      <Image
                        src="/github.svg"
                        alt="github"
                        width={24}
                        height={24}
                        className="invert"
                      />
                      View On Github
                      </Link>

                      <Link
                        href={item.live}
                        target="_blank"
                        className="px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 transition"
                      >
                        🚀 Live Demo
                      </Link>

                    </div>

                  </div>
                  <div className="relative w-full lg:w-1/2 pt-[30px] flex justify-center items-center order-1 lg:order-2">
                    <img
                      className="w-[90%] md:w-[80%] rounded-xl blur-[5px]"
                      src={item.image}
                      alt="" />
                    <div className="absolute w-[80%] md:w-[70%]">
                      <video
                        className="w-full border rounded-md"
                        src={item.video}
                        autoPlay
                        playsInline
                        muted
                        loop />
                    </div>
                  </div>
                  </>
              ) : (
<div className="flex flex-col lg:flex-row">

  {/* VIDEO SIDE */}
  <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
    
    <img
      className="w-[95%] sm:w-[90%] md:w-[80%] rounded-xl blur-[5px]"
      src={item.image}
      alt=""
    />

    <div className="absolute w-[85%] sm:w-[80%] md:w-[70%]">
      <video
        className="w-full border rounded-md"
        src={item.video}
        autoPlay
        playsInline
        muted
        loop
      />
    </div>

  </div>

  {/* TEXT SIDE */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center text-white px-4 sm:px-6 lg:pl-20 text-center lg:text-left">

    <div>
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
        {item.title}
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-400 mb-8">
        {item.description}
      </p>
    </div>

    {/* BUTTON */}
    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">

      <a
        href={item.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gray-900 border border-white rounded-xl px-4 sm:px-5 py-2 sm:py-3 hover:bg-gray-700 transition"
      >
        <img src="/github.svg" className="w-5 h-5 sm:w-6 sm:h-6 invert" />
        View GitHub
      </a>

    </div>

  </div>

</div>
              )}
              <br />
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Myprojects