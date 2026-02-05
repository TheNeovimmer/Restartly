import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const { t } = useTranslation();
  const container = useRef();
  const terminalContainer = useRef();
  const badgeRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const terminalRef = useRef();
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');
  
  const terminalLines = [
    { text: '$ npm i -g restartly', type: 'command', delay: 500 },
    { text: '✓ Package installed successfully', type: 'success', delay: 800 },
    { text: 'ℹ Detecting project files...', type: 'info', delay: 600 },
    { text: 'ℹ Framework: Next.js detected', type: 'info', delay: 400 },
    { text: '✓ Watcher started on ./src', type: 'success', delay: 300 },
    { text: '↺ Ready for file changes', type: 'reload', delay: 500 }
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      const timer = setTimeout(() => {
        setIsTyping(true);
        setDisplayText('');
        
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex <= line.text.length) {
            setDisplayText(line.text.substring(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
            setTimeout(() => {
              setCurrentLine(prev => prev + 1);
              setDisplayText('');
            }, line.delay);
          }
        }, 30);
      }, currentLine === 0 ? 1000 : 200);
      
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    
    tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.8 })
      .from(titleRef.current, { y: 30, opacity: 0 }, '-=0.4')
      .from(subtitleRef.current, { y: 20, opacity: 0 }, '-=0.6')
      .from(terminalContainer.current, { scale: 0.95, y: 40, opacity: 0, duration: 1.2 }, '-=0.8');
  }, { scope: container });

  const getLineColor = (type) => {
    switch(type) {
      case 'command': return 'text-green-400';
      case 'success': return 'text-green-400';
      case 'info': return 'text-blue-400';
      case 'reload': return 'text-secondary';
      default: return 'text-text';
    }
  };

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg via-bg to-bg pt-24">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header Content */}
        <div className="text-center mb-12">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-border text-xs font-semibold tracking-wider text-primary uppercase">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {t('hero.badge')}
          </div>
          
          <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-text leading-[1.1]">
            {t('hero.title_start')} <br />
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Restartly</span>
          </h1>
          
          <p ref={subtitleRef} className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted mb-12 leading-relaxed">
            <Trans i18nKey="hero.subtitle" components={{ b: <b className="text-text font-semibold" /> }} />
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => navigator.clipboard.writeText('npm i -g restartly')}
              className="group relative w-full sm:w-auto flex items-center justify-between glass border border-border rounded-xl px-6 py-4 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center space-x-3">
                <span className="text-muted/40 font-mono">$</span>
                <span className="text-text font-mono">npm i -g restartly</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </button>
            
            <Link 
              to="/docs" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-[0_0_30px_rgba(0,207,213,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {t('hero.get_started')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Modern Terminal */}
        <div ref={terminalContainer} className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-border">
            {/* Terminal Header */}
            <div className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted/40 font-mono">restartly@localhost:~$</span>
              </div>
              <div className="w-16" />
            </div>
            
            {/* Terminal Content */}
            <div ref={terminalRef} className="bg-[#0a0a0c] p-6 font-mono text-sm leading-relaxed min-h-[300px]">
              <div className="text-muted/40 mb-4">// Installation & Setup</div>
              
              {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                <div key={index} className={`${getLineColor(line.type)} mb-2 ${index === currentLine ? 'animate-pulse' : ''}`}>
                  {index === currentLine ? displayText : line.text}
                  {index === currentLine && isTyping && <span className="inline-block w-2 h-4 bg-text animate-pulse ml-1" />}
                </div>
              ))}
              
              {currentLine >= terminalLines.length && (
                <div className="flex items-center text-green-400 animate-pulse">
                  <span>$</span>
                  <span className="ml-2">_</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Terminal Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Framework Support', value: 'All', color: 'text-blue-400' },
              { label: 'File Watcher', value: 'Live', color: 'text-green-400' },
              { label: 'Restart Time', value: '<100ms', color: 'text-secondary' },
              { label: 'Zero Config', value: '✓', color: 'text-primary' }
            ].map((stat, index) => (
              <div key={index} className="glass border border-border rounded-xl p-4 text-center">
                <div className={`text-xs text-muted/40 mb-1`}>{stat.label}</div>
                <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
