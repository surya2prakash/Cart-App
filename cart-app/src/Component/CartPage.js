import React, { useContext } from 'react'
import { productContext } from '../Context-Api/ProductsContext'

import "./CartPage.css"
export default function CartPage() {

    const cartItems = useContext(productContext);

   
    const {removeformCart,totalPrice} = useContext(productContext);
    let amount = Math.floor(totalPrice);
  return (
    <div className='cart_page_container'>
        
        {
            
           cartItems?.cartItems.length > 0 ?
      (
        <div className='cart_page_main'>
            {
           cartItems?.cartItems.map((item)=>(
               
                <div key={item.id} className='cart_page'>
                     
                <div className='item_name'>Item Name : {item.title}</div>
                <div className='item_Price'>Price : ${item.price}</div>
                <div className='item_img'>
                    <img src={item.thumbnail} alt='not found'/>
                </div>
                <button onClick={()=>{removeformCart(item.id)}}>Remove Item</button>
              
                </div>
                
            ))
        }
            <div className='price_conainer'>
             <div className='total_price'>Total Price : ${amount}</div>
             </div>
             </div>)
            :(<div className='empty_items'>No Item</div>)
        }
    </div>
  )
}
