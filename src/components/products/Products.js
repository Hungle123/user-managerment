import React, { Component } from 'react'
import Button from '../common/Button'
import Title from '../common/Title'
import ProductTable from './ProductTable'
import SearchProducts from '../../containers/SearchProducts'
import config from '../../config'
import { Link } from 'react-router-dom'

const Products = ({
  products,
  handleDelProduct,
  handleClearProducts,
  handleMouseOver
}) => {
  return (
    <div className="product">
      <Title className="product-title">Product Management</Title>
      <div className="product__header clearfix">
        <Link
          to="/add"
          className="btn btn-default btn-success product-button__add"
        >
          {`${config.character_html.sum} ${config.button.add}`}
        </Link>
        <Button
          name="delete-all-product"
          className="btn btn-default btn-danger product-button__delete-all"
          onClick={handleClearProducts}
        >
          {config.button.delete_all}
        </Button>
        <SearchProducts />
      </div>
      <ProductTable
        products={products}
        handleDelProduct={handleDelProduct}
        handleMouseOver={handleMouseOver}
      />
    </div>
  )
}

export default Products
