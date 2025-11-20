import type { Metadata } from 'next';
import Image from 'next/image';

/**
 * Métadonnées pour la page Événements B2B
 * Page dédiée aux événements professionnels au Manoir de la Boulaie
 */
export const metadata: Metadata = {
  title: 'Événements Professionnels | Manoir de la Boulaie',
  description: 'Organisez vos séminaires, conférences et événements corporate au Manoir de la Boulaie. Un cadre d\'exception près de Nantes pour vos événements d\'entreprise.',
  keywords: 'événements B2B, séminaires, conférences, corporate, team building, Nantes, Loire-Atlantique',
};

/**
 * Page Événements B2B
 * 
 * Cette page présente les services et solutions pour les événements
 * professionnels au Manoir de la Boulaie.
 */
export default function EvenementsB2BPage() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <Image
          src="/images/salle-seminaire.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Événements Professionnels
          </h1>
          <div className="accent-line" />
          <p className="hero-subtitle">
            Un cadre d&apos;exception pour vos événements d&apos;entreprise
          </p>
          <p className="text-white/90 text-lg mb-4" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.4)' }}>
            À 10 minutes de Nantes, le Manoir de la Boulaie accueille vos séminaires, réunions et événements corporate dans un cadre moderne et raffiné avec 600m² de salles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      <div className="section-container py-12">

      {/* Ce que nous vous offrons */}
      <section className="mb-16">
        <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold mb-8">
            Ce que nous vous offrons
          </h2>
          <div className="accent-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Un cadre d'exception */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <div className="w-20 h-px bg-accent/40 mr-4" />
              Un cadre d'exception
            </h3>
            <p className="text-secondary leading-relaxed">
              Le Manoir de la Boulaie offre un cadre unique pour vos événements professionnels : 600m² de salles, 6 espaces modulables, salons privés, parc d&apos;un hectare. 
              Un lieu moderne et raffiné qui valorise votre image et crée une vraie connexion avec vos équipes et partenaires.
            </p>
          </div>

          {/* Des espaces modulables */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <div className="w-20 h-px bg-accent/40 mr-4" />
              Des espaces modulables
            </h3>
            <p className="text-secondary leading-relaxed">
              De 10 à 300 personnes, nos 6 salles s&apos;adaptent à vos besoins : réunions stratégiques, séminaires résidentiels (11 chambres), team building, 
              cocktails d&apos;entreprise. Entièrement privatisables avec parking privé, ils garantissent confidentialité et exclusivité.
            </p>
          </div>

          {/* Proximité de Nantes */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <div className="w-20 h-px bg-accent/40 mr-4" />
              Proximité de Nantes
            </h3>
            <p className="text-secondary leading-relaxed">
              Situé à Haute-Goulaine, au cœur du vignoble nantais, le château est facilement accessible depuis Nantes et ses infrastructures 
              (aéroport, gare TGV). Un cadre exceptionnel sans contrainte logistique.
            </p>
          </div>
        </div>
      </section>

      {/* Une expérience pour vos équipes */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">
            Une expérience pour vos équipes et vos clients
          </h2>
          <div className="accent-line" />
          <p className="text-secondary text-lg mt-6">
            Dans un environnement professionnel en constante évolution, il est essentiel de proposer des événements qui ont du sens et de l&apos;impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-subtle">
            <h3 className="text-xl font-semibold mb-4 text-primary">Marquer les esprits</h3>
            <p className="text-secondary leading-relaxed">
              Des lieux conçus pour <strong>marquer les esprits, valoriser votre image et créer une vraie connexion humaine.</strong>
            </p>
          </div>

          <div className="card-subtle">
            <h3 className="text-xl font-semibold mb-4 text-primary">Environnements propices</h3>
            <p className="text-secondary leading-relaxed">
              Des environnements propices à la <strong>cohésion, à la créativité ou à la prise de recul,</strong> loin des lieux standardisés.
            </p>
          </div>

          <div className="card-subtle">
            <h3 className="text-xl font-semibold mb-4 text-primary">Liberté totale</h3>
            <p className="text-secondary leading-relaxed">
              Une <strong>liberté totale de création :</strong> nos lieux sont ouverts aux formats les plus audacieux, des plus confidentiels aux plus immersifs.
            </p>
          </div>

          <div className="card-subtle">
            <h3 className="text-xl font-semibold mb-4 text-primary">Équipe passionnée</h3>
            <p className="text-secondary leading-relaxed">
              Une <strong>équipe de passionnés à vos côtés,</strong> qui aime repousser les limites du brief et aller au-delà des attentes initiales.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Formules & Tarifs */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">
            Nos Formules & Tarifs
          </h2>
          <div className="accent-line" />
          <p className="text-secondary text-lg mt-6">
            Des formules tout compris pour simplifier l'organisation de vos événements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Demi-journée */}
          <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">☕</div>
              <h3 className="text-2xl font-semibold mb-2">Demi-journée</h3>
              <div className="text-3xl font-bold text-primary">
                75€<span className="text-base font-normal text-secondary">/pers. HT</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Mise à disposition de salle</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>1 pause café</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>1 déjeuner</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Équipements audiovisuels</span>
              </li>
            </ul>
          </div>

          {/* Journée complète */}
          <div className="bg-primary text-white border-2 border-primary rounded-xl p-8 transform hover:scale-105 transition-transform shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-semibold">
              POPULAIRE
            </div>
            <div className="text-center mb-6 mt-2">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-2xl font-semibold mb-2">Journée d'étude</h3>
              <div className="text-3xl font-bold">
                80€<span className="text-base font-normal opacity-90">/pers. HT</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Mise à disposition de salle</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>2 pauses café</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>1 déjeuner</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Équipements audiovisuels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Wi-Fi haut débit</span>
              </li>
            </ul>
          </div>

          {/* Séminaire résidentiel */}
          <div className="bg-white border-2 border-border rounded-xl p-8 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="text-2xl font-semibold mb-2">Séminaire 24h</h3>
              <div className="text-3xl font-bold text-primary">
                190€<span className="text-base font-normal text-secondary">/pers. HT</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Mise à disposition de salle</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>1 déjeuner + 2 pauses</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>1 dîner</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>1 nuit en chambre double</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>1 petit-déjeuner</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-secondary">
          <p>* Tarifs indicatifs H.T. Variables selon la saison et le nombre de participants.</p>
          <p className="mt-2">Devis personnalisé sous 12h • Accompagnement par un chef de projet dédié</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-primary/5 rounded-2xl p-12">
        <h2 className="text-3xl font-semibold mb-4">
          Prêt à organiser votre événement au Manoir de la Boulaie ?
        </h2>
        <p className="text-secondary text-lg mb-8">
          Contactez-nous pour découvrir nos espaces et discuter de votre projet.
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