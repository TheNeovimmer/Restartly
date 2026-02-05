import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null); // The small dot
  const followerRef = useRef(null); // The larger magnetic circle
  const [isHovering, setIsHovering] = useState(false);
  const [magneticEl, setMagneticEl] = useState(null); // Target element for magnetic effect

  useGSAP(() => {
    // Disable on mobile/touch
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Center initially to avoid jump
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });
    
    // Reveal cursor after a moment
    gsap.to([cursor, follower], { opacity: 1, duration: 0.5, delay: 0.2 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    // Follower physics - slightly slower/heavier
    const followerXTo = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    const followerYTo = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    const onMouseMove = (e) => {
      // Always update exact cursor position
      xTo(e.clientX);
      yTo(e.clientY);

      // Only update follower if NOT magnetic (when magnetic, it sticks to element)
      if (!magneticEl) {
        followerXTo(e.clientX);
        followerYTo(e.clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [magneticEl]); // Re-bind if magnetic state changes logic (light optimization)

  // Hover & Magnetic Logic
  useEffect(() => {
    const onMouseEnter = (e) => {
      setIsHovering(true);
      const target = e.target;
      
      // Check if element wants magnetic effect (buttons, specific links)
      // We can assume nav links and primary buttons are magnetic
      const isMagnetic = target.classList.contains('magnetic') || 
                         target.tagName === 'BUTTON' || 
                         target.closest('a');

      if (isMagnetic) {
         setMagneticEl(target.closest('a') || target);
      }
    };

    const onMouseLeave = () => {
      setIsHovering(false);
      setMagneticEl(null);
    };

    // Add listeners to interactive elements
    const links = document.querySelectorAll('a, button, .interactive');
    links.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnter);
        link.addEventListener('mouseleave', onMouseLeave);
        // Optional: add class for easier selection
        link.classList.add('cursor-hover-target'); 
    });

    return () => {
        links.forEach(link => {
            link.removeEventListener('mouseenter', onMouseEnter);
            link.removeEventListener('mouseleave', onMouseLeave);
        });
    };
  }, [window.location.pathname]); // Re-run on route change

  // Magnetic & Hover States Animation
  useGSAP(() => {
     const follower = followerRef.current;
     const cursor = cursorRef.current;

     if (magneticEl) {
        // Magnetic State: Snap to element center
        const rect = magneticEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        gsap.to(follower, {
            x: centerX,
            y: centerY,
            width: rect.width + 10,
            height: rect.height + 10,
            borderRadius: '12px', // Matches most buttons
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'transparent',
            duration: 0.4,
            ease: "back.out(1.7)"
        });
        
        // Hide small dot when magnetic
        gsap.to(cursor, { scale: 0, duration: 0.2 });
     } else if (isHovering) {
        // Standard Hover (Text/Simple Links)
        gsap.to(follower, {
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: 'transparent',
            borderColor: 'rgba(0, 207, 213, 0.5)', // Primary color
            scale: 1,
            duration: 0.4
        });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
     } else {
        // Default State
        gsap.to(follower, {
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            scale: 1,
            duration: 0.4
        });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
     }
  }, [isHovering, magneticEl]);

  // Return null if on mobile/touch to save rendering
  if (typeof window !== 'undefined' && (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024)) return null;

  return (
    <>
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 border border-white/30 rounded-full pointer-events-none z-[9999] backdrop-blur-[1px] transition-colors hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
