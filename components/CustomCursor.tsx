"use client";

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorCirclesRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const TAIL_LENGTH = 30;
    let mouseX = 0;
    let mouseY = 0;
    let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });
    
    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    
    function onClick(event: MouseEvent) {
      for (let i = 0; i < TAIL_LENGTH; i++) {
        cursorHistory[i].x += Math.random() * 100 - 50;
        cursorHistory[i].y += Math.random() * 100 - 50;
      }
    }
    
    function initCursor() {
      if (!cursorRef.current) return;
      
      // Clear any existing elements
      cursorRef.current.innerHTML = '';
      
      // Create cursor circles
      for (let i = 0; i < TAIL_LENGTH; i++) {
        let div = document.createElement("div");
        div.classList.add("cursor-circle");
        cursorRef.current.appendChild(div);
      }
      
      cursorCirclesRef.current = Array.from(document.querySelectorAll(".cursor-circle")) as HTMLDivElement[];
    }
    
    function updateCursor() {
      cursorHistory.shift();
      cursorHistory.push({ x: mouseX, y: mouseY });
      
      for (let i = 0; i < TAIL_LENGTH; i++) {
        let current = cursorHistory[i];
        let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
        let xDiff = next.x - current.x;
        let yDiff = next.y - current.y;
        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;
        
        if (cursorCirclesRef.current[i]) {
          cursorCirclesRef.current[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
        }
      }
      
      requestAnimationFrame(updateCursor);
    }
    
    // Initialize
    initCursor();
    updateCursor();
    
    // Add event listeners
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("click", onClick, false);
    
    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", onMouseMove, false);
      document.removeEventListener("click", onClick, false);
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="goo" version="1.1" width="100%">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
      <div id="cursor" ref={cursorRef}></div>
    </>
  );
};

export default CustomCursor;