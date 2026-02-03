import { Check, X } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Gratuit',
      price: '0',
      period: '/mois',
      description: 'Parfait pour débuter',
      popular: false,
      features: [
        { text: '1 site WordPress', included: true },
        { text: 'Sauvegardes manuelles', included: true },
        { text: 'Stockage 1 Go', included: true },
        { text: 'Support par email', included: true },
        { text: 'Restaurations illimitées', included: false },
        { text: 'Staging en un clic', included: false },
        { text: 'Migrations gratuites', included: false },
        { text: 'Support prioritaire', included: false },
      ],
      buttonText: 'Commencer gratuitement',
      buttonStyle: 'outline',
    },
    {
      name: 'Pro',
      price: '29',
      period: '/mois',
      description: 'Pour les professionnels',
      popular: true,
      features: [
        { text: 'Jusqu\'à 10 sites WordPress', included: true },
        { text: 'Sauvegardes automatiques quotidiennes', included: true },
        { text: 'Stockage 50 Go', included: true },
        { text: 'Support prioritaire', included: true },
        { text: 'Restaurations illimitées', included: true },
        { text: 'Staging en un clic', included: true },
        { text: 'Migrations gratuites', included: true },
        { text: 'Rapports de performance', included: false },
      ],
      buttonText: 'Essai gratuit 14 jours',
      buttonStyle: 'primary',
    },
    {
      name: 'Entreprise',
      price: '99',
      period: '/mois',
      description: 'Pour les grandes équipes',
      popular: false,
      features: [
        { text: 'Sites WordPress illimités', included: true },
        { text: 'Sauvegardes en temps réel', included: true },
        { text: 'Stockage 500 Go', included: true },
        { text: 'Support dédié 24/7', included: true },
        { text: 'Restaurations illimitées', included: true },
        { text: 'Staging en un clic', included: true },
        { text: 'Migrations prioritaires', included: true },
        { text: 'Rapports de performance avancés', included: true },
      ],
      buttonText: 'Contacter les ventes',
      buttonStyle: 'outline',
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Tarifs
          </span>
          <h2 className="section-title mb-4">
            Choisissez le plan <span className="gold-text">parfait</span> pour vous
          </h2>
          <p className="section-subtitle mx-auto">
            Des options flexibles pour les particuliers, les professionnels et les entreprises. 
            Commencez gratuitement et évoluez selon vos besoins.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-card border-2 border-primary shadow-lg shadow-primary/10 scale-105'
                  : 'bg-card/50 border border-border/50 hover:border-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Plus populaire
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.buttonStyle === 'primary'
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border border-foreground/20 text-foreground hover:bg-foreground/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ✓ Garantie satisfait ou remboursé de 30 jours · ✓ Annulation à tout moment · ✓ Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
