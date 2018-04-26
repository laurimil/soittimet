import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import query from '../queries/userItems';
import mutation from '../mutations/itemRemove';

import UserItems from './UserItems';

class DashBoard extends Component {

  constructor(props) {
    super(props);
   
    this.onItemDelete = this.onItemDelete.bind(this);
  }

  onItemDelete(id){
    this.props.mutate({variables: { id } })
      .then(()=> this.props.data.refetch());
  }

  // componentDidMount(){
  //   this.props.mutate({
  //     variables: { title: this.state.title },
  //     refetchQueries: [{ query }]
  //   }).then(() => hashHistory.push('/'));
    
  //   this.props.data.refetch({
  //       options: { forceFetch: true }
  //   });
  // }

  render() {
    const { user } = this.props.data;
    if(!user) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>User</h3>
        <UserItems items={user.items} onItemDelete={this.onItemDelete}/>
        <Link to="user/items/new">Create New Item</Link>
      </div>
    );
  }
}

DashBoard = withRouter(DashBoard);
export default graphql(mutation)(
  graphql(query)(DashBoard)
);
