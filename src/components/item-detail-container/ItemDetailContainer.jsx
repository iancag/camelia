import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { ItemDetail } from '../item-detail/ItemDetail';
import { ItemCount } from '../item-count/ItemCount';
import { products } from '../../assets/data/data';
import { Button } from '@mui/material';

export const ItemDetailContainer = (props) => {
  const { category, subcategory, id } = useParams();
  const { onAdd } = props;
  const [itemsAdded, setItemsAdded] = useState(0);
  const [showGoToCart, setShowGoToCart] = useState(false);
  const addItems = (itemsAdded) => {
    setItemsAdded(itemsAdded);
  };

  // useEffect(()=>{

  // }, ['']);

  const item = products.filter(p => p.categories.some(c => c.name === category))[0]
    .categories[0].subcategories.filter(s => s.name === subcategory)[0]
    .items.filter(item => item.id === parseInt(id))[0];

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
    onAdd(itemsAdded);
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
                    <Button component={Link} variant="contained" to="/cart">Go to Cart</Button>
                  </div>
                  <div>
                    <Link to="/inicio">Seguir Comprando</Link>
                  </div>
                </>
            }
          </div>
        </Box>
      </div>
    </div>
  );
};
