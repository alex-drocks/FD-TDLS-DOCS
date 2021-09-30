import React from 'react';

// import Image from '@theme/IdealImage';
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
    <UpdatePageLayout version={"1.3.0"}>
      <VersionUpdate version={"1.3.0"} date={"2021-09-30"}>
        <NewFeatures>
          <Item>
            Ajout d'une option dans <i>Options &rarr; Mes préférences</i>, pour ne plus poser la question
            {" "}<i>"Créer un modèle de transaction&nbsp;?"</i> sous la colonne DESCRIPTION. Cette question pouvait être
            redondante pour ceux et celles qui n'utilisent pas de modèles de transactions.
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Mise à niveau du moteur interne. Rien de visible sur ce point, mais ces optimisations pourraient améliorer
            la performance générale du logiciel dans certains cas.
          </Item>
          <Item>
            Amélioration de la largeur maximale du texte dans les cellules de la colonne DESCRIPTION. La flèche de
            droite pouvait cacher la fin d'un mot quand le texte s'étirait jusqu'en dessous de celle-ci. Maintenant, le
            texte sera toujours visible.
          </Item>
          <Item>
            Améliorations de la largeur des colonnes de la table de transaction principale pour les grands écrans
            (1500px et plus en largeur). Il y aura plus d'espace pour une description complète.
          </Item>
          <Item>
            Amélioration du bouton <kbd>Imprimer</kbd> de la fenêtre principale. Il est maintenant visible avec un look
            "désactivé" même quand la facture de revenus n'est pas prête à imprimer. Le but est que les nouveaux
            utilisateurs puissent immédiatement découvrir qu'il existe la possibilité d'imprimer.
          </Item>
          <Item>
            Les menus d'options supplémentaires de la fenêtre principale sont maintenant plus révélateur des
            possibilités qui existent. Au lieu de cacher les options qui ne sont pas présentement disponibles, celles-ci
            resteront visibles mais de manière discrète. Ainsi, les menus vont révéler leurs options en tout temps, même
            quand les actions ne sont pas pertinentes dans le contexte de la facture actuelle.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction de la valeur du total $ de ligne visible dans le menu d'options supplémentaires des lignes de
            transactions. Il pouvait arriver que la valeur ne soit pas synchronisée avec les montants actuels de la
            ligne de transaction.
          </Item>
          <Item>
            Correction d'un problème avec les numéros de factures pour les factures existantes de type revenus. Quand
            une facture était rechargée pour la voir et/ou la modifier, si on modifiait le client d'origine, le
            générateur de numéro changeait le numéro de facture de façon indésirable.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
