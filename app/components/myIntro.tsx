"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Myprojects from "./myProjects";
import MYDETAILS from "./Mystack";
import ContactForm from "./ContactUs";
import Fotter from "./Fotter";
import Mylandpage from "./Landingpage";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const MyIntro = () => {
  const container = useRef(null);

  useGSAP(() => {

    // ScrollSmoother.create({
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    //   smooth: 3,
    //   effects: true,
    // });

    if (window.innerWidth <= 764) return;
const tl = gsap.timeline({


  scrollTrigger: {
    trigger: ".test",
    start: "top top",
    end: "+=200%",
    scrub: 1,
    pin: true,
    pinSpacing: true,
  },
});

    // 1️⃣ Small pause
    // tl.to({}, { duration: 0.5 });

    // 2️⃣ Blur background - Optimized using opacity fade on a pre-blurred overlay
    tl.to(".test img", {
      scale: 1.15,
      ease: "none",
    });
    tl.to(".blur-overlay", {
      opacity: 1,
      ease: "none",
    }, "<");

    // 3️⃣ Move text up
    tl.to(".head", {
      y: -200,
      opacity: 0,
      ease: "none",
    });

    // 4️⃣ Move image up
    tl.to([".test img", ".blur-overlay"], {
      y: -150,
      ease: "none",
    });

  }, { scope: container });

  return (
    // <div id="smooth-wrapper" ref={container}>
    //   <div id="smooth-content">
    <div ref={container}>


<div className="test w-full h-screen relative overflow-hidden bg-black">
  <img
    className="w-full h-full object-cover transform-gpu will-change-transform"
    src="https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
  />

  <div className="blur-overlay absolute inset-0 backdrop-blur-[20px] opacity-0 pointer-events-none z-10" />

  <h1 className="head absolute z-50 text-gray-300/90
    text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px]
    left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2">
    𝓗𝓔𝓛𝓛𝓞
  </h1>
</div>

      {/* Extra space to allow scrolling */}
      <Mylandpage />
      <Myprojects />
      <div className="hidden md:block md:h-[500px]  bg-black" />
      <MYDETAILS />
      {/* <div className="h-[200px]" /> */}
      <ContactForm />
      <Fotter />
    </div>
    //   {/* </div>
    // </div> */}
  );
};

export default MyIntro;