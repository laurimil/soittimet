import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, Query } from 'react-apollo';
import itemDetail from '../queries/itemDetail';

class ItemDetail extends Component {

  // componentDidMount() {
  //   const { match: { params } } = this.props;
  //   console.log(params);
  // }

  render() {
    if(this.props.data.loading) {return <div>Loading...</div>; }
    
    const {title,description,maker,year,price} = this.props.data.item;

    return (
      <div>
        
        {/* <Query query={fetchItem}>

        </Query> */}
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

ItemDetail = withRouter(ItemDetail);

export default graphql(itemDetail, {
  options: (props) => { return { variables: { id: props.match.params.id } }; }
})(ItemDetail);
