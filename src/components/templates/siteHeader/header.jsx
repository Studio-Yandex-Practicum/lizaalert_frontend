import styles from './siteHeader.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerText}>Учебная платформа</h1>
        <ul className={styles.headerLinks}>
          <li>HeaderLink</li>
          <li>HeaderLink</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
