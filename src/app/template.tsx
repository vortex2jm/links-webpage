"use client"
import { motion } from "framer-motion"
import React from "react"

export default function Transition(
  { children }: { children: React.ReactNode }
) {
  return(
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'linear', duration: 1 }}
    >
      { children }
    </motion.div>
  )
}