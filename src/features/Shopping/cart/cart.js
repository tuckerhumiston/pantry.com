import { React } from 'react';
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
    const dispatch = useDispatch();
    const cartInventory = useSelector(selectCart);


    return (
        <div className="cart">
            {cartInventory.map((item) => (
                <p>{item.name}</p>
            ))}
        </div>
    )
}

export default Inventory;