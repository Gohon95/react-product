import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Product from "./components/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  

  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/products/" exact>
            <Products />
          </Route>
          <Route path="/product/:id" component={Product} exact>
          </Route>
        </Switch>
        </div>
    </Router>
    </div>
  );
};

export default App;
