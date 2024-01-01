import styles from './Main.module.css';
import Profile from './profile/Profile.jsx';

function Main() {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
}

export default Main;
