"use client";
import React from "react";
import { motion } from "framer-motion";

interface LinkProps {
  link: string 
  title: string
  children: React.ReactNode 
  index: number
}

export default function LinkCard(props: LinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * props.index }}
      viewport={{ once: true }}
    >
      <a 
        href={props.link} 
        className="max-w-[90vw] w-80 h-fit p-5 pl-14 pr-14 flex flex-row justify-center items-center gap-3 rounded-2xl
        border-background xl:border-gray-300 dark:xl:border-stone-800/50 hover:border-background border-1 shadow-md dark:shadow-amber-900/25
        xl:shadow-none xl:hover:shadow-md hover:-translate-y-1.5 group transition-all duration-200"
        rel="noopener noreferrer"
      >
        <span className="text-xl md:text-2xl text-amber-700 group-hover:text-foreground transition-colors duration-300">
          {props.children}
        </span>
        <h3 className="text-sm font-normal dark:text-neutral-400">{props.title}</h3>
      </a>
    </motion.div>
  );
}