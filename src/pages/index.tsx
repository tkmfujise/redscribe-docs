import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}: {siteConfig.tagline}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.subtitle">
            Let's re-describe your code as your own friendly domain-specific language.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={siteConfig.customFields.githubUrl as string}>
            GitHub
          </Link>
          <span style={{ margin: '0 0.5rem' }} />
          <Link
            className="button button--info button--lg"
            style={{color: 'black'}}
            to="/docs/intro">
            <Translate id="homepage.tutorial">Tutorial</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Ruby-embedded DSL for Godot">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
