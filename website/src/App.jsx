import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Usage from './components/Usage';
import Docs from './components/Docs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Usage />
        <Docs />
        
        {/* Simple Newsletter/CTA */}
        <section className="py-24 max-w-7xl mx-auto px-6 text-center">
          <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient opacity-5 -z-10" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to restart your workflow?</h2>
            <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
              Join developers who are choosing speed and style. 
              Restartly is open source and always will be.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://github.com/theneovimmer/restartly" 
                className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all w-full sm:w-auto text-center"
              >
                Star on GitHub
              </a>
              <a 
                href="#docs" 
                className="px-8 py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-all w-full sm:w-auto text-center"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
