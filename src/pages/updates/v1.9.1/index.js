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
        <UpdatePageLayout version={"1.9.1"}>
            <VersionUpdate version={"1.9.1"} date={"2022-12-18"}>

                <NewFeatures>
                    <Item>
                        Ajout d'une icône d'étampe "Payé" sur les facture de revenus imprimables dont le solde est
                        complètement payé. Ceci est optionnel et peut donc être désactivé au besoin.
                        <Image img={require("../../../../static/img/updates/v191/etampe-payé.png")}/>
                    </Item>
                    <Item>
                        Ajout d'une icône permettant d'accéder rapidement aux options des numéros de factures de revenus
                        lorsque la valeur du numéro de facture n'est pas dans la séquence habituelle.
                        <Image img={require("../../../../static/img/updates/v191/options-numero-facture.png")}/>
                    </Item>
                    <Item>
                        Cliquer sur la notice d'avertissement que le numéro de facture de revenus n'est
                        pas dans la séquence habituelle va restaurer le numéro pour vous faire gagner du temps.
                    </Item>
                    <Item>
                        Ajout de la conversion en $ CAD des devises étrangères EUR (Euros) et GBP (Livres),
                        en plus du USD qui était déjà supporté.
                        <Image img={require("../../../../static/img/updates/v191/conversion-devises.png")}/>
                    </Item>
                    <Item>
                        Retrait de la fonctionnalité qui permettait de remplir automatiquement les taxes sur ClicSéqur
                        de Revenu Québec. Cette option bien qu'extrêmement pratique est trop dépendante du site web
                        de Revenu Québec, ce qui rend le maintient du logiciel fragile et ne permet pas de garantir
                        son fonctionnement à long terme. Nous avons estimé mieux de ne plus supporter cette fonction.
                        Dorénavant, le bouton va ouvrir la page ClicSéqur mais il n'y aura plus de remplissage
                        automatique comme avant.
                    </Item>
                </NewFeatures>

                <Improvements>
                    <Item>
                        Améliorations de certains styles de la page d'accueil / connexion du logiciel pour mettre en
                        valeur les actions disponibles.
                    </Item>
                    <Item>
                        Retour arrière sur la version du moteur du logiciel pour redonner que les ordinateurs avec
                        Windows 7 redeviennent compatibles avec le logiciel.
                    </Item>
                    <Item>
                        Améliorations mineures de la fenêtre d'éditeur de contacts clients et fournisseurs.
                    </Item>
                    <Item>
                        Amélioration de la visibilité des boutons de la fenêtre de l'éditeur de catégories financières.
                    </Item>
                    <Item>
                        Ajout d'un tooltip d'explication pour laquelle le bouton exporter vers Excel n'est pas toujours
                        disponible dans la fenêtre de recherche de factures.
                        <Image img={require("../../../../static/img/updates/v191/explication-excel-export-disabled.png")}/>
                    </Item>
                    <Item>
                        La sélection par défaut pour le maximum de factures trouvées dans les résultats de la fenêtre
                        de recherche a augmenté à 100 factures max au lieu de 25.
                    </Item>
                    <Item>
                        Le style de la boîte de recherche dans la fenêtre de recherche de factures a été simplifiée.
                    </Item>
                    <Item>
                        Ajout du raccourci clavier <kbd>Pomme</kbd>+<kbd>F</kbd> pour focuser la boîte de recherche dans
                        la fenêtre de recherche de factures sur ordinateurs Mac.
                    </Item>
                </Improvements>

                <BugFixes>
                    <Item>
                        Correction de bug dans la fenêtre de l'état des résultats quand on choisissait la période de
                        date nulle, les date minimum et maximum n'étaient pas bien définie.
                    </Item>
                    <Item>
                        Correction du changement de date minimum et maximum dans la fenêtre de recherche de facture.
                        Le changement manuel de ces dates ne rafraichissait pas la recherche automatiquement comme
                        prévu.
                    </Item>
                    <Item>
                        Correction de bug lors du double-clic sur une catégorie financière de l'état des résultats.
                        Les dates de la période choisie dans l'état des résultats n'étaient pas correctement appliquées
                        dans la recherche de factures.
                    </Item>
                </BugFixes>

            </VersionUpdate>
        </UpdatePageLayout>
    );
}
