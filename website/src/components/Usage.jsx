import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation, Trans } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const TerminalWindow = ({ children, title, className = '' }) => (
  <div className={`glass rounded-2xl overflow-hidden border border-border ${className}`}>
    {title && (
      <div className="bg-card/80 backdrop-blur-sm border-b border-border px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-muted/40 font-mono">{title}</span>
        <div className="w-16" />
      </div>
    )}
    <div className="bg-[#0a0a0c] p-4 sm:p-5 font-mono text-xs sm:text-sm">
      {children}
    </div>
  </div>
);

const UsageExample = ({ title, cmd, description, itemRef }) => (
  <div ref={itemRef} className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:bg-card/80 transition-all opacity-0 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,207,213,0.1)]">
    <h4 className="text-text font-semibold mb-2 text-base sm:text-lg">{title}</h4>
    <p className="text-muted text-sm mb-3 sm:mb-4">{description}</p>
    <TerminalWindow>
      <span className="text-muted/30 mr-2">$</span>
      <code className="text-primary">{cmd}</code>
    </TerminalWindow>
  </div>
);

const Usage = () => {
  const { t } = useTranslation();
  const container = useRef();
  const leftCol = useRef();
  const rightCol = useRef();
  const exampleRefs = useRef([]);
  exampleRefs.current = [];

  const addToRefs = (el) => {
    if (el && !exampleRefs.current.includes(el)) {
      exampleRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(leftCol.current, {
      x: -30,
      opacity: 0,
      scrollTrigger: {
        trigger: leftCol.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from(rightCol.current, {
      x: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: rightCol.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.to(exampleRefs.current, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: leftCol.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.set(exampleRefs.current, { y: 20, opacity: 0 });
  }, { scope: container });

  return (
    <section ref={container} id="usage" className="py-16 sm:py-20 lg:py-24 bg-card/10 overflow-hidden border-y border-border relative">
      {/* Background matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div ref={leftCol}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-text">{t('usage.title')}</h2>
            <p className="text-muted text-base sm:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              <Trans i18nKey="usage.subtitle" components={[<code className="text-primary bg-primary/10 px-1 sm:px-1.5 py-0.5 rounded text-sm" />]} />
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <UsageExample 
                itemRef={addToRefs}
                title={t('usage.examples.watch.title')}
                description={t('usage.examples.watch.description')}
                cmd="restartly app.js -w src lib"
              />
              <UsageExample 
                itemRef={addToRefs}
                title={t('usage.examples.ignore.title')}
                description={t('usage.examples.ignore.description')}
                cmd='restartly app.js -i "**/logs/*" "**/*.tmp"'
              />
              <UsageExample 
                itemRef={addToRefs}
                title={t('usage.examples.zero.title')}
                description={t('usage.examples.zero.description')}
                cmd='restartly'
              />
            </div>
          </div>
          
          <div ref={rightCol} className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] sm:blur-[100px] -z-10 rounded-full" />
            <div className="glass rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-2xl">
              <div className="bg-card/80 backdrop-blur-sm border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-muted/40 font-mono">CLI Options</span>
                <div className="w-12 sm:w-16" />
              </div>
              
              <div className="bg-[#0a0a0c] p-6 sm:p-8 md:p-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-text">{t('usage.cli.title')}</h3>
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <code className="text-primary font-bold text-sm sm:text-base">--watch, -w</code>
                      <span className="text-muted/40 text-xs">Default: .</span>
                    </div>
                    <div className="w-full bg-bg h-1.5 sm:h-2 rounded-full overflow-hidden border border-border">
                      <div className="bg-primary h-full w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <code className="text-primary font-bold text-sm sm:text-base">--ignore, -i</code>
                      <span className="text-muted/40 text-xs">Default: node_modules, .git</span>
                    </div>
                    <div className="w-full bg-bg h-1.5 sm:h-2 rounded-full overflow-hidden border border-border">
                      <div className="bg-primary h-full w-[85%]" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <code className="text-primary font-bold text-sm sm:text-base">--exec, -x</code>
                      <span className="text-muted/40 text-xs">Default: node</span>
                    </div>
                    <div className="w-full bg-bg h-1.5 sm:h-2 rounded-full overflow-hidden border border-border">
                      <div className="bg-primary h-full w-[70%]" />
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-8">
                    <div className="bg-primary/10 border border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-sm">
                      <p className="text-text opacity-80 leading-relaxed italic">
                        {t('usage.cli.quote')}
                      </p>
                      <div className="mt-3 sm:mt-4 font-bold text-primary text-sm sm:text-base">— {t('usage.cli.team')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
