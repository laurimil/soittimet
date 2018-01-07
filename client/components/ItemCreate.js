import React, { Component } from 'react';
import { Link } from 'react-router';
import mutation from '../mutations/itemCreate';
import { graphql } from 'react-apollo';
import ItemForm from './ItemForm';
import { hashHistory } from 'react-router';

class ItemCreate extends Component {
  constructor(props){
    super(props);

    this.state = { errors: [] };
  }

  onSubmit({ title, description, maker, year, price, userId }) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: title,
        description: description,
        maker: maker,
        year: year,
        price: price,
        userId: userId
      }
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({errors});
    });
    hashHistory.push('/');
  }

  render(){
    return (
      <div>
        <Link to="dashboard">Dashboard</Link>
        <h3>Create a New Listing</h3>
        <ItemForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default graphql(mutation)(ItemCreate);
