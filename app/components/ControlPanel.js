"use client";
import React from "react";

export default function ControlPanel({ isMuted, toggleMute }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <div className="relative w-[60px] h-[30px]">
        <input
          type="checkbox"
          id="neon-toggle"
          className="sr-only"
          checked={!isMuted}
          onChange={toggleMute}
        />
        <label
          htmlFor="neon-toggle"
          className={`block w-full h-full rounded-full cursor-pointer border-2 ${
            isMuted
              ? "border-pink-400 bg-black"
              : "border-cyan-400 bg-black"
          } transition-colors duration-300 relative shadow-md`}
        >
          <span
            className={`absolute top-[2px] left-[2px] w-[25px] h-[25px] bg-white rounded-full transition-transform duration-300 ${
              isMuted ? "translate-x-0" : "translate-x-[30px]"
            } shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]`}
          ></span>
        </label>
      </div>
      <span className="text-white font-mono text-sm neon-text">
        {isMuted ? "Muted" : "Playing"}
      </span>
    </div>
  );
}
