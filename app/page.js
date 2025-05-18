"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ControlPanel from "./components/ControlPanel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import FounderPage from "./components/Founderpage";

const Section = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, type: "spring", stiffness: 30 }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

const Page = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    if (hasEntered && audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = 1;
      audio.volume = 0;

      audio
        .play()
        .then(() => {
          let vol = 0;
          const fadeIn = setInterval(() => {
            if (vol < 1) {
              vol += 0.02;
              audio.volume = vol;
            } else {
              clearInterval(fadeIn);
            }
          }, 100);
        })
        .catch((err) => console.warn("Autoplay failed", err));
    }
  }, [hasEntered]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleVote = () => {
    setVoteCount((prev) => prev + 1);
  };

  return (
    <div>
      <audio ref={audioRef} src="/trach.mp3" loop />
      <AnimatePresence>
        {!hasEntered && <LoadingScreen onEnter={() => setHasEntered(true)} />}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ControlPanel isMuted={isMuted} toggleMute={toggleMute} />
          <Section>
            <section
              id="main"
              className="flex flex-col min-h-screen justify-center items-center pb-[6vw] px-4"
            >
              <Navbar />
              <h1 className="text-white font-semibold text-4xl sm:text-5xl lg:text-6xl text-center pt-[9vw] max-w-4xl">
                Making choices is hard — Save your Stress, Vote for the Best!
              </h1>
              <div className="mt-4 text-[#999999] text-lg sm:text-xl max-w-3xl text-center">
                Hi! I'm Vaidik, a student of grade 9, participating in the student council elections. I’d love your support as I run for Head Boy, Sports Captain and House Captain.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 my-6 items-center">
                <button id="contact" className="text-white border px-4 py-2 rounded-lg">
                  <a href="/vote" target="_blank" rel="noopener noreferrer">
                    Vote
                  </a>
                </button>
                
              </div>

              {/* Vote Counter Display */}
            

              <div className="rounded-xl w-full sm:w-[70vw] h-[40vw] sm:h-[30vw] border-2 mt-6 border-[#666666] p-2 overflow-hidden">
                <img
                  src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp"
                  alt="Campaign Visual"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div id="lamp1"></div>
              <div id="lamp2"></div>
            </section>
          </Section>

          
          
        </motion.div>
      )}
    </div>
  );
};

export default Page;
