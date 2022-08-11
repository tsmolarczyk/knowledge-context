import css from './App.module.css';
import { Examples } from './Examples';

function App() {
  return (
    <div className={css.container}>
      <h1>Co to jest context?</h1>
      <div>
        Posprawdzać rózne opcje i mozliwosci wykorzystania context: memo,
        useContext
      </div>
      <Examples />
    </div>
  );
}

export default App;
