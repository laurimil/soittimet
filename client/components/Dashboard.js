import React, { Component } from 'react';
import UserItems from './UserItems';
import ItemCreate from './ItemCreate';

class DashBoard extends Component {

  render() {
    const { id } = this.props.data.user;
    return (
      <div>
        <h3>DashBoard</h3>
        <UserItems userId={id}/>



      </div>
    );
  }
}

export default DashBoard;
