import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import userItems from '../queries/userItems';

class UserItems extends Component {

  renderItems(){
    return this.props.items.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i className="material-icons right">edit</i>
          <i className="material-icons right">delete</i>

        </li>
      );
    });
  }

  render() {

    return (
      <ul className="collection">
        <h3>Your Items</h3>
        {this.renderItems()}
      </ul>
    );
  }
}



export default UserItems;
