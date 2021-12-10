import './assets/css/App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Tabata" time={new Date().toISOString()}></Header>
    </div>
  );
}

export default App;
