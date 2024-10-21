'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BsLinkedin, BsTwitter, BsGithub, BsMedium } from "react-icons/bs"
import { HiDownload, HiMail } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"
import sad from "@/public/cry-sad.gif";

export default function Contact() {
  const { ref } = useSectionInView("Contact")
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  const socialLinks = [
    { icon: BsLinkedin, href: "https://www.linkedin.com/in/bradleyallen101/", label: "LinkedIn" },
    { icon: BsGithub, href: "https://github.com/Sirpip91", label: "GitHub" },
  ]

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-5xl mx-auto text-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Thank You for Visiting!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src={sad}
            alt="Profile picture"
            width={500}
            height={300}
            quality={95}
            priority={true}
            className="rounded-2xl mx-auto shadow-xl"
          />
        </div>

        <div className="space-y-6 text-left">
          <p className="text-gray-700 dark:text-white/80 text-lg">
            I appreciate your interest in my work. If you'd like to get in touch or learn more about me, feel free to reach out or check out my social profiles.
          </p>

          <div className="flex flex-col space-y-3">
            <a
              className="inline-flex items-center text-gray-700 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition"
              href="mailto:allenbradley91@hotmail.com"
              aria-label="Email me at allenbradley91@hotmail.com"
            >
              <HiMail className="mr-2 text-xl" /> allenbradley91@hotmail.com
            </a>
            <Link
              href="/Bradley_Allen_Resume.pdf"
              className="inline-flex items-center text-gray-700 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={() => {
                setActiveSection("Contact")
                setTimeOfLastClick(Date.now())
              }}
              aria-label="Download Resume"
            >
              <HiDownload className="mr-2 text-xl" /> Download Resume
            </Link>
          </div>

          <div className="flex justify-start space-x-4 text-2xl">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className="text-gray-700 hover:text-gray-950 dark:text-white/60 dark:hover:text-white/90 transition"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.label} Profile`}
              >
                <link.icon className="hover:animate-spin" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-gray-700 dark:text-white/80 text-lg">
          I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, don't hesitate to reach out!
        </p>
      </div>
    </motion.section>
  )
}