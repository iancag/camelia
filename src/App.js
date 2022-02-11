import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './components/item-list-container/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="main">
        <ItemListContainer title="Accesorios" />
      </div>
    </div>
  );
}

export default App;
