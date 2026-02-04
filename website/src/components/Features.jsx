import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, description, cardRef }) => (
  <div ref={cardRef} className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all duration-300 opacity-0">
    <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary/10 transition-colors border border-border">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-muted leading-relaxed text-sm">
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
      icon: "🔍",
      title: "Auto-Detection",
      description: "V1.1.0 Smart Entry Point detection. Automatically finds index.js, server.js, or app.js so you can just run 'restartly'."
    },
    {
      icon: "⚙️",
      title: "Config Support",
      description: "Manage your watch paths, ignores, and custom commands in a unified restartly.json file for seamless project integration."
    },
    {
      icon: "🚀",
      title: "Built for Speed",
      description: "Leverages native-level file system events for near-instant detection and process reloads."
    },
    {
      icon: "🎨",
      title: "Premium CLI UI",
      description: "A stunning terminal experience with custom ASCII art and high-contrast logging that looks as good as it performs."
    },
    {
      icon: "⚡",
      title: "Smart Debouncing",
      description: "Intelligently groups rapid-fire file changes to prevent redundant restarts and keep your focus sharp."
    },
    {
      icon: "🛡",
      title: "Reliable Runner",
      description: "Advanced child process management with clean SIGTERM/SIGINT handling for a tidy development environment."
    }
  ];

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
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
          Restartly V1.1.0 brings a new level of automation and style to your daily workflow.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} cardRef={addToRefs} />
        ))}
      </div>
    </section>
  );
};

export default Features;
