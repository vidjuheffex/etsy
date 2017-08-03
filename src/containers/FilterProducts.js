import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterProducts} from "../actions";

class FilterProducts extends Component {
    createFilterRadio(value, text) {
        return (
            <button key={value} className={this.props.filter === value ? 'active' : 'inactive'} onClick={ event => this.props.filterProducts(value) }>{text}</button>
        );
    }
    render() {
        const filterOptions = [
            [
              "all", "Show all"
            ],
            [
              "underTwenty", "Show under $20"
            ],
            [
              "overTwenty", "Show over $20"
            ]
        ]

        return (
            <div className="filterProducts">
                {filterOptions.map(option => this.createFilterRadio.apply(this, option))}
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {filter: state.currentFilter}
}

// Review the `filterProducts` function
// Take note of the parameter accepting a `filter` value from the `<button>` elements above
// and passing said value to the reducer function we named `filterProducts` when we imported it into this file
const mapDispatchToProps = function(dispatch) {
    return {
        filterProducts: function(filter) {
            dispatch(filterProducts(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts);
