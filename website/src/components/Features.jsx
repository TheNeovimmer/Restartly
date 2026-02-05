import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

// --- Terminal-Style Icons matching Hero Design ---

const TerminalWindow = ({ children, title, className = '' }) => (
  <div className={`glass rounded-xl overflow-hidden border border-border shadow-2xl ${className}`}>
    <div className="bg-card/80 backdrop-blur-sm border-b border-border px-3 py-2 flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      {title && (
        <span className="text-xs text-muted/40 font-mono ml-2 flex-1">{title}</span>
      )}
    </div>
    <div className="bg-[#0a0a0c] p-3 font-mono text-xs">
      {children}
    </div>
  </div>
);

const UniversalIcon = () => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <TerminalWindow title="universal.json" className="w-full max-w-[140px] scale-90">
      <div className="text-green-400">✓</div>
      <div className="text-blue-400 mt-1">JS, TS, Go...</div>
      <div className="text-muted/40 mt-2">framework</div>
      <div className="text-primary font-bold">Universal</div>
    </TerminalWindow>
  </div>
);

const CliIcon = () => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <TerminalWindow title="~" className="w-full max-w-[140px] scale-90">
      <div className="text-muted/40">$ restartly --help</div>
      <div className="text-green-400 mt-2">--watch, -w</div>
      <div className="text-green-400">--ignore, -i</div>
      <div className="text-green-400">--exec, -x</div>
    </TerminalWindow>
  </div>
);

const FrameworkIcon = () => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <TerminalWindow title="detection.log" className="w-full max-w-[140px] scale-90">
      <div className="text-blue-400">ℹ Detecting...</div>
      <div className="text-green-400 mt-2">✓ Next.js</div>
      <div className="text-green-400">✓ Express</div>
      <div className="text-green-400">✓ Fastify</div>
    </TerminalWindow>
  </div>
);

const EnvIcon = () => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <TerminalWindow title=".env" className="w-full max-w-[140px] scale-90">
      <div className="text-muted/40"># Config</div>
      <div className="text-yellow-300 mt-1">PORT=3000</div>
      <div className="text-yellow-300">NODE_ENV=dev</div>
      <div className="text-green-400 mt-2">✓ Preserved</div>
    </TerminalWindow>
  </div>
);

const DebounceIcon = () => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <TerminalWindow title="debounce.config" className="w-full max-w-[140px] scale-90">
      <div className="text-muted/40">// Smart delay</div>
      <div className="mt-2 flex items-center gap-1">
        <span className="text-primary">█</span>
        <span className="text-primary">█</span>
        <span className="text-secondary">█</span>
        <span className="text-muted/30">█</span>
        <span className="text-muted/30">█</span>
      </div>
      <div className="text-green-400 mt-2 text-[10px]">200ms optimized</div>
    </TerminalWindow>
  </div>
);

const RunnerIcon = () => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <TerminalWindow title="process.log" className="w-full max-w-[140px] scale-90">
      <div className="text-green-400">↺ Restarting</div>
      <div className="text-blue-400 mt-1">PID: 8472</div>
      <div className="text-muted/40 mt-2">Uptime:</div>
      <div className="text-primary font-bold">&lt;100ms</div>
    </TerminalWindow>
  </div>
);

