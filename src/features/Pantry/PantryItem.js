import { React } from 'react';

import { decrementQuantity, removeItem } from './pantrySlice';
import { useDispatch } from 'react-redux';

function PantryItem({id, title, quantity = 0}) {
    const dispatch = useDispatch();

    return (
        <div>
            <div className='pantry-info'>
                <p>{title}</p>
                <p>x{quantity}</p>
                <button onClick={() => dispatch(decrementQuantity(id))}>Remove One</button>
                <button onClick={() => dispatch(removeItem(id))}>Remove All</button>

            </div>
        </div>
    )
}

export default PantryItem;