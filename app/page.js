"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
// Add any other components you use

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
  const audioRef = useRef(null);

  useEffect(() => {
    if (hasEntered && audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = 1; // ⏱️ Start from 1 second
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          // Gradually fade in volume
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
        .catch((err) => {
          console.warn("Audio autoplay failed:", err);
        });
    }
  }, [hasEntered]);
  
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
          {/* Main Hero Section */}
          <Section>
            <section
              id="main"
              className="flex flex-col min-h-screen justify-center items-center pb-[6vw]"
            >
              <Navbar />
              <h1 className="text-white font-semibold text-6xl max-w-[70vw] text-center pt-[9vw]">
                Innovating with purpose while Building the future.
              </h1>
              <div className="mt-4 text-[#666666] text-2xl max-w-[67vw] text-center">
                Hi! Welcome to vaidik.tech we are a group thriving in various
                sectors of technology particularly in coding based application we
                also provide hardware and software solutions. I as the founder
                welcome you to my project.
              </div>
              <div className="flex gap-4 mb-2 mt-4">
                <button id="contact" className="text-white border px-4 py-2 rounded-lg">
                  Contact Us
                </button>
                <button id="basic" className="text-black bg-white px-4 py-2 rounded-lg">
                  Not Impressed?
                </button>
              </div>
              <div className="rounded-xl w-[55vw] h-[30vw] border-2 mt-4 border-[#666666] p-4 overflow-hidden">
                <img
                  src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp"
                  alt="Chrome dev tools preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div id="lamp1"></div>
              <div id="lamp2"></div>
            </section>
          </Section>

          {/* Skills Section */}
          <section id='projects'className='bg-black min-h-screen flex flex-col p-16'>
        <h1 className='font-semibold text-5xl mt-11'>Things that may catch your <br></br> attention, our skills</h1>
        <p className='text-xl text-[#666666] mt-2'>Skills are the qualities which form one's personality, along with that they  play an important role in <br></br>knowing oneself here are ours.</p>
        <div className='flex mt-4 gap-6'>
          <div className='border-2 border-[#292929] bg-[#0b0b0b] rounded-lg w-[25vw] h-[22vw] p-4 pt-22 pl-7 pr-2'>
              <img src='/1.webp' className='w-12'></img>
              <h1 className='text-2xl font-semibold mt-2'>Creative brilliance.</h1>
              <p className='text-[#666666]'>We thrive on creative brilliance that extends far beyond just writing code. Our team blends technical precision with imaginative thinking to deliver solutions that not only work flawlessly.</p>
          </div>
          <div className='border-2 border-[#292929] bg-[#0b0b0b] rounded-lg w-[25vw] h-[22vw] p-4 pt-20 pl-7 pr-2'>
              <img src='/2.webp' className='w-12'></img>
              <h1 className='text-2xl font-semibold mt-2'>Critical Thinking</h1>
              <p className='text-[#666666]'>We approach every challenge with sharp critical thinking, breaking down problems to their core. It’s not just about solutions—it’s about smart, efficient ones.At vaidik.tech, we analyze and adapt.
</p>
          </div>
          <div className='border-2 border-[#292929] bg-[#0b0b0b] rounded-lg w-[25vw] h-[22vw] p-4 pt-21 pl-7 pr-2'>
              <img src='/3.webp' className='w-12'></img>
              <h1 className='text-2xl font-semibold mt-2'>Prioritising Effeciency</h1>
              <p className='text-[#666666]'>We prioritize delivering efficient solutions that save both time and resources. Speed matters—but never at the cost of quality.At vaidik.tech, we streamline every process to meet deadlines.</p>
          </div>
          <div id='lamp3'></div>
        </div>

        
        
    </section>

          <section className="flex flex-col items-center justify-center min-h-14"></section>
          <section className="flex flex-col p-16 min-h-screen">
            <div id="lamp4"></div>
          </section>

          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Page;