const Features = () => {
  const { t } = useTranslation();
  const container = useRef();
  const headerRef = useRef();
  const horizontalSection = useRef();
  const trackRef = useRef();

  const features = [
    {
      Icon: UniversalIcon,
      title: t('features.cards.universal.title'),
      description: t('features.cards.universal.description'),
      gradient: 'from-primary/20 to-secondary/10',
      borderColor: 'hover:border-primary/50',
      iconBg: 'bg-primary/5',
      number: '01',
      color: 'text-primary'
    },
    {
      Icon: CliIcon,
      title: t('features.cards.cli.title'),
      description: t('features.cards.cli.description'),
      gradient: 'from-secondary/20 to-primary/10',
      borderColor: 'hover:border-secondary/50',
      iconBg: 'bg-secondary/5',
      number: '02',
      color: 'text-secondary'
    },
    {
      Icon: FrameworkIcon,
      title: t('features.cards.framework.title'),
      description: t('features.cards.framework.description'),
      gradient: 'from-primary/15 to-secondary/15',
      borderColor: 'hover:border-primary/50',
      iconBg: 'bg-primary/5',
      number: '03',
      color: 'text-primary'
    },
    {
      Icon: EnvIcon,
      title: t('features.cards.env.title'),
      description: t('features.cards.env.description'),
      gradient: 'from-green-500/10 to-primary/10',
      borderColor: 'hover:border-green-500/50',
      iconBg: 'bg-green-500/5',
      number: '04',
      color: 'text-green-400'
    },
    {
      Icon: DebounceIcon,
      title: t('features.cards.debounce.title'),
      description: t('features.cards.debounce.description'),
      gradient: 'from-secondary/15 to-primary/20',
      borderColor: 'hover:border-secondary/50',
      iconBg: 'bg-secondary/5',
      number: '05',
      color: 'text-secondary'
    },
    {
      Icon: RunnerIcon,
      title: t('features.cards.runner.title'),
      description: t('features.cards.runner.description'),
      gradient: 'from-primary/20 to-secondary/20',
      borderColor: 'hover:border-primary/50',
      iconBg: 'bg-primary/5',
      number: '06',
      color: 'text-primary'
    }
  ];

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current?.children || [], {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    // Horizontal scroll animation for desktop
    const mm = gsap.matchMedia();
    
    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      const cards = track?.querySelectorAll('.feature-card');
      
      if (!track || !cards?.length) return;

      const totalWidth = track.scrollWidth - window.innerWidth + 200;

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      cards.forEach((card, i) => {
        gsap.from(card, {
          scale: 0.9,
          opacity: 0.5,
          scrollTrigger: {
            trigger: card,
            start: 'left center',
            end: 'center center',
            scrub: true,
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section ref={container} id="features" className="relative overflow-hidden bg-bg">
      {/* Background Effects matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Header Section */}
      <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 lg:pb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-border text-xs font-semibold tracking-wider text-primary uppercase">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Features
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('features.title')}
            </span>
          </h2>
          
          <p className="text-muted text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>
      </div>

      {/* Desktop: Horizontal Scrolling Cards */}
      <div ref={horizontalSection} className="hidden lg:block relative h-screen">
        <div ref={trackRef} className="feature-track flex items-center gap-8 px-8 h-full">
          <div className="flex-shrink-0 w-[15vw]" />
          
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card flex-shrink-0 w-[70vw] h-[70vh] relative"
            >
              <div className={`h-full glass rounded-3xl border border-border ${feature.borderColor} transition-all duration-500 p-8 xl:p-12 overflow-hidden group relative hover:shadow-[0_0_40px_rgba(0,207,213,0.15)]`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 h-full flex flex-col lg:flex-row gap-8 xl:gap-12">
                  <div className="lg:w-2/5 flex items-center justify-center">
                    <div className={`w-56 h-40 xl:w-64 xl:h-44 ${feature.iconBg} rounded-2xl flex items-center justify-center border border-border/50 group-hover:scale-105 group-hover:border-primary/30 transition-all duration-500 shadow-2xl`}>
                      <feature.Icon />
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 flex flex-col justify-center">
                    <div className="text-6xl xl:text-8xl font-black text-white/5 mb-4 group-hover:text-primary/10 transition-colors duration-500">
                      {feature.number}
                    </div>
                    
                    <h3 className={`text-3xl xl:text-4xl font-bold mb-6 text-text group-hover:${feature.color} transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted text-lg xl:text-xl leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <span>Learn more</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[15vw]" />
        </div>
      </div>

      {/* Mobile/Tablet: Stacked Cards */}
      <div className="lg:hidden relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className={`glass rounded-2xl border border-border ${feature.borderColor} transition-all duration-500 overflow-hidden relative hover:shadow-[0_0_30px_rgba(0,207,213,0.1)]`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-32 h-24 sm:w-40 sm:h-28 ${feature.iconBg} rounded-xl flex items-center justify-center border border-border/50 group-hover:scale-105 group-hover:border-primary/30 transition-all duration-500 shadow-xl flex-shrink-0 overflow-hidden`}>
                      <feature.Icon />
                    </div>
                    <span className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                      {feature.number}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 text-text group-hover:${feature.color} transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="hidden lg:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass rounded-full px-4 py-2 border border-border flex items-center gap-3">
          <span className="text-xs text-muted font-medium">Scroll to explore</span>
          <div className="flex gap-1">
            {features.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-border" />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .feature-track {
          will-change: transform;
        }
        
        .feature-card {
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
};

export default Features;
