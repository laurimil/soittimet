import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import userItems from '../queries/userItems';

class UserItems extends Component {
  // renderItems(){
  //   return this.props.data.items.map(({id, title}) =>{
  //     return (
  //       <li key={id} className="collections-item">
  //         <Link to={`items/${id}`}>//ei toimi viel'
  //           {title}
  //         </Link>
  //       </li>
  //     )
  //   })
  // }

  render() {
    return (
      <ul className="collection">
        <h3>UserItems</h3>
        {/* {this.renderItems()} */}
      </ul>
    );
  }
}


export default UserItems;
// export default graphql(userItems, {
//   options: (props) => { return { variables: { id: props.userId } } }
// })(UserItems);
