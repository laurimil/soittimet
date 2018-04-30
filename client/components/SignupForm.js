import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/signup';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { withRouter } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state= { errors: [] };
  }

  componentWillUpdate(nextProps) {
    if(nextProps.data.user && !this.props.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries:[{ query }]
    }).catch(res => {
      console.log(res);
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
    console.log(this.props);
    
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

// SignupForm = withRouter(SignupForm);
export default graphql(query)(
  graphql(mutation)(SignupForm)
);
