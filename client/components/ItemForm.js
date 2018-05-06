import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class ItemForm extends Component {
  constructor(props) {
    super(props);

    const {title, description, maker, year, price } = props.item;
    console.log(props.item);

    this.state = { title, description, maker, year, price };
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
  uploadWidget() {
    event.preventDefault();
    console.log(process.env.CLOUDINARY_NAME, process.env.CLOUDINARY_UPLOAD_PRESET),
    cloudinary.openUploadWidget({ cloud_name: process.env.CLOUDINARY_NAME, upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET, tags:['soittimet']},
        function(error, result) {
            console.log(result);
        });
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
          <div className="upload">
            <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                Add Image
            </button>
          </div>
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
