import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import FileUploader from 'react-firebase-file-uploader';

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD7CCihSiL9fTwlw3CYG2J6Y23BHtnXBxI",
  authDomain: "soittimet-limil.firebaseapp.com",
  databaseURL: "https://soittimet-limil.firebaseio.com",
  projectId: "soittimet-limil",
  storageBucket: "soittimet-limil.appspot.com",
  messagingSenderId: "159540483859"
};
firebase.initializeApp(config);


class ItemForm extends Component {
  constructor(props) {
    super(props);

    const {title, description, maker, year, price, imageUrl } = props.item;
    this.state = { title, description, maker, year, price, imageUrl };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
  }
  onCancel(event){
    event.preventDefault();
    
    this.props.history.push('/dashboard');
  }
  onDrop(files){
    this.setState({files});
  }
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});

  handleProgress = (progress) => this.setState({progress});

  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => {console.log(url);this.setState({imageUrl: url})});
  };
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
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            />
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          {/* <button className="btn red" type='button' onClick={this.onCancel}>Cancel</button> */}
          <button className="btn right">Save<i class="material-icons right">send</i></button>
          <img style={{"width":"10px","height":"10px"}} src={this.state.imageUrl}/>
        </form>
      </div>
    );
  }
}
ItemForm = withRouter(ItemForm);
export default ItemForm;
