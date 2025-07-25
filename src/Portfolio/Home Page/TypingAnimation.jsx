import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingAnimation = () => {
  return (
    <span className="text-blue-400 font-semibold text-4xl font-mono">
      <Typewriter
        words={['React Developer', 'Frontend Engineer', 'Java Developer']}
        loop={0}
        cursor
        cursorStyle='|' 
        typeSpeed={150}
        deleteSpeed={100}
        delaySpeed={1000}

      />
    </span>
  );
};

export default TypingAnimation;
