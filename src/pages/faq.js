import React from 'react';
import clsx from "clsx";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from "./pages.module.css";
import NoWrap from "../Components/NoWrap";

export default function Faq() {
  return (
    <Layout
      title={`FAQ`} // appears as {title} | {siteName}
      description={`Trouvez rapidement des réponses aux questions fréquentes
      à propos du ${logiciel} dans notre section FAQ.
      Obtenez de l'aide et apprenez les trucs pour être le plus efficace possible
      avec le logiciel Finance D.`} //injected in meta description
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">FAQ</h1>
          <p className="hero__subtitle no-word-break">
            Réponses aux questions fréquentes
          </p>
        </div>
      </header>
      <div className="container">
        <br/>
        <br/>
        <h2><a href="https://finance-d.com">Finance&nbsp;D&nbsp;— Tenue de livres simplifiée</a></h2>
      </div>
      <main>
        <QuestionRow>
          <Question id={1}>
            <h3>Le logiciel est-il vraiment gratuit?</h3>
            <p>
              <strong>Oui</strong>. Le {logiciel} est
              gratuit à 100% pour toujours. Il n'y a pas non plus
              de frais cachés ou de services payants pour activer
              des fonctions. Tout est gratuit, sans limites ni publicité.
            </p>
          </Question>
          <Question id={2}>
            <h3>Pourquoi avoir opté pour la gratuité?</h3>
            <p>
              Le {logiciel} est gratuit, car nous avons une ferme conviction
              que c'est la meilleure chose à faire pour aider les entreprises du Québec
              avec leur tenue de livres.
              Nous n'avons pas d'intérêts lucratifs avec ce projet qui est né surtout d'une passion.
              Certes, il est possible qu'un autre produit créé par Finance D soit
              payant un jour, mais le logiciel de tenue de livres simplifiée restera gratuit et maintenu avec la
              meilleure qualité.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={3}>
            <h3>Le logiciel fonctionne sur quels appareils?</h3>
            <p>
              Le logiciel {logiciel} est conçu pour fonctionner
              sur les ordinateurs Windows. De préférences,
              ayant la version Windows 10 et un système
              relativement récent pour une expérience optimale. {" "}
              <Link to="#5">(voir les spécifications minimales requises)</Link>.
              Il est également compatible avec les ordinateurs Mac.
              Nous avons testé la version Mac sur OS X Catalina.
              Donc, il est recommandé d'avoir un Mac assez récent.
            </p>
          </Question>
          <Question id={4}>
            <h3>Le logiciel est-il compatible avec Mac?</h3>
            <p>
              Réponse courte: <strong>Oui</strong>.<br/>
              Le {logiciel} est compatible avec les ordinateurs Mac (Apple).
              Cette version a été éprouvé par moins de tests que sur Windows.
              Or, tout est sensé être fonctionnel à 100%.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={5}>
            <h3>Spécifications minimales requises pour utiliser le logiciel</h3>
            <p>
              Vous avez besoin d'un ordinateur qui correspond aux spécifications suivantes:<br/>
              <strong>Système d'exploitation (OS):</strong>
              Windows (Windows 10 recommandé).<br/>
              Mac (Mac OS X Catalina recommandé).<br/>
              <strong>Type du système:</strong> Système d'exploitation 64 bits et processeur x64.<br/>
              <strong>Processeur (CPU):</strong> 1 ghz et plus.<br/>
              <strong>Mémoire (RAM):</strong> 275 mo et plus.<br/>
              <strong>Espace disque:</strong> 275 mo et plus.<br/>
              <strong>Carte graphique (GPU):</strong> aucun besoin particulier.<br/>
              <strong>Carte son:</strong> N/A.<br/>
              <strong>Connexion internet:</strong> Nécessaire seulement pour
              l'installation et les <Link to="#11">mises à jours</Link>.<br/>
            </p>
          </Question>
          <Question id={6}>
            <h3>Comment savoir si mon ordinateur est compatible avec le logiciel?</h3>
            <p>
              Trouvez les détails techniques de votre ordinateurs et
              comparez les avec <Link to="#5">nos spécifications minimales requises</Link>.
              Voir{" "}
              <a href="https://fr.wikihow.com/conna%C3%AEtre-les-caract%C3%A9ristiques-techniques-de-votre-ordinateur">
                wikihow.com
              </a>{" "}pour un guide pratique.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={7}>
            <h3>Est-ce que le logiciel collecte mes données personnelles?</h3>
            <p>
              <strong>Non</strong>. Le {logiciel} ne fait le suivi d'aucune donnée privée.
              Tout ce qui est nécessaire est votre adresse de facturation avec laquelle
              nous vous fournissons la clé d'activation initiale dans le seul
              but de savoir qui utilise notre logiciel.
              Pour le reste, le logiciel ne connait rien d'autre que les informations
              que vous entrez comme vos factures, contacts, paramètres et le tout
              est encrypté selon les standards.
              Sans le mot de passe de votre dossier local <NoWrap>Finance D</NoWrap>,
              personne ne peut voir les données contenues dans votre installation du logiciel.
            </p>
          </Question>
          <Question id="8">
            <h3>À qui est-ce que le logiciel convient?</h3>
            <p>
              Cela dépend de vos activités. Toutefois,
              nous avons conçu le {logiciel}
              {" "}pour les petites entreprises
              et les travailleurs autonomes du Québec. Il est également
              possible de l'utiliser pour
              vos finances personnelles mais, le concept est
              optimisé pour les entreprises québécoises taxées ou non-taxées.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id="9">
            <h3>Est-ce que le logiciel peut produire mes états financiers officiels?</h3>
            <p>
              <strong>Non</strong>. Le {logiciel} n'est pas conçu pour entrer dans les complexités
              comptables. Idéalement, nous vous conseillons de garder une collaboration
              trimestrielle ou annuelle avec un comptable
              pour compléter votre comptabilité le mieux possible.
              Le logiciel sera votre outil pour facturer vos clients, suivre vos dépenses,
              obtenir des résultats en temps réels et bien prévoir vos stratégies financières.
              Il vous fera économiser de l'argent sur le temps d'honoraires professionnels
              et vous aidera au quotidien. Mais, Finance D n'est pas conçu pour remplacer
              un comptable professionnel.
            </p>
          </Question>
          <Question id="10">
            <h3>Pourquoi est-ce que je dois créer un dossier pour utiliser le logiciel?</h3>
            <p>
              Il est nécessaire de créer un dossier pour utiliser le {logiciel}
              {" "}car c'est le moyen de sécuriser vos données avec un mot de passe.
              De plus, vous pouvez gérer plusieurs dossiers indépendants
              en sélectionnant dans lequel vous voulez travailler au moment d'ouvrir
              le logiciel.
              Par exemple: deux entreprises, et un dossier personnel.{" "}
              <Link to="#7">En savoir plus sur la confidentialité</Link>.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id="11">
            <h3>Comment obtenir les mises à jour du logiciel?</h3>
            <p>
              Les mises à jour du {logiciel} se font automatiquement
              à partir du moment qu'il a été installé. Vous n'aurez
              jamais à télécharger de nouveau fichiers manuellement.
              Le logiciel est muni d'un système de mises à jour automatisées
              qui consiste à détecter si vous avez la dernière version
              ou si notre serveur en a une plus récente. Dans le cas
              où une nouvelle version est disponible et que vous
              êtes connectés à internet, l'installation se fera sans vous
              interrompre et une fenêtre d'avertissement vous indiquera
              qu'il suffit de redémarrer le logiciel pour appliquer les changements.
            </p>
          </Question>
          <Question id="12">
            <h3>Est-ce que vous offrez du soutien technique?</h3>
            <p>
              Oui. Mais, limité.
              Nous allons prioriser nos clients de tenue de livres
              (<Link to="https://gestiondesroches.com">chez
              Gestion Desroches Inc.</Link>),
              et répondre à un maximum de requêtes personnalisées
              selon la mesure de notre emploi du temps.
              Pour nous contacter visitez le lien suivant
              où nos coordonnées sont affichées:{" "}
              <Link to="https://finance-d.com/a-propos">finance-d.com/a-propos</Link>.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id="13">
            <h3>Qui est responsable du développement du logiciel?</h3>
            <p>
              Le {logiciel}, est développé par Alexandre Desroches,
              technicien comptable chez{" "}
              <Link to="https://gestiondesroches.com/a-propos">Gestion Desroches Inc.</Link>
              {" "}Prière de nous contacter via <Link to="https://finance-d.com">finance-d.com</Link> et non
              directement par Gestion Desroches.
            </p>
          </Question>
          <Question id="14">
            <h3>Est-ce que le logiciel fonctionne sur une tablette ou un cellulaire?</h3>
            <p>
              Malheureusement, <strong>non</strong>. C'est un logiciel pour ordinateurs Windows ou Mac.
              Les téléphones intelligents et tablettes n'ont
              pas le même système d'opération qu'un ordinateur et Finance D n'est pas conçu pour ces appareils.
              À notre avis, faire de la comptabilité sur un écran réduit est moins productif.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={15}>
            <h3>Le sommaire de taxes est-il fait pour la méthode régulière ou la méthode simplifiée?</h3>
            <p>
              Le sommaire de taxes du logiciel Finance D est conçu pour la méthode de déclaration de taxes régulière.
              Cette méthode est généralement plus payante pour les travailleurs autonomes.
              Finance D vous fourni l'information nécessaire pour remplir votre déclaration de taxes régulière
              dans le formulaire FPZ-500 du Gouvernement du Québec.
            </p>
          </Question>
          <Question id={16}>
            <h3>Y a-t-il des modules supplémentaires à acheter?</h3>
            <p>
              <strong>Non</strong>. Tout est inclus dans la version gratuite avec la même qualité
              qu'un logiciel payant. "C'est quoi la pogne?" Il n'y en a pas :)
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={17}>
            <h3>Est-ce que je peux utiliser mon cloud personnel pour partager un dossier?</h3>
            <p>
              <strong>Oui</strong>. Depuis la version 1.0.1. Il est possible de choisir optionnellement un dossier
              qui se trouve dans votre cloud personnel pour stocker et lire les informations du logiciel.
              De ce fait, deux ordinateurs ou plus peuvent partager un dossier sans frais.
              Mais, l'aspect moins idéal est qu'il n'y a pas de synchronisation en temps réel
              lorsque plusieurs personnes sont connectées sur le même dossier Finance&nbsp;D en même temps.
              <br/>
              Si vous avez absolument besoin du partage en temps réel
              car plusieurs membres de votre équipe va travailler en même temps,
              il est présentement impossible de le faire efficacement.
            </p>
          </Question>
          <Question id={18}>
            <h3>Est-ce que mes informations sont sécurisées?</h3>
            <p>
              <strong>Oui</strong>. Toutes les informations qui sont enregistrées dans votre logiciel Finance&nbsp;D
              sont encryptées et incompréhensibles à un lecteur externe. Le seul moyen de lire vos données
              est d'ouvrir le dossier dans Finance&nbsp;D avec votre mot de passe.
              Autrement, personne ne peut voir les données. Donc, vos clients, factures et infos personnelles
              sont accessibles à vous seulement et qui vous donnez volontairement votre mot de passe.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={19}>
            <h3>Pourquoi ne pas avoir créé une web app plutôt qu'un logiciel pour ordinateur?</h3>
            <p>
              Nous avons créé un logiciel plutôt qu'une web app pour deux raisons:
              1. Car les applications webs sont plus couteuses.
              Ce serait donc impossible de faire tout ce que le logiciel Finance&nbsp;D
              fait sans devoir vous facturer pour l'utilisation en mode web app.
              2. Car les applications web ne sont pas encore idéales pour des interfaces
              qui ont plusieurs fenêtres différentes ouverte en même temps.
              Par exemple, dans le logiciel vous pouvez avoir la fenêtre
              de recherche de factures et vos résultats financiers
              côte-à-côte avec l'interface principale.
            </p>
          </Question>
        </QuestionRow>
      </main>
    </Layout>
  );
}


const logiciel = `logiciel "Finance D - Tenue de livres simplifiée"`;

function QuestionRow({children}) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {children}
        </div>
      </div>
    </section>
  );
}

function Question({children, id}) {
  return (
    <div className={clsx('col col--6', styles.feature)}
         id={id}>
      {children}
    </div>
  );
}