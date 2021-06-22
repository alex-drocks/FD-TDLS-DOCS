import React from 'react';

import Image from '@theme/IdealImage';
//<Image img={require("../../../../static/img/updates/v104_advanced-folder-options.png")}/>

import Link from "@docusaurus/core/lib/client/exports/Link";
//<Link to="/docs/gestion-dossiers/import-json/">En savoir plus sur l'importation &rarr;</Link>

import LazyGif from "../../../Components/LazyGif";
// <LazyGif
//   height={221}
//   alt={"Sélectionner un nom de client ou fournisseur dans Finance D"}
//   relativePath={"updates/v104_single-clic-select-name.gif"}
// />

import UpdatePageLayout from "../../../Components/UpdatePageLayout";
import {VersionUpdate, NewFeatures, Improvements, Item, BugFixes} from "../../../Components/updates-components";


export default function Index() {
  return (
    <UpdatePageLayout version={"1.0.5"}>
      <VersionUpdate version={"1.0.5"} date={""}>
        <NewFeatures>
          <Item>
            Ajout de nouvelles options pour
            {" "}<strong>personnaliser vos numéros de factures de revenus</strong>{" "}
            qui sont générés automatiquement par le logiciel.
            <br/>
            Cette nouveauté répond à plusieurs requêtes des utilisateurs et sera utile
            quand vos séquences de numéros incluent des préfixes et/ou des séparateurs. Par exemple: FE2021-0001.
            <br/>
            <Link to="/docs/options/ma-facturation#personnaliser-vos-numéros-de-factures-de-revenus">
              En savoir plus à propos des numéros de factures personnalisés &rarr;
            </Link>
          </Item>

          <Item>
            Ajouts de nouvelles et meilleures manières de gérer vos
            {" "}<strong>modèles de transactions</strong>{" "}
            (produits, matériaux, pièces et services récurrents).
            <br/>
            Avec ces nouveautés, plusieurs vont remarquer pour la première fois qu'il existe
            un moyen facile de gérer des modèles de transactions récurrentes dans Finance&nbsp;D.
            Cette fonctionnalité a reçue une nette amélioration
            au niveau de la productivité et de la facilité d'utilisation.
            <br/>

            <Image img={require("../../../../static/img/updates/v105/v105-description-produit.png")}/>

            <Link to="/docs/transactions/modeles-de-transactions-et-produits/">
              En savoir plus à propos des modèles de transactions &rarr;
            </Link>
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            La petite fenêtre de confirmation d'enregistrement
            des factures a été améliorée pour être plus intuitive
            avec l'ajout de boutons d'actions.

            <Image img={require("../../../../static/img/updates/v105/v105-facture-confirmation-enregistree.png")}/>
          </Item>

          <Item>
            Les icônes des méthodes de paiements sont maintenant cliquables pour ouvrir la liste de sélection.

            <Image img={require("../../../../static/img/updates/v105/v105-icone-paiement-clickable.png")}/>
          </Item>

          <Item>
            Les nouveaux noms de clients et fournisseurs ne vont plus rendre l'icône de personnage de couleur vive
            afin de clarifier le caractère optionnel d'ajouter des informations de contact détaillées immédiatement.
            En effet, les noms sont automatiquement enregistrés au moment de sauvegarder une facture, même quand
            vous n'avez rien précisé à propos de votre contact. Vous pouvez ajouter des informations en tout temps
            en cliquant sur le personnage.

            <Image img={require("../../../../static/img/updates/v105/v105-nouveau-nom-de-client.png")}/>
          </Item>

          <Item>
            La validation des numéros de facture de revenus n'affichera plus
            le bouton de correction du numéro à droite lorsque vous
            avez manuellement modifié le numéro de séquence habituel.
            Le but est d'éviter la confusion que cette fonction pouvait provoquer.

            <Image img={require("../../../../static/img/updates/v105/v105-validation-des-numeros-de-factures.png")}/>
          </Item>

          <Item>
            Les lignes de transactions ont maintenant un icône d'options pour que ce soit plus évident qu'il existe
            un menu avec des actions spécifiques pour chaque ligne de la table de transaction.
            Ce changement visuel aidera les nouveaux utilisateurs à découvrir plus rapidement les options.

            <Image img={require("../../../../static/img/updates/v105/v105-transaction-row-options-button.png")}/>
          </Item>

          <Item>
            Cliquez dans la case "Mes factures" va maintenant toujours ouvrir la fenêtre de recherche plutôt
            que de permettre d'écrire du texte. Ce sera plus intuitif et rapide car de toute manière, il est possible
            d'écrire ce que l'on cherche directement dans la fenêtre de recherche.

            <Image img={require("../../../../static/img/updates/v105/v105-mes-factures-clic-instant-open.png")}/>
          </Item>

          <Item>
            Les fonctions pour imprimer les résultats de la fenêtre de recherche ont été déplacés dans un petit menu
            afin de clarifier que l'impression est prévue pour cette fenêtre et non pour imprimer vos factures de
            revenus.
            En effet, pour imprimer vos factures de revenus, il faut ouvrir la facture en question à partir de la
            fenêtre de recherche et ensuite utiliser la fonction d'impression dans l'interface de cette facture (fenêtre
            principale).

            <Image img={require("../../../../static/img/updates/v105/v105-fenetre-recherche-amelioree.png")}/>
          </Item>

          <Item>
            Quand vous charger une facture de revenus existante,
            le bouton pour imprimer est maintenant vert puisque c'est une action commune à mettre en évidence.
            Par la même occasion, nous avons fait en sorte qu'un clic sur la notification "Facture existante"
            puisse réinitialiser la fenêtre.

            <Image img={require("../../../../static/img/updates/v105/v105-facture-footer-controls.png")}/>
          </Item>

          <Item>
            Ajout de contenu dans la documentation du logiciel à propos des nouveautés de la mise à jour.
          </Item>

        </Improvements>

        <BugFixes>
          <Item>
            Correction d'un problème interne quand on supprimait une ligne de transaction de la table
            des transactions d'une facture.
          </Item>

          <Item>
            Correction du raccourci clavier <kbd>Ctrl</kbd> + <kbd>M</kbd> qui ne fonctionnait pas toujours
            comme prévu pour afficher les modèles de transactions.
          </Item>
        </BugFixes>

        <p>
          Dans la prochaine version (v1.0.6), nous allons nous concentrer sur l'amélioration de la fenêtre
          d'impression des factures de revenus, sauf si nous rencontrons des nécessités plus urgentes à régler.
        </p>
      </VersionUpdate>
    </UpdatePageLayout>
  );
}
