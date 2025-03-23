'use client';

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('load', scrollToTop);
    
    // Cleanup
    return () => {
      window.removeEventListener('load', scrollToTop);
    };
  }, []);
  
  return null;
}