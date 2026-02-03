import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">QuebecVault</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <button className="nav-link flex items-center gap-1">
                Fonctionnalités <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#pricing" className="nav-link">Tarifs</a>
              <button className="nav-link flex items-center gap-1">
                Ressources <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="outline-button">S'inscrire →</a>
              <a href="#" className="filled-button">Connexion →</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30">
            <div className="flex flex-col gap-4">
              <a href="#" className="nav-link py-2">Fonctionnalités</a>
              <a href="#pricing" className="nav-link py-2">Tarifs</a>
              <a href="#" className="nav-link py-2">Ressources</a>
              <div className="flex flex-col gap-2 pt-4">
                <a href="#" className="outline-button text-center">S'inscrire</a>
                <a href="#" className="filled-button text-center">Connexion</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
