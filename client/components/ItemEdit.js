import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import mutation from '../mutations/itemEdit';
import fetchItem from '../queries/fetchItem';
import userItems from '../queries/userItems';

import ItemForm from './ItemForm';

class ItemEdit extends Component {
  constructor(props){
    super(props);

    this.state = { errors: [] };
  }

  onSubmit(data) {
    event.preventDefault();
    const { id, title, description, maker, year, price } = data;

    console.log(data);

    this.props.mutate({
      variables: {
        id,
        title,
        description,
        maker,
        year,
        price
      },
      update: (proxy, { data: { createItem } }) => {
        // Read the data from our cache for this query.
        const data = proxy.readQuery({ query: userItems });

        // Add our todo from the mutation to the end.
        data.user.items.push(createItem);

        // Write our data back to the cache.
        proxy.writeQuery({ query: userItems, data });
      },
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({errors});
    });
    hashHistory.push('/dashboard');
  }

  render(){
    if(this.props.data.loading) { return <div>Loading...</div>; }
    const {item}=this.props.data;

    return (
      <div>
        <Link to="dashboard">Dashboard</Link>
        <h3>Edit Your Listing</h3>
        <ItemForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} item={item} />
      </div>
    );
  }
}

export default graphql(mutation)(
  graphql(fetchItem, {
    options: (props) => { return { variables: { id: props.params.id } } }
  })(ItemEdit)
);
