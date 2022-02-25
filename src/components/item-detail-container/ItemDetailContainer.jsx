import { Box } from '@mui/system';
import { ItemDetail } from '../item-detail/ItemDetail';

export const ItemDetailContainer = (props) => {
  const { onAdd, stock, item } = props;
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

  return (
    <div>
      <div>
        <Box sx={style}>
          <ItemDetail onAdd={onAdd} stock={stock} item={item} />
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2>Mas Detalles</h2>
            <p>Próximamente...</p>
          </div>
        </Box>
      </div>
    </div>
  );
};
