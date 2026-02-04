import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">↺</span>
            <span className="text-lg font-bold">Restartly</span>
          </div>
          
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Restartly. Open source under MIT License.
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/theneovimmer" className="text-white/40 hover:text-primary transition-colors">GitHub</a>
            <a href="https://npmjs.com/package/restartly" className="text-white/40 hover:text-primary transition-colors">NPM</a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-white/20 text-xs">
          Designed and built with ❤️ by <a href="https://github.com/theneovimmer" className="hover:text-primary underline">TheNeovimmer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
