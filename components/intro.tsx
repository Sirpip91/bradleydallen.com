'use client'

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"
import selfie from "@/public/selfie.jpg"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  const getSeasonalEmoji = () => {
    const month = new Date().getMonth() + 1; // getMonth() returns 0-11
    switch (month) {
      case 1: return "❄️ January - 'It’s so cold, my jokes are freezing!'"; 
      case 2: return "❤️ February - 'Love is in the air... or is that just chocolate?'";
      case 3: return "🌷 March - 'Spring is nature's way of saying, Let's party!";
      case 4: return "🌼 April - 'April is a reminder that we can start fresh... like the flowers!'";
      case 5: return "🌸 May - 'May your days be as colorful as spring flowers!'";
      case 6: return "☀️ June - 'Sunshine is the best medicine... unless you're a vampire!'";
      case 7: return "🏖️ July - 'The only thing better than a beach day is a second beach day!'";
      case 8: return "🍉 August - 'Sandy toes and sun-kissed nose... it’s summer magic!'";
      case 9: return "🍂 September - 'Fall: when nature puts on its party clothes!'";
      case 10: return "🎃 October - 'Time to get your spooky on! Halloween is coming!'";
      case 11: return "🦃 November - 'Thanksgiving: when we eat, laugh, and wear stretchy pants!'";
      case 12: return "🎄 December - 'It's the most wonderful time of the year... for hot cocoa and cozy sweaters!'";
      default: return "🌈 Unknown Month - 'Every month brings new opportunities... let’s celebrate them all!'";
    }
  };
  
  

  return (
    <section
      ref={ref}
      id="home"
      className="min-h flex flex-col items-center justify-center relative overflow-hidden pt-0"
      >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
        >
          <Image
            src={selfie}
            alt="Bradley portrait"
            width="200"
            height="200"
            quality="95"
            priority={true}
            className="h-40 w-40 rounded-full object-cover border-4 border-primary shadow-xl mb-8 mx-auto"
          />
        </motion.div>

        <motion.h1
          className="mb-6 text-4xl font-bold !leading-[1.5] sm:text-6xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I'm <span className="text-primary">Bradley</span>
        </motion.h1>

        <motion.h2
          className="mb-10 text-2xl font-medium text-muted-foreground sm:text-3xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A <span className="text-primary font-bold">Software Engineer</span> with expertise in{" "}
          <span className="text-primary font-bold">Full-Stack Development</span>
        </motion.h2>

        
        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/Bradley_Allen_Resume.pdf"
          className="group bg-gray-900 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:" />
        </Link>



        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/bradleyallen101/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Sirpip91"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      
      </motion.div>
      <div className="pb-5 pt-10">
      <motion.div
        className="text-md sm:text "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {getSeasonalEmoji()}
      </motion.div>
      </div>

    </section>
  )
}
