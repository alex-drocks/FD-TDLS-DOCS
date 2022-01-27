import React from 'react';

// import Image from '@theme/IdealImage';
// <Image img={require("../../../../static/img/updates/v104_advanced-folder-options.png")}/>

// import Link from "@docusaurus/core/lib/client/exports/Link";
// <Link to="/docs/gestion-dossiers/import-json/">En savoir plus sur l'importation &rarr;</Link>

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
    <UpdatePageLayout version={"1.6.2"}>
      <VersionUpdate version={"1.6.2"} date={"2022-01-27"}>

        <BugFixes>
          <Item>
            Correction d'un bug qui a été introduit dans la version 1.6.0 seulement sur les ordinateurs Mac.
            En fait, la fenêtre de recherche "Mes factures" restait invisible dû aux changements apportés avec la mémorisation du
            positionnement de cette fenêtre. La v1.6.2 est donc un simple correctif pour solutionner ce problème.
          </Item>
        </BugFixes>

      </VersionUpdate>
    </UpdatePageLayout>
  );
}
