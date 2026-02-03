import { ArrowRight, Star } from 'lucide-react';

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
              {/* Laptop Frame */}
              <div className="relative bg-card rounded-2xl p-3 shadow-2xl border border-border/50">
                <div className="bg-secondary rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted p-6">
                    {/* Fake Dashboard UI */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-destructive"></div>
                        <div className="w-3 h-3 rounded-full bg-gold"></div>
                        <div className="w-3 h-3 rounded-full bg-accent"></div>
                      </div>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-3 mt-6">
                        <div className="h-20 bg-muted rounded-lg"></div>
                        <div className="h-20 bg-muted rounded-lg"></div>
                        <div className="h-20 bg-muted rounded-lg"></div>
                      </div>
                      <div className="h-32 bg-muted rounded-lg mt-4"></div>
                    </div>
                  </div>
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
