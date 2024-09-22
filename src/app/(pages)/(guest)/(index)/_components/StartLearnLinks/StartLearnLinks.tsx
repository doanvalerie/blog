import Link from 'next/link';

import styles from './StartLearnLinks.module.scss';

export default function StartLearnLinks() {
  return (
    <div className={styles.container}>
      <Link href="/auth/sign-up">
        <button className={`${styles.button} ${styles.get_started}`}>
          Get Started Today
        </button>
      </Link>
      <Link href="/about">
        <button className={`${styles.button} ${styles.learn_more}`}>
          Learn More
        </button>
      </Link>
    </div>
  );
}
