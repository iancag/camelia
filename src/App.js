import { useState } from 'react';
import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './components/item-list-container/ItemListContainer';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0)

  const onAdd = () => {
    alert('proximamente')
    setCartCount(() => cartCount )
  }

  return (
    <div>
      <header>
        <NavBar cartCount={cartCount} />
      </header>
      <div id="main">
        <ItemListContainer title="Accesorios" onAdd={onAdd} />
      </div>
    </div>
  );
}

export default App;
