import React from 'react';

import clsx from "clsx";
import Layout from '@theme/Layout';
import styles from "../pages/pages.module.css";
import LinkButton from "./LinkButton";
import Link from "@docusaurus/core/lib/client/exports/Link";


export default function UpdatePageLayout({version, children}) {
  return (
    <Layout
      // metas
      title={version ? `Mise à jour version ${version}` : "Mises à jour"}
      description={`Notes de mises à jour du logiciel Finance D — Tenue de livres simplifiée. Découvrez les nouveautés et améliorations récentes.`}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">{version ? `Version ${version}` : "Mises à jour"}</h1>
          <p className="hero__subtitle no-word-break">
            {version
              ? `Notes de la mise à jour version ${version} du logiciel "Finance D - Tenue de livres simplifiée"`
              : `Notes de mises à jour du logiciel "Finance D - Tenue de livres simplifiée"`
            }
          </p>
        </div>
      </header>

      <div className="container">
        <br/>
        <br/>
        <h2><a style={{textDecoration: "underline"}} href="https://finance-d.com">Finance&nbsp;D&nbsp;— Tenue de livres
          simplifiée</a></h2>
        <p>
          Pour signaler un problème, donner votre avis, ou pour
          toutes questions, veuillez SVP contacter Alexandre Desroches en écrivant un courriel à&nbsp;
          <a href="mailto:admin@finance-d.com?subject=Logiciel Tenue de livres simplifiée" title="Écrivez-nous">
            <i>admin@finance-d.com</i>.
          </a>
          &nbsp;Ce sera plaisir de vous répondre le plus rapidement possible.
        </p>
      </div>

      <main>
        {children}
      </main>

      {
        version
          ? <div className="container">
            <p>Vos commentaires sont les bienvenus&nbsp;!
              Écrivez à l'adresse suivante&nbsp;:
              admin@finance-d.com.
              Ce sera un plaisir de vous lire et de pouvoir vous répondre.
            </p>
            <LinkButton to="/updates">Voir l'historique des mises à jour antérieures &rarr;</LinkButton>
            <br/>
            <br/>
            <Link to="/docs/bases/prise-en-main-du-logiciel/">Consultez la documentation du
              logiciel &rarr;</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
          : null
      }

    </Layout>
  );
}
