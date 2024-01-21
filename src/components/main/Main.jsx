import styles from './Main.module.css';
{
  /*import Profile from './profile/Profile.jsx';*/
}
import Messages from './messages/Messages.jsx';

function Main() {
  return (
    <main className={styles.main}>
      <Messages />
      {/* <Profile /> */}
    </main>
  );
}

export default Main;
