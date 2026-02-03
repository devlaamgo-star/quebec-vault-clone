export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "sauvegarde-wordpress-guide-complet",
    title: "Guide complet de la sauvegarde WordPress",
    excerpt: "Découvrez les meilleures pratiques pour sauvegarder votre site WordPress et protéger vos données essentielles.",
    content: `
## Pourquoi sauvegarder votre site WordPress?

La sauvegarde régulière de votre site WordPress est essentielle pour protéger votre investissement numérique. Sans sauvegarde fiable, vous risquez de perdre des années de contenu, de configurations et de données clients.

### Les risques sans sauvegarde

- **Attaques de pirates** : Les sites WordPress sont des cibles fréquentes
- **Erreurs humaines** : Une mauvaise manipulation peut corrompre votre site
- **Pannes serveur** : Les hébergeurs ne sont pas infaillibles
- **Mises à jour défaillantes** : Un plugin incompatible peut casser votre site

### Notre solution

Avec QuébecVault, bénéficiez de sauvegardes automatiques quotidiennes stockées dans des centres de données canadiens, garantissant la conformité avec les lois québécoises sur la protection des données.

### Comment ça fonctionne

1. **Installation simple** : Installez notre plugin WordPress en quelques clics
2. **Configuration automatique** : Nos algorithmes détectent la meilleure fréquence de sauvegarde
3. **Stockage sécurisé** : Vos données sont chiffrées et stockées au Canada
4. **Restauration rapide** : Récupérez votre site en moins de 15 minutes
    `,
    publishedAt: "2024-01-15",
    author: "Équipe QuébecVault",
    category: "Guide",
  },
  {
    id: "2",
    slug: "securite-donnees-pme-quebec",
    title: "Sécurité des données pour les PME québécoises",
    excerpt: "Les PME québécoises font face à des défis uniques en matière de sécurité. Voici comment les relever.",
    content: `
## La sécurité des données : un enjeu majeur pour les PME

Les petites et moyennes entreprises du Québec sont de plus en plus ciblées par les cyberattaques. Pourtant, beaucoup n'ont pas les ressources pour investir dans une infrastructure de sécurité robuste.

### Les statistiques alarmantes

- **60%** des PME victimes d'une cyberattaque ferment dans les 6 mois
- **43%** des cyberattaques ciblent les petites entreprises
- **Le coût moyen** d'une violation de données est de 4,24 millions de dollars

### Solutions adaptées aux PME

#### 1. Sauvegarde automatisée
Ne comptez pas sur les sauvegardes manuelles. Automatisez le processus pour ne jamais oublier.

#### 2. Chiffrement des données
Toutes vos données sensibles doivent être chiffrées, en transit et au repos.

#### 3. Conformité réglementaire
Assurez-vous de respecter la Loi 25 du Québec et la LPRPDE fédérale.

### Pourquoi choisir une solution canadienne?

En gardant vos données au Canada, vous:
- Respectez les exigences de résidence des données
- Bénéficiez de la protection des lois canadiennes
- Évitez les complications liées au Cloud Act américain
    `,
    publishedAt: "2024-01-20",
    author: "Équipe QuébecVault",
    category: "Sécurité",
  },
  {
    id: "3",
    slug: "conformite-loi-25-quebec",
    title: "Conformité à la Loi 25 : Ce que vous devez savoir",
    excerpt: "La Loi 25 du Québec impose de nouvelles obligations. Êtes-vous en conformité?",
    content: `
## La Loi 25 : Nouvelle réalité pour les entreprises québécoises

Entrée en vigueur progressivement depuis 2022, la Loi 25 modernise le cadre juridique de la protection des renseignements personnels au Québec.

### Échéancier d'application

- **Septembre 2022** : Désignation d'un responsable de la protection des renseignements personnels
- **Septembre 2023** : Politiques de confidentialité et consentement
- **Septembre 2024** : Droit à la portabilité et autres mesures

### Vos obligations principales

#### Responsable de la protection
Vous devez désigner une personne responsable de la protection des renseignements personnels dans votre organisation.

#### Politique de confidentialité
Votre politique doit être claire, accessible et détailler:
- Les types de renseignements collectés
- Les fins de la collecte
- Les droits des personnes concernées

#### Gestion des incidents
En cas de violation de données, vous devez:
1. Évaluer le risque de préjudice
2. Notifier la Commission d'accès à l'information
3. Aviser les personnes touchées si nécessaire

### Comment QuébecVault vous aide

Nos solutions de sauvegarde sont conçues pour faciliter votre conformité:
- **Traçabilité complète** des accès aux données
- **Chiffrement** conforme aux standards de l'industrie
- **Hébergement canadien** garantissant la résidence des données
- **Restauration rapide** en cas d'incident
    `,
    publishedAt: "2024-02-01",
    author: "Équipe QuébecVault",
    category: "Conformité",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
