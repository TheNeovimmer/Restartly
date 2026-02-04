import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">↺</span>
          <span className="text-xl font-bold tracking-tight">Restartly</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-white/60 hover:text-primary transition-colors">Features</a>
          <a href="#usage" className="text-sm font-medium text-white/60 hover:text-primary transition-colors">Usage</a>
          <a href="#docs" className="text-sm font-medium text-white/60 hover:text-primary transition-colors">Documentation</a>
          <a 
            href="https://github.com/theneovimmer/restartly" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full border border-white/20 hover:border-primary/50 transition-all hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
