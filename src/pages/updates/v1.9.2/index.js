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
        <UpdatePageLayout version={"1.9.2"}>
            <VersionUpdate version={"1.9.2"} date={"2022-12-20"}>
                <BugFixes>
                    <Item>
                        Correction d'un bug où le Schema d'importation JSON était mal défini pour importer des
                        fichiers .json de clients et fournisseurs.
                    </Item>
                    <Item>
                        Correction de la fonction qui dirige vers la plus récente publication du blog Finance&nbsp;D.
                    </Item>
                </BugFixes>
            </VersionUpdate>
        </UpdatePageLayout>
    );
}
