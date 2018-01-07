import React, { Component } from 'react';

class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '', description:'', maker: '', year: '', price: '', userId: '5a3434928ddfbe235c02e1ed'};
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
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
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>

    );
  }
}

export default ItemForm;
