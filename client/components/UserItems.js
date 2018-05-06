import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class UserItems extends Component {

  renderItems(){
    if(this.props.items){
      return this.props.items.map(({ id, title }) => {
        return (
          <li key={id} className="collection-item">
            {title}
            <Link to={`user/items/${id}`}>
              <i className="material-icons right">edit</i>
            </Link>
            <i
              className="material-icons right"
              onClick={()=> this.props.onItemDelete(id)}>delete</i>
          </li>
        );
      });
    } else {
      return (<div>You have no items</div>);
    }
  }

  render() {
    return (
      <ul className="collection">
        <h3 header>Your Items</h3>
        {this.renderItems()}
      </ul>
    );
  }
}

export default UserItems;
