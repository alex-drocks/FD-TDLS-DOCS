import React from 'react';
import Image from '@theme/IdealImage';

import UpdatePageLayout from "../../../Components/UpdatePageLayout";
import {VersionUpdate, NewFeatures, Improvements, Item} from "../../../Components/updates-components";

import LazyGif from "../../../Components/LazyGif";
import Link from "@docusaurus/core/lib/client/exports/Link";


export default function Index() {
  return (
    <UpdatePageLayout version={"1.0.3"}>
      <VersionUpdate version={"1.0.3"} date={"2021-05-18"}>
        <NewFeatures>
          <Item>
            Il est maintenant possible de choisir quel contenu afficher
            à propos de vos clients dans la fenêtre d'impression de facture de revenus.
            Allez dans les options du logiciel et choisissez ce que vous voulez voir sur vos factures:
            <br/>
            1.
            <Image img={require("../../../../static/img/updates/v103-modifier-visibilite-info-client.png")}/>
            <br/>

            2.
            <Image img={require("../../../../static/img/updates/v103-options-modifier-visibilite-info-client.png")}/>
            <br/>

            Remarquez la section "Ma facturation" qui contient les nouvelles options pour vos factures imprimées:

            <LazyGif
              relativePath={"/updates/v103-new-options.gif"}
              height={713}
              alt={"Démonstration de la création d'une copie de sauvegarde et son exportation"}
            />
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            La fenêtre d'impression pour vos factures de revenus est plus flexible.
            Nous avons ajouté deux sections optionnelles au bas de la facture;
            Soit la section "Commentaire" et la section "Signatures".

            <LazyGif
              relativePath={"/updates/v103-new-print-sections.gif"}
              height={1033}
              alt={"Démonstration des nouvelles sections de la fenêtre impression de factures de revenus"}
            />
          </Item>
          <Item>
            Nous avons également augmenté la grandeur de la boîte de texte sous vos numéros d'enregistrements.
            Et il y a maintenant la possibilité de cacher votre numéro de d'entreprise (NEQ).

            <Image img={require("../../../../static/img/updates/v103-larger-textarea.png")}/>
          </Item>
          <Item>
            Dans le gestionnaire de fournisseurs/clients,
            la section "Rôle" a été renommée à "Description" pour être
            plus générale.
            Par exemple: vous pourriez l'utiliser pour écrire la marque du véhicule et le kilométrage si vous êtes
            mécanicien et afficher cette information sur votre facture imprimée.

            <Image img={require("../../../../static/img/updates/v103-nom-role-description.png")}/>
          </Item>
          <Item>
            Le popup de confirmation d'enregistrement des factures va maintenant se fermer aussi avec un clic
            en dehors de sa zone.
          </Item>
          <Item>
            Nous avons retiré l'étape d'activation avec une clé de licence pour les nouveaux utilisateurs du logiciel.
            Cette étape pouvait sembler intimidante et n'est plus essentielle maintenant que le logiciel est
            officiellement gratuit.

            <Image img={require("../../../../static/img/updates/v103-removed-licence-new-startup-window.png")}/>
          </Item>
          <Item>
            Nous avons amélioré le flow des premiers pas dans le logiciel pour faire suite au retrait de
            l'activation par clé de licence. La page d'accueil est encore plus intuitive qu'avant et présente le moins
            d'obstacle possible avant de commencer à travailler dans Finance&nbsp;D.
          </Item>
          <Item>
            La gestion des copies de sauvegarde, dans l'onglet "Mon dossier"
            de la <Link to="/docs/navigation/fenetre-options-preferences-parametres">fenêtre d'options</Link>,
            a été améliorée pour être plus intuitive:

            <LazyGif
              relativePath={"/updates/v103-improved-backups.gif"}
              height={713}
              alt={"Démonstration de la création d'une copie de sauvegarde et son exportation"}
            />
          </Item>
        </Improvements>
        D'autres améliorations du logiciel sont à venir. Faites nous part de vos commentaires à
        admin@finance-d.com. Ce sont vos feedbacks qui font avancer le logiciel plus rapidement.
      </VersionUpdate>
    </UpdatePageLayout>
  );
}
