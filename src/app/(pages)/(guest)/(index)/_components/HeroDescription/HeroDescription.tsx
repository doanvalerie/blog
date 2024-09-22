import styles from './HeroDescription.module.scss';

export default function HeroDescription() {
  return (
    <div className={styles.container}>
      <div className={styles.tagline}>
        <h1>Where Every Bite Tells a Story</h1>
      </div>
      <p>
        From timeless favorites to bold new flavors, we explore food that
        inspires. Join us in celebrating the joy of cooking, sharing, and
        savoring, where every bite tells a story.
      </p>
    </div>
  );
}
