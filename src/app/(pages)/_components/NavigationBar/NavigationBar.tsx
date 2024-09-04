import AuthButtons from './components/AuthButtons/AuthButtons';
import LinkList from './components/LinkList/LinkList';
import Logo from './components/Logo/Logo';
import styles from './NavigationBar.module.scss';

export default function NavigationBar() {
  return (
    <div className={styles.container}>
      <Logo />
      <LinkList />
      <AuthButtons />
    </div>
  );
}
