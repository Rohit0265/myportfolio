"use client"
import React, { useRef, useState } from 'react'
import Hover from './Hover'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'



interface Project {
  title: string;
  description: string;
  github: string;
  live: string;
  image: string;
  thumb: string;
  video: string;
}

const data: Project[] = [
  {
    title: "1. Prep AI - AI Powered Interview Preparation",
    description: "Prep AI is an AI-powered interview preparation platform designed to help students and professionals get ready for job interviews. It features AI-generated mock interviews with real-time feedback, personalized interview question recommendations, resume analysis, and interview coaching to enhance candidates' interview performance.",
    github: "https://github.com/Rohit0265/genai-interview-project",
    live: "https://genai-interview-project-guhz.vercel.app/",
    image: "/bee.jpg",
    thumb: "/prepai.png",
    video :"/prep_ai.mp4"

  }
  , {
    title: "2. Full Stack Ecommerce Web Application",
    description: "Developed a full-stack eCommerce web application with features like user authentication, product listing, cart management, and order processing. The platform provides a seamless shopping experience with a responsive interface and secure backend APIs.",
    github: "https://github.com/Rohit0265/Full-Stack-E-Commerce-Platform",
    live: "https://full-stack-e-commerce-platform-one.vercel.app/",
    image: "/be.jpg",
    thumb: "/Ecomm.png",
    video: "/Ecomm.webm"  

  }, {
    title: "3. Edemy - Online Learning Platform",
    description: "Edemy is a comprehensive online learning platform designed to connect students with expert instructors. It features a wide range of courses, secure payment integration, and progress tracking tools to facilitate effective remote education.",
    github: "https://github.com/Rohit0265/Edmey-Full-Stack-LMS-Platform",
    live: "https://edmey-full-stack-lms-platform.vercel.app/",
    image: "/2.webp",
    thumb: "/Edemy.png",
    video :"/Edemy.webm"

  },  {
    title: "4. YOOM - Zoom Like Meeting Platform",
    description: "This project is a fully functional Zoom Clone that enables users to create, join, and manage video meetings in real time. It features secure authentication, instant meeting links, and smooth video streaming powered by Stream’s real-time infrastructure.",
    github: "https://github.com/Rohit0265/meeting",
    live: "https://meeting-two-lac.vercel.app/",
    image: "/photo2.jpg",
    thumb: "/p2.png",
    video: "/p2.webm"  
  }
]

const Myprojects = () => {
  const [hoveredVideo, setHoveredVideo] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const hoverMe = (video: string) => {
    setHoveredVideo(video);
    setIsHovered(true);
  };

  const textRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stack = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {


    if (window.innerWidth < 1024) return;
    const panels = gsap.utils.toArray<HTMLElement>(".panel");


    panels.forEach((panel) => {
      gsap.fromTo(
        panel, {
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
            scrub: 0.8,
            pin: true,
            pinSpacing: false,
            onToggle: (self) => {
              if (self.isActive) {
                gsap.set(panel, { willChange: "transform, opacity" });
              } else {
                gsap.set(panel, { clearProps: "willChange" });
              }
            }
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
        end: () => "+=" + (stackContainer as HTMLElement).offsetHeight,
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

    ScrollTrigger.refresh();
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
                      className="w-[90%] md:w-[80%] aspect-video object-cover rounded-xl blur-[5px]"
                      src={item.image}
                      alt="" />
                    <div className="absolute w-[80%] md:w-[70%] aspect-video group cursor-pointer overflow-hidden rounded-md border border-white/20">
                      <img 
                        onMouseEnter={()=>{hoverMe(item.video)}} 
                        onMouseLeave={() => setIsHovered(false)}
                        src={item.thumb} 
                        className="w-full h-full object-cover hidden lg:block transition-transform duration-500 group-hover:scale-110" 
                        alt="" 
                      />
                      {/* Mobile Video */}
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover block lg:hidden"
                      />
                      <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-100 group-hover:opacity-0 transition-all duration-500 pointer-events-none">
                        <div className="flex flex-col items-center gap-2 animate-float">
                          <div className="bg-white/10 backdrop-blur-xl p-3 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <Eye className="w-5 h-5 text-white animate-pulse" />
                          </div>
                          <span className="bg-black/40 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] border border-white/10 shadow-2xl">
                            Hover Me
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>

                  {/* VIDEO SIDE */}
                  <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">

                    <img
                      className="w-[95%] sm:w-[90%] md:w-[80%] aspect-video object-cover rounded-xl blur-[5px]"
                      src={item.image}
                      alt=""
                    />

                    <div className="absolute w-[85%] sm:w-[80%] md:w-[70%] aspect-video group cursor-pointer overflow-hidden rounded-md border border-white/20">
                      <img 
                        onMouseEnter={()=>{hoverMe(item.video)}} 
                        onMouseLeave={() => setIsHovered(false)}
                        src={item.thumb} 
                        className="w-full h-full object-cover hidden lg:block transition-transform duration-500 group-hover:scale-110" 
                        alt="" 
                      />
                      {/* Mobile Video */}
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover block lg:hidden"
                      />
                      <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-100 group-hover:opacity-0 transition-all duration-500 pointer-events-none">
                        <div className="flex flex-col items-center gap-2 animate-float">
                          <div className="bg-white/10 backdrop-blur-xl p-3 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <Eye className="w-5 h-5 text-white animate-pulse" />
                          </div>
                          <span className="bg-black/40 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] border border-white/10 shadow-2xl">
                            Hover Me
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* TEXT SIDE */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center text-white px-4 sm:px-6 lg:pl-20 text-left lg:text-left">

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
                                            <Link
                        href={item.live}
                        target="_blank"
                        className="px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 transition"
                      >
                        🚀 Live Demo
                      </Link>

                    </div>

                  </div>

                </>
              )}
              <br />
            </div>
          )
        })}

      <Hover video={hoveredVideo} isVisible={isHovered} />
      </div>
    </div>
  )
}

export default Myprojects