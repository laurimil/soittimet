import React, { Component } from 'react';
// import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import query from '../queries/currentUser';
import mutation from '../mutations/login';
import AuthForm from './AuthForm';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    if(!this.props.data.user && nextProps.data.user) {
      // console.log('success on login');
      this.props.history.push('/dashboard');
    }
  }

  onSubmit({ email, password }){
    console.log(this.props);
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
);
