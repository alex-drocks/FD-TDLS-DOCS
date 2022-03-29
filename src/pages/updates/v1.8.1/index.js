import React from 'react';

import Image from '@theme/IdealImage';
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
    <UpdatePageLayout version={"1.8.1"}>
      <VersionUpdate version={"1.8.1"} date={"2022-03-29"}>

        <p>
          Version de correctifs pour la v1.8.0.
        </p>
        <br/>

        <Improvements>
          <Item>
            <strong>Amélioration des sélecteurs de dates</strong> en lien avec les correctifs apportés
            (voir corrections de bugs ci-bas).
            Il est maintenant possible d'écrire les mois Février, Août et Décembre avec et sans accents.
            Ils seront reconnus correctement.
            Donc par exemple, il est maintenant possible d'écrire "1 fev", "23 aout" "30 de" pour
            sélectionner les dates de n'importe quel sélecteur de date.
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction de la nouvelle fonction <strong>"Réinitialiser la date de facture
            à la date d'aujourd'hui"</strong>, afin qu'elle
            n'affecte plus la date de facture d'une facture existante (seule les nouvelles factures seront affectées).
          </Item>
          <Item>
            <strong>Correction des dates qui incluaient le mois de "Février"</strong>. Le sélecteur de date
            utilisé dans chaque endroit du logiciel interprétait mal la date de "Février"
            et la remplaçait par le mois actuel.
          </Item>
          <Item>
            <strong>Correction des dates de trimestres fiscaux</strong> dans les sélecteurs de période de dates
            pour les rapports et la recherche.
            Les dates de début de trimestres fiscaux étaient mal calculées dans certains cas et produisaient
            des périodes erronées.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v180/fixed-trim-fiscal.png")}/>
            <br/>
            <br/>
          </Item>
        </BugFixes>

      </VersionUpdate>

      <VersionUpdate version={"1.8.0"} date={"2022-03-28"}>

        <NewFeatures>
          <Item>
            Ajout d'une option pratique pour toujours réinitialiser la date de facture à aujourd'hui. Si vous
            cocher cette option, la date va toujours revenir à aujourd'hui au moment de réinitialiser
            l'interface principale de facturation.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v180/option-reset-date-today.png")}/>
          </Item>
          <Item>
            Ajout de nouvelles fonctions à la <strong>fiche de contact</strong> des Clients et Fournisseurs.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v180/fiche-de-contact-amelioree.png")}/><br/>
            <br/>
            <ul>
              <li>1. <strong>Ajouts d'icônes cliquables</strong> aux champs du site, courriel, cellulaire, téléphone
                et adresse, pour offrir les fonctionnalités pratiques d'ouvrir le site internet,
                écrire un courriel, faire un appel et chercher l'adresse sur Google.
              </li>
              <br/>
              <li>2. <strong>Ajout d'une nouvelle section</strong>, "Paiement par défaut",
                pour gérer la méthode, condition et note de paiement individuellement. En effet, chaque contact
                peut maintenant avoir ses paramètres uniques (ceci est 100% optionnel et facultatif).
              </li>
              <br/>
              <li>3. <strong>Ajout d'une confirmation</strong> en quittant la fiche de contact quand des
                modifications non enregistrées pourraient être perdues. Le dialogue de confirmation vous demandera
                si vous voulez enregistrer les changements ou non (voir capture d'écran ci-dessous).
              </li>
            </ul>
            <br/>
            <Image img={require("../../../../static/img/updates/v180/fiche-contact-prevenir-perte-non-enregistree.png")}/>
            <br/>
            <br/>

            <h5>Détails sur la nouvelle section "Paiement par défaut"&nbsp;:</h5> Elle est utile quand
            vos clients vous payent par une méthode identique à chaque facture et aussi quand vous payer
            vos fournisseurs d'une manière identique à chaque fois. Vous pourrez gagner un peu de temps puisque
            cette information sera remplie automatiquement pour les nouvelles factures.
            <br/>
            <br/>
            Elle est également utile pour améliorer vos conditions de paiements (termes de paiements) quand vous facturez.
            Avant, il nous étions limités à une gestion globale pour l'ensemble de nos clients.
            Tandis que maintenant, chaque contact peut définir sa propre condition de paiement (facultatif).
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Amélioration du <strong>modèle de facture de revenus</strong> en lien avec les nouveautés
            de la fiche de contact client.
            <br/>
            <br/>
            Les paramètres de "Paiement par défaut" de vos clients vont surpasser les paramètres globaux
            et s'afficher sur votre facture de revenus. Dans l'image ci-dessous, par exemple, le client
            a une condition de paiement unique de Net 15 jours au lieu de Net 30 jours qui est la condition générale
            habituelle pour tous les autres clients.
            <br/>
            <br/>
            <h5>Condition de paiement unique par client&nbsp;:</h5>
            <Image img={require("../../../../static/img/updates/v180/print-style-pro-section-references-facture.png")}/>
            <br/>
            <br/>
            <br/>
            <h5>Note additionnelle unique par client&nbsp;:</h5>
            <Image img={require("../../../../static/img/updates/v180/print-note-additionnelle-par-client.png")}/>
            <br/>
            <br/>
          </Item>
          <Item>
            Amélioration de la section des références du <strong>modèle de facture de revenus</strong> avec
            un design plus professionnel et complet.
            En effet, la section du numéro de facture et de la date, peut maintenant être configurée pour contenir
            plus d'informations utiles à la comptabilité tout en procurant un style plus sophistiqué.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v180/print-options-references-facture-pro.png")}/>
          </Item>
          <Item>
            Amélioration de l'alignement des nombres dans la table de transaction
            du <strong>modèle de facture de revenus</strong>.
            Vous pouvez maintenant choisir d'aligner les nombres à droite pour un calcul
            visuel plus facile qui suit l'alignement traditionnel des décimales.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v180/print-option-aligner-nombre-a-droite.png")}/>
          </Item>
          <Item>
            Il est maintenant possible de cliquer en utilisant <kbd>Control</kbd> + <kbd>Click</kbd> sur
            le solde du client/fournisseur afin d'afficher l'historique des factures dans la fenêtre de recherche.
            <br/>
            <br/>
            <Image img={require("../../../../static/img/updates/v180/control-click-afficher-factures-soldes.png")}/>
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction de raccourcis clavier dans la table de transaction de la fenêtre principale. En fait, certains
            raccourcis étaient illogiques, car ils empêchaient d'utiliser des symboles communs tels que
            le plus <kbd>+</kbd>, le égal <kbd>=</kbd> et le trait du bas <kbd>_</kbd> dans les colonnes de description.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
