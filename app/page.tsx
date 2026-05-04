"use client"

import React, { useState } from "react"
import { useGSAP } from "@gsap/react"
import MyIntro from "./components/myIntro"
import Preloader from "./components/Preloader"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    if (!isLoading) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 6,
        effects: true,
      });

      // Force a refresh of all scroll positions
      ScrollTrigger.refresh();
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <MyIntro />
        </div>
      </div>
    </>
  )
}

export default App;