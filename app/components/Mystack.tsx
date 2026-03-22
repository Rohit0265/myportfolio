//@ts-nocheck

import React from "react";
import { motion } from "framer-motion";

const tech = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
];

const MYDETAILS = () => {

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16">

        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[36px] md:text-[50px] lg:text-[70px] text-white text-center lg:text-left uppercase relative font-extrabold"
        >
          what i do

          <div className="hidden lg:block h-[2px] absolute bg-red-50 w-[300px] bottom-4 left-0" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mt-6"
        >
          I’m a full-stack developer passionate about building scalable web applications,
          working across both frontend and backend to create efficient and reliable systems.

          <br /><br />

          I focus on clean architecture, performance, and maintainable code while also
          exploring web security practices to ensure the applications I build are robust
          and secure.

          <br /><br />

          I also explore cybersecurity and web application security, studying common
          vulnerabilities such as XSS, SQL injection, and path traversal.
        </motion.p>

      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16">

        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[36px] lg:text-[45px] text-gray-400 font-bold mb-10 relative"
        >
          My Tech Stack

          <div className="hidden lg:block h-[2px] absolute bg-red-50 w-[200px] bottom-1 left-0" />
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {tech.map((item, index) => (

            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-zinc-900 p-5 rounded-xl cursor-pointer hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition"
            >

              <img
                src={item.icon}
                className="w-8 md:w-10 mb-3"
              />

              <p className="text-xs md:text-sm text-gray-200">{item.name}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default MYDETAILS;