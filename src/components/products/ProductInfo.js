import React from 'react'
import avatar from '../../assets/images/default.jpg'

const ProductInfo = ({ product }) => {
  return (
    <div className="product__info">
      <img src={avatar} alt="avatar" className="product__info-avatar" />
      <h2 className="product__info-name">{product.name}</h2>
    </div>
  )
}

export default ProductInfo
