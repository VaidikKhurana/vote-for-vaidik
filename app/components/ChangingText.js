'use client';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ChangingText = ({
  initialText = 'We build with creativity.',
  changedText = 'We innovate with impact.',
  className = '',
  onChangeComplete = () => {}
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [text, setText] = useState(initialText);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setText(changedText);
        onChangeComplete(); // 👈 properly call the function
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <h1 ref={ref} className={`transition-all duration-700 ${className}`}>
      {text}
    </h1>
  );
};

export default ChangingText;
