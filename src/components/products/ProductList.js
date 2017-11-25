import React from 'react'
import ProductItem from './ProductItem'
import _ from 'lodash'

const ProductList = ({ products, handleDelProduct, handleMouseOver }) => {
  const showProducts = () => {
    return _.map(products, product => (
      <ProductItem
        key={product.id}
        product={product}
        handleDelProduct={handleDelProduct}
        handleMouseOver={handleMouseOver}
      />
    ))
  }

  return <tbody>{showProducts()}</tbody>
}

export default ProductList
