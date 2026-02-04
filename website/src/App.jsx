import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Docs from './components/Docs';
import Footer from './components/Footer';
import { ReactLenis } from 'lenis/react';

// Theme Context
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

  React.useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-bg text-text selection:bg-primary/30 selection:text-primary transition-colors duration-300 overflow-x-hidden">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/docs" element={<Docs />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
