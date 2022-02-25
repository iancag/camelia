import { ItemListContainer } from '../item-list-container/ItemListContainer';

export const Home = ({ onAdd }) => {
  return (
    <div id="home">
      <ItemListContainer title="Accesorios" onAdd={(itemsAdded) => onAdd(itemsAdded)} />
    </div>
  );
};
