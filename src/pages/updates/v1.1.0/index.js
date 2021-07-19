import React from 'react';

import Image from '@theme/IdealImage';
//<Image img={require("../../../../static/img/updates/v104_advanced-folder-options.png")}/>

import Link from "@docusaurus/core/lib/client/exports/Link";
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
    <UpdatePageLayout version={"1.1.0"}>
      <VersionUpdate version={"1.1.0"} date={"2021-07-03"}>
        <NewFeatures>
          <Item>
            Lancement du logiciel Finance&nbsp;D compatible avec les nouveaux
            {" "}<Link to="/blog/version-du-logiciel-pour-mac-avec-processeur-apple-m1">
            <strong>Mac équipés du processeur Apple M1</strong>
          </Link> (concerne les propriétaires d'un Mac fabriqué en 2020+).
            <br/>
            <br/>
            <i>
              Si vous possédez un <strong>Mac dont l'année de fabrication
              est de 2020 et plus</strong>, il y a de fortes chances que vous ayez en votre possession un Mac équipé du
              nouveau processeur d'Apple <strong>(la puce M1)</strong>. Ce nouveau processeur révolutionne les ordis Mac
              en remplaçant les processeurs d'Intel qui étaient utilisés par Apple depuis plusieurs années.
              <br/><br/>
              <strong>En téléchargeant la version du logiciel Finance&nbsp;D pour le processeur Apple M1,
                la performance du logiciel va augmenter d'au moins 100%</strong>.
              C'est extrêmement rapide et surprenant.
              Par exemple: sur un MacBook Air 2020 avec le nouveau processeur M1, le logiciel performe plus vite que sur
              un PC Windows 10 équipé d'un i7 à 4.9&nbsp;ghz (presque difficile à croire)&nbsp;!
            </i>
            <br/>
            <br/>
            <strong>Voici le lien de téléchargement direct</strong>&nbsp;:{" "}
            <a href="https://app.finance-d.com/telechargement/mac/arm64/FinanceD-Installation.dmg">
              Télécharger pour Mac (processeur Apple M1) &darr;
            </a>
            <br/>
            <br/>
            <strong>NOTE 1&nbsp;:</strong> Si vous possédez un Mac équipé du processeur M1, tout ce que vous devez faire
            est de <a href="https://app.finance-d.com/telechargement/mac/arm64/FinanceD-Installation.dmg">
            télécharger et installer le logiciel Finance&nbsp;D compatible</a> pour votre système.
            Tous vos enregistrements seront conservés (factures, clients, fournisseurs, etc.). Il n'y a aucun risque
            pour vos données. C'est seulement le moteur de Finance&nbsp;D qui sera mis à jour. Vous remarquerez une
            nette amélioration de la performance du logiciel juste en faisant cela.
            <br/>
            <br/>
            <strong>NOTE 2&nbsp;:</strong> Si vous ne possédez pas un Mac 2020+ qui est équipé du nouveau processeur
            Apple
            M1, vous avez déjà le bon produit Finance&nbsp;D. Cet aspect de la mise à jour ne vous affecte donc pas.
          </Item>

          <Item>
            Il y a maintenant de nouvelles options pour personnaliser l'affichage de la table de transactions
            dans la fenêtre d'impression pour vos factures de revenus.

            <Image img={require("../../../../static/img/updates/v110/v1.1.0_options-table-transactions.png")}/>

          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Améliorations générales du style de la fenêtre d'impression ainsi que de l'expérience quand un utilisateur
            imprime sa première facture.
          </Item>

          <Item>
            Les icônes pour les numéros de factures ont été améliorées pour être plus descriptives et nous avons ajouté
            un bouton dynamique qui permet d'afficher l'aide quand les numéros ne suivent pas la séquence habituelle.
            Le but principal est de simplifier la prise en main des nouveaux utilisateurs quand ils tentent de modifier
            manuellement le générateur de numéros de factures de revenus.

            <Image img={require("../../../../static/img/updates/v110/v1.1.0_icones-numeros-factures-aide.png")}/>

            <Image img={require("../../../../static/img/updates/v110/v1.1.0_icones-numeros-factures-loupe.png")}/>

          </Item>

          <Item>
            Quand une facture a plusieurs paiements et que le solde à payé est à 0$, la couleur du numéro de paiement
            sera grise au lieu d'être vert/rouge pour que ce soit plus clair qu'il n'y a plus de nouveaux paiements
            nécessaires pour régler cette facture.
          </Item>

          <Item>
            Toujours en lien avec les paiements,
            quand vous chargez une facture existante, le dernier paiement disponible sera automatiquement sélectionné.
            Ce sera plus pratique et intuitif que de sélectionner le 1er paiement.

            <Image img={require("../../../../static/img/updates/v110/v1.1.0_paiements-solde-zero.png")}/>
          </Item>

          <Item>
            Ajout d'un bouton "Fermer sans enregistrer" dans la fenêtre des options du logiciel car les utilisateurs de
            Mac n'ont pas de barre de titre pour fermer la fenêtre comme sur Windows.
          </Item>

          <Item>
            Autres améliorations générales des détails de styles à certains endroits.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction des raccourcis clavier sur Mac <kbd>Ctrl</kbd> + <kbd>M</kbd> et
            {" "}<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> dans la table de transaction (2e
            tentative). Le problème était du au fait que sur Mac, ces raccourcis produisaient un symbole au lieu de
            simplement utiliser la fonction attachée au raccourci clavier dans le logiciel.
          </Item>

          <Item>
            Correction du raccourci clavier <kbd>F1</kbd> dans la fenêtre de confirmation d'enregistrement de facture,
            quand vous
            avez choisi de garder le dernier nom de client/fournisseur actif dans vos options et préférences.
            Avant cette correction, la préférence de garder le nom actif ne fonctionnait pas en utilisant le raccourci.
          </Item>

          <Item>
            Correction d'un problème interne avec la gestion des modèles de transactions quand on créer notre premier
            modèle.
          </Item>

          <Item>
            Correction du menu d'options supplémentaires des transactions afin de toujours afficher le bouton "effacer
            la ligne".
          </Item>

        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
