import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl group-hover:rotate-12 transition-transform duration-300 text-primary">↺</span>
          <span className="text-xl font-bold tracking-tight text-text">Restartly</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-muted hover:text-primary transition-colors">{t('nav.home')}</Link>
            <Link to="/docs" className="text-sm font-medium text-muted hover:text-primary transition-colors">{t('nav.docs')}</Link>
            <a 
              href="https://github.com/theneovimmer/restartly" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-all hover:bg-white/5 text-text"
            >
              {t('nav.github')}
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center border border-border rounded-lg overflow-hidden mr-2">
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 text-xs font-medium transition-colors ${i18n.language === 'en' ? 'bg-primary text-bg' : 'text-muted hover:text-text'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => changeLanguage('fr')}
                  className={`px-2 py-1 text-xs font-medium transition-colors ${i18n.language === 'fr' ? 'bg-primary text-bg' : 'text-muted hover:text-text'}`}
                >
                  FR
                </button>
            </div>
            <ThemeToggle />
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border border-border text-text hover:border-primary/50 transition-all"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative flex items-center justify-center">
                <span className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                <span className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-card/98 backdrop-blur-2xl border-b border-border shadow-2xl transition-all duration-300 origin-top overflow-y-auto ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center p-8 space-y-8 min-h-[50vh]">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text hover:text-primary transition-colors"
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/docs" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text hover:text-primary transition-colors"
          >
            {t('nav.docs')}
          </Link>
          <a 
            href="https://github.com/theneovimmer/restartly" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-text hover:text-primary transition-colors"
          >
            {t('nav.github')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
