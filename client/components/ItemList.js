import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import query from '../queries/itemList';

class ItemList extends Component {
  

  renderItems(){
    return this.props.data.items.map(({id, title, price}) => {
      return (
        <div key={id} className="col xs-12 s-6 m-4 l-2">
          <Link to={`items/${id}`}>
            <div>{title}</div>
            <div>Price: {price}</div>
            <img src="img/default.png"/>
          </Link>
        </div>
      //   <div class="row">
      //   <div class="col s12">This div is 12-columns wide on all screen sizes</div>
      //   <div class="col s6">6-columns (one-half)</div>
      //   <div class="col s6">6-columns (one-half)</div>
      // </div>
      );
    });
  }

  render() {
    if(this.props.data.loading) { return <div>Loading...</div>; }

    return (
      <div className="container">
        <div className="row">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default graphql(query)(ItemList);
