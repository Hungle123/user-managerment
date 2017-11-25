import React from 'react'
import ProductCategory from './ProductCategory'
import ProductList from './ProductList'
import NoResult from '../common/NoResult'
import config from '../../config'

const ProductTable = ({ products, handleDelProduct, handleMouseOver }) => {
  const hasProducts =
    products.length > 0 ? config.class.has_result : config.class.not_result
  return (
    <div>
      <table className="table product__table">
        <thead>
          <ProductCategory />
        </thead>
        <ProductList
          products={products}
          handleDelProduct={handleDelProduct}
          handleMouseOver={handleMouseOver}
        />
      </table>
      <NoResult className={`product__result-message ${hasProducts}`}>
        No Result
      </NoResult>
    </div>
  )
}

export default ProductTable
