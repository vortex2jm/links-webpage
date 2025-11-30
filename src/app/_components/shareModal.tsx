"use client";

import toast from "react-hot-toast";
import { BsShare } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function ShareModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string>("");
  
  // Mitigating window no definition error (ssr pre-rendering)
  useEffect(() => {
    setShareUrl(window.location.origin);
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsOpen(false);
    toast.success('Link copiado!', {
      style: {
        borderRadius: "50px"
      }
    })
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Compartilhar"
        className="mt-10 p-4 rounded-full transition cursor-pointer transform hover:-translate-y-1"
      >
        <BsShare size={24} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay*/}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-24 z-50 w-72 rounded-4xl p-6 py-10 shadow-lg bg-black dark:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-geist font-bold mb-2 text-white dark:text-black text-center">
                Compartilhar
              </h2>
              <div className="w-15 h-0.5 bg-amber-700 mx-auto mb-4 rounded-full" />
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-full transition font-normal 
                    text-neutral-400 dark:text-neutral-600 cursor-pointer transform hover:translate-x-1"
                  >
                    <MdContentCopy size={20} /> Copiar link
                  </button>
                </li>

                <li>
                  <a
                    onClick={() => {setIsOpen(false)}}
                    href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-full transition font-normal 
                    text-neutral-400 dark:text-neutral-600 transform hover:translate-x-1"
                  >
                    <BsWhatsapp size={20} /> WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
