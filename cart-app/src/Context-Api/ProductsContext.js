
import { createContext, useEffect, useState } from "react";


export const productContext = createContext();


let baseUrl = "https://dummyjson.com/carts "

export default function CartConextProvider({children}){
   
      const [products,setProducts] = useState([]);
      const [cartItems,setCartitems]=useState([]);
      

      useEffect(()=>{

        async function fetchProductData(){
          try{

            const response = await fetch(baseUrl,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });

            const result = await response.json();

                    
            

           


            const Products = result?.carts?.flatMap(cart => cart.products) || [];
            setProducts(Products);

          }catch(err){
            console.error(err);

          }
        }

        fetchProductData();

      },[]);


      


      //add krne pe cartItem me kya show hoga 
      const addToCart =(product)=>{
        //prev item ko to rakhna hi hai aur jo add hua hai usko bhi add kr lena hai
     
           setCartitems((prev)=>[...prev,product])
      }

      //remove krne pe cartItem me kya show hoga


      const removeformCart = (id)=>{
           setCartitems( prev => prev.filter(item =>item.id !==id))
      }
      //total price ?
      
      const totalPrice = cartItems.reduce((acc,item) => acc +item.price,0) ;
      
      let value ={products,
        addToCart,
        removeformCart,
        totalPrice,
        cartItems,
        
      }

      return(
          <productContext.Provider value={value}>
            {children}
          </productContext.Provider>
      )

}