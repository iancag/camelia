import './ItemListContainer.scss';
import { ItemList } from '../item-list/ItemList';
import { useEffect, useState } from 'react';
import { Loading } from '../loading/Loading';
import { products } from '../../assets/data/data';

export const ItemListContainer = ({ title, onAdd }) => {
  const [items, setItems] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products[0]);
      }, 1000);
    });
  };

  useEffect(() => {
    getProducts().then((json) => setItems(json));
  }, []);

  return !items || items.length < 1 ? (
    <Loading />
  ) : (
    <div className="item-list-container">
      <h1 className="item-list-container-title">Accesorios</h1>
      {items.categories.map((category) =>
        category.subcategories.map((subcategory) => (
          <ItemList
            key={subcategory.id}
            onAdd={(itemsAdded) => onAdd(itemsAdded)}
            items={subcategory}
            categoryName={category.name}
            subcategoryName={subcategory.name}
          />
        ))
      )}
    </div>
  );
};
