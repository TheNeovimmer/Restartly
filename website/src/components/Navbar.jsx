import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass border-b border-border backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-180 block text-primary">↺</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-text tracking-tight">Restartly</span>
                <span className="text-xs text-muted/40 font-mono hidden sm:block">restartly@localhost</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="group relative">
                <span className="text-sm font-medium text-muted hover:text-text transition-colors relative z-10">{t('nav.home')}</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link to="/docs" className="group relative">
                <span className="text-sm font-medium text-muted hover:text-text transition-colors relative z-10">{t('nav.docs')}</span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a 
                href="https://github.com/theneovimmer/restartly" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-4 py-2 rounded-xl glass border border-border hover:border-primary/50 transition-all hover:bg-primary/10"
              >
                <svg className="w-4 h-4 text-muted group-hover:text-text transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium text-muted group-hover:text-text transition-colors">{t('nav.github')}</span>
              </a>
            </div>
            
            {/* Right Side Controls */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className="hidden sm:flex items-center glass border border-border rounded-xl overflow-hidden">
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-medium transition-all ${i18n.language === 'en' ? 'bg-primary text-bg' : 'text-muted hover:text-text hover:bg-white/5'}`}
                >
                  EN
                </button>
                <div className="w-px h-4 bg-border" />
                <button 
                  onClick={() => changeLanguage('fr')}
                  className={`px-3 py-1.5 text-xs font-medium transition-all ${i18n.language === 'fr' ? 'bg-primary text-bg' : 'text-muted hover:text-text hover:bg-white/5'}`}
                >
                  FR
                </button>
              </div>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button - Fixed Hamburger */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl glass border border-border text-text hover:border-primary/50 transition-all"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        {/* Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-full max-w-sm glass border-l border-border transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full bg-bg/95">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-primary">↺</span>
                <span className="text-lg font-bold text-text">Restartly</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg glass border border-border hover:border-primary/50 transition-all"
              >
                <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 p-6 space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-primary/10 transition-colors group"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-lg font-medium text-text">{t('nav.home')}</span>
              </Link>
              <Link 
                to="/docs" 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-primary/10 transition-colors group"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-lg font-medium text-text">{t('nav.docs')}</span>
              </Link>
              <a 
                href="https://github.com/theneovimmer/restartly" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-primary/10 transition-colors group"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-lg font-medium text-text">{t('nav.github')}</span>
              </a>
            </div>

            {/* Language Selector */}
            <div className="p-6 border-t border-border">
              <div className="flex items-center glass border border-border rounded-xl overflow-hidden">
                <button 
                  onClick={() => { changeLanguage('en'); setIsOpen(false); }}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${i18n.language === 'en' ? 'bg-primary text-bg' : 'text-muted hover:text-text'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => { changeLanguage('fr'); setIsOpen(false); }}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${i18n.language === 'fr' ? 'bg-primary text-bg' : 'text-muted hover:text-text'}`}
                >
                  Français
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
