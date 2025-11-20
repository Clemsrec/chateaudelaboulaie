import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// ISR : Cache avec revalidation toutes les heures
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Manoir de la Boulaie | Mariages & Événements d\'Exception à Haute-Goulaine',
  description: 'Domaine d\'exception au cœur du vignoble nantais pour vos mariages et événements professionnels. Château historique avec parc à l\'anglaise et salle de bal.',
  keywords: ['château mariage', 'mariage nantes', 'haute-goulaine', 'vignoble nantais', 'événements', 'séminaires', 'réceptions'],
};

/**
 * Page d'accueil - Château de la Boulaie
 * 
 * Présentation du domaine et des prestations
 * Contenu basé sur les textes officiels du Château de la Boulaie
 */
export default async function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <Image
          src="/images/Vue-chateau.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">
            Château de la Boulaie
          </h1>
          <div className="accent-line" />
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Moderne et raffiné, au cœur du vignoble nantais
          </p>
          <p className="text-white/90 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Un cadre rare, à deux pas de la ville, pour vivre la magie d'un mariage hors du temps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link href="/mariages" className="btn-primary">
              Mariages & Réceptions
            </Link>
            <Link href="/evenements-b2b" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
              Événements Professionnels
            </Link>
          </div>
        </div>
      </section>

      {/* Présentation du Château */}
      <section className="section">
        <div className="section-container">
          <div>
            <h2 className="section-title animate-fade-in">
              Une parenthèse de calme et de raffinement
            </h2>
            <div className="accent-line" />
            <div className="section-subtitle animate-fade-in space-y-6 text-lg">
              <p>
                À seulement quelques minutes de Nantes, le Manoir de la Boulaie offre une parenthèse de calme et de raffinement, où le temps semble suspendu.
              </p>
              <p>
                Niché à Haute-Goulaine, au cœur du vignoble nantais, le domaine conjugue l’élégance d’une demeure de caractère à la chaleur d’une maison de famille.
              </p>
              <p>
                Entouré de vignes, de jardins à l'anglaise et d'un étang paisible, le Manoir de la Boulaie est le décor rêvé pour célébrer l'amour, la beauté et la convivialité.
              </p>
              <p className="text-2xl font-medium text-primary mt-8">
                Chaque mariage y devient une expérience unique, à votre image — authentique, poétique et inoubliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les Espaces */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Espaces</h2>
            <div className="accent-line" />
            <p className="section-subtitle">
              Des décors variés pour sublimer chaque moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  La Salle de Bal
                </h3>
                <p className="text-secondary mb-4">
                  Espace emblématique du lieu, la salle de bal invite à la fête et à la danse sous ses hauts plafonds et ses grandes fenêtres ouvertes sur le parc.
                </p>
                <div className="text-sm text-accent font-medium">
                  Jusqu'à 250 convives
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Le Parc à l'Anglaise
                </h3>
                <p className="text-secondary mb-4">
                  Entouré de vignes et de verdure, idéal pour une cérémonie laïque ou un cocktail en extérieur dans un cadre naturel et élégant.
                </p>
                <div className="text-sm text-accent font-medium">
                  Cérémonie & Cocktail
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Les Salons du Château
                </h3>
                <p className="text-secondary mb-4">
                  Lumineux et raffinés, les salons accueillent vos instants les plus précieux dans une ambiance feutrée. Parfaits pour un brunch ou un vin d'honneur.
                </p>
                <div className="text-sm text-accent font-medium">
                  Réceptions intimes
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  L'Étang
                </h3>
                <p className="text-secondary mb-4">
                  Décor romantique parfait pour vos photos de mariage. Un lieu paisible qui ajoute une touche de poésie à votre journée.
                </p>
                <div className="text-sm text-accent font-medium">
                  Photographies
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  La Cour Intérieure
                </h3>
                <p className="text-secondary mb-4">
                  Alternative élégante en cas de météo capricieuse. Espace abrité tout en conservant le charme d'un cadre extérieur.
                </p>
                <div className="text-sm text-accent font-medium">
                  Solution météo
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Hébergements
                </h3>
                <p className="text-secondary mb-4">
                  Possibilité d'héberger vos proches directement sur place dans des chambres pleines de charme, et hébergements de qualité à proximité.
                </p>
                <div className="text-sm text-accent font-medium">
                  Sur place & proximité
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Organiser votre visite
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Prestations - Manoir de la Boulaie */}
      <section className="section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Prestations</h2>
            <div className="accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="font-display text-7xl text-accent/20 font-light mb-6">
                01
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 letter-spacing-wide">Cérémonies personnalisées</h3>
              <div className="w-16 h-px bg-accent/40 mx-auto mb-4" />
              <p className="text-secondary leading-relaxed">
                Cérémonie laïque face au château ou à l'étang, dans le parc ou sous les arbres. Chaque cérémonie est unique et à votre image.
              </p>
            </div>

            <div className="text-center">
              <div className="font-display text-7xl text-accent/20 font-light mb-6">
                02
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 letter-spacing-wide">Espaces modulables</h3>
              <div className="w-16 h-px bg-accent/40 mx-auto mb-4" />
              <p className="text-secondary leading-relaxed">
                Du cocktail sur la terrasse au dîner dans la salle de bal, en passant par la soirée dansante. Tous les espaces s'adaptent à vos envies.
              </p>
            </div>

            <div className="text-center">
              <div className="font-display text-7xl text-accent/20 font-light mb-6">
                03
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 letter-spacing-wide">Partenaires de confiance</h3>
              <div className="w-16 h-px bg-accent/40 mx-auto mb-4" />
              <p className="text-secondary leading-relaxed">
                Une sélection de partenaires choisis pour leur professionnalisme, leur créativité et leur élégance : traiteurs, décorateurs, photographes.
              </p>
            </div>

            <div className="text-center">
              <div className="font-display text-7xl text-accent/20 font-light mb-6">
                04
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 letter-spacing-wide">Accompagnement bienveillant</h3>
              <div className="w-16 h-px bg-accent/40 mx-auto mb-4" />
              <p className="text-secondary leading-relaxed">
                Un soutien discret mais attentif, du premier échange jusqu'au grand jour, pour que chaque détail reflète votre personnalité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Émotion */}
      <section className="section relative overflow-hidden">
        <Image
          src="/images/table.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="section-container relative z-10">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display italic text-white mb-6" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)' }}>
              Un lieu de caractère, vivant et accueillant, où chaque recoin raconte une histoire.
            </p>
            <p className="text-xl text-white/90 mb-8 font-light">
              Un lieu pensé pour les émotions, où chaque détail devient un souvenir.
            </p>
            <Link href="/contact" className="btn-primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
