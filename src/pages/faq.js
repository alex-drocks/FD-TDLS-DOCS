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
      à propos du logiciel "Finance D - Tenue de livres simplifiée" dans notre section FAQ.
      Obtenez de l'aide et apprenez les trucs pour être le plus efficace possible
      avec le logiciel Finance D.`} //injected in meta description
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">FAQ</h1>
          <p className="hero__subtitle no-word-break">
            Réponses aux questions fréquentes à propos du <LogicielFD/>
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
            <h3>Le logiciel Finance&nbsp;D est-il vraiment gratuit&nbsp;?</h3>
            <p>
              <strong>Oui</strong>. Le <LogicielFD/> est
              gratuit à 100% et pour toujours. Il n'y a aucun frais caché ni
              aucune limite. Dans Finance&nbsp;D, tout est vraiment gratuit et
              sans publicité. Vous pouvez donc considérer Finance&nbsp;D
              comme étant un logiciel comptable gratuit.
            </p>
          </Question>
          <Question id={2}>
            <h3>Pourquoi le logiciel Finance&nbsp;D est-il gratuit&nbsp;?</h3>
            <p>
              Le <LogicielFD/> est gratuit, car il a été conçu pour rendre service aux Québécois et Québécoises.
              Le développement du logiciel est possible grâce à une passion pour la programmation
              et le désir sincère d'aider les travailleurs autonomes à avoir accès à un logiciel comptable simple et
              efficace
              pour leur comptabilité quotidienne. C'est une réalité assez forte pour
              motiver à offrir le logiciel gratuitement.
              Certes, il est possible qu'un autre produit créé par l'entreprise <NoWrap>Finance D</NoWrap> soit
              payant un jour, mais le logiciel de tenue de livres simplifiée restera gratuit et maintenu avec la
              meilleure qualité.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={3}>
            <h3>Le logiciel fonctionne sur quels appareils&nbsp;?</h3>
            <p>
              Le <LogicielFD/> est conçu pour fonctionner
              sur les ordinateurs <strong>Windows</strong>. De préférences,
              ayant la version Windows 10 et un système
              relativement récent pour une performance optimale.{" "}
              <Link to="#5">(Voir les spécifications minimales requises)</Link>.
              Il est également compatible avec les ordinateurs <strong>Mac</strong>.
              Ceci inclut les nouveaux Mac qui sont équipés de la puce Apple M1 (fabriqués depuis 2020).
            </p>
          </Question>
          <Question id={4}>
            <h3>Le logiciel est-il compatible avec Mac&nbsp;?</h3>
            <p>
              <strong>Oui</strong>. Le <LogicielFD/> est compatible avec les ordinateurs Mac (Apple).
              Ceci inclut les nouveaux Mac qui sont équipés de la puce Apple M1 (fabriqués depuis 2020).
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={5}>
            <h3>Spécifications minimales requises pour utiliser le logiciel</h3>
            <p>
              Vous avez besoin d'un ordinateur qui correspond aux spécifications suivantes:<br/>
              <strong>Système d'exploitation (OS):</strong>
              {" "}Windows (Windows 10 recommandé).<br/>
              Mac (Mac OS X Catalina ou BigSur recommandés).<br/>
              <strong>Type du système:</strong> Système d'exploitation 64 bits et processeur x64. Pour Mac, nous
              supportons également le arm64 avec la puce Apple M1.<br/>
              <strong>Processeur (CPU):</strong> 1 ghz et plus.<br/>
              <strong>Mémoire (RAM):</strong> 275 mo et plus.<br/>
              <strong>Espace disque:</strong> 275 mo et plus.<br/>
              <strong>Carte graphique (GPU):</strong> Aucun besoin particulier, mais une carte graphique peut améliorer
              la vitesse de l'interface graphique.<br/>
              <strong>Carte son:</strong> N/A.<br/>
              <strong>Connexion internet:</strong> Nécessaire seulement pour
              l'installation et les <Link to="#11">mises à jours</Link>. Le logiciel fonctionne même
              hors-ligne (même si vous n'êtes pas connectés à internet).
            </p>
          </Question>
          <Question id={6}>
            <h3>Comment savoir si mon ordinateur est compatible avec le logiciel&nbsp;?</h3>
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
            <h3>Est-ce que le logiciel collecte mes données personnelles&nbsp;?</h3>
            <p>
              <strong>Non</strong>.
              Vos données sont enregistrées localement dans votre ordinateur.
              Elles ne vont pas sur internet.
              De plus, tout ce qui est sauvegardé dans votre ordinateur est encrypté selon les standards AES-256.
              Ce qui a pour résultat que sans le mot de passe de votre dossier <NoWrap>Finance D</NoWrap>,
              et sans un accès physique à votre ordinateur, personne ne peut voir les données contenues dans votre
              installation du logiciel. Notez que Finance&nbsp;D connait est l'adresse courriel utilisée
              pour créer un dossier dans le logiciel et nous respectons votre vie privée.
            </p>
          </Question>
          <Question id="8">
            <h3>À qui est-ce que le logiciel convient&nbsp;?</h3>
            <p>
              Cela dépend de vos activités. Toutefois,
              nous avons conçu le <LogicielFD/>
              {" "}pour les petites entreprises
              et les travailleurs autonomes du Québec. Il est également
              possible de l'utiliser pour
              vos finances personnelles mais, le concept est
              optimisé pour les entreprises québécoises taxées ou non-taxées.
              Le logiciel est vraiment idéal pour une entreprise enregistrée
              aux taxes du Québec ayant un statut de travailleur autonome.
              Si vous avez besoin de plus de renseignement pour savoir si le logiciel vous conviendrait,
              n'hésitez pas à <Link href="https://finance-d.com/contact/">contacter Finance&nbsp;D</Link>.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id="9">
            <h3>Est-ce que le logiciel peut produire mes États Financiers officiels comme un Bilan par
              exemple&nbsp;?</h3>
            <p>
              <strong>Non</strong>. Le <LogicielFD/> n'est pas conçu pour entrer dans les complexités
              comptables. Idéalement, nous vous conseillons de garder une collaboration
              trimestrielle ou annuelle avec un comptable
              pour compléter votre comptabilité le mieux possible.
              Le logiciel sera votre outil pour facturer vos clients, suivre vos dépenses,
              obtenir des résultats en temps réels et bien prévoir vos stratégies financières.
              Il vous fera économiser de l'argent sur le temps d'honoraires professionnels
              et vous aidera au quotidien. Mais, <NoWrap>Finance D</NoWrap> n'est pas conçu pour remplacer
              un comptable professionnel quand il s'agit des États Financiers.
            </p>
          </Question>
          <Question id="10">
            <h3>Pourquoi est-ce que je dois créer un dossier pour utiliser le logiciel&nbsp;?</h3>
            <p>
              Il est nécessaire de créer un dossier pour utiliser le <LogicielFD/>,
              car c'est le moyen de sécuriser vos données avec un mot de passe.
              De plus, vous pouvez gérer plusieurs dossiers indépendants
              en sélectionnant dans lequel vous voulez travailler au moment d'ouvrir
              le logiciel.
              Par exemple: deux entreprises, et un dossier personnel.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id="11">
            <h3>Comment obtenir les mises à jour du logiciel&nbsp;?</h3>
            <p>
              Les mises à jour du <LogicielFD/> se font automatiquement
              à partir du moment qu'il a été installé sur votre ordinateur.
              En effet, le logiciel est muni d'un système de mises à jour automatisées
              qui consiste à détecter si vous avez la dernière version
              ou si notre serveur en a une plus récente. Dans le cas
              où une nouvelle version est disponible et que vous
              êtes connectés à internet, une notification vous indiquera
              qu'il suffit de redémarrer le logiciel pour appliquer les changements
              de la mise à jour. Notez que le logiciel vérifie les mises à jour seulement quand
              vous l'ouvrez. Il n'y aura pas de tâche qui s'exécute en arrière-plan
              si vous n'ouvrez pas le logiciel.
            </p>
          </Question>
          <Question id="12">
            <h3>Est-ce que vous offrez du soutien technique&nbsp;?</h3>
            <p>
              Oui. Mais, limité.
              Nous allons prioriser nos clients de tenue de livres
              (<Link to="https://gestiondesroches.com">chez
              Gestion Desroches Inc.</Link>),
              et répondre à un maximum de requêtes personnalisées
              selon la mesure de notre emploi du temps.
              Pour nous contacter visitez le lien suivant
              où nos coordonnées sont affichées:{" "}
              <Link to="https://finance-d.com/a-propos/">finance-d.com/a-propos</Link>.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id="13">
            <h3>Qui est responsable du développement du logiciel&nbsp;?</h3>
            <p>
              Le <LogicielFD/>, est développé par{" "}
              <Link to="https://www.linkedin.com/in/alexandre-desroches-dev/">Alexandre Desroches</Link>,
              programmeur et technicien comptable chez{" "}
              <Link to="https://gestiondesroches.com/a-propos">Gestion Desroches Inc.</Link>{" "}
              Il est constamment exposé aux besoins réels des travailleurs autonomes
              de par son travail en tenue de livres. Et il est également passionné
              pour la programmation. C'est un mélange parfait pour concevoir un logiciel
              comptable efficace et facile à utiliser.
            </p>
          </Question>
          <Question id="14">
            <h3>Est-ce que le logiciel fonctionne sur une tablette ou un cellulaire&nbsp;?</h3>
            <p>
              Malheureusement, <strong>non</strong>. C'est un logiciel pour ordinateurs Windows ou Mac.
              Les téléphones intelligents et tablettes n'ont
              pas le même système d'opération qu'un ordinateur et <NoWrap>Finance D</NoWrap> n'est pas conçu pour ces
              appareils.
              À notre avis, faire de la comptabilité sur un écran réduit est moins productif.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={15}>
            <h3>Le sommaire de taxes est-il fait pour la méthode de déclaration de taxe régulière ou pour la méthode
              simplifiée&nbsp;?</h3>
            <p>
              Le sommaire de taxes du logiciel <NoWrap>Finance D</NoWrap> est conçu pour la méthode de déclaration de
              taxes régulière.
              Cette méthode est généralement plus payante pour les travailleurs autonomes.{" "}
              <NoWrap>Finance D</NoWrap> vous fourni l'information nécessaire pour remplir votre déclaration de taxes
              régulière dans le formulaire FPZ-500 du Gouvernement du Québec.
              Par contre, rien ne vous empêche d'utiliser le logiciel si vous voulez préférez la méthode simplifiée
              des déclarations de taxes. Il n'y aura simplement pas de modèle pré-rempli dans le sommaire de taxes
              pour vous indiquer quoi écrire dans votre déclaration de TPS/TVQ.
            </p>
          </Question>
          <Question id={16}>
            <h3>Y a-t-il des modules supplémentaires à acheter&nbsp;?</h3>
            <p>
              <strong>Non</strong>. Enfin, un logiciel qui ne cache pas ses forces derrière votre portefeuille.
              Tout est inclus dans la version gratuite avec la même qualité
              qu'un logiciel payant. <i>"C'est quoi la pogne?"</i> Il n'y en a pas :)
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={17}>
            <h3>Est-ce que je peux utiliser mon cloud personnel pour partager un dossier&nbsp;?</h3>
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
            <h3>Est-ce que mes informations sont sécurisées&nbsp;?</h3>
            <p>
              <strong>Oui</strong>. Toutes les informations qui sont enregistrées dans votre logiciel Finance&nbsp;D
              sont encryptées selon le standard AES-256 et donc incompréhensibles à un intrus.
              Le seul moyen de lire vos données
              est d'ouvrir le dossier dans Finance&nbsp;D avec votre mot de passe.
              Autrement, personne ne peut voir les données. Donc, vos clients, factures et infos personnelles
              sont accessibles à vous seulement et qui vous donnez volontairement votre mot de passe.
            </p>
          </Question>
        </QuestionRow>
        <QuestionRow>
          <Question id={19}>
            <h3>Pourquoi ne pas avoir créé une web app plutôt qu'un logiciel pour ordinateur&nbsp;?</h3>
            <p>Nous avons créé un logiciel plutôt qu'une application web pour deux raisons&nbsp;:</p>
            <ol>
              <li>Car les applications webs sont plus couteuses.
                Ce serait donc impossible de faire tout ce que le logiciel Finance&nbsp;D
                fait sans devoir vous facturer pour l'utilisation en mode web app.
              </li>
              <li>Car les applications web ne sont pas encore idéales pour des interfaces
                qui ont plusieurs fenêtres différentes ouvertes en même temps.
                Par exemple, dans le logiciel vous pouvez avoir la fenêtre
                de recherche de factures et vos résultats financiers
                côte-à-côte avec l'interface principale.
              </li>
            </ol>
          </Question>
          <Question id={20}>
            <h3>Est-ce que le logiciel peut produire mon Bilan financier&nbsp;?</h3>
            <p>
              <strong>Non.</strong>{" "}
              Il n’y a pas de Bilan dans Finance&nbsp;D, car cette portion de la comptabilité est trop avancée pour
              correspondre à l’objectif de la simplicité.
              En effet, dès que l’on doit gérer les actifs et passifs, cela implique tout l’aspect complexe de la
              comptabilité qui entre dans le territoire de l'expertise comptable.
              Donc, la gestion du Bilan est volontairement exclue du logiciel pour rester focalisé sur le but de
              simplicité.
            </p>
          </Question>
          <QuestionRow>
            <Question id={21}>
              <h3>Comment peut-on collaborer avec un comptable en utilisant Finance&nbsp;D&nbsp;?</h3>
              <p>
                Contactez votre comptable et dite-lui que vous avez déjà
                vos chiffres d’affaires de comptabilisés
                (les factures sont déjà comptabilisées et vous avez des
                rapports à lui donner).
                Ensuite, il vous dira ce qu’il a besoin si jamais il veut des informations plus spécifiques.
                Les outils que vous avez en votre possession sont assez nombreux avec Finance&nbsp;D&nbsp;:
                Vous pourriez donner à votre comptable un accès direct à votre dossier Finance&nbsp;D s’il est ouvert à
                cette option.
                Autrement, vous pouvez lui remettre votre État des résultats, votre Sommaire de taxes pour déclaration
                de TPS/TVQ, et aussi imprimer une liste de transactions détaillées
                à partir de la fenêtre de recherche (Mes factures). Le scénario idéal
                est que votre comptable installe Finance&nbsp;D sur son ordinateur et que vous échangiez des copies de
                sauvegardes Finance&nbsp;D par courriel.
              </p>
            </Question>
            <Question id={22}>
              <h3>Est-ce que logiciel Finance&nbsp;D est de moins bonne qualité parce qu'il est gratuit&nbsp;?</h3>
              À notre humble avis, le <LogicielFD/> est d'une qualité exceptionnelle et pourrait très bien être
              commercialisé. Ce que nous faisons, nous le faisons comme si le logiciel était payant.
              La qualité, l'excellence, la simplicité et l'efficacité sont les aspects fondamentaux qui dirigent
              le projet. Si vous n'êtes pas satisfaits, nous ne sommes pas satisfaits non plus car ce logiciel est comme
              notre bébé. En d'autres mots, le <LogicielFD></LogicielFD> est un projet de la plus haute importance pour
              l'entreprise Finance&nbsp;D.
            </Question>
          </QuestionRow>
          <QuestionRow>
            <Question id={23}>
              <h3>Quel est le concept du logiciel Finance&nbsp;D en résumé&nbsp;?</h3>
              <p>
                Le <LogicielFD/>, est un outil efficace pour gérer votre facturation client, vos factures de
                dépenses, vos déclarations de TPS/TVQ et vos résultats financiers au quotidien. C'est un logiciel
                qui a été réfléchi pour les travailleurs autonomes du Québec qui doivent facturer leurs
                clients, comptabiliser leurs dépenses, payer leurs taxes et maximiser leurs profits. Le but est de
                simplifier votre comptabilité en la rendant appréciable, efficace et pratique dans la vraie vie, sans
                vous ruiner.
              </p>
            </Question>
            <Question id={24}>
              <h3>Peut-on proposer des demandes d'améliorations du logiciel&nbsp;?</h3>
              <p><strong>Oui.</strong> Bien sûr&nbsp;!
                À chaque jour, nous lisons attentivement les courriels et prenons le temps de répondre adéquatement à
                chacun. Donc, le meilleur moyen de communiquer une requête d'amélioration, est d'écrire un courriel
                qui explique votre idée en détails.{" "}
                <Link to="https://finance-d.com/contact/">Envoyer une demande d'amélioration</Link>.
              </p>
            </Question>
          </QuestionRow>
          <QuestionRow>
            <Question id={25}>
              <h3>Comment peut-on obtenir le logiciel Finance&nbsp;D&nbsp;?</h3>
              <p>
                Pour obtenir le <LogicielFD/>, il suffit d'aller sur notre page de téléchargement
                et de l'installer sur votre ordinateur (Windows ou Mac). Ensuite, votre entreprise pourra
                facturer des clients, enregistrer des dépenses, etc. C'est aussi simple que cela.{" "}
                <Link to="https://finance-d.com/telecharger/">Obtenir le logiciel Finance&nbsp;D</Link>
              </p>
            </Question>
          </QuestionRow>
        </QuestionRow>
      </main>
    </Layout>
  );
}


function LogicielFD() {
  return (
    <>logiciel "<NoWrap>Finance D</NoWrap> - Tenue de livres simplifiée"</>
  );
}

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
