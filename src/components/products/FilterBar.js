import React from 'react'
import Input from '../common/Input'

const FilterBar = ({ handleFilterProduct, keyword, products }) => {
  let search

  const onChange = () => {
    handleFilterProduct(search.value)
  }
  return (
    <div className="product__search-bar">
      <Input
        type="text"
        name="search"
        className="product__search-input"
        placeholder="Search..."
        onChange={onChange}
        refInput={node => (search = node)}
        value={keyword}
      />
    </div>
  )
}

export default FilterBar
