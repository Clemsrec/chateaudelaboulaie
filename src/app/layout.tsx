import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Métadonnées principales pour le site Château de la Boulaie
 * Domaine événementiel du Groupe Riou en Loire-Atlantique
 */
export const metadata: Metadata = {
  title: "Château de la Boulaie - Mariages & Événements d'Exception | Groupe Riou",
  description: "Domaine d'exception à Haute-Goulaine pour vos mariages et événements professionnels. Château historique au cœur du vignoble nantais. Groupe Riou.",
  keywords: "lieux événementiels, séminaires, mariages, groupe riou, événements professionnels, réceptions",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
  },
  authors: [{ name: "Groupe Riou" }],
  creator: "Groupe Riou",
  publisher: "Groupe Riou",
  openGraph: {
    title: "Château de la Boulaie - Groupe Riou",
    description: "Domaine d'exception pour mariages et événements à Haute-Goulaine",
    type: "website",
    locale: "fr_FR",
    siteName: "Château de la Boulaie",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Manoir de la Boulaie - Groupe Riou",
    description: "Domaine d'exception pour mariages et événements à Haute-Goulaine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Ajouter les codes de vérification Google Search Console
    google: 'google-verification-code',
  },
};

/**
 * Layout racine de l'application Next.js
 * Définit la structure HTML de base, la navigation et les styles globaux
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {/* Navigation principale */}
        <Navigation />
        
        {/* Contenu principal */}
        <main>
          {children}
        </main>
        
        {/* Footer principal */}
        <Footer />
      </body>
    </html>
  );
}