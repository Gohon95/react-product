import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product";

import "./styles.css";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null,
    };
  }


componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.items
          });
        },
        (error) => {
          this.setState({
       
            error
          });
        }
      )
  }
  
  render() {
    const { items } = this.state;
    console.log(error)
    return (
      <div>
        <ul>
          {items.map(product => (
            <Product
              key={product.id}
              details={product}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
