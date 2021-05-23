import React from 'react';

import UpdatePageLayout from "../../../Components/UpdatePageLayout";
import {VersionUpdate, NewFeatures, Improvements, Item} from "../../../Components/updates-components";

import Link from "@docusaurus/core/lib/client/exports/Link";
import LinkButton from "../../../Components/LinkButton";
import LazyGif from "../../../Components/LazyGif";


export default function Index() {
  return (
    <UpdatePageLayout version={"1.0.2"}>
        <VersionUpdate version={"1.0.2"} date={"2021-05-10"}>
          <NewFeatures>
            <Item>Calcul automatique des <Link to="/docs/categories/pourcentage-deductible-depenses">pourcentages
              déductibles pour vos catégories de dépenses</Link>&nbsp;:
              <LazyGif
                relativePath={"/updates/v102_categories-trouver-et-modifier-pourcentage.gif"}
                height={641}
                alt={"Démonstration de la gestion des pourcentages déductibles pour les catégories de dépenses"}
              />
              Avec cette nouveauté, vos catégories de dépenses peuvent calculer automatiquement les valeurs selon le
              pourcentage alloué qui est propre à votre entreprise.
              Ce qui aura pour effet de calculer les vraies valeurs déductibles pour vos rapports financiers.
              Soit pour votre État des résultats ainsi que pour votre Sommaire de taxes.
              <br/>
              <br/>
              Il est commun pour les travailleurs autonomes d'avoir besoin d'un pourcentage déductible autre que 100 %
              au niveau des dépenses de véhicule et de l'espace de bureau utilisé par l'entreprise.
              <br/>
              <br/>
              Par exemple : Supposons que vos dépenses de véhicule sont déductibles à 40 %
              et que vos dépenses de bureau maison sont à 20 %...
              Dans ce cas, il faudra simplement aller modifier vos catégories et inscrire ces pourcentages auxquels vous
              avez droit.
              Ensuite, vos rapports financiers vont automatiquement correspondre avec le pourcentage que vous avez
              choisi.
              <br/>
              <br/>
              Nous suggérons de faire un test en créant un nouveau dossier Finance D vide
              et une dépense de 100 $ à 60 % pour voir le résultat final dans vos rapports financiers.
              Ceci pourrait aider à comprendre le calcul.
              <br/>
              <br/>
              <div className="admonition admonition-danger alert alert--danger">
                <div className="admonition-heading">
                  <h5><span className="admonition-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path
                    d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"/></svg></span>danger
                  </h5>
                </div>
                <div className="admonition-content"><p>
                  Quand vous modifiez le pourcentage alloué d'une catégorie de dépenses à un taux autre que 100%,
                  les calculs de votre État des résultats et Sommaire de taxes vont considérer le nouveau pourcentage
                  alloué.
                  Donc, si vous aviez déjà faits des calculs de pourcentages déductibles manuellement avant cette mise à
                  jour, il est conseillé d'attendre au début de votre prochain trimestre avant d'activer le
                  nouveau calcul automatique des pourcentages pour ne pas modifier vos chiffres précédents.
                  Toutefois, notez que rien est perdu. Vous pouvez remettre les pourcentages de
                  n'importe quelle catégorie de dépenses à 100%
                  et le calcul redeviendra comme avant.
                </p></div>
              </div>
              <br/>
              <LinkButton to="/docs/categories/pourcentage-deductible-depenses">
                Voir comment utiliser la nouvelle fonction des pourcentages déductibles &rarr;
              </LinkButton>
            </Item>
            <Item>
              Trouvez rapidement vos catégories dans l'éditeur de catégories financière avec la nouvelle fonction de
              recherche (tel qu'illustré dans l'image précédente).
            </Item>
            <Item>
              Ajout d'une nouvelle fonction pour <Link to="/docs/transactions/convertir-usd-cad">convertir
              des montants USD $ en Dollars Canadiens CAD</Link>$&nbsp;:
              <LazyGif
                relativePath={"/transactions/transactions-convert-usd-to-cad.gif"}
                height={673}
                alt={"Démo de la fonction convertir USD vers CAD"}
              />
              <LinkButton to="/docs/transactions/convertir-usd-cad">En savoir plus à propos de la fonction USD
                CAD &rarr;</LinkButton>
            </Item>
          </NewFeatures>

          <Improvements>
            <Item>
              La fenêtre de l'État des résultats a légèrement gagné en performance et consomme moins de mémoire vive.
            </Item>
            <Item>
              Le bouton "Enregistrer" dans l'Éditeur de catégories financières
              va maintenant fermer l'Éditeur lorsque la sauvegarde
              des changements est terminée.
            </Item>
            <Item>
              Il est maintenant possible de naviguer avec les flèches hauts et bas du clavier dans l'Éditeur de
              catégories financières pour travailler plus vite.
            </Item>
            <Item>
              Ajout d'une nouvelle section de documentation et d'un nouveau vidéo YouTube sur le sujet des catégories
              financières de vos revenus et dépenses.
            </Item>
          </Improvements>
        </VersionUpdate>
    </UpdatePageLayout>
  );
}
