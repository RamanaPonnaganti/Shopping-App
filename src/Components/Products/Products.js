import React from "react";
import Header from "../Header/Header";

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Header history={this.props.history}/>
      Products
    </div>;
  }
}

export default Products;
