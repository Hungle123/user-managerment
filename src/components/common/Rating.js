import React from 'react'
import config from '../../config'
import 'font-awesome/css/font-awesome.min.css'

const Rating = ({ product, handleMouseOver }) => {
  const setNewRate = e => {
    let oldRate = e.target.getAttribute('data-star')
    return parseInt(oldRate, 10)
  }

  // const handleRateClick = e => {
  // }

  const onMouseOver = e => {
    e.preventDefault()
    let newRate = setNewRate(e)
    handleMouseOver(product, newRate)
  }

  // const onMouseOut = e => {
  // }

  const showRateStar = () => {
    let stars = []

    for (let i = 1; i <= 5; i++) {
      let rateClass =
        i <= product.rate ? config.class.is_rated : config.class.is_rate_over
      stars.push(
        <i
          key={i}
          data-star={i}
          className={`fa fa-star fa-lg ${rateClass}`}
          onMouseOver={onMouseOver}
        />
      )
    }
    return stars
  }
  return <div className={`${config.class.product}-rate`}>{showRateStar()}</div>
}

export default Rating
