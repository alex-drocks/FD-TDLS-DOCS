import React from 'react';

// import Image from '@theme/IdealImage';
// <Image img={require("../../../../static/img/updates/v170/advanced-folder-options.png")}/>
// import Link from "@docusaurus/core/lib/client/exports/Link";
// <Link to="/docs/gestion-dossiers/import-json/">En savoir plus sur l'importation &rarr;</Link>
// import LazyGif from "../../../Components/LazyGif";
// <LazyGif
//   height={221}
//   alt={"Sélectionner un nom de client ou fournisseur dans Finance D"}
//   relativePath={"updates/v104_single-clic-select-name.gif"}
// />
import UpdatePageLayout from "../../../Components/UpdatePageLayout";
import {BugFixes, Improvements, Item, NewFeatures, VersionUpdate} from "../../../Components/updates-components";


export default function Index() {
  return (
    <UpdatePageLayout version={"1.9.0"}>
      <VersionUpdate version={"1.9.0"} date={"2022-08-27"}>

        <NewFeatures>
          <Item>
            Ajouts de nouvelles options d'affichage et de calcul pour la fenêtre de l'État des résultats.
          </Item>
          <Item>
            Fin du support pour <strong>Windows 7</strong>.{" "}
            <a href="https://docs.finance-d.com/logiciel-tenue-de-livres-simplifiee/blog/version-finale-finance-d-pour-windows-7/">
              En savoir plus &rarr;
            </a>
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Les instructions de paiement dans l'interface pour imprimer les factures de revenus sont maintenant plus
            flexibles.
          </Item>
          <Item>
            Ajout d'une option pour choisir si l'on veut toujours afficher la colonne QTÉ (quantité) dans l'interface
            pour imprimer les factures de revenus
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction du raccourci clavier <kbd>NumPad +</kbd> dans les descriptions d'une facture afin de ne pas créer
            une
            nouvelle transaction, mais plutôt permettre d'écrire le symbole "+". (Le raccourci fonctionne toujours dans
            n'importe quelle autre colonne d'une facture. Cette modification affecte seulement les colonnes de
            descriptions où l'ont veut généralement écrire du texte).
          </Item>
          <Item>
            Correction de l'affichage des factures de revenus imprimée en PDF lorsque l'option de placer le logo à
            droite est activée.
          </Item>
          <Item>
            Correction du numéro de facture de revenus généré automatiquement après avoir utilisé la fonction
            "Dupliquer".
          </Item>
          <Item>
            Correction du message d'erreur qui restait visible quand l'on modifiait avec succès un mot de passe oublié
            dans la fenêtre de connexion initiale.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
