import React from 'react';

// import Image from '@theme/IdealImage';
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
    <UpdatePageLayout version={"1.2.0"}>
      <VersionUpdate version={"1.2.0"} date={"2021-07-29"}>
        <NewFeatures>
          <Item>
            La fenêtre du
            {" "}<Link to="/docs/navigation/fenetre-sommaire-de-taxes/"><i>Sommaire de taxes</i></Link>{" "}
            a maintenant la capacité de remplir votre déclaration de TPS/TVQ
            automatiquement dans ClicSÉQUR Entreprises (un service en-ligne de Revenu Québec).
            <br/>
            <br/>
            <Link href="https://youtu.be/9OIdQu9_V44">Voir la démonstration vidéo d'une déclaration de
              taxes sur ClicSÉQUR &rarr;</Link>
          </Item>
          <Item>
            La fenêtre du
            {" "}<Link to="/docs/navigation/fenetre-sommaire-de-taxes/"><i>Sommaire de taxes</i></Link>{" "}
            a maintenant un modèle du formulaire de déclarations de TPS/TVQ pré-rempli pour vous aider à remplir vos
            déclarations de taxes. (Il s'agit du formulaire FPZ-500 que vous recevez par la poste à chaque trimestre en
            provenance de Revenu Québec).
          </Item>
          <Item>
            La fenêtre du
            {" "}<Link to="/docs/navigation/fenetre-sommaire-de-taxes/"><i>Sommaire de taxes</i></Link>{" "} ainsi que
            La fenêtre de
            {" "}l'<Link to="/docs/navigation/fenetre-etat-des-resultats/"><i>État des résultats</i></Link>{" "}
            ont maintenant un nouveau bouton pour afficher la liste des transactions calculées. Cette fonction existait
            déjà mais était moins visible.
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            La liste des transactions dans les fenêtres d'État des résultats et du Sommaire de taxes a été améliorée.
            Entre autres, la description des transactions sera maintenant visible au complet.
          </Item>
          <Item>
            Les sélecteurs de dates dans les fenêtres de l'État des résultats, du Sommaire de taxes, ainsi que de la
            Recherche de factures, peuvent maintenant tous utiliser les raccourcis pour définir manuellement les dates.
            Par exemple: 1 mai &rarr; 1 Mai 2021, ou 31 12 &rarr; 31 Décembre 2021. Note: cette formule rapide pour
            écrire les dates fonctionne dans la fenêtre principale depuis le début.
          </Item>
          <Item>
            Les lignes de transactions peuvent maintenant accepter des montants d'argent qui contiennent des espaces et
            le symbole de dollar ($). Par exemple: Il est possible de copier-coller 230,99&nbsp;$ dans le montant d'une
            ligne et il sera formaté correctement à 230.99. Avant cette mise à jour, le montant aurait été effacé dû au
            format invalide. Ceci pourra vous aider quand vous copiez-collez des montants de factures numériques comme
            celles que vous recevez par e-mail.
          </Item>
          <Item>
            L'éditeur de contacts (clients et fournisseurs) va maintenant répondre à la touche <kbd>Enter</kbd> du
            clavier pour focuser la prochaine case logique dans le formulaire des informations du contact.
          </Item>
          <Item>
            Le bouton "Supprimer" dans l'éditeur de contacts est maintenant moins visible pour éviter la confusion avec
            le bouton principal "Enregistrer".
          </Item>
          <Item>
            La fenêtre d'accueil / de connexion du logiciel a été légèrement améliorée. Entres autres, les
            boutons secondaires sont un peu moins visibles et les textes explicatifs sont plus significatifs.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Une erreur de français a été corrigée dans la fenêtre d'impression des factures de revenus.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
