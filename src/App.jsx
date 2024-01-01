import styles from './App.module.css';
import Nav from './components/nav/Nav.jsx';
import Aside from './components/aside/Aside.jsx';
import Main from './components/main/Main.jsx';

function App() {
  return (
    <>
      <div className={styles.app}>
        <Nav />
        <Aside />
        <Main />
      </div>
    </>
  );
}

export default App;
