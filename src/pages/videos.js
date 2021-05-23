import React from 'react';
import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "./pages.module.css";
import VideoLink from "../Components/VideoLink";
import Link from "@docusaurus/core/lib/client/exports/Link";

export default function Videos() {
  return (
    <Layout
      title={`Vidéos`}
      description={`Vidéos de formation pour le logiciel Finance D — Tenue de livres simplifiée. Regardez de courts vidéos pour être plus efficace.`}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">Vidéos</h1>
          <p className="hero__subtitle no-word-break">
            Vidéos de formation pour le logiciel Finance&nbsp;D&nbsp;— Tenue de livres simplifiée.
          </p>
        </div>
      </header>
      <div className="container">
        <br/>
        <br/>
        <h2><a href="https://finance-d.com">Finance&nbsp;D&nbsp;— Tenue de livres simplifiée</a></h2>
      </div>
      <main>
        <section className={styles.features}>
          <div className="container">
            <p>
              Voici nos vidéos de formations pour le logiciel Finance&nbsp;D.
              <br/>L'objectif de chaque vidéo est de vous montrer quelques trucs
              pour être le plus efficace possible.
              <br/>Vous pouvez les regarder gratuitement sur&nbsp;
              <Link to="https://www.youtube.com/channel/UCM4xW0oOsg6q73KA1emMJsg">notre chaîne YouTube</Link>.
              <br/>
              <br/>
              Cliquez sur un des liens ci-dessous pour regarder une vidéo à propos du sujet qui vous intéresse sur
              YouTube.
            </p>

            <VideoCard
              date="22 mai 2021"
              url="https://youtu.be/HI_sK-5L7ZM"
              shortTitle="Télécharger et installer le logiciel"
              fullTitle="Finance D  - Télécharger et installer le logiciel Tenue de livres simplifiée sur votre ordinateur"
              description="Une capture d'écran pour démontrer comment télécharger et installer le logiciel Finance D - Tenue de livres simplifiée sur votre ordinateur.

L'exemple utilise un ordinateur Windows, mais le processus est aussi facile sur Mac."
              duration="1:54"
            />

            <VideoCard
              date="2021-05-10"
              url="https://youtu.be/8y2vP_2NsmI"
              duration="6:56"
              shortTitle="Personnaliser les catégories financières de revenus et dépenses"
              fullTitle="Finance D - Personnaliser les catégories financières de revenus et de dépenses"
              description="Démonstration pour modifier, supprimer et ajouter vos catégories financières
              de revenus et de dépenses dans le logiciel Finance D - Tenue de livres simplifiée.
              Inclut également une partie sur l'utilisation des pourcentages de déduction alloués avec
              les catégories de dépenses dans le contexte des travailleurs autonomes.
              Par exemple: les dépenses de véhicule à 40% déductibles, ou les dépenses
              bureau maison déductibles à 20%."
            />

            <VideoCard
              date="2021-05-04"
              url="https://youtu.be/p39y1UDnnms"
              duration="10:12"
              shortTitle="Activer le mode d'enregistrement cloud"
              fullTitle="Finance D - Activer le mode d'enregistrement dans un cloud personnel"
              description="Démonstration étape par étape pour activer le mode d'enregistrement du logiciel Finance&nbsp;D
              dans un cloud personnel tel que OneDrive, Google Drive, Dropbox, etc. Il s'agit d'une fonction qui permet
              de partager un dossier de tenue de livres de Finance D avec un ou plusieurs autres ordinateurs
              grâce à votre fournisseur de cloud personnel."
            />

            <VideoCard
              date="31 mars 2021"
              url="https://youtu.be/ZHCQ9a6-UsU"
              shortTitle="Suivi des paiements de factures"
              fullTitle="Suivi des paiements pour vos factures dans le logiciel Finance D - Tenue de livres simplifiée"
              description="Ce vidéo démontre comment le suivi des paiements fonctionne dans le logiciel Finance D. Vous allez voir que c'est pratique comme sur une facture papier. Avec Finance D vous pouvez gérer les soldes dû sur vos factures de revenus et de dépenses de manière efficace."
              duration="4:37"
            />

          </div>
        </section>
      </main>
    </Layout>
  );
}

function VideoCard({url, shortTitle, fullTitle, description, duration}) {
  return (
    <div>
      <br/>
      <h3>{shortTitle} :</h3>
      <VideoLink
        url={url}
        title={fullTitle}
        duration={duration}
        style={{maxWidth: "900px"}}
      >
        {description}
      </VideoLink>
      <br/>
    </div>
  );
}