import React from 'react';
import Image from '@theme/IdealImage';

import UpdatePageLayout from "../../Components/UpdatePageLayout";
import {BugFixes, Improvements, NewFeatures, VersionUpdate, Item} from "../../Components/updates-components";
import LazyGif from "../../Components/LazyGif";
import ModernVideo from "../../Components/ModernVideo/ModernVideo";
import Link from "@docusaurus/core/lib/client/exports/Link";
import LinkButton from "../../Components/LinkButton";

import v092_sommaireTaxes from '../../../static/img/updates/update-sommaire-taxes.png';
import v092_sommaireTaxes2 from '../../../static/img/updates/v092-fenetre-sommaire-taxes.png';
import v092_boutonAide from '../../../static/img/updates/v093-bouton-aide.png';
import v096_changeFolder from '../../../static/img/updates/v096_changeFolder.png';
import v096_optionsMesPreferences from '../../../static/img/updates/v096_optionsMesPreferences.png';
import v097_imprimerRecherche from '../../../static/img/updates/v0.9.7-imprimer-recherche.png';
import v097_imprimerTransactionsEtatResultats from '../../../static/img/updates/v0.9.7-resultats-transactions.png';
import v097_codeTaxesCanada from '../../../static/img/updates/v0.9.7-code-taxes-canada.png';
import v097_totalFactureNom from '../../../static/img/updates/v0.9.7-total-facture-du-nom.png';
import v098_categorieEdit from '../../../static/img/updates/v098_categories-edit.png';
import v098_categorieEditBtn from '../../../static/img/updates/v098_categories-edit-btn.png';
import v098_printWindow from '../../../static/img/updates/0.9.8 Print Window.jpg';
import v098_dialogHistoriquePaiement from '../../../static/img/updates/0.9.8-dialog-historique-paiements.jpg';
import v098_tooltips from '../../../static/img/updates/v098_tooltips.png';


