import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

import query from '../queries/itemList';

import image from '../img/default.png';

class ItemList extends Component {
  

  renderItems(){
    return this.props.data.items.map(({id, title, price, imageUrl}) => {
      return (
        <main>
        <div key={id} className="col xs12 s12 m6 l3">
          <Link to={`items/${id}`}>
            <div className="card small indigo lighten-5">
              <div className="card-image ">
                <img src={imageUrl||image}/>
              </div>
              <div className="card-content text-white">
                <span className="card-title">{title}</span>
                <p className="">Price: {price}</p>
              </div>
            </div>
            
          </Link>
        </div>
      </main>
      );
    });
  }

  render() {
    if(this.props.data.loading) { return <div className="container">Loading...</div>; }

    return (
      <div className="section">
        <div className="container">
          <div className="row">
            {this.renderItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(query)(ItemList);
