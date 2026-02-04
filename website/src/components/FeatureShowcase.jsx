import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FeatureShowcase = () => {
  const container = useRef();
  const section1 = useRef();
  const section2 = useRef();

  useGSAP(() => {
    const sections = [section1.current, section2.current];
    
    sections.forEach((section) => {
      const content = section.querySelector('.content');
      const visual = section.querySelector('.visual');
      
      gsap.from(content, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      });
      
      gsap.from(visual, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16 md:space-y-32 overflow-hidden">
      {/* Auto-Detection Showcase */}
      <section ref={section1} className="flex flex-col lg:flex-row items-center gap-16">
        <div className="content lg:w-1/2">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Universal Intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-text">Zero-Config <br /><span className="text-blue-400">Framework Magic</span></h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Restartly V1.3.2 is built for the modern web. It intelligently detects your framework and runtime—whether it's Bun, Hono, Next.js, or Remix—and handles the execution so you don't have to.
          </p>
          <ul className="space-y-4">
            {['bun.lockb', 'server.ts', 'app.js', 'main.ts'].map((file, i) => (
              <li key={i} className="flex items-center space-x-3 text-text">
                <span className="text-blue-400">✔</span>
                <code className="bg-card px-2 py-1 rounded text-sm border border-border">{file}</code>
                <span className="text-muted/40 font-mono text-xs">detected</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="visual lg:w-1/2 flex justify-center">
          <div className="relative glass p-4 rounded-3xl w-full max-w-md">
            <div className="bg-card rounded-2xl p-6 font-mono text-sm space-y-3 border border-border">
              <div className="flex items-center space-x-2 text-muted/40 mb-4 border-b border-border pb-2">
                <span>$</span>
                <span>restartly</span>
              </div>
              <div className="text-blue-400">ℹ Detected Bun project. Using "bun" runtime.</div>
              <div className="text-blue-400">ℹ Starting: bun run server.ts</div>
              <div className="text-green-400">✔ Watching paths: .</div>
              <div className="animate-pulse flex space-x-2">
                <div className="h-4 w-1 bg-muted/40"></div>
                <div className="h-4 w-32 bg-card rounded border border-border"></div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Config Showcase */}
      <section ref={section2} className="flex flex-col lg:flex-row-reverse items-center gap-16">
        <div className="content lg:w-1/2">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold tracking-wider text-secondary uppercase">
            Project-Specific
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-text">Unified <br /><span className="text-secondary">Configuration</span></h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Take control of your workflow with <code className="text-text bg-card border border-border px-1 rounded">restartly.json</code>. Define custom watch paths, ignore complex patterns, and execution commands once.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-2xl text-center">
              <div className="text-xs text-muted/40 mb-1">Debounce</div>
              <div className="text-secondary font-bold">200ms</div>
            </div>
            <div className="glass p-4 rounded-2xl text-center">
              <div className="text-xs text-muted/40 mb-1">Standard</div>
              <div className="text-secondary font-bold">ESM</div>
            </div>
          </div>
        </div>
        <div className="visual lg:w-1/2 flex justify-center">
          <div className="relative glass p-4 rounded-3xl w-full max-w-md">
            <div className="bg-[#1e1e1e] rounded-2xl p-6 font-mono text-sm overflow-hidden">
              <div className="text-gray-400 text-xs mb-4 select-none italic">// restartly.json</div>
              <div className="space-y-1">
                <div className="flex"><span className="text-gray-400">1</span><span className="ml-4 text-white">{"{"}</span></div>
                <div className="flex"><span className="text-gray-400">2</span><span className="ml-8 text-[#9cdcf0]">"script"</span><span className="text-white">: </span><span className="text-[#ce9178]">"src/main.ts"</span><span className="text-white">,</span></div>
                <div className="flex"><span className="text-gray-400">3</span><span className="ml-8 text-[#9cdcf0]">"watch"</span><span className="text-white">: [</span><span className="text-[#ce9178]">"src"</span><span className="text-white">, </span><span className="text-[#ce9178]">"config"</span><span className="text-white">],</span></div>
                <div className="flex"><span className="text-gray-400">4</span><span className="ml-8 text-[#9cdcf0]">"ignore"</span><span className="text-white">: [</span><span className="text-[#ce9178]">"dist"</span><span className="text-white">],</span></div>
                <div className="flex"><span className="text-gray-400">5</span><span className="ml-8 text-[#9cdcf0]">"exec"</span><span className="text-white">: </span><span className="text-[#ce9178]">"tsx"</span></div>
                <div className="flex"><span className="text-gray-400">6</span><span className="ml-4 text-white">{"}"}</span></div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureShowcase;
