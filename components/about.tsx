"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"


export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>The Guy Behind The Screen</SectionHeading>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="mb-5 text-lg">
        I enjoy programming and anything that involves a good think. <br></br>For some reason always find myself behind a computer for extended periods of time. <br></br> <br></br>
        Most of my
        programming work remains behind company walls, but all of my personal work is open source.
        </p>

        <p className="mb-5 text-3xl">
         When I'm not programming you will find me: 
        </p>

        <ul className="list-none space-y-2 mb-5 text-lg">
          <motion.li
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🎵</span>
            <span>Playing melodies on my harmonica</span>
          </motion.li>
          <motion.li
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🎣</span>
            <span>Patiently waiting for the perfect catch</span>
          </motion.li>
          <motion.li
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🛶</span>
            <span>Navigating waters in my kayak</span>
          </motion.li>
          <motion.li
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🌊</span>
            <span>Surfing the web</span>
          </motion.li>
          <motion.li
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🎈</span>
            <span>Playing Bloons Tower Defense</span>
          </motion.li>
        </ul>

      </motion.div>
    </motion.section>
  )
}