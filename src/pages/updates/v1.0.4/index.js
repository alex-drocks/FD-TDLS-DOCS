import React from 'react';
import Image from '@theme/IdealImage';

import UpdatePageLayout from "../../../Components/UpdatePageLayout";
import {VersionUpdate, NewFeatures, Improvements, Item, BugFixes} from "../../../Components/updates-components";

import LazyGif from "../../../Components/LazyGif";
import Link from "@docusaurus/core/lib/client/exports/Link";


export default function Index() {
  return (
    <UpdatePageLayout version={"1.0.4"}>
      <VersionUpdate version={"1.0.4"} date={"2021-06-13"}>
        <NewFeatures>
          <Item>
            Nouvelle section avancée dans les options de "Mon Dossier".
            <Image img={require("../../../../static/img/updates/v104_advanced-folder-options.png")}/>
          </Item>
          <Item>
            Il est maintenant possible d'<strong>importer des enregistrements</strong> de
            Clients, Fournisseurs, Factures de revenus, ou Factures de dépenses
            dans un dossier Finance&nbsp;D grâce à des fichiers au format JSON.
            Cette fonction sert à ajouter des enregistrements qui proviennent d'un autre dossier Finance&nbsp;D.
            <br/>
            <Link to="/docs/gestion-dossiers/import-json/">En savoir plus sur l'importation &rarr;</Link>

          </Item>
          <Item>
            Il est maintenant possible d'<strong>exporter des enregistrements</strong> de
            Clients, Fournisseurs, Factures de revenus, ou Factures de dépenses
            au format JSON.
            Cette fonction sert à partager des enregistrements spécifiques qui proviennent de votre dossier
            Finance&nbsp;D.
            <br/>
            <Link to="/docs/gestion-dossiers/export-json/">En savoir plus sur l'exportation &rarr;</Link>
          </Item>
          <Item>Nouvelle fonction pour <strong>archiver les vielles factures</strong> de votre dossier.
            Si vous souhaitez closer une période comptable, ou que vous avez un trop grand nombre de factures dans votre
            dossier, vous pouvez maintenant l'archiver.
            <br/>
            <Link to="/docs/gestion-dossiers/archiver-un-dossier/">En savoir plus sur l'archivage &rarr;</Link>
          </Item>
          <Item>
            La fenêtre de connexion à vos dossiers de tenue de livres peut maintenant
            {" "}<strong>mémoriser votre mot de passe</strong> si vous le voulez.
            Cette fonction est optionnelle et indépendante pour chaque dossier.
            <br/>
            <Link to="/docs/gestion-dossiers/memoriser-mot-de-passe/">En savoir plus à propos de la mémorisation du mot
              de passe&rarr;</Link>

            <Image img={require("../../../../static/img/updates/v104_password-memo.png")}/>
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Les boites de dialogues de confirmation pour supprimer un nom et une facture on été révisées pour être plus
            simples.
            <Image img={require("../../../../static/img/updates/v104_new-dialog-style.png")}/>
          </Item>
          <Item>
            Lorsque vous créez un nouveau dossier de tenue de livres,
            il s'ouvrira automatiquement sans avoir besoin
            d'écrire le mot de passe.
          </Item>
          <Item>
            Il faut maintenant un seul clic sur la boîte de sélection d'un nom de client ou fournisseur
            pour que la liste de vos noms s'affiche. Avant, le nom sélectionné restait le seul visible et il fallait
            absolument cliquer sur la flèche de droite, ou faire un double clic pour voir les autres choix de nom.

            <LazyGif
              height={221}
              alt={"Sélectionner un nom de client ou fournisseur dans Finance D"}
              relativePath={"updates/v104_single-clic-select-name.gif"}
            />
          </Item>
        </Improvements>

        <BugFixes>
          <Item>
            Correction de la fenêtre pour la création d'un nouveau client qui ne considérait pas vos préférences de
            Catégorie financière et de Taxes par défaut. Nous avons corrigé l'erreur pour faire en sorte de suivre les
            préférences que vous avez choisies dans vos options.
          </Item>
          <Item>
            Correction de la largeur de la boite de sélection de la période dans les options supplémentaires de la
            fenêtre de recherche. Elle n'avait pas la même largeur que les autres.
          </Item>
          <Item>
            Correction d'un problème où le fait d'effacer le nom d'un client/fournisseur dans la
            fenêtre principale de facturation ne remettait pas les valeurs par défaut pour la première transaction de la
            facture.
          </Item>
          <Item>
            Correction du positionnement de la fenêtre d'options.
            Si vous avez plus d'un écran d'ordinateur et que votre fenêtre principale était sur un autre écran, la
            fenêtre d'options apparaissait ailleurs et cela pouvait être dérangeant.
          </Item>
          <Item>
            Correction d'un problème où la détection d'un numéro de facture double provoquait une erreur inattendue si
            le nom du fournisseur/client avait été supprimé.
          </Item>
          <Item>
            Correction d'un problème où les paiements d'une facture récurrente étaient parfois enregistrés sous la
            valeur "aujourd'hui". Ce problème faisait en sorte qu'au moment de recharger cette facture, le paiement
            allait prendre la date d'aujourd'hui au lieu de garder la date réelle du paiement enregistré.
          </Item>
          <Item>
            Correction d'une imprécision de 0.01$ sur certains cas d'arrondissements exceptionnels
            du sous-total et du grand-total des factures.
            Il pouvait y avoir des cas où le calcul après l'arrondissement à deux décimales
            devenait mathématiquement impossible et devait donc être ajusté d'une cent (0.01$).
            Par exemple: 79.95$ plus taxes donnera maintenant 91.93$ au lieu de 91.92$ puisque
            {" "}<code>79.95$ + 4.00 + 7.98 = 91.93$</code>.
            <br/>
            <strong>Note:</strong> Vos factures existantes ne seront pas affectées par ce
            changement. Ce sont les nouvelles factures qui utiliseront ce nouvel arrondissement ajusté.
          </Item>
          <Item>
            Corrections mineures de l'interface visuelle sur Mac. Il y avait un mauvais alignement à certains endroits
            dû au fait que le type de police par défaut sur un Mac est différent de celui Windows.
          </Item>
        </BugFixes>

        <p>
          Pour la prochaine version (1.0.5), des améliorations sont prévues pour la gestion des numéros de factures de
          revenus et possiblement aussi, l'addition d'auto-complétion pour les descriptions.
        </p>
      </VersionUpdate>
    </UpdatePageLayout>
  );
}
