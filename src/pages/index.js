import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// unique style sheet for Home page
import styles from './pages.module.css';

// My components
import NoWrap from "../Components/NoWrap";

// Array of features to parse with a React loop
const features = [
  {
    title: 'Documentation du logiciel',
    // imageUrl: 'img/documentation-icon.svg',
    description: (
      <>
        Apprenez comment mieux utiliser le logiciel <NoWrap>Finance D</NoWrap> - Tenue de livres simplifiée
        en consultant notre page <Link to="/docs/bases/prise-en-main-du-logiciel">Documentation et tutoriels</Link>.
        Il s'agit de guides faciles à lire.
      </>
    ),
  },
  {
    title: 'Formations vidéos et articles',
    // imageUrl: 'img/video-learning-youtube-icon.svg',
    description: (
      <>
        Gagnez en productivité avec des conseils pratiques pour
        le logiciel <NoWrap>Finance D</NoWrap> en lisant des <Link to="/blog">articles</Link>{" "}
        ou en visionnant des <Link to="/videos">
        tutoriels vidéos sur notre chaîne YouTube</Link>.
      </>
    ),
  },
  {
    title: 'Foire aux questions (F.A.Q.)',
    // imageUrl: 'img/faq-icon.svg',
    description: (
      <>
        Trouvez rapidement des réponses aux interrogations les plus
        fréquentes dans notre {" "}
        <Link to="/faq">foire aux questions (F.A.Q.)</Link>.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  return (
    <Layout
      title={`Accueil`} // appears as Accueil | {siteName}
      description="Maîtrisez le logiciel: Finance D - Tenue de livres simplifiée.
      Obtenez de l'aide et apprenez les trucs pour être le plus efficace possible
      avec le logiciel Finance D. Documentation, aide et formations." //injected in meta description
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title no-word-break">
            Formations <NoWrap>Finance D</NoWrap>
          </h1>
          <p className="hero__subtitle no-word-break">
            Maîtrisez le logiciel&nbsp;: <a href="https://finance-d.com">Tenue de livres simplifiée</a>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/docs/bases/prise-en-main-du-logiciel')}>
              Commencez ici
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
