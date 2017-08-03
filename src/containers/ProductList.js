import React, {Component} from 'react';
import {connect} from 'react-redux';

import Product from "../components/Product";

class ProductList extends Component {

    render() {
      const {products} = this.props;
      const productElements = products.map(element => {
        return (
          <Product product={element} key={element.listing_id}/>
        );
      });
        return (
            <ul className="ProductList">
              {productElements}
            </ul>
        );
    }
}



// Using the `mapStateToProps` function, filter the array stored in the 
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
    let products;
    // complete the `if else` statement including conditions and `products` value
    if (state.currentFilter === 'overTwenty') {
      products = state.products.filter( element => { 
        return  parseFloat(element.price) > 20;
      });
    } else if (state.currentFilter === 'underTwenty') {
      products = state.products.filter( element => { 
        return  parseFloat(element.price) < 20;
      });

    } else {
      products = state.products;
    }

  return {products: products};
}

export default connect(mapStateToProps)(ProductList);
