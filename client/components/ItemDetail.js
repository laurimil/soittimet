import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchItem from '../queries/fetchItem';

class ItemDetail extends Component {

  // componentWillMount(nextProps) {
  //   this.props.data.refetch();
  // }

  render() {

    if(this.props.data.loading) {return <div>Loading...</div>; }
    const {title,description,maker,year,price} = this.props.data.item;

    return (
      <div>
      
        <div class="mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">{title}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <p>{description}</p>
            <p>{maker},{year}</p>
            <p>{price}</p>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              View Updates
            </a>
          </div>
        </div>

       
      

      </div>
    );
  }
}

export default graphql(fetchItem, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(ItemDetail);
