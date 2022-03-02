import { useState } from 'react';
import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './components/item-list-container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/Home';
import { HowToBuy } from './components/how-to-buy/HowToBuy';
import { ItemDetailContainer } from './components/item-detail-container/ItemDetailContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const onAdd = (itemsAdded) => {
    if (itemsAdded) {
      setCartCount(() => cartCount + itemsAdded);
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <NavBar cartCount={cartCount} />
        </header>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAdd={(itemsAdded) => {
                onAdd(itemsAdded);
              }}
            />
          }
        />
        <Route
          path="/inicio"
          element={
            <Home
              onAdd={(itemsAdded) => {
                onAdd(itemsAdded);
              }}
            />
          }
        />
        <Route path="/como-comprar" element={<HowToBuy />} />
        <Route path="/detalles/:category/:subcategory/:id" element={<ItemDetailContainer stock={0} onAdd={(itemsAdded) => {
          onAdd(itemsAdded);
        }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
