import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronUp, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './hooks/useTheme';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProtectedProjects from './components/ProtectedProjects';
import PublicPortfolio from './components/PublicPortfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';
import ParticlesBackground from './components/ParticlesBackground';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Google Analytics */}
      <GoogleAnalytics />

      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Global animated gradient background */}
      <div className="fixed inset-0 -z-10 transition-colors duration-300 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/60 via-transparent to-secondary-200/60 dark:from-primary-950/30 dark:via-transparent dark:to-secondary-950/30 animate-gradient"></div>

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-primary-400/30 dark:bg-primary-500/10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-secondary-400/30 dark:bg-secondary-500/10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/20 shadow-lg shadow-black/20" role="navigation" aria-label="Main navigation">
        <div className="container-custom px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-bold font-display gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              NP
            </motion.a>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="text-yellow-400" size={18} />
              ) : (
                <FaMoon className="text-primary-500" size={18} />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-custom px-4 py-4 space-y-2">
                {/* Theme Toggle in Mobile */}
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between py-3 px-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10"
                >
                  <span className="text-gray-300 font-medium">Theme</span>
                  <div className="flex items-center gap-2">
                    {theme === 'dark' ? (
                      <>
                        <FaSun className="text-yellow-400" size={18} />
                        <span className="text-sm text-gray-400">Dark</span>
                      </>
                    ) : (
                      <>
                        <FaMoon className="text-primary-500" size={18} />
                        <span className="text-sm text-gray-400">Light</span>
                      </>
                    )}
                  </div>
                </button>

                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block py-3 px-4 text-gray-300 hover:text-primary-400 hover:bg-white/5 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* Protected Projects - Hidden but not removed */}
        <div style={{ display: 'none' }}>
          <ProtectedProjects />
        </div>
        {/* Public Portfolio - Now Visible */}
        <PublicPortfolio />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="dark:bg-gray-900/50 light:bg-gray-100/50 border-t dark:border-white/10 light:border-gray-300 py-8">
        <div className="container-custom px-4 text-center">
          <p className="dark:text-gray-400 light:text-gray-700">
            © {new Date().getFullYear()} Nikunj Prajapati. All rights reserved.
          </p>
          <p className="dark:text-gray-500 light:text-gray-600 text-sm mt-2">
            Crafted with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
          <div className="mt-4">
            <VisitorCounter />
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
