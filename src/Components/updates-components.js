import React from "react";
import clsx from "clsx";
import styles from "../pages/pages.module.css";

function VersionUpdate({version, date, children}) {
  return (
    <section id={`version-${version}`} className={clsx(styles.versionUpdate, styles.features)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <div>
              <h3 className={styles.versionNumber}>
                <a href={`https://docs.finance-d.com/logiciel-tenue-de-livres-simplifiee/updates/v${version}/`}>
                  📌&nbsp;Version {version}
                </a>
              </h3>
              <p className={styles.versionReleaseDate}>{
                date
                  ? "Mise à jour publiée le " + date
                  : "Cette version n'est pas encore publiée, elle est en cours de développement."
              }</p>
            </div>
            {children}
            {/*<hr/>*/}
            <br/>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewFeatures({children}) {
  return (
    <div>
      <h4>Nouveautés&nbsp;:</h4>
      <ul className={styles.newFeatures}>
        {children}
      </ul>
      <br/>
    </div>
  );
}

function Improvements({children}) {
  return (
    <div>
      <h4>Améliorations&nbsp;:</h4>
      <ul className={styles.improvements}>
        {children}
      </ul>
      <br/>
    </div>
  );
}

function BugFixes({children}) {
  return (
    <div>
      <h4>Correction de bugs&nbsp;:</h4>
      <ul className={styles.bugFixes}>
        {children}
      </ul>
      <br/>
    </div>
  );
}

function Item({children}) {
  return (
    <li className={styles.listItem}>
      {children}
    </li>
  );
}

export {VersionUpdate, NewFeatures, Improvements, BugFixes, Item}
