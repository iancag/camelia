import './ItemListContainer.scss'
import { Item } from '../item/Item';

export const ItemListContainer = ({ title, onAdd }) => {
    return <div className="item-list-container">
        <h1 className="item-list-container-title">{title}</h1>

        <div className="item-list-container-items">
            <Item onAdd={onAdd} stock={3} />
            <Item onAdd={onAdd} stock={5} />
        </div>
    </div>
}