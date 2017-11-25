import React from 'react'
import Button from '../common/Button'
import ProductInfo from './ProductInfo'
import Rating from '../common/Rating'
import config from '../../config'
import { Link } from 'react-router-dom'

const ProductItem = ({ product, handleDelProduct, handleMouseOver }) => {
  const deleteProduct = () => {
    handleDelProduct(product.id)
  }

  return (
    <tr>
      <td>
        <ProductInfo product={product} />
      </td>
      <td>{product.quantity}</td>
      <td>{`${config.character_html.dollar}${product.price}`}</td>
      <td>
        <Rating product={product} handleMouseOver={handleMouseOver} />
      </td>
      <td className="text-nowrap">
        <Link
          to={`/edit/${product.id}`}
          name="edit-product"
          className="btn btn-info product-button__edit"
        >
          {config.button.edit}
        </Link>
        <Button
          name="delete-product"
          className="btn btn-danger product-button__delete"
          onClick={deleteProduct}
        >
          {config.button.delete}
        </Button>
      </td>
    </tr>
  )
}

export default ProductItem
