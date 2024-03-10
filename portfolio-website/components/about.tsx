"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Engineering</span>, I decided to pursue my
        passion for Data. IDuring the pandemic I joined Coursera and learned{" "}
        <span className="font-medium">Data Analysis and Vizualisation</span>.{" "}
        <span className="italic">My favorite part of making data-driven products</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Python, Power BI, SQL, and Excel
        . I am also familiar with Stakeholder Management, Program Management and  Developing Quality Frameworks. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Working Student/ Student Assisant</span> position</span> as a Data Analyst.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Azure Cloud</span>. I'm also
        learning how to code websites.
      </p>
    </motion.section>
  );
}
