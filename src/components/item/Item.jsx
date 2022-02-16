import { ItemCount } from "../item-count/ItemCount";
import { Button } from "@mui/material"
import "./Item.css";
import { useState } from "react";

export const Item = ({onAdd, stock, title, description}) => {
    const [itemsAdded, setItemsAdded] = useState(0);
    const addItems = (itemsAdded) => {
        setItemsAdded(itemsAdded);
    }

    return <div className="card">
        <div className="title">
            {title}
        </div>
        <div className="description">
            {description}
        </div>
        <div className="counter">
            <ItemCount stock={stock} addItems={(itemsAdded)=>addItems(itemsAdded)}/>
        </div>
        <div className="add">
            <Button onClick={()=>onAdd(itemsAdded)} variant="contained" style={{ backgroundColor: "#AC8F76", borderColor: "black" }}>Agregar</Button>
        </div>
    </div>
}