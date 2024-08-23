"use client";

import { useEffect, useRef } from 'react';

const ScrollIndicator = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const indicator = indicatorRef.current;
      if (indicator) {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / docHeight) * 100;
        const steps = indicator.querySelectorAll('.step');
        const activeStep = Math.round((scrolled / 100) * (steps.length - 1));

        steps.forEach((step, index) => {
          step.classList.remove('active', 'semi-active');
          if (index === activeStep) {
            step.classList.add('active');
          } else if (index === activeStep - 1 || index === activeStep + 1) {
            step.classList.add('semi-active');
          }
        });
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator" ref={indicatorRef}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="step"></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;