import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Utiliser QuebecVault est un vrai plaisir ! Les fonctionnalités Snapshot et Régression Visuelle sont tout simplement brillantes, offrant une couche supplémentaire de confiance avec des sauvegardes solides comme le roc.",
      author: 'Marie-Claire Dubois',
      role: 'Propriétaire d\'Agence',
      rating: 5,
    },
    {
      quote: "C'est à mon avis le meilleur plugin de sauvegarde que vous puissiez obtenir. Facile à configurer, sauvegarder et restaurer si nécessaire, excellent support orienté solutions. Il m'a sauvé plusieurs fois !",
      author: 'Jean-Pierre Tremblay',
      role: 'Développeur Web',
      rating: 5,
    },
    {
      quote: "Si vous êtes confus sur quelque chose, leur support répondra rapidement et vous guidera patiemment à travers toutes les étapes. La fiabilité est un grand avantage.",
      author: 'Sophie Lavoie',
      role: 'Consultante Marketing',
      rating: 5,
    },
  ];

  const featuredTestimonial = {
    quote: "QuebecVault est éprouvé à grande échelle. QuebecVault est l'outil de sauvegarde et de restauration le plus fiable que nous ayons jamais utilisé.",
    author: 'François Bergeron',
    company: 'AgenceWeb Montréal',
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Featured Testimonial */}
        <div className="bg-card rounded-3xl p-8 md:p-12 mb-16 border border-border/50 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-primary/10" />
          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed mb-8">
              "{featuredTestimonial.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">{featuredTestimonial.author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{featuredTestimonial.author}</p>
                <p className="text-muted-foreground">{featuredTestimonial.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-foreground">4.5 étoiles basées sur 271 avis</p>
          <div className="w-16 h-0.5 bg-primary mx-auto my-6"></div>
          <h2 className="section-title mb-4">
            Une Tranquillité d'Esprit Totale avec QuebecVault
          </h2>
          <p className="section-subtitle mx-auto">
            Rejoignez les clients qui ont sauvegardé plus de 2 millions de sites web depuis 10 ans
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
