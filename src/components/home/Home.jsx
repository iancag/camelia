import { ItemListContainer } from '../item-list-container/ItemListContainer';

export const Home = ({ onAdd }) => {
  return (
    <div id="home">
      <ItemListContainer title="Accesorios" onAdd={(itemsAdded, item) => onAdd(itemsAdded, item)} />
    </div>
  );
};
