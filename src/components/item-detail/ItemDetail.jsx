import { Button } from '@mui/material';
import { useState } from 'react';
import { ItemCount } from '../item-count/ItemCount';

export const ItemDetail = ({ item }) => {
  return (
    <div className="card">
      <div className="title">{item.brand}</div>
      <div className="description">{item.description}</div>
      <div className="price">${item.price} MXN</div>
      <div>
        <img src={item.imageUrl} alt="image" width="200px" />
      </div>
    </div>
  );
};
