import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import mutation from '../mutations/logout';
import query from '../queries/currentUser';

import FlatButton from 'material-ui/FlatButton';

class Logout extends Component {

    onLogoutClick() {
        console.log(this.props.user);
        this.props.mutate({
            refetchQueries: [{ query }]
        });
    }
  
    render() {
        return (
            <FlatButton
            {...this.props}
            onClick={this.onLogoutClick.bind(this)}
            label="Logout"
            ></FlatButton>
        );
    };
}
  
export default graphql(mutation)(
    graphql(query)(Logout)
  );
  