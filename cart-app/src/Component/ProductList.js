import React, { useContext } from 'react'
import { productContext } from '../Context-Api/ProductsContext'
import ProductCard from './ProductCard'

import './ProductList.css'

export default function ProductList() {
  const { products } = useContext(productContext)

  if (products.length === 0) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="productlist_container">
      {products.map((card) => (
        <ProductCard key={card.id} card={card} />
      ))}
    </div>
  )
}
