import { connect } from 'react-redux'
import { addProduct, editProduct, rateProduct } from '../actions'
import FormBasic from '../components/forms/FormBasic'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddProduct: product => dispatch(addProduct(product)),
    handleUpdateProduct: product => dispatch(editProduct(product)),
    handleMouseOver: (product, newRate) =>
      dispatch(rateProduct(product, newRate))
  }
}

const FormProduct = connect(mapStateToProps, mapDispatchToProps)(FormBasic)

export default FormProduct
