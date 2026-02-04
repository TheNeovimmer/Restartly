import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// --- Visual Components ---

const UniversalVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-16 h-16 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
    <div className="absolute w-10 h-10 border border-purple-500/30 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
    {/* Orbiting dots */}
    <div className="absolute w-full h-full animate-[spin_4s_linear_infinite]">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
    </div>
  </div>
);

const CliVisual = () => (
  <div className="w-3/4 h-2/3 bg-[#1e1e1e] rounded-lg border border-white/10 p-2 flex flex-col shadow-lg">
    <div className="flex space-x-1.5 mb-2">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
    </div>
    <div className="font-mono text-[10px] text-gray-300">
      <span className="text-green-400">➜</span> rs<span className="animate-pulse">_</span>
    </div>
  </div>
);

const FrameworkVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center perspective-[500px]">
     {/* Stacked layers */}
     <div className="absolute w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg transform -rotate-12 translate-y-2 translate-x-2" />
     <div className="absolute w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg transform rotate-6 translate-y-0 translate-x-0" />
     <div className="absolute w-12 h-12 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm transform -translate-y-2 -translate-x-2 flex items-center justify-center">
        <div className="w-4 h-4 bg-gradient-to-tr from-blue-400 to-purple-400 rounded" />
     </div>
  </div>
);

const EnvVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-green-500/5 blur-xl rounded-full" />
    <div className="w-10 h-14 border-2 border-green-500/30 rounded-lg flex flex-col items-center justify-center relative overflow-hidden bg-white/5">
       <div className="w-2 h-2 bg-green-500 rounded-full mb-1 shadow-[0_0_10px_#22c55e]" />
       <div className="w-4 h-0.5 bg-green-500/30 rounded" />
    </div>
    {/* Scanning line */}
    <div className="absolute w-16 h-[1px] bg-green-400/50 animate-[scan_2s_ease-in-out_infinite] top-1/2 left-1/2 -translate-x-1/2" />
  </div>
);

const DebounceVisual = () => (
  <div className="flex items-end justify-center space-x-1 h-12 pb-2">
    {[1, 2, 3, 4, 3].map((h, i) => (
      <div 
        key={i} 
        className="w-1.5 bg-orange-400/80 rounded-t-sm"
        style={{ 
          height: `${h * 20}%`,
          animation: `equalizer 1s ease-in-out infinite ${i * 0.1}s` 
        }} 
      />
    ))}
  </div>
);

const RunnerVisual = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <svg className="w-12 h-12 text-gray-500/20 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
    </svg>
    <div className="absolute">
       <div className="w-3 h-3 bg-red-500 rounded-sm rotate-45 animate-ping opacity-20" />
       <div className="absolute top-0 left-0 w-3 h-3 bg-red-500 rounded-sm rotate-45" />
    </div>
  </div>
);


const FeatureCard = ({ Visual, title, description, cardRef }) => (
  <div ref={cardRef} className="glass p-8 rounded-3xl group hover:border-primary/40 hover:bg-white/5 transition-all duration-500 opacity-0 relative overflow-hidden">
    {/* Abstract Glow Background */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
    
    <div className="w-16 h-16 bg-card/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 relative z-10">
      <Visual />
    </div>
    
    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
    <p className="text-muted leading-relaxed text-sm relative z-10">
      {description}
    </p>
  </div>
);

const Features = () => {
  const container = useRef();
  const titleRef = useRef();
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const features = [
    {
      Visual: UniversalVisual,
      title: "Universal Support",
      description: "V1.3.2 Native support for Bun and Node.js. Automatically switches runtimes based on your project structure."
    },
    {
      Visual: CliVisual,
      title: "Interactive CLI",
      description: "Type 'rs' to restart manually or use '--list' to see all available commands and flags instantly."
    },
    {
      Visual: FrameworkVisual,
      title: "Framework Savvy",
      description: "Intelligent auto-detection for Hono, Next.js, Remix, Astro, and more. It knows how to start your app better than you do."
    },
    {
      Visual: EnvVisual,
      title: "Environment Ready",
      description: "Built-in .env support via dotenv. Your secrets are automatically injected into your development process."
    },
    {
      Visual: DebounceVisual,
      title: "Smart Debouncing",
      description: "Intelligently groups rapid-fire file changes to prevent redundant restarts and keep your focus sharp."
    },
    {
      Visual: RunnerVisual,
      title: "Reliable Runner",
      description: "Advanced child process management with custom signal handling (SIGTERM/SIGKILL) for a tidy environment."
    }
  ];

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: titleRef.current, // Fixed: trigger is title, not container for strictly title anim
        start: 'top 90%',
      }
    });

    gsap.to(cardRefs.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });
    
    // Initial position for cards
    gsap.set(cardRefs.current, { y: 40, opacity: 0 });
  }, { scope: container });

  return (
    <section ref={container} id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-6">Ultra Capabilities</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Restartly V1.3.2 brings a new level of automation and style to your daily workflow.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} cardRef={addToRefs} />
        ))}
      </div>
      
      {/* Inline styles for custom keyframes if not in glob css */}
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translate(-50%, -15px); opacity: 0; }
          50% { transform: translate(-50%, 15px); opacity: 1; }
        }
        @keyframes equalizer {
          0%, 100% { height: 10%; }
          50% { height: 80%; }
        }
      `}</style>
    </section>
  );
};

export default Features;
