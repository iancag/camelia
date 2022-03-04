import { useState, useEffect } from 'react';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/Home';
import { HowToBuy } from './components/how-to-buy/HowToBuy';
import { ItemDetailContainer } from './components/item-detail-container/ItemDetailContainer';
import { CartContext } from '../src/context/Context';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([{ item: [], totalCount: 0}]);

  const onAdd = (itemsAdded, item) => {
    if (itemsAdded) {
      setCartCount(() => cartCount + itemsAdded);
      setCartItems((items) => [ ...items, { item: item, totalCount: cartCount + itemsAdded}]);
    }
  };

  useEffect(()=>{
    console.log(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={ {cartCount:cartCount, cartItems:cartItems} }>
      <BrowserRouter>
        <div className="app">
          <header>
            <NavBar />
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
          <Route path="/detalles/:category/:subcategory/:id" element={<ItemDetailContainer stock={0} onAdd={(itemsAdded, item) => {
            onAdd(itemsAdded, item);
          }} />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
