import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { ItemDetail } from '../item-detail/ItemDetail';
import { ItemCount } from '../item-count/ItemCount';
import { products } from '../../assets/data/data';
import { Button } from '@mui/material';
import { getProducts } from '../../utilities/db';

export const ItemDetailContainer = (props) => {
  const { category, subcategory, id } = useParams();
  const { onAdd } = props;
  const [itemsAdded, setItemsAdded] = useState(0);
  const [showGoToCart, setShowGoToCart] = useState(false);
  const addItems = (itemsAdded) => {
    setItemsAdded(itemsAdded);
  };

  const item = getProducts(category, subcategory, id);

  const style = {
    display: 'flex',
    position: 'relative',
    top: '300px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    background: 'white',
    border: '1px solid #000',
    p: 4
  };

  const handleOnClick = (itemsAdded) => {
    onAdd(itemsAdded, item);
    setShowGoToCart(true);
  }

  return (
    <div>
      <div>
        <Box sx={style}>
          <ItemDetail />
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2>Mas Detalles</h2>
            <p>Próximamente...</p>
            {
              !showGoToCart ?
                <>
                  <div className="counter">
                    <ItemCount stock={item.stock} addItems={(itemsAdded) => addItems(itemsAdded)} />
                  </div>
                  <div className="add">
                    <Button
                      onClick={() => handleOnClick(itemsAdded)}
                      variant="contained"
                      style={{ backgroundColor: '#AC8F76', borderColor: 'black' }}
                    >
                      Agregar
                    </Button>
                  </div>
                </>
                :
                <>
                  <div>
                    <Button component={Link} variant="outlined" to="/inicio" style={{marginRight:"10px"}}>Seguir Comprando</Button>
                    <Button component={Link} variant="contained" to="/cart">Ir a Carrito</Button>
                  </div>
                </>
            }
          </div>
        </Box>
      </div>
    </div>
  );
};
