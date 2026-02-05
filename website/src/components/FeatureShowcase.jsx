import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation, Trans } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const TerminalWindow = ({ children, title, className = '' }) => (
  <div className={`glass rounded-2xl overflow-hidden shadow-2xl border border-border ${className}`}>
    <div className="bg-card/80 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-600 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-600 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-600 transition-colors cursor-pointer" />
      </div>
      {title && (
        <span className="text-xs text-muted/40 font-mono absolute left-1/2 -translate-x-1/2">{title}</span>
      )}
      <div className="w-16" />
    </div>
    <div className="bg-[#0a0a0c] p-6 font-mono text-sm">
      {children}
    </div>
  </div>
);

const FeatureShowcase = () => {
  const { t } = useTranslation();
  const container = useRef();
  const section1 = useRef();
  const section2 = useRef();

  useGSAP(() => {
    const sections = [section1.current, section2.current];
    
    sections.forEach((section, index) => {
      const content = section.querySelector('.content');
      const visual = section.querySelector('.visual');
      
      gsap.from(content, {
        x: index === 0 ? -40 : 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
      
      gsap.from(visual, {
        x: index === 0 ? 40 : -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 sm:space-y-24 lg:space-y-32 overflow-hidden">
      {/* Background Grid matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* Auto-Detection Showcase */}
      <section ref={section1} className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          <div className="content w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-6 sm:mb-8 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold tracking-wider text-primary uppercase">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t('showcase.universal.badge')}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-text leading-tight">
              {t('showcase.universal.title_start')} <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('showcase.universal.title_end')}
              </span>
            </h2>
            
            <p className="text-muted text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              {t('showcase.universal.description')}
            </p>
            
            <div className="glass rounded-2xl p-4 sm:p-6 border border-border">
              <h3 className="text-sm font-semibold text-text mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Detected Files
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {['bun.lockb', 'server.ts', 'app.js', 'main.ts'].map((file, i) => (
                  <li key={i} className="flex items-center justify-between p-2 sm:p-3 glass rounded-xl border border-border/50 hover:border-primary/30 transition-colors group">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className="text-green-400 text-sm">✓</span>
                      <code className="text-text font-mono text-sm">{file}</code>
                    </div>
                    <span className="text-xs text-muted/40 font-mono hidden sm:inline">{t('showcase.universal.detected')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="visual w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <TerminalWindow title="restartly --detect" className="hover:border-primary/50 transition-all duration-500">
                <div className="text-muted/40 mb-2">$ restartly</div>
                <div className="text-blue-400">ℹ {t('showcase.universal.terminal.detected')}</div>
                <div className="text-blue-400">ℹ {t('showcase.universal.terminal.starting')}</div>
                <div className="text-green-400">✓ {t('showcase.universal.terminal.watching')}</div>
                <div className="flex items-center space-x-2 animate-pulse mt-2">
                  <span className="text-green-400">↺</span>
                  <span className="text-muted">Ready for changes...</span>
                  <span className="w-1.5 h-3 sm:w-2 sm:h-4 bg-text animate-pulse" />
                </div>
              </TerminalWindow>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-secondary/15 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Config Showcase */}
      <section ref={section2} className="relative">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12 lg:gap-20">
          <div className="content w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-6 sm:mb-8 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold tracking-wider text-secondary uppercase">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              {t('showcase.config.badge')}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-text leading-tight">
              {t('showcase.config.title_start')} <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                {t('showcase.config.title_end')}
              </span>
            </h2>
            
            <p className="text-muted text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              <Trans i18nKey="showcase.config.description" components={[<code className="text-primary bg-primary/10 border border-primary/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono text-sm" />]} />
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="glass border border-border/50 rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-secondary/30 transition-all hover:shadow-[0_0_20px_rgba(1,126,255,0.15)]">
                <div className="text-xs text-muted/40 mb-1 sm:mb-2 font-medium uppercase tracking-wider">{t('showcase.config.card_debounce')}</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">200ms</div>
              </div>
              <div className="glass border border-border/50 rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-secondary/30 transition-all hover:shadow-[0_0_20px_rgba(1,126,255,0.15)]">
                <div className="text-xs text-muted/40 mb-1 sm:mb-2 font-medium uppercase tracking-wider">{t('showcase.config.card_standard')}</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">ESM</div>
              </div>
            </div>
          </div>
          
          <div className="visual w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <TerminalWindow title="restartly.json" className="hover:border-secondary/50 transition-all duration-500">
                <div className="text-gray-400 text-xs mb-4 select-none italic">// Configuration file</div>
                <div className="space-y-1">
                  <div className="flex"><span className="text-gray-500 w-6">1</span><span className="ml-2 text-gray-300">{"{"}</span></div>
                  <div className="flex"><span className="text-gray-500 w-6">2</span><span className="ml-4 text-[#9cdcf0]">&quot;script&quot;</span><span className="text-gray-300">: </span><span className="text-[#ce9178]">&quot;src/main.ts&quot;</span><span className="text-gray-300">,</span></div>
                  <div className="flex"><span className="text-gray-500 w-6">3</span><span className="ml-4 text-[#9cdcf0]">&quot;watch&quot;</span><span className="text-gray-300">: [</span><span className="text-[#ce9178]">&quot;src&quot;</span><span className="text-gray-300">, </span><span className="text-[#ce9178]">&quot;config&quot;</span><span className="text-gray-300">],</span></div>
                  <div className="flex"><span className="text-gray-500 w-6">4</span><span className="ml-4 text-[#9cdcf0]">&quot;ignore&quot;</span><span className="text-gray-300">: [</span><span className="text-[#ce9178]">&quot;dist&quot;</span><span className="text-gray-300">, </span><span className="text-[#ce9178]">&quot;node_modules&quot;</span><span className="text-gray-300">],</span></div>
                  <div className="flex"><span className="text-gray-500 w-6">5</span><span className="ml-4 text-[#9cdcf0]">&quot;debounce&quot;</span><span className="text-gray-300">: </span><span className="text-[#b5cea8]">200</span><span className="text-gray-300">,</span></div>
                  <div className="flex"><span className="text-gray-500 w-6">6</span><span className="ml-4 text-[#9cdcf0]">&quot;exec&quot;</span><span className="text-gray-300">: </span><span className="text-[#ce9178]">&quot;tsx&quot;</span></div>
                  <div className="flex"><span className="text-gray-500 w-6">7</span><span className="ml-2 text-gray-300">{"}"}</span></div>
                </div>
              </TerminalWindow>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-primary/15 to-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureShowcase;
