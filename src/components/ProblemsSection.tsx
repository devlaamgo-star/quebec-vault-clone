import { Database, Users, Search } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: Database,
      title: 'Perte de Données',
      description: 'Vous perdrez vos données essentielles avec peu ou pas de chances de récupération.',
    },
    {
      icon: Users,
      title: 'Clients Perdus',
      description: "En raison de l'indisponibilité du site, vous risquez de perdre des clients.",
    },
    {
      icon: Search,
      title: 'Pénalisation par Google',
      description: "Votre site peut subir une baisse de classement Google en raison de l'indisponibilité.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Votre site est en panne et sans sauvegarde !
          </h2>
          <p className="section-subtitle mx-auto">
            Perte de données accidentelle, malware ou mauvais code, un site web peut tomber en panne pour n'importe quelle raison.
            Votre entreprise a besoin de la solution la plus fiable et éprouvée.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
