import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './../store'

import FormBasic from '../components/forms/FormBasic'
import ProductsContainer from './../containers/ProductsContainer'
import FormProduct from '../containers/FormProduct'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductsContainer} />
            <Route exact path="/:form" component={FormProduct} />
            <Route exact path="/:form/:id" component={FormProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
