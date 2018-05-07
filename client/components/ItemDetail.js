import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, Query } from 'react-apollo';
import itemDetail from '../queries/itemDetail';

import image from '../img/default.png';

class ItemDetail extends Component {

  render() {
    if(this.props.data.loading) {return <div className="container">Loading...</div>; }
    
    const {title,description,maker,year,price,imageUrl} = this.props.data.item;
    console.log(this.props.data);
    return (
      <div className="container">
        <div className="card horizontal">
          <div className="card-image">
            <img src={imageUrl||image} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <ul class="collection">
                <li class="collection-item">Maker: {maker}</li>
                <li class="collection-item">Year: {year}</li>
                <li class="collection-item">Price: {price}</li>
              </ul>
            </div>
            <div className="card-action">
              <a href="#">Ota yhteyttä ilmoittajaan</a>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

ItemDetail = withRouter(ItemDetail);

export default graphql(itemDetail, {
  options: (props) => { return { variables: { id: props.match.params.id } }; }
})(ItemDetail);
