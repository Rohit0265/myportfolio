import { useRef } from 'react'
import VariableProximity from './ui/VariableProximity'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Mylandpage = () => {
  const containerRef = useRef(null)

  return (
    <div className="w-full min-h-screen bg-[#0F0F0F] overflow-x-hidden">

      {/* NAME */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center pt-10 md:pt-14"
      >
        <div
          ref={containerRef}
          className="text-white text-center font-light
          text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px]"
          style={{
            fontFamily: '"Roboto Flex", sans-serif',
          }}
        >
          <VariableProximity
            label="ROHIT MATHUR"
            fromFontVariationSettings="'wght' 500"
            toFontVariationSettings="'wght' 900"
            radius={150}
            containerRef={containerRef}
          />
        </div>
      </motion.div>

      {/* MAIN SECTION */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 px-6 md:px-12 lg:px-20 mt-10">

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[45%]"
        >
          <h1 className="uppercase text-gray-600/70 tracking-widest text-sm lg:text-right">
            ( About me )
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl lg:text-[28px] leading-relaxed mt-4 lg:text-right">
            I’m a passionate developer who enjoys building modern web applications
            and exploring backend systems. I’m especially interested in cybersecurity
            and problem-solving, and I like creating projects that combine clean
            design with strong technical foundations.
          </p>
        </motion.div>

        {/* CONNECT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[45%] lg:ml-auto"
        >
          <div className="bg-[#121212] text-white p-6 md:p-10 rounded-2xl border border-neutral-800 text-center">

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Resume & Connect
            </h2>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
              Interested in my work? Download my resume or connect with me
              through my socials. I'm always open to collaborations.
            </p>

            <div className="flex justify-center mb-8">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <div className="flex justify-center gap-6 text-neutral-400">

                <a
                  href="https://github.com/Rohit0265"
                  className="hover:text-white transition"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/rohit-mathur-9a80b2296"
                  className="hover:text-white transition"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="mailto:rohitmathur00981@gmail.com"
                  className="hover:text-white transition"
                >
                  <Mail size={24} />
                </a>

              </div>
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default Mylandpage
