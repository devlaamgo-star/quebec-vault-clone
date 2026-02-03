import { useState } from 'react';
import { Menu, X, ChevronDown, Shield, Cloud, Zap, RefreshCw, Clock, Database } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const featuresItems = [
    { icon: Shield, label: 'Sauvegardes automatiques', description: 'Protection quotidienne de vos sites' },
    { icon: Cloud, label: 'Stockage sécurisé', description: 'Hébergé dans des centres de données canadiens' },
    { icon: Zap, label: 'Restauration rapide', description: 'Récupérez vos sites en un clic' },
    { icon: RefreshCw, label: 'Migrations gratuites', description: 'Transférez vos sites sans effort' },
    { icon: Clock, label: 'Staging en un clic', description: 'Testez vos modifications en toute sécurité' },
    { icon: Database, label: 'Gestion centralisée', description: 'Tous vos sites sur un tableau de bord' },
  ];

  const resourcesItems = [
    { label: 'Centre d\'aide', description: 'Guides et tutoriels' },
    { label: 'Blog', description: 'Actualités et conseils' },
    { label: 'Documentation API', description: 'Intégrez nos services' },
    { label: 'Statut du service', description: 'Disponibilité en temps réel' },
  ];

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
              {/* Fonctionnalités Dropdown */}
              <div className="relative">
                <button 
                  className="nav-link flex items-center gap-1"
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                  onMouseLeave={() => setIsFeaturesOpen(false)}
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                >
                  Fonctionnalités <ChevronDown className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isFeaturesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl z-50"
                    onMouseEnter={() => setIsFeaturesOpen(true)}
                    onMouseLeave={() => setIsFeaturesOpen(false)}
                  >
                    <div className="p-2">
                      {featuresItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#pricing" className="nav-link">Tarifs</a>

              {/* Ressources Dropdown */}
              <div className="relative">
                <button 
                  className="nav-link flex items-center gap-1"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  Ressources <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-xl z-50"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <div className="p-2">
                      {resourcesItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="font-medium text-foreground">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              <div>
                <button 
                  className="nav-link py-2 flex items-center gap-1 w-full"
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                >
                  Fonctionnalités <ChevronDown className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isFeaturesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {featuresItems.map((item, index) => (
                      <a key={index} href="#" className="block py-2 text-muted-foreground hover:text-foreground">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#pricing" className="nav-link py-2">Tarifs</a>
              <div>
                <button 
                  className="nav-link py-2 flex items-center gap-1 w-full"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  Ressources <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isResourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {resourcesItems.map((item, index) => (
                      <a key={index} href="#" className="block py-2 text-muted-foreground hover:text-foreground">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
