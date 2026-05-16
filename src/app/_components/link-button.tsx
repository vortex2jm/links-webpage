"use client";
import React from "react";

interface LinkProps {
  link: string
  title: string
  children: React.ReactNode
  index: number
}

export default function LinkCard(props: LinkProps) {
  return (
    <a
      href={props.link}
      className="max-w-[90vw] w-80 h-fit p-5 pl-14 pr-14 flex flex-row justify-center items-center gap-3 rounded-2xl
        border-gray-300 dark:border-stone-700/50 hover:border-background border-1 shadow-md dark:shadow-stone-950
        
        xl:shadow-none xl:hover:shadow-md hover:-translate-y-1.5 group transition-all duration-200"
      rel="noopener noreferrer"
    >
      <span className="text-xl md:text-2xl text-amber-700 transition-colors duration-300">
        {props.children}
      </span>                 
      <h3 className="text-sm font-normal dark:text-neutral-400">{props.title}</h3>
    </a>
  );
}
