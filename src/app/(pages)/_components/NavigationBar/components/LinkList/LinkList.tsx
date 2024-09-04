'use client';

import Link from 'next/link';
import { useState } from 'react';

import navLinks from '@data/links/navBarLinks.json';

import styles from './LinkList.module.scss';

export default function LinkList() {
  const [activeSlug, setActiveSlug] = useState('Home');

  return (
    <div className={styles.container}>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.slug} className={styles.link}>
          <div
            className={activeSlug === link.name ? styles.active_slug : ''}
            onClick={() => setActiveSlug(link.name)}
          >
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
