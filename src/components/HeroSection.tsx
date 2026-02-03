import { ArrowRight, Star } from 'lucide-react';
import dashboardHero from '@/assets/dashboard-hero.png';

const HeroSection = () => {
  return (
    <section className="hero-section pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Sauvegardes pour Entreprises{' '}
              <span className="block text-muted-foreground">Sites WordPress Critiques</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Récupérez votre site web en quelques minutes après le pire désastre qui peut frapper votre site WordPress. Avec des sauvegardes incrémentielles, un stockage conforme au RGPD, une restauration en 1 clic et plus encore, QuebecVault vous offre une tranquillité d'esprit totale.
            </p>

            <div className="space-y-4">
              <a href="#" className="cta-button inline-flex items-center gap-2">
                Commencer Gratuitement <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-muted-foreground">Aucune carte de crédit requise</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-foreground">4.5 étoiles basées sur 317 avis</span>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Dashboard Image */}
              <div className="relative bg-card rounded-2xl p-3 shadow-2xl border border-border/50">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={dashboardHero} 
                    alt="QuebecVault Dashboard - Interface de gestion des sauvegardes WordPress" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
