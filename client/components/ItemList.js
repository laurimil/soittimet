import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../queries/itemsFind';

class ItemList extends Component {

  renderItems(){

    console.log(this.props.data.items);
    return this.props.data.items.map(({id, title, price}) => {
      return (
        <li key={id} className="collection-item">
          <div>{title}</div>
          <div>Price: {price}</div>
        </li>

      )
    })
  }

  render() {
    if(this.props.data.loading) { return <div>Loading...</div>; }

    return (
      <ul className="collection">
        <ul className="collection">
          {this.renderItems()}
        </ul>
      </ul>
    )
  }
}

export default graphql(query)(ItemList);