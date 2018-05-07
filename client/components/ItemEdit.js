import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';

import mutation from '../mutations/itemEdit';
import itemDetail from '../queries/itemDetail';
import userItems from '../queries/userItems';

import ItemForm from './ItemForm';

class ItemEdit extends Component {
  constructor(props){
    super(props);
    
    this.state = { errors: [] };
  }

  onSubmit(data) {
    event.preventDefault();
    // console.log(data);
    const { title, description, maker, year, price, imageUrl } = data;
    const { id } = this.props.data.item;

    this.props.mutate({
      variables: {
        id,
        title,
        description,
        maker,
        year,
        price,
        imageUrl
      },
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({errors});
    }).then(() => this.props.data.refetch());
    this.props.history.push('/dashboard');
  }

  render(){
    if(this.props.data.loading) { return <div className="container">Loading...</div>; }
    const {item}=this.props.data;
    console.log(item);

    return (
      <div className="container">
        <Link to="/dashboard" type="a" className="waves-effect waves-teal btn-flat">Back to Dashboard</Link>
        <h3 className="header">Edit Your Item</h3>
        <ItemForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} item={item} />
      </div>
    );
  }
}

ItemEdit = withRouter(ItemEdit);

export default graphql(mutation)(
  graphql(itemDetail, {
    options: (props) => { return { variables: { id: props.match.params.id } }; }
  })(ItemEdit)
);
