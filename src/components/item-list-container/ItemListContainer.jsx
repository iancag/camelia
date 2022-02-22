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
                  description: 'Anillo 1',
                  imageUrl: '/images/classic-wedding-band.jpeg'
                },
                {
                  id: 2,
                  brand: 'Multini',
                  price: 30,
                  description: 'Anillo 2',
                  imageUrl: '/images/brushed-and-polished-comfort-fit-wedding-ring.jpeg'
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
                  price: 120,
                  description: 'Sombrero Negro',
                  imageUrl: '/images/sombrero-1.webp'
                },
                {
                  id: 2,
                  brand: 'Sombrex',
                  price: 130,
                  description: 'Sombrero Blanco',
                  imageUrl: '/images/sombrero-2.webp'
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
              name: 'wedding',
              items: [
                {
                  item: [
                    {
                      id: 1,
                      brand: 'wed1',
                      price: 50,
                      description: 'the wedding dress 1'
                    },
                    {
                      id: 2,
                      brand: 'wed3',
                      price: 40,
                      description: 'the wedding dress 2'
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
            categoryName={category.name}
            subcategoryName={subcategory.name}
          />
        ))
      )}
    </div>
  );
};
