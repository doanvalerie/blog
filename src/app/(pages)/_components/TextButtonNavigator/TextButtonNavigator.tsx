import Link from 'next/link';

import styles from './TextButtonNavigator.module.scss';

export default function TextButtonNavigator({
  backgroundColor = null,
  borderColor = null,
  color = '--text-dark',
  placeShadow = false,
  slug = null,
  text = '',
}: {
  backgroundColor?: null | string;
  borderColor?: null | string;
  color?: string;
  placeShadow?: boolean;
  slug?: null | string;
  text?: string;
}) {
  function Button() {
    return (
      <button
        className={styles.container}
        style={{
          backgroundColor: `${backgroundColor ? `var(${backgroundColor})` : 'transparent'}`,
          borderColor: `${borderColor ? `var(${borderColor})` : 'transparent'}`,
          color: `var(${color})`,
          boxShadow: `${placeShadow ? 'var(--shadow-sm)' : 'none'}`,
        }}
      >
        {text}
      </button>
    );
  }

  return slug ? (
    <Link href={slug}>
      <Button />
    </Link>
  ) : (
    <Button />
  );
}
