import { connect } from 'react-redux'
import { filterProducts } from '../actions'
import FilterBar from '../components/products/FilterBar'

const mapStateToProps = (state, ownProps) => {
  return {
    keyword: state.filterProducts
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFilterProduct: keyword => dispatch(filterProducts(keyword))
  }
}

const SearchProducts = connect(mapStateToProps, mapDispatchToProps)(FilterBar)

export default SearchProducts
