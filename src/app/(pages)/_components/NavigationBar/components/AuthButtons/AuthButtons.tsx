import Link from 'next/link';

import styles from './AuthButtons.module.scss';

export default function AuthButtons() {
  return (
    <div className={styles.container}>
      <SignInButton />
      <SignUpButton />
    </div>
  );
}

function SignInButton() {
  return (
    <Link href="/auth/sign-in">
      <button>Sign In</button>
    </Link>
  );
}

function SignUpButton() {
  return (
    <Link href="/auth/sign-up">
      <button className={styles.sign_up}>Sign Up</button>
    </Link>
  );
}
