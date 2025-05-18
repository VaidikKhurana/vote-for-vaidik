"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onEnter }) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Call onEnter once after the component mounts
    if (typeof onEnter === 'function') {
      onEnter();
    }
  }, [onEnter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center h-screen bg-black text-white"
    >
      <h1 className="text-4xl">Loading...</h1>
    </motion.div>
  );
}
