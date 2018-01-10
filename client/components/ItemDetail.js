import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchItem from '../queries/fetchItem';

class ItemDetail extends Component {

  // componentWillMount(nextProps) {
  //   this.props.data.refetch();
  // }

  render() {

    if(this.props.data.loading) {return <div>Loading...</div>; }
    const {title,description,maker,year,price} = this.props.data.item;

    return (
      <div>

        <h3>{title}</h3>
        <p>{description}</p>
        <p>{maker},{year}</p>
        <p>{price}</p>

      </div>
    );
  }
}

export default graphql(fetchItem, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(ItemDetail);
