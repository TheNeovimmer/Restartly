import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useGSAP(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Initial set centered
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        const onMouseMove = (e) => {
             gsap.to(cursor, { 
                x: e.clientX, 
                y: e.clientY, 
                duration: 0.1, 
                ease: 'power2.out' 
            });
             gsap.to(follower, { 
                x: e.clientX, 
                y: e.clientY, 
                duration: 0.5, 
                ease: 'power2.out' 
            });
        };

        const onMouseEnterLink = () => setIsHovering(true);
        const onMouseLeaveLink = () => setIsHovering(false);

        window.addEventListener('mousemove', onMouseMove);

        // Add listeners to clickable elements
        const updateListeners = () => {
            const links = document.querySelectorAll('a, button, .cursor-hover');
            links.forEach(link => {
                link.addEventListener('mouseenter', onMouseEnterLink);
                link.addEventListener('mouseleave', onMouseLeaveLink);
            });
            return links; // Return for cleanup if needed, though rarely for global cursor
        };

        const links = updateListeners(); // Initial bind

        // Using MutationObserver to handle dynamic content
         const observer = new MutationObserver(() => {
            updateListeners();
        });
        
        observer.observe(document.body, { childList: true, subtree: true });


        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
            observer.disconnect();
        };
    }, []);

    useGSAP(() => {
         const cursor = cursorRef.current;
        const follower = followerRef.current;
        
        if (isHovering) {
            gsap.to(cursor, { scale: 0, duration: 0.3 });
            gsap.to(follower, { scale: 1.5, borderColor: 'transparent', backgroundColor: 'rgba(59, 130, 246, 0.3)', duration: 0.3 }); // Primary color semi-transparent
        } else {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, borderColor: '#3b82f6', backgroundColor: 'transparent', duration: 0.3 });
        }
    }, [isHovering]);

    return (
        <>
            <div 
                ref={followerRef} 
                className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-9999 mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div 
                ref={cursorRef} 
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-9999 mix-blend-difference"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    );
};

export default CustomCursor;
