"use client";
import { useState } from 'react';

export default function Home() {
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVote = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ candidate: 'Vaidik' }),
      });

      if (res.ok) {
        setVoted(true);
      }
    } catch (err) {
      console.error('Vote failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#2e003e] via-[#421c48] to-black text-white text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Make it easy. Vote for Vaidik!
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-6">
        I'm Vaidik from grade 9, running for Head Boy, Sports Captain, and House Captain. Your anonymous vote matters.
      </p>
      {!voted ? (
        <button
          onClick={handleVote}
          disabled={loading}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          {loading ? 'Voting...' : 'Vote Now'}
        </button>
      ) : (
        <p className="text-green-400 font-bold text-xl">✅ Vote Submitted Anonymously!</p>
      )}
    </main>
  );
}
