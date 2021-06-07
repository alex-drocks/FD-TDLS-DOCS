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
        <h2><a href="https://finance-d.com">Finance&nbsp;D&nbsp;— Tenue de livres simplifiée</a></h2>
        <p>
          Pour signaler un problème, nous faire part de vos commentaires, ou pour
          toutes questions, veuillez SVP nous écrire à&nbsp;
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
            <p>D'autres améliorations du logiciel sont à venir. Faites nous part de vos commentaires à
              admin@finance-d.com. Ce sont vos feedbacks qui font avancer le logiciel plus rapidement.</p>
            <Link to="/docs/bases/prise-en-main-du-logiciel/">Consultez la documentation du
              logiciel &rarr;</Link>
            <br/>
            <br/>
            <LinkButton to="/updates">Voir l'historique des mises à jour antérieures &rarr;</LinkButton>
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
