import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import mutation from '../mutations/itemEdit';
import fetchItem from '../queries/fetchItem';

import ItemForm from './ItemForm';

class ItemEdit extends Component {
  constructor(props){
    super(props);

    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    console.log(this.props);
    if(this.props.data.item && nextProps.data.item) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ id, title, description, maker, year, price }) {
    event.preventDefault();
    
    this.props.mutate({
      variables: {
        id: id,
        title: title,
        description: description,
        maker: maker,
        year: year,
        price: price
      }
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({errors});
    });
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
