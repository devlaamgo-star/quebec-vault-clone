import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-card to-secondary rounded-3xl p-8 md:p-16 text-center border border-border/50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comment mettez-vous à jour et sauvegardez-vous votre site ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Créer des sauvegardes et mettre à jour un site peut être chronophage et sujet aux erreurs. QuebecVault vous fera gagner des heures chaque jour tout en vous offrant une tranquillité d'esprit totale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="cta-button inline-flex items-center justify-center gap-2">
                Sauvegardez Votre Site Maintenant <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#" className="outline-button inline-flex items-center justify-center gap-2 border-foreground/30 hover:border-foreground/50">
                Mise à Jour en 1 Clic <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
