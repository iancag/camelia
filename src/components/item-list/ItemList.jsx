import { Item } from '../item/Item';

export const ItemList = ({ items, onAdd, categoryName, subcategoryName }) => {
  return (
    <div className="item-list-container-items">
      <h2>{items.name}</h2>
      {console.log(items.items[0])}
      {items.items.map((item) => {
        return (
          <Item
            key={item.id}
            onAdd={(itemsAdded) => onAdd(itemsAdded)}
            stock={3}
            item={item}
            categoryName={categoryName}
            subcategoryName={subcategoryName}
          />
        );
      })}
    </div>
  );
};
