import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 border-t border-border bg-card/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-primary">↺</span>
            <span className="text-lg font-bold text-text">Restartly</span>
          </div>
          
          <div className="text-muted text-sm text-center md:text-left">
            © {new Date().getFullYear()} <Trans i18nKey="footer.rights" />
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/theneovimmer" className="text-muted hover:text-primary transition-colors">{t('nav.github')}</a>
            <a href="https://npmjs.com/package/restartly" className="text-muted hover:text-primary transition-colors">NPM</a>
            <a href="#" className="text-muted hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-muted/40 text-xs">
          {t('footer.designed_by')} <a href="https://github.com/theneovimmer" className="hover:text-primary underline">TheNeovimmer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
