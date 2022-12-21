import './styles.css'
import React, {useEffect, useState } from 'react';

 
export const ItemCount = ( {initial,stock, onAdd}) => {
    const[count, setCount] = useState(parseInt(initial));
    
    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(parseInt(initial));

    }, 
    [initial]
    );


 return (

    <div className='counter'>
      <button className='' disabled={count <= 1} onClick={decrease}>-</button>
      <span className='p-2'>{count}</span>
      <button disabled={count >= stock} onClick={increase}>+</button>
      <div>
        <button className='mt-2' disabled={stock <= 0} onClick={() => onAdd (count)}>Agregar</button>
      </div>
 
    </div>

 );
}

export default ItemCount;