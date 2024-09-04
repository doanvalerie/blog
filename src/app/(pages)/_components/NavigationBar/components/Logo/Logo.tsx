import { ChefHatIcon } from '@globals/icons';
import { HEADING_SIZES } from '@globals/typography';

import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.container}>
      <ChefHatIcon size={HEADING_SIZES.h2} />
      <h2>Culinary Chronicles</h2>
    </div>
  );
}
