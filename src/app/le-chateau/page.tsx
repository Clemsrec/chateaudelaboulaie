import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// ISR : Cache avec revalidation toutes les 30 minutes
export const revalidate = 1800;

/**
 * Métadonnées pour la page Le Manoir
 * Présentation du Manoir de la Boulaie et de ses espaces
 */
export const metadata: Metadata = {
  title: 'Le Manoir | Manoir de la Boulaie - Haute-Goulaine',
  description: 'Découvrez le Manoir de la Boulaie, demeure de caractère du XXᵉ siècle à Haute-Goulaine. 600m² de salles, parc d\'un hectare, 11 chambres.',
  keywords: 'manoir, haute-goulaine, vignoble nantais, séminaire, 600m2, parc, demeure historique',
};

/**
 * Page Le Manoir - Présentation complète du domaine
 * 
 * Cette page présente l'histoire du manoir, ses espaces
 * et ses caractéristiques pour les événements.
 */
export default async function LeChateauPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="section-alt py-16">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold text-primary mb-6 animate-fade-in">
              Le Manoir de la Boulaie
            </h1>
            <div className="accent-line" />
            <p className="text-xl text-secondary leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              L'élégance d'une demeure de caractère au cœur du vignoble nantais
            </p>
          </div>
        </div>
      </section>

      {/* Histoire du Château */}
      <section className="section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-primary mb-6">
                L'élégance d'une demeure de caractère
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  À Haute-Goulaine, le Château de la Boulaie, construit au XXᵉ siècle, perpétue l'élégance 
                  des demeures de caractère du vignoble nantais.
                </p>
                <p>
                  Rénové dans le respect de son histoire, il conserve la noblesse de ses salons, 
                  la douceur de sa lumière et le charme de ses détails anciens.
                </p>
                <p>
                  Les salons du château, lumineux et raffinés, accueillent vos instants les plus précieux 
                  dans une ambiance feutrée.
                </p>
                <p>
                  La salle de bal, espace emblématique du lieu, invite à la fête et à la danse sous ses hauts plafonds 
                  et ses grandes fenêtres ouvertes sur le parc.
                </p>
                <p>
                  La terrasse et la cour intérieure offrent un décor naturel et élégant pour vos cocktails en plein air.
                </p>
                <p className="text-primary font-medium text-lg">
                  Un lieu de caractère, vivant et accueillant, où chaque recoin raconte une histoire.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Vue-chateau.jpg"
                alt="Château de la Boulaie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Les Espaces */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Les Espaces</h2>
            <div className="accent-line" />
            <p className="section-subtitle">
              Des décors variés pour sublimer chaque moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Salle de bal */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  La Salle de Bal
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Espace emblématique du lieu, la salle de bal invite à la fête et à la danse 
                  sous ses hauts plafonds et ses grandes fenêtres ouvertes sur le parc.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Capacité</span>
                  <span className="text-foreground">Jusqu'à 250 convives</span>
                </div>
              </div>
            </div>

            {/* Parc */}
            {/* Parc */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">🌳</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Le Parc à l'Anglaise
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Idéal pour une cérémonie ou un cocktail en extérieur. Entouré de vignes, 
                  il offre un cadre naturel et élégant.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Usage</span>
                  <span className="text-foreground">Cérémonie & Cocktail</span>
                </div>
              </div>
            </div>

            {/* Salons */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Les Salons Privés
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Parfaits pour un brunch, un vin d'honneur ou une cérémonie intime. 
                  Lumineux et raffinés dans une ambiance feutrée.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Ambiance</span>
                  <span className="text-foreground">Intimiste & raffinée</span>
                </div>
              </div>
            </div>

            {/* Étang */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  L'Étang et ses Abords
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Décor romantique pour vos photos. Un lieu paisible 
                  qui ajoute une touche de poésie à votre journée.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Spécialité</span>
                  <span className="text-foreground">Photographies</span>
                </div>
              </div>
            </div>

            {/* Cour intérieure */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  La Cour Intérieure et le Patio
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Alternative élégante en cas de météo capricieuse. 
                  Espace abrité conservant le charme d'un cadre extérieur.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Avantage</span>
                  <span className="text-foreground">Solution météo</span>
                </div>
              </div>
            </div>            {/* Salons */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Les Salons Privés
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Lumineux et raffinés, parfaits pour un brunch, un vin d'honneur 
                  ou une cérémonie intime dans une ambiance feutrée.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Ambiance</span>
                  <span className="text-foreground">Intimiste & raffinée</span>
                </div>
              </div>
            </div>

            {/* Étang */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  L'Étang
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Décor romantique pour vos photos de mariage. Un lieu paisible 
                  qui ajoute une touche de poésie à votre journée.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Spécialité</span>
                  <span className="text-foreground">Photographies</span>
                </div>
              </div>
            </div>

            {/* Cour intérieure */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  La Cour Intérieure
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Alternative élégante en cas de météo capricieuse. 
                  Espace abrité conservant le charme d'un cadre extérieur.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Avantage</span>
                  <span className="text-foreground">Couvert & élégant</span>
                </div>
              </div>
            </div>

            {/* Hébergements */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-4xl mb-4">🛏️</div>
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Hébergements
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  11 chambres doubles sur place (22 personnes) pour séminaires résidentiels 
                  et week-ends. Confort moderne dans un cadre historique.
                </p>
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <span className="text-accent font-medium">Capacité</span>
                  <span className="text-foreground">11 chambres • 22 pers.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Salles & Espaces - Section détaillée */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-primary mb-4">
              Nos Salles & Espaces
            </h2>
            <div className="accent-line" />
            <p className="text-secondary text-lg mt-6">
              600m² de salles modulables pour tous vos événements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Espace Plénière */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">Espace Plénière</h3>
                <span className="text-accent text-2xl">🏛️</span>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p><strong>Conférence :</strong> 230 pers.</p>
                <p><strong>École :</strong> 150 pers.</p>
                <p><strong>U :</strong> 30 pers.</p>
                <p><strong>Réunion :</strong> 230 pers.</p>
              </div>
              <p className="text-secondary text-sm mt-4 leading-relaxed">
                Notre plus grande salle, idéale pour conférences, plénières et grands événements.
              </p>
            </div>

            {/* Sous-commission 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">Sous-commission 1</h3>
                <span className="text-accent text-2xl">📋</span>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p><strong>Conférence :</strong> 50 pers.</p>
                <p><strong>École :</strong> 40 pers.</p>
                <p><strong>U :</strong> 25 pers.</p>
                <p><strong>Réunion :</strong> 50 pers.</p>
              </div>
              <p className="text-secondary text-sm mt-4 leading-relaxed">
                Espace polyvalent pour ateliers, groupes de travail et réunions.
              </p>
            </div>

            {/* Sous-commission 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">Sous-commission 2</h3>
                <span className="text-accent text-2xl">📋</span>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p><strong>Conférence :</strong> 50 pers.</p>
                <p><strong>École :</strong> 40 pers.</p>
                <p><strong>U :</strong> 25 pers.</p>
                <p><strong>Réunion :</strong> 50 pers.</p>
              </div>
              <p className="text-secondary text-sm mt-4 leading-relaxed">
                Salle jumelle idéale pour sessions parallèles et breakout rooms.
              </p>
            </div>

            {/* Sous-commission 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">Sous-commission 3</h3>
                <span className="text-accent text-2xl">💼</span>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p><strong>Conférence :</strong> 40 pers.</p>
                <p><strong>École :</strong> 20 pers.</p>
                <p><strong>U :</strong> 12 pers.</p>
                <p><strong>Réunion :</strong> 40 pers.</p>
              </div>
              <p className="text-secondary text-sm mt-4 leading-relaxed">
                Salle intimiste pour réunions stratégiques et comités restreints.
              </p>
            </div>

            {/* Sous-commission 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">Sous-commission 4</h3>
                <span className="text-accent text-2xl">💼</span>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p><strong>Conférence :</strong> 30 pers.</p>
                <p><strong>École :</strong> 15 pers.</p>
                <p><strong>U :</strong> 10 pers.</p>
                <p><strong>Réunion :</strong> 30 pers.</p>
              </div>
              <p className="text-secondary text-sm mt-4 leading-relaxed">
                Parfaite pour petits groupes, coaching et réunions confidentielles.
              </p>
            </div>

            {/* Salons du Manoir */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">Salons du Manoir</h3>
                <span className="text-accent text-2xl">☕</span>
              </div>
              <div className="space-y-2 text-sm text-secondary">
                <p><strong>U :</strong> 15 pers.</p>
                <p><strong>Réunion :</strong> 15 pers.</p>
              </div>
              <p className="text-secondary text-sm mt-4 leading-relaxed">
                Ambiance feutrée pour déjeuners d'affaires, entretiens et réunions intimes.
              </p>
            </div>
          </div>

          {/* Équipements */}
          <div className="mt-12 p-8 bg-primary/5 rounded-xl">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">Équipements & Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
              <div>
                <span className="text-2xl mb-2 block">📶</span>
                <p className="text-secondary">Wi-Fi haut débit</p>
              </div>
              <div>
                <span className="text-2xl mb-2 block">📽️</span>
                <p className="text-secondary">Vidéoprojecteurs & écrans</p>
              </div>
              <div>
                <span className="text-2xl mb-2 block">🎤</span>
                <p className="text-secondary">Sono & micros</p>
              </div>
              <div>
                <span className="text-2xl mb-2 block">📋</span>
                <p className="text-secondary">Paperboards</p>
              </div>
              <div>
                <span className="text-2xl mb-2 block">☕</span>
                <p className="text-secondary">Pauses & restauration</p>
              </div>
              <div>
                <span className="text-2xl mb-2 block">♿</span>
                <p className="text-secondary">Accès PMR</p>
              </div>
              <div>
                <span className="text-2xl mb-2 block">🚪</span>
                <p className="text-secondary">Vestiaire</p>
              </div>
              <div>
                <span className="text-2xl mb-2 block">🌳</span>
                <p className="text-secondary">Espaces extérieurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-primary mb-4">
              Informations Pratiques
            </h2>
            <div className="accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-accent text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-lg mb-2">Localisation</h3>
              <p className="text-secondary">
                33 rue de la Chapelle Saint-Martin<br />
                44115 Haute-Goulaine<br />
                À quelques minutes de Nantes
              </p>
            </div>

            <div className="text-center">
              <div className="text-accent text-4xl mb-4">👥</div>
              <h3 className="font-semibold text-lg mb-2">Capacité</h3>
              <p className="text-secondary">
                Jusqu'à 300 convives<br />
                600m² de salles et salons<br />
                6 espaces modulables
              </p>
            </div>

            <div className="text-center">
              <div className="text-accent text-4xl mb-4">🚗</div>
              <h3 className="font-semibold text-lg mb-2">Accès</h3>
              <p className="text-secondary">
                À 10 min de Nantes<br />
                Parking privé sécurisé<br />
                Proche périphérique Sud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl font-display font-semibold text-primary mb-4">
              Visitez le Manoir
            </h2>
            <p className="text-secondary text-lg mb-8">
              Découvrez le Manoir de la Boulaie lors d'une visite personnalisée 
              et imaginez votre événement dans ce cadre d'exception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary">
                Demander une visite
              </Link>
              <a href="tel:0602037011" className="btn-secondary">
                <span className="text-xs uppercase tracking-wider mr-2">Tel</span>
                06 02 03 70 11
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}