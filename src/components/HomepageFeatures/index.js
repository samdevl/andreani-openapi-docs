import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  /*{
    title: 'Fácil de usar',
    Svg: require('@site/static/img/andreani-left.svg').default,
    description: (
      <>
        Nuestro nuevo e intuitivo diseño facilitará el trabajo y la integración con
        nuestros clientes. ¡Vení a descubrirlo!
      </>
    ),
  },*/
  {
    title: 'Enfocado en el desarrollo',
    Svg: require('@site/static/img/andreani-centro.svg').default,
    description: (
      <>
        Queremos que te integres con nosotros de la manera más rápida y efectiva
        posible. Por eso implementamos OpenApi en nuestro sitio exclusivo para developers. 
        Integrate ya haciendo click en nuestra sección de API. Nuestro sitio está hecho
        para que puedas interactuar con él libremente y de manera ágil y simple. 
      </>
    ),
  },
  /*{
    title: 'Rápido e Interactivo',
    Svg: require('@site/static/img/andreani-right.svg').default,
    description: (
      <>
        Nuestro sitio está hecho para que puedas interactuar con él libremente y de manera
        ágil. 
      </>
    ),
  },*/
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--11,3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
