import { Shield, Server, RotateCcw, Layers, ArrowRightLeft, Clock, Globe, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Sauvegardes Infaillibles',
      description: 'Les sauvegardes doivent fonctionner parfaitement à chaque fois. Nous avons passé des années à construire la solution de sauvegarde WordPress la plus fiable.',
    },
    {
      icon: Server,
      title: 'Serveurs Conformes RGPD en Europe',
      description: 'QuebecVault stocke des copies cryptées de vos sauvegardes sur plusieurs centres de données, tous conformes au RGPD.',
    },
    {
      icon: RotateCcw,
      title: 'Restauration Fiable en Cas de Problème',
      description: "Avec un taux de réussite de 100%, nous avons la meilleure solution pour remettre votre site en état normal.",
    },
    {
      icon: Layers,
      title: 'Créer un Site de Test en 1 Clic',
      description: 'Créez des sites de test avec QuebecVault en un clic, et effectuez des modifications dans un environnement sécurisé.',
    },
    {
      icon: ArrowRightLeft,
      title: 'Migrez Votre Site WordPress Facilement',
      description: 'QuebecVault dispose du service de migration le plus fiable et le plus facile à utiliser. Migrez un site entier en quelques minutes.',
    },
    {
      icon: Clock,
      title: 'Sauvegardes en Temps Réel pour WooCommerce',
      description: 'Les sites WooCommerce ne peuvent pas se permettre de perdre une seule commande. Notre sauvegarde en temps réel capture chaque événement.',
    },
    {
      icon: Globe,
      title: 'Sauvegardes pour WordPress Multisites',
      description: 'QuebecVault offre un support spécial pour les Multisites WordPress. Sauvegardez, restaurez et migrez facilement.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Sauvegardes pour Sites WordPress</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <h2 className="section-title mb-4">
            Protégez votre entreprise avec des sauvegardes robustes
          </h2>
          <p className="section-subtitle mx-auto">
            Adoptez la résilience commerciale avec des opérations ininterrompues et zéro perte de données. QuebecVault est le seul service de sauvegarde WordPress qui vous offre cette assurance.
          </p>
          
          <a href="#" className="cta-button inline-flex items-center gap-2 mt-8">
            Commencer avec QuebecVault Gratuitement <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="mb-12">
          <p className="text-center text-primary font-medium mb-2">Principales Raisons</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            QuebecVault se démarque en offrant l'ensemble de fonctionnalités le plus complet comparé à tout autre plugin de sauvegarde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              <a href="#" className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all duration-200">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
