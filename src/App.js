import { useState, useEffect } from 'react';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/Home';
import { HowToBuy } from './components/how-to-buy/HowToBuy';
import { ItemDetailContainer } from './components/item-detail-container/ItemDetailContainer';
import { CartContext } from '../src/context/Context';
import { Cart } from './components/cart/Cart';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (itemsAdded, item) => {
    if (itemsAdded) {
      setCartCount(() => cartCount + itemsAdded);

      let existItem = cartItems.find(cartItem=> cartItem.item.id === item.id && cartItem.item.brand === item.brand);

      if(!!existItem) {
          existItem.totalCount = cartCount + itemsAdded;
      }
      else {
        setCartItems((items) => [...items, { item: item, totalCount: cartCount + itemsAdded }]);
      }
    }
  };

  useEffect(()=>{
    //console.log(cartItems);
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
                onAdd={(itemsAdded, item) => {
                  onAdd(itemsAdded, item);
                }}
              />
            }
          />
          <Route
            path="/inicio"
            element={
              <Home
                onAdd={(itemsAdded, item) => {
                  onAdd(itemsAdded, item);
                }}
              />
            }
          />
          <Route path="/como-comprar" element={<HowToBuy />} />
          <Route path="/detalles/:category/:subcategory/:id" element={<ItemDetailContainer stock={0} onAdd={(itemsAdded, item) => {
            onAdd(itemsAdded, item);
          }} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
