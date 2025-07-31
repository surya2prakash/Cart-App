import React, { useContext } from 'react'
import { productContext } from '../Context-Api/ProductsContext';

import './ProductCard.css'


export default function ProductCard({card}) {

    const {addToCart} = useContext(productContext);
const {title,thumbnail,price} = card;
  return (
    <div className='card_container'>
      
        <p className='name'>Name : {title}</p>
        <div className='price'>Price: ${price}</div>
        <div className='image'>
            <img src={thumbnail} alt='not found'/>
            
        </div>
        <button onClick={()=>{addToCart(card)}}>Add to Cart</button>
       
    </div>
  )
}
