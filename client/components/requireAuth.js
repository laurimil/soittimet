import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import history from '../history';

import currentUserQuery from '../queries/currentUser';

export default (WrappedComponent) => {
  // console.log(this);
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {

      if(!nextProps.data.loading && !nextProps.data.user) {
        console.log('has next props auth');
        history.push('/login');
      } else {
        history.pushState('/dashboard');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);

};
