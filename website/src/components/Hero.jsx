import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const actionsRef = useRef();
  const terminalRef = useRef();
  const badgeRef = useRef();
  const glow1Ref = useRef();
  const glow2Ref = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    
    tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.8 })
      .from(titleRef.current, { y: 30, opacity: 0 }, '-=0.4')
      .from(descRef.current, { y: 20, opacity: 0 }, '-=0.6')
      .from(actionsRef.current, { y: 20, opacity: 0 }, '-=0.6')
      .from(terminalRef.current, { scale: 0.95, y: 40, opacity: 0, duration: 1.2 }, '-=0.8');

    // Subtle parallax for glows
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(glow1Ref.current, { x: xPos, y: yPos, duration: 1, ease: 'power2.out' });
      gsap.to(glow2Ref.current, { x: -xPos, y: -yPos, duration: 1, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: container });

  return (
    <section ref={container} className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div ref={glow1Ref} className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div ref={glow2Ref} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div ref={badgeRef} className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10 text-xs font-semibold tracking-wider text-primary uppercase">
          Meet the new standard for Node.js development
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
          Develop faster with <br />
          <span className="text-gradient">Restartly</span>
        </h1>
        
        <p ref={descRef} className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12">
          A high-performance, developer-friendly automatic reload tool. 
          Built for speed, styled for impact, and designed to keep you in the flow.
        </p>

        <div ref={actionsRef} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4 font-mono text-sm group hover:border-primary/50 transition-all">
            <span className="text-white/40">$</span>
            <span className="text-white">npm i -g restartly</span>
            <button 
              onClick={() => navigator.clipboard.writeText('npm i -g restartly')}
              className="ml-4 p-2 rounded-lg hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
          
          <a 
            href="/docs" 
            className="px-8 py-4 rounded-xl bg-gradient text-white font-bold hover:shadow-[0_0_20px_rgba(0,207,213,0.4)] transition-all transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Mock Terminal Visual */}
        <div ref={terminalRef} className="mt-20 max-w-4xl mx-auto glass rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center space-x-2 text-left">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-xs text-white/30 ml-2 font-mono">restartly — 80x24</span>
          </div>
          <div className="p-8 text-left font-mono text-sm leading-relaxed overflow-x-auto">
            <pre className="text-primary tracking-tighter mb-4">
{`██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ████████╗██╗     ██╗   ██╗
  ██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██║     ╚██╗ ██╔╝
  ██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝   ██║   ██║      ╚████╔╝ 
  ██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ██║       ╚██╔╝  
  ██║  ██║███████╗███████║   ██║   ██║  ██║██║  ██║   ██║   ███████╗   ██║   
  ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝   ╚═╝   `}
            </pre>
            <div className="space-y-1">
              <p><span className="text-blue-400">ℹ</span> <span className="text-white">Starting: node server.js</span></p>
              <p><span className="text-green-400">✔</span> <span className="text-white">Watching paths: .</span></p>
              <p><span className="text-magenta-400">↺</span> <span className="text-magenta-400">Reloading automatically...</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
