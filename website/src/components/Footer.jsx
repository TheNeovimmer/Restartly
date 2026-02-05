import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 border-t border-border bg-bg overflow-hidden">
      {/* Background matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]" />
      <div className="absolute -top-[150px] sm:-top-[300px] left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-2xl sm:text-3xl transition-transform duration-500 group-hover:rotate-180 block text-primary">↺</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-text tracking-tight">Restartly</span>
            </Link>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-sm">
             {t('features.subtitle')}
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-2">
                {[
                    { icon: "github", link: "https://github.com/theneovimmer" },
                    { icon: "twitter", link: "https://x.com/TheNeovimmer" }, 
                    { icon: "website", link: "https://ilyes-bouzayen.vercel.app" }
                ].map((social, i) => (
                    <a 
                        key={i} 
                        href={social.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
                    >
                        <span className="sr-only">{social.icon}</span>
                        { social.icon === 'github' && <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
                        { social.icon === 'twitter' && <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> }
                        { social.icon === 'website' && <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> }
                    </a>
                ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mt-4 md:mt-0">
            <div>
              <h4 className="font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">Product</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><Link to="/docs" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">Documentation</Link></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">Changelog</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">Community</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="https://github.com/theneovimmer" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">GitHub</a></li>
                <li><a href="https://ilyes-bouzayen.vercel.app" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">Website</a></li>
                <li><a href="https://x.com/TheNeovimmer" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">Twitter</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">Privacy</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors text-sm sm:text-base">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-muted text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <Trans i18nKey="footer.rights" />
          </div>
          <div className="text-xs sm:text-sm text-muted/60 text-center">
             {t('footer.designed_by')} <a href="https://github.com/theneovimmer" className="hover:text-primary transition-colors font-medium">TheNeovimmer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
