import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';

import query from '../queries/currentUser';
import userItems from '../queries/userItems';
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
    }).then(()=> this.props.data.refetch());
    this.props.history.push('/dashboard');
  }

  render(){
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
      <div className="container">
        <Link to="/dashboard" type="a" className="waves-effect waves-teal btn-flat">Back to Dashboard</Link>
        <h3>Create a New Item</h3>
        <ItemForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} item={item}/>
      </div>
    );
  }
}

ItemCreate = withRouter(ItemCreate);

export default graphql(query)(
  graphql(mutation)(ItemCreate)
);
