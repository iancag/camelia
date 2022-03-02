import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

export const ItemCount = (props) => {
  const { stock, addItems } = props;
  const [total, setTotal] = useState(1);
  const onAdd = () => {
    if (total < stock) {
      setTotal(total + 1);
    }
  };
  const onRemove = () => {
    if (total > 1) {
      setTotal(total - 1);
    }
  };

  useEffect(() => {
    addItems(total);
  }, [total]);

  return (
    <div>
      <Button variant="text" onClick={onRemove}>
        -
      </Button>
      <label>{total || 1}</label>
      <Button variant="text" onClick={onAdd}>
        +
      </Button>
    </div>
  );
};
