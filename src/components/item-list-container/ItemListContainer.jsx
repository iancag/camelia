import './ItemListContainer.scss'
import { Item } from '../item/Item';

export const ItemListContainer = ({ title, onAdd }) => {
    return <div className="item-list-container">
        <h1 className="item-list-container-title">{title}</h1>

        <div className="item-list-container-items">
            <Item onAdd={(itemsAdded)=>onAdd(itemsAdded)} stock={3} title="Title 1" description="description 1"/>
            <Item onAdd={(itemsAdded)=>onAdd(itemsAdded)} stock={5} title="Title 2" description="description 2"/>
        </div>
    </div>
}