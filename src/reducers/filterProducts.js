import * as actionTypes from '../constants/actionTypes'

const filterProducts = (state = '', action) => {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCTS:
      return action.keyword
    default:
      return state
  }
}

export default filterProducts
