import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchItem from '../queries/fetchItem';

class ItemDetail extends Component {
  render() {
    const { item } = this.props.data;

    if(!item) {return <div>Loading...</div>; }

    return (
      <div>
        <h3>{item.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchItem, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(ItemDetail);
