import * as actionTypes from './../constants/actionTypes'

export const addProduct = product => {
  return {
    type: actionTypes.ADD_PRODUCT,
    product
  }
}

export const filterProducts = keyword => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    keyword
  }
}

export const editProduct = product => {
  return {
    type: actionTypes.EDIT_PRODUCT,
    product
  }
}

export const deleteProduct = id => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    id
  }
}

export const clearProducts = () => {
  return {
    type: actionTypes.CLEAR_PRODUCTS
  }
}

export const rateProduct = (product, newRate) => {
  return {
    type: actionTypes.RATE_PRODUCT,
    product,
    newRate
  }
}
