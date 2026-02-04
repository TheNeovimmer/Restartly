import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation, Trans } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const UsageExample = ({ title, cmd, description, itemRef }) => (
  <div ref={itemRef} className="bg-card border border-border rounded-2xl p-6 hover:bg-card/80 transition-all opacity-0">
    <h4 className="text-text font-semibold mb-2">{title}</h4>
    <p className="text-muted text-sm mb-4">{description}</p>
    <div className="bg-bg/40 rounded-xl p-4 font-mono text-sm text-primary border border-border">
      <span className="text-muted/30 mr-2">$</span>
      {cmd}
    </div>
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
      }
    });

    gsap.from(rightCol.current, {
      x: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: rightCol.current,
        start: 'top 80%',
      }
    });

    gsap.to(exampleRefs.current, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: leftCol.current,
        start: 'top 70%',
      }
    });

    gsap.set(exampleRefs.current, { y: 20, opacity: 0 });
  }, { scope: container });

  return (
    <section ref={container} id="usage" className="py-24 bg-card/10 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftCol}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t('usage.title')}</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              <Trans i18nKey="usage.subtitle" components={[<code className="text-primary bg-primary/10 px-1 rounded" />]} />
            </p>
            
            <div className="space-y-6">
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
          
          <div ref={rightCol} className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full" />
            <div className="glass rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">{t('usage.cli.title')}</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <code className="text-primary font-bold">--watch, -w</code>
                    <span className="text-muted/40 text-xs">Default: .</span>
                  </div>
                  <div className="w-full bg-bg h-1.5 rounded-full overflow-hidden border border-border">
                    <div className="bg-primary h-full w-full" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <code className="text-primary font-bold">--ignore, -i</code>
                    <span className="text-muted/40 text-xs">Default: node_modules, .git</span>
                  </div>
                  <div className="w-full bg-bg h-1.5 rounded-full overflow-hidden border border-border">
                    <div className="bg-primary h-full w-[85%]" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <code className="text-primary font-bold">--exec, -x</code>
                    <span className="text-muted/40 text-xs">Default: node</span>
                  </div>
                  <div className="w-full bg-bg h-1.5 rounded-full overflow-hidden border border-border">
                    <div className="bg-primary h-full w-[70%]" />
                  </div>
                </div>

                <div className="pt-8">
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-sm">
                    <p className="text-text opacity-80 leading-relaxed italic">
                      {t('usage.cli.quote')}
                    </p>
                    <div className="mt-4 font-bold text-primary">— {t('usage.cli.team')}</div>
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
