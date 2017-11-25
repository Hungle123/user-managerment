import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux' // we need this for react-router
import products from './products'
import filterProducts from './filterProducts'

const rootReducer = combineReducers({
  routing: routerReducer,
  products,
  filterProducts
})

export default rootReducer
