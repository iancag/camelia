import { Item } from '../item/Item';

export const ItemList = ({ items, onAdd, categoryName, subcategoryName }) => {
  return (
    <>
      <h2 className="item-list-container-items">{items.name}</h2>
      <div className="item-list-container-items">
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
    </>
  );
};