export default function Index() {
  return (
    <UpdatePageLayout>
      <VersionUpdate version={"1.0.5"} date={"2021-06-24"}>
        <NewFeatures>
          <Item>
            Ajout de nouvelles options pour
            {" "}<strong>personnaliser vos numéros de factures de revenus</strong>{" "}
            qui sont générés automatiquement par le logiciel.
            <br/>
            Cette nouveauté répond à plusieurs requêtes des utilisateurs et sera utile
            quand vos séquences de numéros incluent des préfixes et/ou des séparateurs. Par exemple: FE2021-0001.
            <br/>
            <Link to="/docs/options/ma-facturation#personnaliser-vos-numéros-de-factures-de-revenus">
              En savoir plus à propos des numéros de factures personnalisés &rarr;
            </Link>
          </Item>

          <Item>
            Ajouts de nouvelles et meilleures manières de gérer vos
            {" "}<strong>modèles de transactions</strong>{" "}
            (produits, matériaux, pièces et services récurrents).
            <br/>
            Avec ces nouveautés, plusieurs vont remarquer pour la première fois qu'il existe
            un moyen facile de gérer des modèles de transactions récurrentes dans Finance&nbsp;D.
            Cette fonctionnalité a reçue une nette amélioration
            au niveau de la productivité et de la facilité d'utilisation.
            <br/>

            <Image img={require("../../../static/img/updates/v105/v105-description-produit.png")}/>

            <Link to="/docs/transactions/modeles-de-transactions-et-produits/">
              En savoir plus à propos des modèles de transactions &rarr;
            </Link>
          </Item>

          <Item>
            Ajout d'une nouvelle option pour
            {" "}<strong>choisir de ne plus afficher les info-bulles</strong>{" "}
            de la fenêtre principale. Ces info-bulles sont les popups qui vous informent quand votre souris passe
            au-dessus d'un element. Quand on est habitué au logiciel, elles pourraient devenir encombrantes, donc il est
            maintenant possible de les faire disparaitre si c'est ce que vous préférez. Pour y arriver, allez dans vos
            {" "}<strong><i>Options > Mes Préférences > Affichage des info-bulles</i></strong>.
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            La petite fenêtre de confirmation d'enregistrement
            des factures a été améliorée pour être plus intuitive
            avec l'ajout de boutons d'actions.

            <Image img={require("../../../static/img/updates/v105/v105-facture-confirmation-enregistree.png")}/>
          </Item>

          <Item>
            Les icônes des méthodes de paiements sont maintenant cliquables pour ouvrir la liste de sélection.

            <Image img={require("../../../static/img/updates/v105/v105-icone-paiement-clickable.png")}/>
          </Item>

          <Item>
            Les nouveaux noms de clients et fournisseurs ne vont plus rendre l'icône de personnage de couleur vive
            afin de clarifier le caractère optionnel d'ajouter des informations de contact détaillées immédiatement.
            En effet, les noms sont automatiquement enregistrés au moment de sauvegarder une facture, même quand
            vous n'avez rien précisé à propos de votre contact. Vous pouvez ajouter des informations en tout temps
            en cliquant sur le personnage.

            <Image img={require("../../../static/img/updates/v105/v105-nouveau-nom-de-client.png")}/>
          </Item>

          <Item>
            La validation des numéros de facture de revenus n'affichera plus
            le bouton de correction du numéro à droite lorsque vous
            avez manuellement modifié le numéro de séquence habituel.
            Le but est d'éviter la confusion que cette fonction pouvait provoquer.

            <Image img={require("../../../static/img/updates/v105/v105-validation-des-numeros-de-factures.png")}/>
          </Item>

          <Item>
            Les lignes de transactions ont maintenant un icône d'options pour que ce soit plus évident qu'il existe
            un menu avec des actions spécifiques pour chaque ligne de la table de transaction.
            Ce changement visuel aidera les nouveaux utilisateurs à découvrir plus rapidement les options.

            <Image img={require("../../../static/img/updates/v105/v105-transaction-row-options-button.png")}/>
          </Item>

          <Item>
            Cliquez dans la case "Mes factures" va maintenant toujours ouvrir la fenêtre de recherche plutôt
            que de permettre d'écrire du texte. Ce sera plus intuitif et rapide car de toute manière, il est possible
            d'écrire ce que l'on cherche directement dans la fenêtre de recherche.

            <Image img={require("../../../static/img/updates/v105/v105-mes-factures-clic-instant-open.png")}/>
          </Item>

          <Item>
            Les fonctions pour imprimer les résultats de la fenêtre de recherche ont été déplacés dans un petit menu
            afin de clarifier que l'impression est prévue pour cette fenêtre et non pour imprimer vos factures de
            revenus.
            En effet, pour imprimer vos factures de revenus, il faut ouvrir la facture en question à partir de la
            fenêtre de recherche et ensuite utiliser la fonction d'impression dans l'interface de cette facture (fenêtre
            principale).

            <Image img={require("../../../static/img/updates/v105/v105-fenetre-recherche-amelioree.png")}/>
          </Item>

          <Item>
            Quand vous charger une facture de revenus existante,
            le bouton pour imprimer est maintenant vert puisque c'est une action commune à mettre en évidence.
            Par la même occasion, nous avons fait en sorte qu'un clic sur la notification "Facture existante"
            puisse réinitialiser la fenêtre.

            <Image img={require("../../../static/img/updates/v105/v105-facture-footer-controls.png")}/>
          </Item>

          <Item>
            Ajout de contenu dans la documentation du logiciel à propos des nouveautés de la mise à jour.
          </Item>

        </Improvements>

        <BugFixes>
          <Item>
            Correction d'un problème interne quand on supprimait une ligne de transaction de la table
            des transactions d'une facture.
          </Item>

          <Item>
            Correction du raccourci clavier <kbd>Ctrl</kbd> + <kbd>M</kbd> qui ne fonctionnait pas toujours
            comme prévu pour afficher les modèles de transactions.
          </Item>

          <Item>
            Nous avons corrigé une erreur importante qui pouvait arriver en <strong>mode d'enregistrement dans un
            dossier cloud personnel</strong>. Si un utilisateur avait une version du logiciel plus vielle
            que la version de la base de donnée,
            il n'était pas averti, ni bloqué. Cette erreur pouvait corrompre les données et rendre le dossier de tenue
            de livres inutilisable. <strong>À partir de maintenant, il sera impossible d'ouvrir un dossier
            Finance&nbsp;D
            qui est plus récent que votre version du logiciel</strong>. Il sera également impossible d'importer une
            copie de sauvegarde plus récente que votre logiciel. Un avertissement vous informera de ce fait et vous
            conseillera d'obtenir la dernière mise à jour du logiciel avant d'ouvrir le dossier.
          </Item>
        </BugFixes>

        <p>
          Dans la prochaine version majeure (v1.1.0), nous allons nous concentrer sur la distribution du logiciel
          pour les nouveaux processeurs Apple M1 des ordinateurs Mac 2020+. Avec un logiciel compatible pour
          le M1, la performance sera au minimum 2x plus rapide. C'est extrêmement performant. Nous allons également
          réviser et améliorer certains aspects généraux selon le besoin.
        </p>
      </VersionUpdate>

      <VersionUpdate version={"1.0.4"} date={"2021-06-13"}>
        <NewFeatures>
          <Item>
            Nouvelle section avancée dans les options de "Mon Dossier".
            <Image img={require("../../../static/img/updates/v104_advanced-folder-options.png")}/>
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

            <Image img={require("../../../static/img/updates/v104_password-memo.png")}/>
          </Item>
        </NewFeatures>

        <Improvements>
          <Item>
            Les boites de dialogues de confirmation pour supprimer un nom et une facture on été révisées pour être plus
            simples.
            <Image img={require("../../../static/img/updates/v104_new-dialog-style.png")}/>
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

      <VersionUpdate version={"1.0.3"} date={"2021-05-18"}>
        <NewFeatures>
          <Item>
            Il est maintenant possible de choisir quel contenu afficher
            à propos de vos clients dans la fenêtre d'impression de facture de revenus.
            Allez dans les options du logiciel et choisissez ce que vous voulez voir sur vos factures:
            <br/>
            1.
            <Image img={require("../../../static/img/updates/v103-modifier-visibilite-info-client.png")}/>
            <br/>

            2.
            <Image img={require("../../../static/img/updates/v103-options-modifier-visibilite-info-client.png")}/>
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

            <Image img={require("../../../static/img/updates/v103-larger-textarea.png")}/>
          </Item>
          <Item>
            Dans le gestionnaire de fournisseurs/clients,
            la section "Rôle" a été renommée à "Description" pour être
            plus générale.
            Par exemple: vous pourriez l'utiliser pour écrire la marque du véhicule et le kilométrage si vous êtes
            mécanicien et afficher cette information sur votre facture imprimée.

            <Image img={require("../../../static/img/updates/v103-nom-role-description.png")}/>
          </Item>
          <Item>
            Le popup de confirmation d'enregistrement des factures va maintenant se fermer aussi avec un clic
            en dehors de sa zone.
          </Item>
          <Item>
            Nous avons retiré l'étape d'activation avec une clé de licence pour les nouveaux utilisateurs du logiciel.
            Cette étape pouvait sembler intimidante et n'est plus essentielle maintenant que le logiciel est
            officiellement gratuit.

            <Image img={require("../../../static/img/updates/v103-removed-licence-new-startup-window.png")}/>
          </Item>
          <Item>
            Nous avons amélioré le flow des premiers pas dans le logiciel pour faire suite au retrait de
            l'activation par clé de licence. La page d'accueil est encore plus intuitive qu'avant et présente le moins
            d'obstacle possible avant de commencer à travailler dans Finance&nbsp;D.
          </Item>
          <Item>
            La gestion des copies de sauvegarde, dans l'onglet "Mon dossier"
            de la <Link to="/docs/navigation/fenetre-options-preferences-parametres">fenêtre d'options</Link>.,
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

      <VersionUpdate version={"1.0.1"} date={"2021-05-04"}>
        <NewFeatures>
          <Item>
            Ajout du <Link to="/docs/gestion-dossiers/mode-enregistrement-cloud">
            mode d'enregistrement dans un cloud personnel
          </Link>.
            Il s'agit d'une nouvelle possibilité de choisir un dossier de votre cloud personnel
            (ex: OneDrive, Google Drive),
            afin que vos dossiers de tenue de livres puissent se partager plus facilement
            d'un ordinateur à un autre&nbsp;:
            <LazyGif
              relativePath={"/updates/v101_save-to-personnal-cloud.gif"}
              height={678}
              alt={"Démonstration de la nouveauté du mode d'enregistrement dans un dossier cloud personnel"}
            />
            Cette mise à jour peut vous aider à partager un dossier de tenue de livres
            avec quelqu'un d'autre ou avec un autre de vos ordinateurs.
            Pour en savoir plus, consultez l'article de documentation à propos du&nbsp;
            <Link to="/docs/gestion-dossiers/mode-enregistrement-cloud">
              mode d'enregistrement dans un cloud personnel
            </Link>.
          </Item>
          <LinkButton to="/docs/gestion-dossiers/mode-enregistrement-cloud">
            Voir comment activer le mode d'enregistrement dans un cloud personnel &rarr;
          </LinkButton>
        </NewFeatures>
        <Improvements>
          <Item>
            Une nouvelle section importante a été ajoutée à la documentation du logiciel :
            "<Link to="/docs/gestion-dossiers/copies-de-sauvegarde">
            Gestion des dossiers de tenue de livres
          </Link>".
          </Item>
        </Improvements>
      </VersionUpdate>

      <VersionUpdate version={"1.0.0"} date={"2021-04-30"}>
        <NewFeatures>
          <Item>
            Ajout de la possibilité de voir les détails de paiements pour chaque facture
            dans la fenêtre "Mes factures" (raccourci clavier <kbd>Ctrl</kbd>+<kbd>F</kbd>).
            <br/>Cette mise à jour apporte aussi une révision du style
            des boutons d'impression pour qu'ils soient plus discrets
            et une meilleure apparence des factures quand le mode détails est activé&nbsp;:
            <ModernVideo
              webmSrc="/updates/v100_new-search-window-display.webm"
              mp4Src="/updates/v100_new-search-window-display.mp4"
              height={1040}
            />
          </Item>
          <Item>
            Ajout de 4 nouvelles options pour améliorer l'interface de facturation (revenus et dépenses) et
            vous faire gagner du temps&nbsp;:
            <Image img={require("../../../static/img/updates/v100_added-options.png")}/>
            Ces options peuvent être activées ou désactivées selon vos préférences à partir de la fenêtre
            d'options (raccourci clavier <kbd>Alt</kbd>+<kbd>O</kbd>)&nbsp;:
            <ul>
              <li>1. Garder le dernier nom de client/fournisseur utilisé actif.</li>
              <li>2. Garder la dernière méthode de paiement utilisée active.</li>
              <li>3. Égaliser le montant total des paiements avec le total facturé.</li>
              <li>4. Changer la date de la facture change aussi la date du premier paiement d'une nouvelle facture.
              </li>
            </ul>
          </Item>
          <Item>
            Ajout d'un nouveau bouton aux paiements de factures afin de pouvoir supprimer
            un paiement en un clic.
            <Image img={require("../../../static/img/updates/v100_added-delete-payment.png")}/>
          </Item>
        </NewFeatures>
        <Improvements>
          <Item>
            Ajout d'un bouton à l'éditeur de noms pour rendre évident la possibilité d'afficher l'historique des
            factures. Cliquez sur ce bouton, sur le "total", ou sur le "solde" pour voir les factures associées à ce
            client/fournisseur. Il était déjà possible de cliquer sur le "total", ou sur le "solde". Mais, cette
            possibilité n'était pas intuitive avant d'ajouter ce nouveau bouton.
            <Image img={require("../../../static/img/updates/v100_added-name-editor-show-invoices-icons.png")}/>
          </Item>
          <Item>
            Amélioration de l'accueil pour les nouveaux utilisateurs du logiciel:
            Ajout d'un menu avec le bouton droit de la souris pour permettre de copier-coller
            dans la fenêtre d'accueil de Finance D. Ceci pourrait aider certaines personnes à inscrire leur clé
            d'activation du logiciel plus facilement lorsqu'elles ne connaissent pas le raccourci
            clavier <kbd>Ctrl</kbd>+<kbd>V</kbd>.
          </Item>
          <Item>
            Amélioration générale du site de documentation et ajout de contenu plus avancé.
          </Item>
        </Improvements>
        <BugFixes>
          <Item>
            Changer votre logo de facturation dans les fenêtres d'options et d'impression,
            ne se rafraichissait pas toujours comme prévu.
            Il fallait fermer et ré-ouvrir les fenêtres afin de voir le nouveau logo.
            Avec ce correctif, le logo change instantanément quand vous en choisissez un nouveau.
          </Item>
          <Item>
            Correction d'un problème visuel où le texte trop long pouvait dépasser la largeur de la colonne qui le
            contient dans la fenêtre de recherche de factures.
          </Item>
        </BugFixes>
      </VersionUpdate>

      <VersionUpdate version={"0.9.9"} date={"2021-04-13"}>
        <BugFixes>
          <Item>
            Nous avons corrigé une erreur importante où les montants avec valeur négative n'étaient
            plus considérés correctement depuis la version 0.9.7.
            Par exemple, 10.00$ + -10.00$ donnait 20.00$ au lieu de 0.00$.
            C'était causé par notre validation des nombres à calculer qui enlevait le symbole négatif.
          </Item>
        </BugFixes>
      </VersionUpdate>

      <VersionUpdate version={"0.9.8"} date={"2021-04-12"}>
        <NewFeatures>
          <Item>
            Il est maintenant possible de modifier, ajouter et supprimer les catégories financières de revenus et de
            dépenses. Vous pourrez donc les <a
            href="https://docs.finance-d.com/logiciel-tenue-de-livres-simplifiee/docs/categories/modifier-categories">
            personnaliser à votre guise
          </a>.
          </Item>
          <Image img={v098_categorieEditBtn}/>
          <br/>
          <br/>
          <br/>
          <Image img={v098_categorieEdit}/>
          <br/>
          <br/>
          <br/>
          <Item>L'interface des factures de Revenus/Dépenses rend disponible une liste détaillée des paiements
            effectuées lorsqu'il y a plus d'un paiement. Elle est accessible avec un nouveau bouton qui s'affiche
            à gauche des paiements lorsqu'elle est pertinente.
          </Item>
          <Image img={v098_dialogHistoriquePaiement}/>
          <br/>
          <br/>
          <br/>
          <Item>Vos factures de revenus imprimée vont maintenant afficher la liste des paiements effectués sur une
            2e page afin de faciliter le suivi des paiements avec vos clients.
          </Item>
          <Item>De plus, votre facture imprimée va afficher la liste des code taxes utilisés de manière dynamique afin
            de s'assurer que le calcul de taxes soit toujours très explicite pour vos clients qui interprètent la
            facture.
          </Item>
          <Image img={v098_printWindow}/>
          <br/>
          <br/>
          <br/>
          <Item>Vous pouvez maintenant utiliser le symbole de point d'interrogation "?"
            comme numéro de facture lorsque vous ne savez pas quel est le numéro d'une facture, ou qu'elle n'en a
            aucun. Il pouvait être désagréable d'avoir à inventer un faux numéro dans ces cas exceptionnels. Avec la
            nouveauté, vous pourrez enregistrer la facture même si son numéro est inconnu.
          </Item>
        </NewFeatures>
        <Improvements>
          <Item>La performance de la fenêtre de recherche a été grandement améliorée pour les quantités extrêmes de
            factures comme 5000+. Les factures vont se charger en "batch" afin de ne pas attendre que la totalité soit
            terminée et que la fenêtre ne devienne pas figée pendant le calcul.
          </Item>
          <Item>La fenêtre d'activation du logiciel a été améliorée en ajoutant un lien vers la documentation pour
            savoir comment faire.
          </Item>
          <Item>Les boutons importants du logiciel qui ont un raccourci clavier on maintenant un tooltip lorsque vous
            passer la souris par-dessus. Vous saurez donc immédiatement si une fonction peut être appelée à l'aide
            d'un raccourci clavier.
          </Item>
          <Image img={v098_tooltips}/>
          <br/>
          <br/>
          <br/>
        </Improvements>
        <BugFixes>
          <Item>Le statut invalide d'un paiement de facture s'affiche maintenant de la façon qui est attendue. Avant,
            il
            pouvait disparaitre avant que nous ayons le temps de le lire.
          </Item>
          <Item>Les paiements des dépenses sont maintenant réinitialisés de la même manière que les revenus pour
            unifier
            le fonctionnement et améliorer la logique. Le mode "Solde à payer" sera choisi par défaut.
          </Item>
        </BugFixes>
      </VersionUpdate>

      <VersionUpdate version={"0.9.7"} date={"2021-02-11"}>
        <NewFeatures>
          <Item>
            Ajout de la possibilité d'imprimer les résultats affichés dans la fenêtre "Mes factures".
            <Image img={v097_imprimerRecherche}/>
            <br/>
            <br/>
          </Item>
          <Item>
            Ajout des sommes pour les colonnes TOTAL et SOLDE DÛ dans la fenêtre "Mes factures".
          </Item>
          <Item>
            Ajout de la possibilité de lister toutes les transactions des factures
            affichées dans la fenêtre "Mes factures".
          </Item>
          <Item>
            Ajout de la possibilité d'imprimer les transactions par catégories
            pour la fenêtre "État des résultats".
            <Image img={v097_imprimerTransactionsEtatResultats}/>
            <br/>
            <br/>
          </Item>
          <Item>
            Ajout de l'ensemble des provinces canadiennes au choix de calcul de taxes selon <a
            target="_blank"
            rel="noopener"
            href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises/facturer-percevoir-quel-taux/calculatrice.html">
            Canada.ca
          </a>
            . Vous pouvez maintenant choisir le code taxe des provinces autres que le Québec
            parmi votre liste de code taxe pour chaque transaction d'une facture.
            <Image img={v097_codeTaxesCanada}/>
            <br/>
            <br/>
          </Item>
          <Item>
            Ajout de la possibilité de cacher la colonne QTÉ (quantité)
            dans la table de transaction de vos factures pour simplifier la vue au besoin.
          </Item>
          <Item>
            Ajout de l'information "Total facturé" dans l'éditeur de nom.
            <Image img={v097_totalFactureNom}/>
            <br/>
            <br/>
          </Item>
        </NewFeatures>
        <Improvements>
          <Item>
            Toutes les fenêtres qui ont la capacité d'imprimer vont maintenant
            produire du texte 100% noir au lieu d'utiliser les teintes de gris pâle
            afin d'assurer que l'impression soit claire sur papier
            autant qu'à l'écran d'ordinateur.
          </Item>
          <Item>
            Lorsqu'une ligne de transaction contient un code taxe mais que vous
            effacez manuellement la TPS et la TVQ, le code taxe va se réinitialiser
            pour indiquer l'impertinence d'utiliser un code taxe sans valeurs de TPS/TVQ.
          </Item>
        </Improvements>
      </VersionUpdate>

      <VersionUpdate version={"0.9.6"} date={"2021-02-02"}>
        <NewFeatures>
          <Item>
            Un nouvel onglet a été ajouté à la fenêtre d'options pour choisir
            si vous voulez afficher/cacher les colonnes de TPS / TVQ et ou
            SOUS-TOTAL / TOTAL dans la table de transactions des factures.
            Cette option a été ajoutée pour le calcul de taxes amélioré de cette mise à jour.
            <Image img={v096_optionsMesPreferences}/>
          </Item>
          <Item>
            Le menu au coin inférieur droit de la fenêtre principale contient
            maintenant une fonction pour "Changer de dossier" rapidement.
            Cela vous permet d'ouvrir un autre de vos dossiers
            de tenue de livres de manière efficace.
            <Image img={v096_changeFolder}/>
          </Item>
        </NewFeatures>
        <Improvements>
          <Item>
            Calcul de taxes amélioré dans la circonstance où vous utilisez les quantités de ligne.
            Le montant de TPS et TVQ est maintenant calculé à partir du SOUS-TOTAL
            plutôt qu'avec le prix à l'unité.
            Maintenant, les pourcentages sont arrondis à la perfection peu importe
            la complexité de vos transactions. Merci à Mr. Julien de l'avoir trouvé.
          </Item>
          <Item>
            Amélioration du nom des fenêtres de Finance D pour bien différencier
            la fenêtre principale (visible surtout dans la barre de tâches sur Windows).
          </Item>
          <Item>
            Amélioration de la transition entre la fenêtre d'accueil
            et la fenêtre principale au niveau de l'initialisation de la base de donnée
            ainsi que de la première apparition. Il y avait un effet de flash nuisible
            qui est maintenant réglé par un fade-in rapide.
          </Item>
          <Item>
            Ajout d'une notification visible dans la pré-visualisation de l'envoi
            de votre facture au client par courriel.
            Il n'était pas très évident qu'en mode "manuel",
            vous devez glisser le fichier PDF dans votre programme de messagerie avant l'envoi.
            NB: Il existe un mode automatisé avec connexion SMTP plus complexe à paramétrer mais génial.
          </Item>
          <Item>
            La liste des transactions affectant vos calculs de taxes
            (dans la fenêtre Sommaire de taxes), a été améliorée pour refléter
            les changements du correctif de calcul de taxes. De plus, il est possible de faire un
            double-clic sur une ligne pour afficher la facture d'origine.
          </Item>
        </Improvements>
        <BugFixes>
          <Item>
            Correction du dispositif de mise à jour automatique sur MacOS.
          </Item>
          <Item>
            Correction de la liste des modèles de factures et de transactions qui
            n'était pas synchronisée en tout temps selon le mode REVENUS / DÉPENSES actif.
          </Item>
        </BugFixes>
        <p>
          <i>
            NB: Dû au nouveau calcul de taxes impliquant les quantités,
            vos factures sont automatiquement converties au bon format.
            Donc, il se pourrait que l'arrondissement des lignes de transactions
            ne soit pas identique à ce qui était enregistré avant la version 0.9.6.
            Par contre, votre total réel n'est pas affecté.
            Ce changement était nécessaire pour la précision des taxes à long terme.
          </i>
        </p>
      </VersionUpdate>

      <VersionUpdate version={"0.9.5"} date={"2021-01-27"}>
        <NewFeatures>
          <Item>Modifier le nom d'un client ou d'un fournisseur va maintenant modifier
            toutes les factures ayant le nom modifié afin qu'elles contiennent toutes
            le nouveau nom.
            Par exemple: Si je modifies le nom du client "Alex" pour "Alexandre",
            toutes mes factures au nom d'Alex deviendront au nom d'Alexandre.
            Ceci évite de perdre le solde dû à cette personne et garde vos factures existantes
            synchronisées avec vos modifications de nom du moment présent.
          </Item>
        </NewFeatures>
        <Improvements>
          <Item>La fenêtre de votre "Sommaire de taxes" est maintenant plus fidèle au formulaire de
            déclarations de taxes du gouvernement.
          </Item>
          <Item>La fenêtre de votre "État des résultats" est maintenant simplifiée, plus claire
            et plus fidèle aux normes comptables.
          </Item>
          <Item>Dans la fenêtre d'impression de vos factures de revenus, le bouton "envoyer par
            e-mail" va maintenant rendre le pop-up de prévisualisation du courriel
            centré dans la fenêtre afin d'assurer une visibilité immédiate. Auparavant, il
            pouvait arriver, si vous aviez une très longue facture avec plusieurs lignes de
            transactions, que le pop-up soit situé en haut de la fenêtre alors que vous étiez
            au bas de la fenêtre. Pour éviter de se demander où le pop-up est situé,
            votre visibilité va automatiquement se centrer sur lui.
          </Item>
        </Improvements>
        <BugFixes>
          <Item>Les copies de sauvegardes (accessibles dans la fenêtre d'Options), pouvaient
            perdre leur synchronisation avec la base de donnée. Maintenant, chaque backup
            a un numéro d'identification unique; ce qui permet de régler l'erreur.
          </Item>
          <Item>Correction de la séparation des pages imprimées lorsqu'il y a plus d'une page.
            Avant cette mise à jour, il pouvait y avoir du contenu mal positionné en imprimant
            sur plusieurs pages par exemple sur une facture de revenu ayant 25 lignes de transactions.
          </Item>
          <Item>Dans la fenêtre de Sommaire de taxes, le fait de choisir la période "vide"
            produisait une erreur interne inattendue.
            Ceci est résolu. Lorsque vous choisissez la période "vide",
            le logiciel détermine automatiquement la date de début et de fin en analysant
            toutes les dates de toutes vos factures (même comportement dans l'État des résultats).
          </Item>
          <Item>Corrections du rendu textuel sur macOS à deux endroits où le texte était trop large
            pour son conteneur.
          </Item>
          <Item>
            La fenêtre d'Options du logiciel, contenait une faute d'orthographe qui a été corrigée.
            Merci à Gabriel pour l'avoir trouvée.
          </Item>
        </BugFixes>
      </VersionUpdate>

      <VersionUpdate version={"0.9.4"} date={"2021-01-25"}>
        <p>Cette version apporte un changement majeur avec la comptabilité pour mac
          qui n'était pas possible avant aujourd'hui.
        </p>
        <NewFeatures>
          <Item>Compatibilité avec les ordinateurs macOS.</Item>
        </NewFeatures>
        <BugFixes>
          <Item>
            Il est maintenant possible d'utiliser des caractères spéciaux dans vos numéros
            de factures de revenus sans perdre la séquence de numéro logique.
            Par exemple: vous pouvez utiliser "1000-p" comme numéro de facture tout en conservant
            votre prochain numéro à "1001" (cette gestion se fait automatiquement).
            Avant cette correction, le prochain numéro donnait l'erreur "NaN"
            et votre séquence de numéros ne fonctionnait plus.
            Cette erreur est maintenant corrigée.
          </Item>
        </BugFixes>
      </VersionUpdate>

      <VersionUpdate version={"0.9.3"} date={"2020-12-24"}>
        <div>
          <p>
            Cette mise à jour apporte une nouvelle fonction "Sommaire des taxes",
            qui résume vos transactions affectant le calcul de vos déclarations de taxes
            à payer ou à recevoir du Gouvernement.
          </p>
          <Image img={v092_sommaireTaxes}/>
          <br/>
          <p>
            Pour y accéder cliquez sur le bouton avec le symbole du Québec de la fenêtre principale.
          </p>
          <Image img={v092_sommaireTaxes2}/>
        </div>
        <br/>
        <div>
          <p>
            Nous avons également ajouté un lien vers le site de formation / documentation du logiciel
            où vous pourrez obtenir de l'aide et des trucs pour mieux utiliser Finance D.
          </p>
          <p>
            Notez toutefois que la documentation n'est pas encore complète.
          </p>
          <Image img={v092_boutonAide}/>
        </div>
        <br/>
        <div>
          <h4>Corrections de bugs:</h4>
          <ul>
            <Item>Correction de l'autocomplete du nom de dossier à la fenêtre de connexion.</Item>
            <Item>Correction de l'états des résultats qui n'affichait pas toujours le calcul
              des revenus moins les dépenses.
            </Item>
          </ul>
        </div>
        <div>
          <h4>Améliorations:</h4>
          <ul>
            <Item>Ajout de tooltips pour certains raccourcis clavier de la fenêtre principale.</Item>
          </ul>
        </div>
      </VersionUpdate>
    </UpdatePageLayout>
  );
}
