import React, { useContext } from 'react'
import { productContext } from '../Context-Api/ProductsContext'
import ProductCard from './ProductCard';




export default function ProductList() {

    const {products} = useContext(productContext);
  return (
    <div>
        {
            products.map((card)=>(
                <ProductCard key={card.id} card={card}></ProductCard>
            ))
        }
    </div>
  )
}
