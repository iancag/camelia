import { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ItemDetail } from '../item-detail/ItemDetail';

export const ItemDetailContainer = (props) => {
  const { onAdd, stock, item } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    background: 'white',
    border: '1px solid #000',
    p: 4
  };

  return (
    <div>
      <Button onClick={handleOpen}>Detalles</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ItemDetail onAdd={onAdd} stock={stock} item={item} />
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2>Mas Detalles</h2>
            <p>Próximamente...</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
