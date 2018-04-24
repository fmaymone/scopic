import React, { Component } from "react";
import PropTypes from 'prop-types';
class Item extends Component {
    
    render() { 
        return ( <h1>{`Stadium: ${this.props.object.name} located at ${this.props.object.city}`}</h1> )
    }
}
export default Item;

Item.propTypes = {
    object: PropTypes.object,
}