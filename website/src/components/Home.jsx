import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Features from './Features';
import FeatureShowcase from './FeatureShowcase';
import Usage from './Usage';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <Features />
      <FeatureShowcase />
      <Usage />
      
      {/* CTA Section - Matching Hero UI */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background matching Hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glass p-8 sm:p-12 lg:p-20 rounded-2xl sm:rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,207,213,0.15)]">
            <div className="text-center">
              {/* Badge matching Hero style */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-border text-xs font-semibold tracking-wider text-primary uppercase">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Get Started
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-text">
                {t('home.cta_title')}
              </h2>
              <p className="text-muted text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                {t('home.cta_subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                <a 
                  href="https://github.com/theneovimmer/restartly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-bg font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,207,213,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('home.cta_button_star')}
                </a>
                <Link 
                  to="/docs"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass border border-border font-bold rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all text-center text-text flex items-center justify-center gap-2 group"
                >
                  {t('home.cta_button_docs')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
