import './styles.css';
import {Link} from 'react-router-dom'; 
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const Item = ({info}) => {

    
    return (

        

            <div className='container ml-3 card card-body text-center'>
        <Link to={`/detail/${info.id}`} >
            <img className='imagen' src={info.img} alt="" />
        <p className='btn mt-3 btn-light text-center'>VER{info.nombre}</p>
        </Link>
            </div>
        
    )
}

export default Item; 
