import React, { useContext } from 'react'
import { productContext } from '../Context-Api/ProductsContext';



export default function ProductCard({card}) {

    const {addToCart} = useContext(productContext);
const {title,thumbnail,price} = card;
  return (
    <div>
      
        <p>Name : ${title}</p>
        <div>Price: ${price}</div>
        <div>
            <img src={thumbnail} alt='not found'/>
            
        </div>
        <button onClick={()=>{addToCart(card)}}>Add to Cart</button>
       
    </div>
  )
}
