import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import mutation from '../mutations/itemCreate';

import ItemForm from './ItemForm';

class ItemCreate extends Component {
  constructor(props){
    super(props);

    this.state = { errors: [] };
  }

  onSubmit(data) {
    event.preventDefault();
    const { title, description, maker, year, price } = data;

    this.props.mutate({
      variables: { title, description, maker, year, price, userId: this.props.data.user.id
      }
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({errors});
    });
    this.props.history.push('/dashboard');
  }

  render(){

    console.log(this.props.data.user);
    const { user } = this.props.data;
    if(!user) { return <div>Loading...</div>; }
    const item = {
      title: '',
      description: '',
      maker: '',
      year: '',
      price: ''
    };

    return (
      <div>
        Item Create
        <Link to="dashboard">Dashboard</Link>
        <h3>Create a New Listing</h3>
        <ItemForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} item={item}/>
      </div>
    );
  }
}

ItemCreate = withRouter(ItemCreate);

export default graphql(query)(
  graphql(mutation)(ItemCreate)
);
