import React, { Component } from 'react';
import { Link } from 'react-router';
import mutation from '../mutations/itemCreate';
import { graphql } from 'react-apollo';

class ItemCreate extends Component {
  constructor(props){
    super(props);

    this.state = { title: '', description:'', maker: '', year: '', price: '', userId: '5a3434928ddfbe235c02e1ed'};
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title,
        description: this.state.description,
        maker: this.state.maker,
        year: this.state.year,
        price: this.state.price,
        userId: this.state.userId
      }
    }).then(() => this.setState({ title: '', description:'', maker: '', year: '', price: '', userId: '5a3434928ddfbe235c02e1ed' }))
  }



  render(){
    return (
      <div>
        <Link to="dashboard">Dashboard</Link>
        <h3>Create a New Item Listing</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Title:</label>
          <input
            onChange={event => this.setState({title:event.target.value})}
            value={this.state.title}/>
          <label>Description:</label>
          <input
            onChange={event => this.setState({description: event.target.value})}
            value={this.state.description}/>
          <label>Maker:</label>
          <input
            onChange={event => this.setState({maker:event.target.value})}
            value={this.state.maker}/>
          <label>Year:</label>
          <input
            onChange={event => this.setState({year:event.target.value})} value={this.state.year}/>
          <label>Price:</label>
          <input
            onChange={event => this.setState({price:event.target.value})}
            value={this.state.price}/>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default graphql(mutation)(ItemCreate);
