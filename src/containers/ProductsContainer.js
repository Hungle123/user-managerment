import { connect } from 'react-redux'
import Products from '../components/products/Products'
import { deleteProduct, clearProducts, rateProduct } from '../actions'
import { filterByName } from '../helpers/productUtils'

const mapStateToProps = (state, ownProps) => {
  return {
    products: filterByName(state.products, state.filterProducts)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDelProduct: id => dispatch(deleteProduct(id)),
    handleClearProducts: () => dispatch(clearProducts()),
    handleMouseOver: (product, newRate) =>
      dispatch(rateProduct(product, newRate))
  }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer
