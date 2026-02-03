import { FileText, Server, Puzzle } from 'lucide-react';

const ComparisonSection = () => {
  const alternatives = [
    {
      icon: FileText,
      label: "Vous avez essayé",
      title: 'Sauvegardes Manuelles',
      description: 'Mais elles sont complexes, chronophages et échouent souvent. Les faire régulièrement n\'est même pas envisageable. Restaurer manuellement peut être un vrai cauchemar.',
    },
    {
      icon: Server,
      label: "Vous avez essayé",
      title: 'Sauvegardes Hébergeur',
      description: 'Mais elles ne sont pas complètement indépendantes de votre site. Elles sont connues pour échouer silencieusement, peuvent prendre des jours à restaurer, et sont extrêmement inflexibles.',
    },
    {
      icon: Puzzle,
      label: "Vous avez essayé",
      title: 'Plugins de Sauvegarde',
      description: 'Mais ils sont peu fiables et ralentissent votre site. Ils sont complexes à configurer avec des coûts cachés et difficiles à utiliser quand vous en avez vraiment besoin.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Il existe de nombreuses solutions de sauvegarde...
          </h2>
          <p className="section-subtitle mx-auto">
            ...mais elles ne protègent pas vraiment votre site et ne vous donnent pas la tranquillité d'esprit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {alternatives.map((alt, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <p className="text-sm text-primary font-medium mb-2">{alt.label}</p>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                <alt.icon className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{alt.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{alt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
