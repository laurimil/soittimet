import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import query from '../queries/itemList';

class ItemList extends Component {
  

  renderItems(){
    return this.props.data.items.map(({id, title, price}) => {
      return (
        <main>
        <div key={id} className="col xs12 s6 m4 l2">
          <Link to={`items/${id}`}>
            <div className="card small light-blue lighten-4">
              <div className="card-image ">
                <img src="img/default.png"/>
                <span className="card-title">{title}</span>
              </div>
              <div className="card-content text-white">
                <p>Price: {price}</p>
              </div>
              <div class="card-action text-white">
                <a href="#">This is a link</a>
              </div>
            </div>
            
          </Link>
        </div>
      </main>
      );
    });
  }

  render() {
    if(this.props.data.loading) { return <div>Loading...</div>; }

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
