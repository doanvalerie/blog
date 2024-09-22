import Image from 'next/image';

import HeroDescription from './_components/HeroDescription/HeroDescription';
import KeyFeatures from './_components/KeyFeatures/KeyFeatures';
import StartLearnLinks from './_components/StartLearnLinks/StartLearnLinks';
import styles from './page.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.text_content}>
        <HeroDescription />
        <StartLearnLinks />
        <KeyFeatures />
      </div>
      <Image
        src="/index/hero.svg"
        alt="animated characters munching on donut trees"
        width={0}
        height={0}
        className={styles.hero_image}
      />
      <Image
        src="/index/wave.png"
        alt="red and orange waves in the background"
        fill
        className={styles.background_image}
      />
    </div>
  );
}
