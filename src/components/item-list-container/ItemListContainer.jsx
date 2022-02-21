import './ItemListContainer.scss';
import { ItemList } from '../item-list/ItemList';
import { useEffect, useState } from 'react';

export const ItemListContainer = ({ title, onAdd }) => {
  const [items, setItems] = useState([]);

  const products = [
    {
      categories: [
        {
          name: 'accessory',
          id: 1,
          subcategories: [
            {
              id: 1,
              name: 'ring',
              items: [
                {
                  id: 1,
                  brand: 'Itilu',
                  price: 50,
                  description: 'Anillo 1'
                },
                {
                  id: 2,
                  brand: 'Multini',
                  price: 30,
                  description: 'Anillo 2'
                }
              ]
            },
            {
              id: 2,
              name: 'hat',
              items: [
                {
                  id: 1,
                  brand: 'Sombrex',
                  price: 50,
                  description: 'Sombrero 1'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      categories: [
        {
          name: 'dress',
          id: 2,
          subcategories: [
            {
              id: 1,
              name: 'ring',
              items: [
                {
                  item: [
                    {
                      id: 1,
                      brand: 'Itilu',
                      price: 50,
                      description: 'Anillo 1'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  const getProducts = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products[0]);
      }, 2000);
    });
    return promise;
  };

  useEffect(() => {
    getProducts().then((json) => setItems(json));
  }, []);

  return !items || items.length < 1 ? (
    <div>Loading</div>
  ) : (
    <div className="item-list-container">
      <h1 className="item-list-container-title">Accesorios</h1>
      {items.categories.map((category) =>
        category.subcategories.map((subcategory) => (
          <ItemList
            key={subcategory.id}
            onAdd={(itemsAdded) => onAdd(itemsAdded)}
            items={subcategory}
          />
        ))
      )}
    </div>
  );
};
