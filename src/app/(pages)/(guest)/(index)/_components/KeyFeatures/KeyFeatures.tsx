import { ElementType } from 'react';

import {
  GlobeIcon,
  GroupIcon,
  NewspaperIcon,
  RateReviewIcon,
} from '@globals/icons';
import { HEADING_SIZES } from '@globals/typography';

import styles from './KeyFeatures.module.scss';

const bullets = [
  {
    icon: NewspaperIcon,
    text: 'Recipe Collections',
  },
  {
    icon: GroupIcon,
    text: 'Kitchen Connection Groups',
  },
  {
    icon: GlobeIcon,
    text: 'Culinary Travel Guides',
  },
  {
    icon: RateReviewIcon,
    text: 'Foodie Forums & Discussions',
  },
];

export default function KeyFeatures() {
  return (
    <div className={styles.container}>
      {bullets.map((bulletContent) => (
        <Bullet key={bulletContent.text} {...bulletContent} />
      ))}
    </div>
  );
}

function Bullet({ icon: Icon, text }: { icon: ElementType; text: string }) {
  return (
    <div className={styles.bullet}>
      <Icon size={HEADING_SIZES.h3} className={styles.icon} />
      {text}
    </div>
  );
}
