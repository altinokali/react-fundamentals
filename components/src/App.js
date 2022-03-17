import './App.css';
import Header from './components/Header';
const name = 'Ali';
const surName = 'Altinok';

function App() {

  return (
    <div>
      <Header />
      <b> {`Benim adim ${name} soyadim ${surName}`}</b>
    </div>
  );
}

export default App;
