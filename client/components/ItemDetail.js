import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, Query } from 'react-apollo';
import itemDetail from '../queries/itemDetail';

import image from '../img/default.png';

class ItemDetail extends Component {

  // componentDidMount() {
  //   const { match: { params } } = this.props;
  //   console.log(params);
  // }

  render() {
    if(this.props.data.loading) {return <div className="container">Loading...</div>; }
    
    const {title,description,maker,year,price} = this.props.data.item;

    return (
      <div className="container">
        <div className="card horizontal">
          <div className="card-image">
            <img src={image} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <p>{maker},{year}</p>
              <p>{price}</p>
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
