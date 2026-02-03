import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'À Propos', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carrières', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const featureLinks = [
    { name: 'Sauvegardes Incrémentielles', href: '#' },
    { name: 'Restauration en 1 Clic', href: '#' },
    { name: 'Migration WordPress', href: '#' },
    { name: 'Site de Test', href: '#' },
    { name: 'Sauvegardes WooCommerce', href: '#' },
    { name: 'WordPress Multisite', href: '#' },
  ];

  const resourceLinks = [
    { name: 'Comment Sauvegarder WordPress', href: '#' },
    { name: 'Meilleurs Plugins de Sauvegarde', href: '#' },
    { name: 'Comment Restaurer WordPress', href: '#' },
    { name: 'Créer un Site de Test', href: '#' },
    { name: 'Migrer un Site WordPress', href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground">QuebecVault</span>
            </div>
            
            <div className="space-y-3 text-sm text-muted-foreground mb-6">
              <p className="font-medium text-foreground">PACTORA LLC</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1910 THOMES AVE<br />CHEYENNE, 82001<br />United States</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 223 223 7986</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:help@quebecvault.ca" className="hover:text-primary transition-colors">
                  help@quebecvault.ca
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Fonctionnalités</h3>
            <ul className="space-y-3">
              {featureLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Ressources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 QuebecVault (Pactora LLC). Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Politique de Confidentialité</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-foreground transition-colors">RGPD</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-foreground transition-colors">Conditions Générales</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-foreground transition-colors">Politique des Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
