import data from '../data/products.json'
import * as actionTypes from '../constants/actionTypes'
import {
  updateObject,
  updateItemInArray,
  deleteItemInArray
} from '../helpers/productUtils'

const products = (state = data, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return state

    case actionTypes.ADD_PRODUCT:
      return [
        ...state,
        {
          ...action.product
        }
      ]

    case actionTypes.EDIT_PRODUCT:
      return updateItemInArray(state, action.product.id, product => {
        return updateObject(product, {
          ...action.product
        })
      })

    case actionTypes.DELETE_PRODUCT:
      return deleteItemInArray(state, action.id)

    case actionTypes.CLEAR_PRODUCTS:
      return []

    case actionTypes.RATE_PRODUCT:
      return state.map(
        product =>
          product.id === action.product.id
            ? { ...product, rate: action.newRate }
            : product
      )

    default:
      return state
  }
}

export default products
