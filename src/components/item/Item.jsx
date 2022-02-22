import { ItemCount } from '../item-count/ItemCount';
import { Button } from '@mui/material';
import './Item.css';
import { useState } from 'react';
import { ItemDetailContainer } from '../item-detail-container/ItemDetailContainer';

export const Item = (props) => {
  const { onAdd, stock, item, categoryName, subcategoryName } = props;
  const [itemsAdded, setItemsAdded] = useState(0);
  const addItems = (itemsAdded) => {
    setItemsAdded(itemsAdded);
  };

  const itemDetailUrl = `/${categoryName}/${subcategoryName}/${item.id}`;
  return (
    <div className="card">
      <div className="title">{item.brand}</div>
      <div className="description">{item.description}</div>
      <div className="price">${item.price} MXN</div>
      <div className="counter">
        <ItemCount stock={stock} addItems={(itemsAdded) => addItems(itemsAdded)} />
      </div>
      <div>
        <img src={item.imageUrl} alt="image" width="200px" />
      </div>
      <div>
        {/* Para siguiente Entrega con Router */}
        {/* <a href={itemDetailUrl}>Detalles</a>  */}
        <ItemDetailContainer item={(onAdd, stock, item)} />
      </div>
      <div className="add">
        <Button
          onClick={() => onAdd(itemsAdded)}
          variant="contained"
          style={{ backgroundColor: '#AC8F76', borderColor: 'black' }}
        >
          Agregar
        </Button>
      </div>
    </div>
  );
};
