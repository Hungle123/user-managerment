import React from 'react'
import Title from '../common/Title'
import Button from '../common/Button'
import Input from '../common/Input'
import Rating from '../common/Rating'
import config from '../../config'
import actionCommon from '../../helpers/common/actionCommon'
import { findItemById } from '../../helpers/productUtils'

const FormBasic = props => {
  let { id, form } = props.match.params
  let name, quantity, price

  id = parseInt(id, 10)
  form = form.charAt(0).toUpperCase() + form.slice(1)

  const oldProduct = findItemById(props.products, id)

  // if ID is invalid and form edit redirect home page
  console.log(!oldProduct && form === 'Edit')
  if (!oldProduct && form === 'Edit') {
    props.history.push(`/`)
  }

  const handleFormProduct = e => {
    e.preventDefault()

    if (!id) {
      let newProduct = {
        id: actionCommon.generatorID(),
        name: name.value,
        quantity: quantity.value,
        price: price.value,
        rate: 0
      }

      props.handleAddProduct(newProduct)
      props.history.push(`/`)
    } else {
      let newProduct = {
        id: id,
        name: name.value,
        quantity: quantity.value,
        price: price.value,
        rate: oldProduct.rate
      }

      props.handleUpdateProduct(newProduct)
      props.history.push(`/`)
    }
  }

  const handleCancel = () => {
    props.history.push(`/`)
  }

  const handleMouseOver = (product, newRate) => {
    props.handleMouseOver(product, newRate)
  }

  return (
    <div>
      <form className="form-control" onSubmit={handleFormProduct}>
        <Title className="product-title">{`${form} Product`}</Title>

        <div className="from-content">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            className="form-control"
            required="required"
            placeholder="Product name.."
            refInput={input => (name = input)}
            defaultValue={oldProduct ? oldProduct.name : ''}
          />
          <label htmlFor="type">Quantity</label>
          <Input
            type="number"
            name="quantity"
            className="form-control"
            required="required"
            placeholder="Product type.."
            min="0"
            refInput={input => (quantity = input)}
            defaultValue={oldProduct ? oldProduct.quantity : ''}
          />
          <label htmlFor="price">Price</label>
          <Input
            type="number"
            name="price"
            className="form-control"
            required="required"
            placeholder="Product price.."
            pattern={config.pattern.currency}
            min="0"
            refInput={input => (price = input)}
            defaultValue={oldProduct ? oldProduct.price : ''}
          />
          {id ? (
            <div className="form__rate-product">
              <label htmlFor="rate">Rating Product: </label>
              <Rating product={oldProduct} handleMouseOver={handleMouseOver} />
            </div>
          ) : (
            ''
          )}
          <Button
            type="submit"
            className="btn btn-default btn-info product-button__submit"
          >
            {form}
          </Button>
          <Button
            name="submit-product"
            className="btn btn-default btn-success product-button__cancel"
            onClick={handleCancel}
          >
            {config.button.cancel}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormBasic
