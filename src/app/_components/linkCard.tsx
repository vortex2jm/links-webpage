import React from "react";

interface LinkProps {
  children: React.ReactNode 
  title: string
  link: string 
}

export default function LinkCard(props: LinkProps) {
  return(
    <a href={props.link} className="max-w-[90vw] w-80 h-fit p-5 pl-14 pr-14 flex flex-row justify-center items-center gap-3 
      border-gray-300 dark:border-neutral-800 border-1 rounded-full shadow-md dark:shadow-neutral-800 
      xl:shadow-none xl:hover:shadow-md transition transform hover:-translate-y-1.5"
    >
      <span className="text-xl md:text-2xl">{props.children}</span>
      <h3 className="text-sm font-normal dark:text-neutral-400">{props.title}</h3>
    </a>
  );
}
