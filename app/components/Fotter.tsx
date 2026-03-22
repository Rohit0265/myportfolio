import { ArrowUpToLine } from "lucide-react"
import ISTClock from "./Time"

const Fotter = () => {
  return (
    <>
      <div className="w-full bg-black pt-16 pb-16 relative overflow-x-hidden">

        {/* divider */}
        <div className="h-[1px] bg-gray-600 w-full absolute top-0" />

        {/* content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 px-6 md:px-20">

          {/* MENU */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">

            <h1 className="text-white text-xl md:text-2xl">
              Menu
            </h1>

            <div className="h-[1px] w-[70px] bg-gray-600 mt-1 mb-3" />

            <div className="flex flex-col text-gray-300 text-sm md:text-base">

              <p
                onClick={() =>
                  window.scrollTo({
                    top: 3700,
                    behavior: "smooth"
                  })
                }
                className="pb-2 cursor-pointer hover:text-white transition"
              >
                ABOUT ME
              </p>

              <p
                onClick={() =>
                  window.scrollTo({
                    top: 4650,
                    behavior: "smooth"
                  })
                }
                className="pb-2 cursor-pointer hover:text-white transition"
              >
                MY WORKS
              </p>

            </div>
          </div>


          {/* SOCIALS */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">

            <h1 className="text-white text-xl md:text-2xl">
              Socials
            </h1>

            <div className="h-[1px] w-[80px] bg-gray-600 mt-1 mb-3" />

            <div className="flex flex-col text-gray-300 text-sm md:text-base">

              <a
                target="_blank"
                className="flex items-center gap-2 pb-2 hover:text-white transition"
                href="https://github.com/Rohit0265"
              >
                Github
                <img
                  width="22"
                  className="invert"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </a>

              <a
                className="flex items-center gap-2 hover:text-white transition"
                target="_blank"
                href="https://www.linkedin.com/in/rohit-mathur-9a80b2296"
              >
                Linkedin
                <img
                  width="22"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                />
              </a>

            </div>
          </div>

        </div>

        {/* SCROLL TO TOP BUTTON */}
        <div className="absolute bottom-6 right-6 md:right-10 flex items-center justify-center h-[45px] w-[45px] rounded-full border cursor-pointer bg-gray-200/25 hover:bg-white/10 transition">

          <button
            className="text-white flex items-center justify-center w-full h-full"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <ArrowUpToLine size={20} />
          </button>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="bg-black text-center text-gray-300 text-sm pb-6">

        <h1>All Rights Reserved &copy; 2026</h1>

        <div className="mt-2">
          <ISTClock />
        </div>

      </div>
    </>
  )
}

export default Fotter
