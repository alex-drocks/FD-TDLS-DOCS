import React from 'react';

import Image from '@theme/IdealImage';
// <Image img={require("../../../../static/img/updates/v104_advanced-folder-options.png")}/>

// import Link from "@docusaurus/core/lib/client/exports/Link";
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
    <UpdatePageLayout version={"1.6.2"}>
      <VersionUpdate version={"1.6.2"} date={"2022-01-27"}>

        <BugFixes>
          <Item>
            Correction d'un bug qui a été introduit dans la version 1.6.0 seulement sur les ordinateurs Mac.
            En fait, la fenêtre de recherche "Mes factures" restait invisible dû aux changements apportés avec la
            mémorisation du
            positionnement de cette fenêtre. La v1.6.2 est donc un simple correctif pour solutionner ce problème.
          </Item>
        </BugFixes>

      </VersionUpdate>

      <VersionUpdate version={"1.6.0"} date={"2022-01-23"}>
        <NewFeatures>
          <Item>
            Ajout d'une section "Instructions de paiement" sur la deuxième page de votre modèle de facture de revenus.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v160/modele-facture-instructions-de-paiement.png")}/>
            <br/>
            <br/>
            Vous pouvez choisir d'inclure cette section ou non sur votre facture finale, imprimée sur papier,
            ou fichier PDF.
            Elle peut donc être directement dans votre facture et peut vous éviter d'avoir besoin de joindre
            manuellement les méthodes de paiements que vous acceptez.
            Par défaut, elle ne sera pas incluse. Vous devrez donc choisir l'option de l'inclure
            lorsque vous le voudrez.
          </Item>
          <Item>
            Ajout de la mémorisation automatique du positionnement des fenêtres Recherche, État des résultats et Taxes.
            Quand vous déplacez, redimensionnez ou maximisez l'une de ces fenêtres, une sauvegarde sera faite pour
            qu'à la prochaine ouverture de votre dossier, elles soient replacées là où elles étaient.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v160/options-preferences-gestion-fenetre.png")}/>
          </Item>
          <Item>
            Ajout d'une option pour enregistrer les paramètres de recherche avancés de la fenêtre de
            Recherche (Mes factures). Il est donc maintenant possible de préserver vos options de recherche
            entre chaque ouverture de votre dossier.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v160/memo-options-recherche.png")}/>
          </Item>

          <Item>
            Ajout d'un lien à la page de connexion pour diriger vers notre page de contribution volontaire.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v160/lien-contribution-volontaire.png")}/>
          </Item>

          <Item>
            Ajout d'une icône de notification servant de moyen de communication avec les utilisateurs du
            logiciel tout en respectant la vie privée (c'est-à-dire, que nous n'envoyons pas de courriels).

            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v160/icone-notification-nouveautees.png")}/>
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Amélioration de la flexibilité des colonnes de votre modèle de facture de revenus. Il est
            maintenant possible de ne pas afficher le montant du tout; ce qui rend possible
            de créer une facture minimaliste avec une description en pleine largeur.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v160/modele-facture-description-pleine-largeur.png")}/>
          </Item>
          <Item>
            Les catégories financières peuvent maintenant être exportées et importées dans des fichiers .JSON
            tout comme les factures et contacts.
          </Item>
          <Item>
            Il est maintenant possible d'afficher le gestionnaire de catégories financières à partir de la liste
            déroulante. Cette option a été ajoutée car il est plus intuitif de voir cette possibilité à cet endroit.
            La méthode d'accès actuelle est encore disponible aussi. C'est-à-dire, en cliquant sur le titre de la
            colonne catégorie financière.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v160/gerer-categorie-de-la-liste.png")}/>

          </Item>
          <Item>
            Documentation: Ajout d'un article pour montrer comment récupérer un mot de passe oublié.
          </Item>
          <Item>
            Documentation: Ajout d'un article pour montrer comment faire un rabais / escompte.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction de deux erreurs de texte dans la fenêtre du Sommaire de taxes.

            La première était dans le résumé des calculs où le status "à payer" ou "à recevoir"
            du gouvernement n'était pas correcte
            quand une des deux taxes était en négatif et l'autre en positif.

            La deuxième était sur les colonnes des détails de transactions taxées des factures de dépenses. Ces colonnes
            indiquaient Sous-total et date mais en réalité il s'agit de la TPS/TVH et de la TVQ.
            Merci à Mr. Julien de les avoir identifiées.
          </Item>
          <Item>
            Correction d'une erreur avec l'option d'afficher votre logo sur le modèle de facture de revenus.
            La fenêtre d'options ne respectait pas le choix précédent dans tous les cas.
          </Item>
          <Item>
            Correction d'une erreur qui pouvait arriver au lancement du logiciel
            lorsque la fenêtre pop-up qui demande d'enregistrer une copie de sauvegarde est encore ouverte.
            Merci à Mr. Gagnon de l'avoir rapportée.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
