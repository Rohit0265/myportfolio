// @ts-nocheck

import React, { useRef, useState } from 'react';
import Button from "./ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_PUBLIC_SERVICE_ID,
      import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_ME_ID
    ).then(
      () => {
        toast("Message Sent 🚀");
        setIsSubmitted(true);
      },
      (error) => {
        toast(error.text);
      }
    );
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (

    <motion.div
      ref={ref}
      style={{ scale }}
      className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center"
    >

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold text-center mb-14"
      >
        Let's Work Together
      </motion.h2>


      {/* Form Card */}

      <div className="w-full max-w-[700px] rounded-[30px] shadow-lg shadow-cyan-500/40 bg-[rgb(18,17,17)]">

        <motion.form
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-8 sm:p-12"
        >

          <p className="text-[26px] sm:text-[32px] md:text-[40px] text-center">
            Say Hello 👋 !!!
          </p>


          <input
            className="bg-[rgb(30,28,28)] text-[16px] sm:text-[18px] p-4 rounded-xl"
            name="name"
            onChange={handleInputChange}
            placeholder="Your Name?"
            required
          />

          <input
            className="bg-[rgb(27,26,26)] text-[16px] sm:text-[18px] p-4 rounded-xl"
            name="email"
            type="email"
            onChange={handleInputChange}
            placeholder="Your Email?"
            required
          />

          <textarea
            className="bg-[rgb(27,26,26)] text-[16px] sm:text-[18px] p-4 rounded-xl min-h-[160px] sm:min-h-[220px]"
            name="message"
            onChange={handleInputChange}
            placeholder="Your Message..."
            required
          />

          <Button
            size="lg"
            className="bg-white text-black text-[16px] sm:text-[20px] font-bold py-3 mt-4"
          >
            Send Message
          </Button>

        </motion.form>

      </div>

    </motion.div>
  );
};

export default ContactForm;