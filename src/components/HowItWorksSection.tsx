import { Download, Settings, Shield, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      step: '01',
      title: 'Installez le Plugin sur votre site',
      description: 'Installez facilement le Plugin QuebecVault sur votre site.',
    },
    {
      icon: Settings,
      step: '02',
      title: 'Configuration en 60 secondes',
      description: 'QuebecVault configurera automatiquement le plugin.',
    },
    {
      icon: Shield,
      step: '03',
      title: 'Laissez QuebecVault faire le reste',
      description: 'Sauvegardes complètes de votre site stockées en toute sécurité.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Comment ça marche</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <h2 className="section-title mb-4">
            Incroyablement Facile à Configurer
          </h2>
          <p className="section-subtitle mx-auto">
            Sans Configuration Manuelle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border/50 text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
