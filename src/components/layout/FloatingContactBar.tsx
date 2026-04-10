"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const contactButtons = [
  {
    id: "map",
    label: "Tìm đường",
    href: "https://maps.google.com/?q=Cũ+Văn,+Phú+Lương,+Thái+Nguyên",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
        <circle cx="12" cy="9" r="2.5" fill="white"/>
        <path d="M12 2L12 9" stroke="#34A853" strokeWidth="2"/>
        <path d="M12 2L5 9" stroke="#FBBC05" strokeWidth="2"/>
        <path d="M12 2L19 9" stroke="#4285F4" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: "zalo",
    label: "Chat Zalo",
    href: "https://zalo.me/0982581222",
    color: "#0068FF",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <rect width="24" height="24" rx="6" fill="#0068FF"/>
        <path d="M12 6c-3.31 0-6 2.24-6 5 0 1.69.93 3.18 2.37 4.08-.1.5-.47 1.8-.5 1.9-.05.15.06.2.18.13.73-.5 1.73-1.23 2.06-1.48.65.18 1.35.28 2.08.28 3.31 0 6-2.24 6-5s-2.69-5-6-5z" fill="white"/>
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Gọi điện",
    href: "tel:0982581222",
    color: "#34A853",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <circle cx="12" cy="12" r="12" fill="#34A853"/>
        <path d="M8.5 8.5c.5-1 1.5-1.5 2-1.5.3 0 .5.1.7.3l1.2 1.5c.2.3.2.6 0 .9l-.5.5c-.2.2-.2.5 0 .7.3.3.7.7 1.1 1.1.3.3.6.3.8 0l.5-.5c.2-.2.5-.3.8-.2l1.5.8c.3.2.5.5.5.8 0 .5-.5 1.5-1.5 2s-2.5 0-4-1.5-2.5-3-2-4z" fill="white"/>
      </svg>
    ),
  },
  {
    id: "messenger",
    label: "Messenger",
    href: "https://m.me/tranhhangkhoa",
    color: "#0084FF",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <circle cx="12" cy="12" r="12" fill="url(#messengerGrad)"/>
        <defs>
          <linearGradient id="messengerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B2FF"/>
            <stop offset="100%" stopColor="#006AFF"/>
          </linearGradient>
        </defs>
        <path d="M12 5c-3.87 0-7 2.69-7 6 0 1.89 1.08 3.56 2.78 4.67L6.5 18l2.93-1.47c.75.21 1.54.33 2.36.33 3.87 0 7-2.69 7-6s-3.13-6-7-6zm-1.5 7l-2-2 4 2.5 2.5-2 2 2-4-2.5-2.5 2z" fill="white"/>
      </svg>
    ),
  },
];

export default function FloatingContactBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
        >
          {/* Main toggle button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 rounded-full bg-[#b45309] text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          >
            {isExpanded ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.button>

          {/* Contact buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3"
              >
                {contactButtons.map((button, index) => (
                  <motion.a
                    key={button.id}
                    href={button.href}
                    target={button.id === "map" ? "_blank" : undefined}
                    rel={button.id === "map" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-3"
                  >
                    <span className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {button.label}
                    </span>
                    <div
                      className="w-12 h-12 rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: button.color }}
                    >
                      {button.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
