import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Features from './Features';
import Usage from './Usage';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Usage />
      
      {/* Simple Newsletter/CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="glass p-12 md:p-20 rounded-3xl border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are building faster with Restartly.
            Free, open-source, and always will be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://github.com/theneovimmer/restartly"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-bg font-bold rounded-full hover:scale-105 transition-transform"
            >
              Star on GitHub
            </a>
            <Link 
              to="/docs"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 font-bold rounded-full hover:bg-white/5 transition-all text-center"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
