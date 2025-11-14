import type { Metadata } from 'next';
import Image from 'next/image';

/**
 * Métadonnées pour la page Événements B2B
 * Page dédiée aux événements professionnels au Château de la Boulaie
 */
export const metadata: Metadata = {
  title: 'Événements Professionnels | Château de la Boulaie',
  description: 'Organisez vos séminaires, conférences et événements corporate au Château de la Boulaie. Un cadre d\'exception près de Nantes pour vos événements d\'entreprise.',
  keywords: 'événements B2B, séminaires, conférences, corporate, team building, Nantes, Loire-Atlantique',
};

/**
 * Page Événements B2B
 * 
 * Cette page présente les services et solutions pour les événements
 * professionnels au Château de la Boulaie.
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
            À deux pas de Nantes, le Château de la Boulaie accueille vos séminaires, réunions et événements corporate dans un cadre moderne et raffiné.
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
              Le Château de la Boulaie offre un cadre unique pour vos événements professionnels : salle de bal, salons privés, parc à l&apos;anglaise. 
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
              De 20 à 250 personnes, nos espaces s&apos;adaptent à vos besoins : réunions stratégiques, séminaires, team building, 
              cocktails d&apos;entreprise. Entièrement privatisables, ils garantissent confidentialité et exclusivité.
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

      {/* CTA Section */}
      <section className="text-center bg-primary/5 rounded-2xl p-12">
        <h2 className="text-3xl font-semibold mb-4">
          Prêt à organiser votre événement au Château de la Boulaie ?
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