import './styles.css';
import React from 'react';
import {Link} from 'react-router-dom'; 


const Item = ({info}) => {
    return (

        <div className=' product card d-flex  '>

            <div className='card d-flex justify-content-between card-body text-center'>
        <Link to={`/detail/${info.id}`} >
            <img className='imagen' src={info.img} alt="" />
            <p className='btn mt-5 btn-light text-center'>{info.nombre}</p>
        </Link>
            </div>
        </div>
    )
}

export default Item; 
