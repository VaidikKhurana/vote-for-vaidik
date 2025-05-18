"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FounderPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="founder"
      className="min-h-screen flex flex-col justify-center items-center p-16 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden"
    >
      {/* Neon Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/neon-grid.png')] bg-cover opacity-10 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, type: "spring", stiffness: 30 }}
        className="text-center z-10"
      >
        <h1 className="font-extrabold text-6xl md:text-7xl text-[#ff4df8] drop-shadow-[0_0_10px_#ff4df8]">
          The Mind Behind <br />
          <span className="text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">vaidik.tech</span>
        </h1>

        <p className="text-xl md:text-2xl mt-4 text-gray-300 font-light">
          Passion drives <span className="text-pink-400">innovation</span>, innovation creates
          <span className="text-blue-400"> impact</span>, impact defines <span className="text-purple-400">legacy</span>.
        </p>

        <img
          src="/founder-vc.png"
          alt="Founder looking cool AF"
          className="w-64 h-64 mt-10 rounded-full border-4 border-[#ff4df8] shadow-[0_0_20px_#ff4df8]"
        />
      </motion.div>
    </section>
  );
};

export default FounderPage;
