"use client"

import { useGSAP } from "@gsap/react"
import MyIntro from "./components/myIntro"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
gsap.registerPlugin(useGSAP, ScrollSmoother);

const App = () => {


  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 6,
      effects: true,
    });
  })



  return (
    <div id="smooth-wrapper ">
      <div id="smooth-content">
        {/* <Navbar/> */}
        <MyIntro />
        {/* <Myprojects/> */}
        {/* <Hero/> */}
      </div>
    </div>
  )
}

export default App;