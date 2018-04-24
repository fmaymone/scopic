import React, { Component } from "react";
import Item from "./Item";

const MyList = ({ items }) =>
  items.map((item, key) => <Item key={key} object={item} />);

export default MyList;
