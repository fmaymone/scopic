import React, { Component } from 'react'
import Item  from './Item';

class MyList extends React.Component {
  render() {
    const items = this.props.items.map((item, key) => (<Item key={key} object={item} />))

    return (<div>{items}</div>)
  }
}

export default MyList;