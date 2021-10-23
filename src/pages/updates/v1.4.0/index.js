import React from 'react';

import Image from '@theme/IdealImage';
// <Image img={require("../../../../static/img/updates/v104_advanced-folder-options.png")}/>

// import Link from "@docusaurus/core/lib/client/exports/Link";
//<Link to="/docs/gestion-dossiers/import-json/">En savoir plus sur l'importation &rarr;</Link>

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
    <UpdatePageLayout version={"1.4.0"}>
      <VersionUpdate version={"1.4.0"} date={"2021-10-22"}>
        <NewFeatures>
          <Item>
            Ajout d'une option pour <strong>ouvrir automatiquement la plus récente facture</strong> au lancement de
            votre dossier de tenue de livres. Cette option sera surtout pratique pour ceux et celles qui travaillent
            sur une même facture pendant plusieurs périodes de temps. Par exemple, pour quelqu'un qui doit ajouter
            de nouvelles lignes de transactions sur une même facture afin de compter ses heures de travail.

            <Image img={require("../../../../static/img/updates/v140/v140-options-charger-facture-recente-au-lancement.png")}/>

          </Item>
          <Item>
            Ajout d'une option pour afficher/cacher la colonne SOUS-TOTAL et TOTAL individuellement pour la table de
            transaction principale (Voir l'image ci-haut).
          </Item>
          <Item>
            Ajout d'une fonction pour <strong>rembourser une facture</strong>. Quand une facture est déjà payée, cette
            fonction vous permettra de créer une nouvelle facture inversée pour rembourser un client, ou encaisser un
            remboursement d'un fournisseur. C'est idéal pour conserver l'historique de la facture originale ainsi que
            les traces de chaque paiements effectués. Le remboursement aura le même numéro de facture, mais avec la
            mention [REMB.] et toutes les transactions seront inversées. Il vous restera seulement à inscrire les
            informations du paiement qui a été effectué pour ce remboursement. Exemple: Remboursé par Carte de crédit,
            Virement interac, etc.

            <Image img={require("../../../../static/img/updates/v140/v140-fonctions-rembourser-dupliquer.png")}/>

          </Item>
          <Item>
            Ajout d'une fonction pour <strong>dupliquer une facture</strong>. Toute facture existante que vous ouvrez
            pour visualiser,
            peut maintenant créer une nouvelle facture à partir de celle-ci. Exemple d'utilisation: vous recherchez une
            facture dans vos enregistrements pour vous souvenir comment vous avez inscrits vos transactions. Ensuite,
            vous cliquez sur la fonction dupliquer pour générer une nouvelle facture identique mais qui sera modifiable
            avant d'être enregistrée (voir l'image ci-haut).
          </Item>
          <Item>
            Ajout d'options de préférences pour l'affichage de vos factures de revenus imprimées. Vous pouvez
            maintenant:
            <ul>
              <li>
                - Renommer le titre de la plupart des colonnes de la table des transactions;
              </li>
              <li>
                - Inverser les colonnes DESCRIPTION et CATÉGORIE pour les placer au début de la table des transactions;
              </li>
              <li>
                - Inverser la section des sommes facturées pour la positionner à droite de votre facture plutôt qu'à
                gauche.
              </li>
            </ul>

            <Image img={require("../../../../static/img/updates/v140/v140-options-imprimer.png")}/>

          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            La quantité maximale de caractères que l'on peut écrire dans une cellule de description, dans la table des
            transactions, a été augmentée de 400 à 800 caractères.
          </Item>
          <Item>
            Mise à jour interne du moteur de rendu. Changements imperceptibles pour l'utilisateur mais utile à savoir.
          </Item>
          <Item>
            La méthode interne de chargement initial pour chaque fenêtre a été améliorée. Donc, le chargement des
            fenêtres du logiciel devrait être plus rapide de quelques millisecondes.
          </Item>
          <Item>
            Amélioration du message initial des modèles de factures lorsque aucun modèle n'a encore été enregistré.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Aucun nouveau problème trouvé pendant le développement de cette version.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
