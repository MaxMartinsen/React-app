import './App.css';
import Nav from './components/nav/Nav.jsx';
import Aside from './components/aside/Aside.jsx';
import Main from './components/main/Main.jsx';

function App() {
  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <Nav />
        <Aside />
        <Main />
      </div>
    </>
  );
}

export default App;
