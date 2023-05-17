import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let txt = "";
    let intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        txt += text[currentIndex]
        setDisplayText(txt);
        ++currentIndex;
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed]);

  return <span>{displayText}</span>;
};

export default TypingAnimation;