"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LoadingScreen({ onEnter }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat text-white z-50 flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/bg.png')" }} // ⬅️ Add background image here
    >
      <motion.img
        src="/images.png" // Your GTA-style logo
        className="w-[300px] mb-10 cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        onClick={onEnter}
      />
    </motion.div>
  );
}
