import type { Metadata } from 'next';
import Image from 'next/image';

/**
 * Métadonnées pour la page Mariages
 * Page dédiée aux réceptions de mariage au Château de la Boulaie
 */
export const metadata: Metadata = {
  title: 'Mariages & Réceptions | Château de la Boulaie',
  description: 'L\'art de recevoir, entre nature et élégance. Célébrez votre mariage dans un cadre romantique et raffiné, de 20 à 250 invités.',
  keywords: 'mariage, réception, château, Haute-Goulaine, wedding, cérémonie, romantique, Loire-Atlantique',
};

/**
 * Page Mariages
 * 
 * Cette page présente les services et solutions pour les mariages
 * au Château de la Boulaie.
 */
export default function MariagesPage() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <Image
          src="/images/table-seminaire.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Mariages & Réceptions
          </h1>
          <div className="accent-line" />
          <p className="hero-subtitle">
            L&apos;art de recevoir, entre nature et élégance
          </p>
          <p className="text-white/90 text-lg mb-4" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.4)' }}>
            De 20 à 250 invités pour un dîner assis, le Château de la Boulaie offre un cadre romantique et raffiné pour célébrer le plus beau jour de votre vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      <div className="section-container py-12">

      {/* Un lieu pensé pour les émotions */}
      <section className="mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Un lieu pensé pour les émotions
          </h2>
          <div className="accent-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-display text-5xl text-accent/30 font-light">01</div>
              <h3 className="text-xl font-semibold">La Cérémonie</h3>
            </div>
            <p className="text-secondary leading-relaxed">
              Dans le parc à l&apos;anglaise, au bord de l&apos;étang, ou sous la voûte de la chapelle, choisissez le cadre de votre engagement.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-display text-5xl text-accent/30 font-light">02</div>
              <h3 className="text-xl font-semibold">Le Cocktail</h3>
            </div>
            <p className="text-secondary leading-relaxed">
              Un vin d&apos;honneur dans les salons ou en extérieur, entouré de vos proches, dans un cadre propice aux rencontres et aux éclats de rire.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-display text-5xl text-accent/30 font-light">03</div>
              <h3 className="text-xl font-semibold">Le Dîner & la Soirée</h3>
            </div>
            <p className="text-secondary leading-relaxed">
              La salle de bal accueille vos convives (jusqu&apos;à 250 personnes assises), dans une ambiance festive et élégante qui se prolonge jusqu&apos;au bout de la nuit.
            </p>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="text-center bg-primary/5 rounded-2xl p-12">
        <h2 className="text-3xl font-semibold mb-4">
          Prêt à célébrer votre mariage au Château de la Boulaie ?
        </h2>
        <p className="text-secondary text-lg mb-8">
          Contactez-nous pour organiser une visite et discuter de votre projet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary">
            Demander une visite
          </button>
          <div className="text-sm text-secondary">
            <p><strong className="text-foreground">Téléphone :</strong> +33 6 02 03 70 11</p>
            <p><strong className="text-foreground">Email :</strong> contact@chateaudelaboulaie.fr</p>
          </div>
        </div>
      </section>
      </div>

    </div>
  );
}
