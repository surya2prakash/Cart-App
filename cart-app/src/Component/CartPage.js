import React, { useContext } from 'react'
import { productContext } from '../Context-Api/ProductsContext'


export default function CartPage() {

    const cartItems = useContext(productContext);

   
    const {removeformCart,totalPrice} = useContext(productContext);
  return (
    <div>
        
        {
            
           cartItems?.cartItems.length > 0 ?
      (
        <div>
            {
           cartItems?.cartItems.map((item)=>(
               
                <div key={item.id}>
                     
                <div>Item Name : ${item.title}</div>
                <div>Price : ${item.price}</div>
                <div>
                    <img src={item.thumbnail} alt='not found'/>
                </div>
                <button onClick={()=>{removeformCart(item.id)}}>Remove Item</button>
              
                </div>
                
            ))
        }
            <div>
             <div>Total Price : ${totalPrice}</div>
             </div>
             </div>)
            :(<div>No Item</div>)
        }
    </div>
  )
}
