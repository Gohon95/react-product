import React, { Component } from "react";

class ProductForm extends Component {
  state = {
    nouveauProduct: ""
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauProduct}
          onChange={this.handleChange}
          type="text"
          placeholder="Add Product"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ProductForm;
