import { React } from 'react';
import styles from '../../styles/shopping.module.css';





//Note: Not sure what children does... FIXME?

export default function Item({item, children}) {
    return (
        <div key={item.id} className={styles.item}>
            {/* <img src={require('../../styles/image-not-found.jpg')} /> */}
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div className="buttons">
                    <button>+</button>
                    <button>-</button>
            </div>
            {/* {children}  */}
        </div>
    )
}