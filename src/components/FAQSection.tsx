import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Est-ce que QuebecVault sauvegarde le site WordPress complet ?',
      answer: 'QuebecVault sauvegarde le site WordPress complet incluant les fichiers, la base de données, les configurations, les articles, les pages, les commentaires et plus encore.',
    },
    {
      question: "Ai-je accès au support de l'équipe QuebecVault si j'ai des questions ?",
      answer: "Nous offrons un support 24/7 à tous nos utilisateurs — avec des solutions rapides et pratiques à vos problèmes et des réponses adéquates à toutes vos questions ! Nous sommes là pour vous aider.",
    },
    {
      question: 'Puis-je utiliser QuebecVault si je suis débutant ?',
      answer: "QuebecVault est un outil intuitif et facile à utiliser, et ne nécessite aucune connaissance technique. Il configure automatiquement la meilleure sécurité pour votre site sans aucun travail manuel.",
    },
    {
      question: 'QuebecVault fonctionne-t-il avec les grands sites WordPress ?',
      answer: 'QuebecVault sauvegarde facilement des sites de toutes tailles. Nous sauvegardons régulièrement des sites aussi grands que 200 Go.',
    },
    {
      question: 'QuebecVault fonctionnera-t-il avec mon hébergeur ?',
      answer: "QuebecVault a sauvegardé des sites sur plus de 5000 hébergeurs dans le monde. Nous sommes compatibles avec tous les hébergeurs populaires comme GoDaddy, Bluehost, WP Engine, Kinsta, Cloudways, OVH et plus encore.",
    },
    {
      question: 'QuebecVault fonctionne-t-il avec WordPress Multisites ?',
      answer: "Oui, nous fonctionnons très bien avec les installations WordPress Multisite. Nous sauvegardons l'ensemble du Multisite et vous permettons également de restaurer uniquement des sous-sites spécifiques.",
    },
    {
      question: 'Puis-je restaurer un site lorsqu\'il est en panne ?',
      answer: "Oui, nous vous permettons de restaurer des sites même s'ils sont complètement en panne. Vous n'avez pas besoin d'installer WordPress avant de le restaurer.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Questions Fréquemment Posées</h2>
          <p className="section-subtitle mx-auto">
            Si vous avez d'autres questions, contactez notre équipe sympathique
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="w-full py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
