import { ItemCount } from '../item-count/ItemCount';
import { Button } from '@mui/material';
import './Item.css';
import { useState } from 'react';

export const Item = (props) => {
  const { onAdd, stock, item } = props;
  const [itemsAdded, setItemsAdded] = useState(0);
  const addItems = (itemsAdded) => {
    setItemsAdded(itemsAdded);
  };

  return (
    <div className="card">
      <div className="title">{item.brand}</div>
      <div className="description">{item.description}</div>
      <div className="price">${item.price} MXN</div>
      <div className="counter">
        <ItemCount stock={stock} addItems={(itemsAdded) => addItems(itemsAdded)} />
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
