import React from 'react';

import Image from '@theme/IdealImage';
// <Image img={require("../../../../static/img/updates/v104_advanced-folder-options.png")}/>

import Link from "@docusaurus/core/lib/client/exports/Link";
// <Link to="/docs/gestion-dossiers/import-json/">En savoir plus sur l'importation &rarr;</Link>

// import LazyGif from "../../../Components/LazyGif";
// <LazyGif
//   height={221}
//   alt={"Sélectionner un nom de client ou fournisseur dans Finance D"}
//   relativePath={"updates/v104_single-clic-select-name.gif"}
// />

import UpdatePageLayout from "../../../Components/UpdatePageLayout";
import {VersionUpdate, NewFeatures, Improvements, Item, BugFixes} from "../../../Components/updates-components";


export default function Index() {
  return (
    <UpdatePageLayout version={"1.5.0"}>
      <VersionUpdate version={"1.5.0"} date={"2021-11-17"}>
        <NewFeatures>
          <Item>
            Ajout d'un graphique de vos Revenus, Dépenses et Profits, organisé dynamiquement selon la période de dates
            que vous avez sélectionné, dans la fenêtre de l'État des résultats.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v150/v150-graphique-results.png")}/>
          </Item>
          <Item>
            Ajout de rappel pour créer une copie de sauvegarde en quittant votre dossier de tenue de livres. En effet,
            une petite fenêtre de confirmation vous demandera si vous souhaitez faire une copie de sauvegarde du
            dossier. Si cela vous dérange, simplement cliquer sur "Ne plus me poser la question" pour cesser d'afficher
            cette fenêtre. Pour en savoir plus, lisez la documentation sur les{" "}
            <Link to="/docs/gestion-dossiers/copies-de-sauvegarde/">copies de sauvegardes &rarr;</Link>.

            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v150/v150-backup-prompt.png")}/>
          </Item>
          <Item>
            Ajout des périodes fiscales aux fenêtres de États des résultats, Sommaire de taxes et Recherche
            de factures. En fait, si votre entreprise débute son année fiscale à une autre date que le 1er janvier, vous
            aurez maintenant le choix de sélectionner vos trimestres fiscaux dans les plages de dates pour les rapports
            de ces fenêtres.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v150/v150-plages-dates.png")}/>
          </Item>
          <Item>
            Le modèle du formulaire de taxes FPZ-500 peut maintenant être imprimé pour vous aider à compléter
            vos rapport de taxes officiels. Note: ce modèle n'est pas transmissible à Revenu Québec; c'est un guide
            pour vous indiquer quoi écrire dans votre vrai rapport de taxes.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v150/v150-FPZ500.png")}/>
          </Item>
          <Item>
            Ajout d'une nouvelle ligne au Sommaire de taxes pour voir votre revenu total taxes incluses. Utile pour
            ceux et celles qui utilisent la méthode de déclaration de taxes simplifiée de Revenu Québec (méthode non
            recommandée par Finance&nbsp;D soit dit en passant).
            <br/>
            <Image img={require("../../../../static/img/updates/v150/v150-sommaire-taxes.png")}/>
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Améliorations majeures de la fenêtre pour imprimer vos factures de revenus. Plusieurs nouvelles options de
            configurations du design ainsi qu'une simplification de la manière de vous présenter les options
            disponibles.
            <br/>
            <br/>
            <ul>
              <li>- Plus d'options d'affichage et une meilleure logique pour personnaliser votre modèle de facture de
                revenus.
              </li>
              <li>- Commentaire automatiquement enregistré individuellement pour chaque facture.</li>
              <li>- Possibilité d'inverser toutes les sections de votre facture soit à gauche ou à droite.</li>
            </ul>
            <br/>
            <Image img={require("../../../../static/img/updates/v150/v150-fenetre-imprimer.png")}/>
          </Item>
          <Item>
            Améliorations des titres de plusieurs options dans la fenêtre d'options. Des termes plus précis et moins
            difficiles à lire.
          </Item>
          <Item>
            Changer le nom de votre dossier, dans les options, va maintenant mettre à jour le titre des fenêtres du
            logiciel pour correspondre au nouveau nom.
          </Item>
          <Item>
            Ajout d'une icône de recherche dans la fenêtre État des résultats lorsque votre souris passe par-dessus une
            ligne de catégorie financière. Ceci indique simplement qu'il est possible de double cliquer sur une ligne
            afin de voir les factures incluses dans le calcul des résultats financiers.
          </Item>
          <Item>
            Diminution de 5MB sur la taille totale du fichier à installer sur votre ordinateur pour le logiciel.
          </Item>
          <Item>
            La fonction importer une copie de sauvegarde de la fenêtre d'accueil et connexions va maintenant se souvenir
            du dernier emplacement utilisé au lieu de toujours ouvrir dans votre dossier de téléchargements.
          </Item>
          <Item>
            Améliorations de la performance du logiciel avec les grandes quantités de données. Maintenant capable de
            supporter facilement 10 000 enregistrements et plus sans ralentir.
          </Item>
          <Item>
            Les fenêtres État des résultats, Sommaire de taxes, Recherche de factures, ainsi que Imprimer une facture,
            vont maintenant afficher un indicateur de chargement pendant que le contenu est généré par Finance&nbsp;D
            afin de vous donner une meilleure expérience visuelle quand la tâche prend plus d'une seconde à se terminer.
          </Item>
          <Item>
            Dans les fenêtres État des résultats et Sommaire de taxes, l'entête incluant la plage de date va maintenant
            rester visible peu importe où vous êtes situés dans la page afin de faciliter le changement de période
            sélectionnée et la visualisation de vos chiffres.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction d'un problème avec la touche <kbd>Enter</kbd> dans l'éditeur des contacts clients et
            fournisseurs.
          </Item>
          <Item>
            Correction d'un problème avec la fonction "Changer de dossier" qui pouvait parfois rouvrir le même dossier
            au lieu d'aller à la page d'accueil et de connexion.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
