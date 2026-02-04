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
      
      {/* Simple Newsletter/CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="glass p-12 md:p-20 rounded-3xl border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">{t('home.cta_title')}</h2>
          <p className="text-muted text-xl mb-10 max-w-2xl mx-auto whitespace-pre-line">
            {t('home.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://github.com/theneovimmer/restartly"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-bg font-bold rounded-full hover:scale-105 transition-transform"
            >
              {t('home.cta_button_star')}
            </a>
            <Link 
              to="/docs"
              className="w-full sm:w-auto px-8 py-4 border border-border font-bold rounded-full hover:bg-card/40 transition-all text-center text-text"
            >
             {t('home.cta_button_docs')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
