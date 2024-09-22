import TextButtonNavigator from '@components/TextButtonNavigator/TextButtonNavigator';

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
  return <TextButtonNavigator slug="/auth/sign-in" text="Log In" />;
}

function SignUpButton() {
  return (
    <TextButtonNavigator
      backgroundColor="--primary-color"
      color="--text-light"
      placeShadow={true}
      slug="/auth/sign-up"
      text="Sign Up"
    />
  );
}
