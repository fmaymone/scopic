import React from "react";
import PropTypes from "prop-types";

const Item = ({ object }) => (
  <h1>{`Stadium: ${object.name} located at ${
    object.city
  }`}</h1>
);

export default Item;

Item.propTypes = {
  object: PropTypes.object
};
