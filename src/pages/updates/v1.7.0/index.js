import React from 'react';

import Image from '@theme/IdealImage';
// <Image img={require("../../../../static/img/updates/v170/advanced-folder-options.png")}/>
import Link from "@docusaurus/core/lib/client/exports/Link";
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
    <UpdatePageLayout version={"1.7.0"}>
      <VersionUpdate version={"1.7.0"} date={"2022-03-16"}>

        <NewFeatures>
          <Item>
            Ajout de la possibilité d'exporter les résultats de la fenêtre de recherche dans un fichier Excel.<br/>

            <br/>
            <Image img={require("../../../../static/img/updates/v170/export-excel.png")}/><br/>
            <br/>

            <strong>Le fichier Excel contient plus de colonnes</strong> que la vue simplifiée de la recherche, afin
            d'améliorer la qualité de l'information de vos factures.
            <br/>
            <br/>
            <strong>Voici la liste des colonnes additionnelles exportées dans le fichier Excel:</strong>
            <ul>
              <li>- Sous-total</li>
              <li>- TPS</li>
              <li>- TVQ</li>
              <li>- Type de transaction (Revenus ou Dépenses)</li>
              <li>- Catégories financières (liste séparée par virgule)</li>
              <li>- Méthodes de paiements (liste séparée par virgule)</li>
              <li>- Descriptions / produits (abrégées max 200 caractères.)</li>
            </ul>
            <br/>
            Cela pourrait être utile pour partager à un
            comptable ou pour faire vos propres manipulations de données dans Excel.
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Ajout de la possibilité de changer l'adresse courriel associée au dossier.
            Pour ce faire, allez dans les{" "}
            <Link to="/docs/navigation/fenetre-options-preferences-parametres/">options de votre dossier</Link>.
            Ensuite, cliquez sur l'onglet "Mon dossier".
            Finalement, cliquez sur l'icône de crayon à droite du courriel et choisissez la nouvelle adresse.
            Note: Cette adresse courriel ne sert qu'à la récupération de votre mot de passe, en cas d'oubli.
          </Item>
          <Item>
            Augmentation du nombre maximal de caractères alloués dans les champs de description de vos factures. Vous
            pouvez donc maintenant écrire des descriptions complètes allant jusqu'à 2000 caractères.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction de la sauvegarde des instructions de paiement qui se réinitialisaient de manière indésirable dans
            votre modèle de facture de revenus (la fenêtre d'impression pour envoyer votre facture au client).
          </Item>
          <Item>
            Correction du login pour le service ClicSéqur Entreprises. En effet, le gouvernement a mis à jour la page de
            connexion et le logiciel devait suivre leur changement.
          </Item>
          <Item>
            Correction d'une erreur d'importation des fichiers .json lorsqu'une facture à importer n'a pas d'historique
            de paiements. En fait, lorsqu'une facture que vous tentiez d'importer n'avait aucun paiement, le fichier
            était considéré comme invalide et l'importation ne pouvait pas fonctionner. Ce problème est maintenant
            résolu.
          </Item>
          <Item>
            Ajout d'un maximum de numéro de séquence pour le générateur de facture de revenus. Les nombres plus grands
            que 9007199254740991 devenaient des nombres exponentiels dû aux limites internes du langage de programmation.
            De ce fait, le nombre maximal du numéro de facture de revenu généré automatiquement est 9007199254740991.
            Si vous atteignez ce chiffre, le logiciel affichera 9007199254740991-MAX au numéro de facture.
          </Item>
          <Item>
            Correction de l'envoi du code de validation pour récupérer un mot de passe oublié lorsque votre nom
            de dossier Finance D contient des caractères irréguliers.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
