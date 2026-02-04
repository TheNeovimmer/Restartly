import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl group-hover:rotate-12 transition-transform duration-300 text-primary">↺</span>
          <span className="text-xl font-bold tracking-tight text-text">Restartly</span>
        </Link>
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-muted hover:text-primary transition-colors">Home</Link>
            <Link to="/docs" className="text-sm font-medium text-muted hover:text-primary transition-colors">Documentation</Link>
            <a 
              href="https://github.com/theneovimmer/restartly" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary/50 transition-all hover:bg-white/5 text-text"
            >
              GitHub
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
