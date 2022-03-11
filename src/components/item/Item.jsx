import { Link } from 'react-router-dom';
import { ItemCount } from '../item-count/ItemCount';
import { Button } from '@mui/material';
import './Item.css';
import { useState } from 'react';

export const Item = (props) => {
  const { onAdd, stock, item, categoryName, subcategoryName } = props;
  const [itemsAdded, setItemsAdded] = useState(0);
  const addItems = (itemsAdded) => {
    setItemsAdded(itemsAdded);
  };

  const itemDetailUrl = `${categoryName}/${subcategoryName}/${item.id}`;
  return (
    <div className="card">
      <div style={{ textAlign: "center" }} className="title">{item.brand}</div>
      <div style={{ textAlign: "center" }} className="description">{item.description}</div>
      <div>
        <Link to={`/detalles/${itemDetailUrl}`}><img src={item.imageUrl} alt="image" width="200px" /></Link>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="price" style={{marginBottom: "16px"}}>${item.price} MXN</div>
        <Button
          onClick={() => onAdd(itemsAdded)}
          variant="contained"
          style={{ backgroundColor: '#AC8F76', borderColor: 'black' }}
        >
          Agregar
        </Button>
        <div className="counter">
          <ItemCount stock={stock} addItems={(itemsAdded) => addItems(itemsAdded)} />
        </div>
      </div>
    </div>
  );
};
