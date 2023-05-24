import { React } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Item from '../Item';
import { selectInventory } from './inventorySlice';

const Inventory = () => {
    const dispatch = useDispatch();
    const inventory = useSelector(selectInventory);


    return (
        <div className="inventory">
            {inventory.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Inventory;