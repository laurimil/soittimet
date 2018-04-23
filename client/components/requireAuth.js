import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { BrowserHistory } from 'react-router';

import currentUserQuery from '../queries/currentUser';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if(!nextProps.data.loading && !nextProps.data.user) {
        console.log(history);
        // history.push('/login');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);

};
