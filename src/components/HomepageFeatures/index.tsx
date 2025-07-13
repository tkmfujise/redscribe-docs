import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Zoom from 'react-medium-image-zoom';
import styles from './styles.module.css';
import 'react-medium-image-zoom/dist/styles.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg?:  React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Execution',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        <Translate id='feature.execution'>You can execute mruby code (a lightweight Ruby) in Godot and emit signals from mruby to Godot.</Translate>
      </>
    ),
  },
  {
    title: 'Editing',
    image: require('@site/static/img/Editor_screenshot.png').default,
    description: (
      <>
        <Translate id='feature.editing'>You can write and edit Ruby files in the Godot Editor.</Translate>
      </>
    ),
  },
  {
    title: 'REPL',
    image: require('@site/static/img/REPL_screenshot.png').default,
    description: (
      <>
        <Translate id='feature.repl'>You can try out Ruby interactively in Godot.</Translate>
      </>
    ),
  },
];

function Feature({title, Svg, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureImage} role="img" />
        ) : (
          <Zoom>
            <img src={image} className={styles.featureImage} alt={title} />
          </Zoom>
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
