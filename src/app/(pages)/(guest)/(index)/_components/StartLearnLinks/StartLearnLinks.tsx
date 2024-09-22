import TextButtonNavigator from '@components/TextButtonNavigator/TextButtonNavigator';

import styles from './StartLearnLinks.module.scss';

export default function StartLearnLinks() {
  return (
    <div className={styles.container}>
      <TextButtonNavigator
        backgroundColor="--primary-color"
        color="--text-light"
        placeShadow={true}
        slug="/auth/sign-up"
        text="Get Started Today"
      />
      <TextButtonNavigator
        backgroundColor="--white-bg"
        borderColor="--primary-color"
        color="--primary-color"
        placeShadow={true}
        slug="/about"
        text="Learn More"
      />
    </div>
  );
}
