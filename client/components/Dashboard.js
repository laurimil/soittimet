import React, { Component } from 'react';
import UserItems from './UserItems';
import ItemCreate from './ItemCreate';
import query from '../queries/currentUser';
import { graphql } from 'react-apollo';

class DashBoard extends Component {

  render() {
    const { user } = this.props.data;
    if(!user) { return <div>Loading...</div>; }

    return (
      <div>
        <h3>DashBoard</h3>
        <UserItems items={user.items} />
      </div>
    );
  }
}

export default graphql(query)(DashBoard);
