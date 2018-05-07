import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';


class ItemForm extends Component {
  constructor(props) {
    super(props);

    const {title, description, maker, year, price, imageId } = props.item;
    console.log(props.item);

    this.state = { title, description, maker, year, price, imageId };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }
  onCancel(event){
    event.preventDefault();
    console.log(this.props);
    this.props.history.push('/dashboard');
  }
  onDrop(acceptedFiles){
    console.log(acceptedFiles);
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
          <input
            onChange={event => this.setState({imageId:event.target.value})}
            value={this.state.imageId}/>
          <Dropzone onDrop={this.onDrop}>
            Drop your image here!
          </Dropzone>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button className="btn red" type='button' onClick={this.onCancel}>Cancel</button>
          <button className="btn right">Save<i class="material-icons right">send</i></button>
        </form>
      </div>
    );
  }
}
ItemForm = withRouter(ItemForm);
export default ItemForm;
